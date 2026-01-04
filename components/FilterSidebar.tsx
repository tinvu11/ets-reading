import React from 'react';
import { FilterState, PartFilter } from '../types';
import { Settings, BookOpen, Shuffle, Calendar, Hash, CheckSquare } from 'lucide-react';

interface FilterSidebarProps {
  availableYears: number[];
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  score: { correct: number; total: number };
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  availableYears, 
  filter, 
  setFilter,
  score
}) => {
  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="bg-white lg:w-80 w-full shrink-0 border-r border-gray-200 flex flex-col h-full">
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
          <BookOpen className="fill-current" /> TOEIC Master
        </h1>
        <p className="text-gray-500 text-sm mt-1">Reading Practice Platform</p>
      </div>

      <div className="p-6 flex-1 overflow-y-auto custom-scrollbar space-y-8">
        {/* Score Board */}
        <div className="bg-slate-800 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <CheckSquare size={64} />
          </div>
          <p className="text-slate-300 text-sm font-medium uppercase tracking-wider mb-2">Current Session</p>
          <div className="flex items-end gap-2">
             <span className="text-4xl font-bold">{score.correct}</span>
             <span className="text-slate-400 text-lg mb-1">/ {score.total}</span>
          </div>
          <div className="mt-3 w-full bg-slate-700 rounded-full h-2">
             <div className="bg-green-400 h-2 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="text-right text-xs text-slate-400 mt-1">{percentage}% Accuracy</p>
        </div>

        {/* Filters */}
        <div className="space-y-5">
           <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
             <Settings size={16} /> Configuration
           </h3>
           
           {/* Year Selector */}
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar size={14} /> Year
             </label>
             <select 
               className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
               value={filter.year}
               onChange={(e) => setFilter(prev => ({ ...prev, year: Number(e.target.value), testNo: 'all' }))}
             >
               {availableYears.map(year => (
                 <option key={year} value={year}>ETS {year}</option>
               ))}
             </select>
           </div>

           {/* Test No Selector */}
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Hash size={14} /> Test Number
             </label>
             <select 
               className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
               value={filter.testNo}
               onChange={(e) => setFilter(prev => ({ 
                 ...prev, 
                 testNo: e.target.value === 'all' ? 'all' : Number(e.target.value) 
               }))}
             >
               <option value="all">All Tests</option>
               {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                 <option key={num} value={num}>Test {num}</option>
               ))}
             </select>
           </div>

           {/* Part Selector */}
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">Part Selection</label>
             <div className="grid grid-cols-2 gap-2">
               {[
                 { id: 'all', label: 'All Parts' },
                 { id: 'part_5', label: 'Part 5' },
                 { id: 'part_6', label: 'Part 6' },
                 { id: 'part_7', label: 'Part 7' }
               ].map((item) => (
                 <button
                   key={item.id}
                   onClick={() => setFilter(prev => ({ ...prev, part: item.id as PartFilter }))}
                   className={`px-3 py-2 text-sm rounded-md border transition-all ${
                     filter.part === item.id 
                       ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                       : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'
                   }`}
                 >
                   {item.label}
                 </button>
               ))}
             </div>
           </div>

           {/* Shuffle Toggle */}
           <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
             <label className="text-sm font-medium text-gray-700 flex items-center gap-2 cursor-pointer">
               <Shuffle size={16} className={filter.shuffle ? "text-indigo-600" : "text-gray-400"} />
               Shuffle Questions
             </label>
             <button 
                onClick={() => setFilter(prev => ({ ...prev, shuffle: !prev.shuffle }))}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${filter.shuffle ? 'bg-indigo-600' : 'bg-gray-300'}`}
             >
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${filter.shuffle ? 'translate-x-5' : ''}`}></div>
             </button>
           </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50 text-center text-xs text-gray-500">
        TOEIC® is a registered trademark of ETS. This app is for personal practice only.
      </div>
    </div>
  );
};