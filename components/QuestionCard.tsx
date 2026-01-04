import React from 'react';
import { Question } from '../types';
import { getTagColor } from '../utils/helpers';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  userAnswer?: string;
  onSelect: (qId: number, answer: string) => void;
  showText?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  userAnswer, 
  onSelect,
  showText = true 
}) => {
  const isCorrect = userAnswer === question.answer;
  const hasAnswered = !!userAnswer;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4 transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
           <span className="font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded text-sm">
             Q{question.q_id}
           </span>
           {question.tag && (
             <span className={`text-xs px-2 py-1 rounded font-medium ${getTagColor(question.tag)}`}>
               {question.tag}
             </span>
           )}
        </div>
        {hasAnswered && (
          <div className={`flex items-center gap-1 text-sm font-bold ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
            {isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />}
            <span>{isCorrect ? 'Correct' : 'Incorrect'}</span>
          </div>
        )}
      </div>

      {showText && question.question_text && (
        <p className="text-gray-800 font-medium mb-4 leading-relaxed">
          {question.question_text}
        </p>
      )}

      <div className="space-y-2">
        {Object.entries(question.options).map(([key, value]) => {
          let optionClass = "flex items-center p-3 rounded-md border cursor-pointer transition-colors ";
          
          if (hasAnswered) {
             if (key === question.answer) {
               optionClass += "bg-green-50 border-green-500 ring-1 ring-green-500";
             } else if (key === userAnswer && !isCorrect) {
               optionClass += "bg-red-50 border-red-500 ring-1 ring-red-500";
             } else {
               optionClass += "bg-gray-50 border-gray-200 opacity-60";
             }
          } else {
             optionClass += "hover:bg-blue-50 border-gray-200 hover:border-blue-300";
          }

          return (
            <div 
              key={key} 
              onClick={() => !hasAnswered && onSelect(question.q_id, key)}
              className={optionClass}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 border ${
                 hasAnswered && key === question.answer ? 'bg-green-500 text-white border-green-500' :
                 hasAnswered && key === userAnswer && !isCorrect ? 'bg-red-500 text-white border-red-500' :
                 'bg-white text-gray-600 border-gray-300'
              }`}>
                {key}
              </div>
              <span className="text-gray-700">{value}</span>
            </div>
          );
        })}
      </div>

      {hasAnswered && (
        <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-md animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-start gap-2">
            <Info className="text-blue-500 shrink-0 mt-0.5" size={18} />
            <div>
              <p className="font-semibold text-blue-900 text-sm mb-1">Explanation</p>
              <p className="text-blue-800 text-sm">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};