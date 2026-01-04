import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MOCK_DATABASE } from './data/sampleData';
import { FilterState, TestData, Question, Group } from './types';
import { shuffleArray } from './utils/helpers';
import { FilterSidebar } from './components/FilterSidebar';
import { QuestionCard } from './components/QuestionCard';
import { GroupContainer } from './components/GroupContainer';
import { Menu, X } from 'lucide-react';

// Define the shape of our flattened processed data
interface ProcessedData {
  part5: Question[];
  part6: Group[];
  part7: Group[];
}

const App: React.FC = () => {
  // --- State ---
  const [filter, setFilter] = useState<FilterState>({
    year: 2024,
    testNo: 'all',
    part: 'all',
    shuffle: false,
  });

  const [userAnswers, setUserAnswers] = useState<{ [qId: number]: string }>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Track previous filter to detect changes in Year or TestNo
  const prevFilterRef = useRef({ year: filter.year, testNo: filter.testNo });

  // Restore state from localStorage on mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem('toeic-answers');
    if (savedAnswers) {
      setUserAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  // Save answers to localStorage on change
  useEffect(() => {
    localStorage.setItem('toeic-answers', JSON.stringify(userAnswers));
  }, [userAnswers]);

  // Clear answers when Year or Test Number changes
  useEffect(() => {
    const prev = prevFilterRef.current;
    // Check if Year or TestNo changed compared to the last render's ref
    if (prev.year !== filter.year || prev.testNo !== filter.testNo) {
      if (Object.keys(userAnswers).length > 0) {
        setUserAnswers({}); // Clear answers
      }
      prevFilterRef.current = { year: filter.year, testNo: filter.testNo }; // Update ref
    }
  }, [filter.year, filter.testNo, userAnswers]);

  // --- Data Processing ---
  
  // 1. Get available years
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(MOCK_DATABASE.map(d => d.metadata.year)));
    return years.sort((a, b) => b - a);
  }, []);

  // 2. Filter raw test data based on Year and Test No
  const filteredTests = useMemo(() => {
    return MOCK_DATABASE.filter(test => {
      const matchYear = test.metadata.year === filter.year;
      const matchTest = filter.testNo === 'all' || test.metadata.test_no === filter.testNo;
      return matchYear && matchTest;
    });
  }, [filter.year, filter.testNo]);

  // 3. Flatten and Shuffle Data
  const processedData: ProcessedData = useMemo(() => {
    let p5: Question[] = [];
    let p6: Group[] = [];
    let p7: Group[] = [];

    filteredTests.forEach(test => {
      p5 = [...p5, ...test.content.part_5];
      p6 = [...p6, ...test.content.part_6];
      p7 = [...p7, ...test.content.part_7];
    });

    if (filter.shuffle) {
      p5 = shuffleArray(p5);
      p6 = shuffleArray(p6);
      p7 = shuffleArray(p7);
      // Note: We shuffle groups for Part 6/7, but NOT questions inside groups as per requirements.
    }

    return { part5: p5, part6: p6, part7: p7 };
  }, [filteredTests, filter.shuffle]);

  // --- Handlers ---
  const handleAnswerSelect = (qId: number, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  // --- Score Calculation ---
  const calculateScore = () => {
    const allQuestions = [
      ...processedData.part5,
      ...processedData.part6.flatMap(g => g.questions),
      ...processedData.part7.flatMap(g => g.questions)
    ];
    
    // Filter questions based on current 'Part' view filter if necessary?
    // The requirement says "score in filter scope".
    // If Part Filter is active, 'processedData' still has all parts?
    // No, let's filter the count based on what is visible.

    let visibleQuestions: Question[] = [];
    if (filter.part === 'all' || filter.part === 'part_5') visibleQuestions.push(...processedData.part5);
    if (filter.part === 'all' || filter.part === 'part_6') visibleQuestions.push(...processedData.part6.flatMap(g => g.questions));
    if (filter.part === 'all' || filter.part === 'part_7') visibleQuestions.push(...processedData.part7.flatMap(g => g.questions));

    const total = visibleQuestions.length;
    const correct = visibleQuestions.reduce((acc, q) => {
      return acc + (userAnswers[q.q_id] === q.answer ? 1 : 0);
    }, 0);

    return { correct, total };
  };

  const currentScore = calculateScore();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 font-sans text-gray-900">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar (Responsive) */}
      <div className={`fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <FilterSidebar 
          availableYears={availableYears} 
          filter={filter} 
          setFilter={setFilter}
          score={currentScore}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between shrink-0">
          <h1 className="font-bold text-indigo-600">TOEIC Master</h1>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-gray-100 rounded-md">
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
          <div className="max-w-5xl mx-auto px-4 pb-4 pt-4 lg:px-8 lg:pb-8 lg:pt-8">
            
            {/* Part 5 Section */}
            {(filter.part === 'all' || filter.part === 'part_5') && processedData.part5.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center gap-4 mb-6 sticky top-0 bg-gray-50/95 backdrop-blur py-4 z-10 border-b border-gray-200/50 -mx-4 px-4 lg:-mx-8 lg:px-8">
                   <h2 className="text-xl font-bold text-gray-800">Part 5: Incomplete Sentences</h2>
                   <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">{processedData.part5.length} questions</span>
                </div>
                <div className="grid gap-4">
                  {processedData.part5.map(q => (
                    <QuestionCard 
                      key={q.q_id} 
                      question={q} 
                      userAnswer={userAnswers[q.q_id]} 
                      onSelect={handleAnswerSelect} 
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Part 6 Section */}
            {(filter.part === 'all' || filter.part === 'part_6') && processedData.part6.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center gap-4 mb-6 sticky top-0 bg-gray-50/95 backdrop-blur py-4 z-10 border-b border-gray-200/50 -mx-4 px-4 lg:-mx-8 lg:px-8">
                   <h2 className="text-xl font-bold text-gray-800">Part 6: Text Completion</h2>
                   <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">{processedData.part6.length} passages</span>
                </div>
                <div>
                  {processedData.part6.map((group, idx) => (
                    <GroupContainer 
                      key={`${group.group_id}-${idx}`} 
                      group={group} 
                      userAnswers={userAnswers} 
                      onSelect={handleAnswerSelect} 
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Part 7 Section */}
            {(filter.part === 'all' || filter.part === 'part_7') && processedData.part7.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center gap-4 mb-6 sticky top-0 bg-gray-50/95 backdrop-blur py-4 z-10 border-b border-gray-200/50 -mx-4 px-4 lg:-mx-8 lg:px-8">
                   <h2 className="text-xl font-bold text-gray-800">Part 7: Reading Comprehension</h2>
                   <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">{processedData.part7.length} passages</span>
                </div>
                <div>
                  {processedData.part7.map((group, idx) => (
                    <GroupContainer 
                      key={`${group.group_id}-${idx}`} 
                      group={group} 
                      userAnswers={userAnswers} 
                      onSelect={handleAnswerSelect} 
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Empty State */}
            {processedData.part5.length === 0 && processedData.part6.length === 0 && processedData.part7.length === 0 && (
               <div className="text-center py-20">
                 <div className="bg-white p-8 rounded-xl shadow-sm inline-block max-w-md">
                   <h3 className="text-lg font-bold text-gray-700 mb-2">No Questions Found</h3>
                   <p className="text-gray-500">Try adjusting your filters to see more practice materials.</p>
                 </div>
               </div>
            )}
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;