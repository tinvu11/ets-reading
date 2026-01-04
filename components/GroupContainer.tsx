import React from 'react';
import { Group } from '../types';
import { QuestionCard } from './QuestionCard';

interface GroupContainerProps {
  group: Group;
  userAnswers: { [key: number]: string };
  onSelect: (qId: number, answer: string) => void;
}

export const GroupContainer: React.FC<GroupContainerProps> = ({ group, userAnswers, onSelect }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-8 border-b pb-8 last:border-b-0">
      {/* Passage Column */}
      <div className="lg:w-1/2">
        <div className="sticky top-6 bg-white p-5 rounded-lg shadow-sm border border-gray-200 max-h-[85vh] overflow-y-auto custom-scrollbar">
          <div className="mb-2 flex items-center gap-2">
            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded font-bold">{group.group_id}</span>
            {group.passage_type && (
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded font-medium">{group.passage_type}</span>
            )}
          </div>
          
          <div className="prose prose-sm max-w-none text-gray-700 font-serif leading-7">
            {group.passage && (
                <div className="whitespace-pre-wrap">{group.passage}</div>
            )}
            {group.passages && group.passages.map((p, idx) => (
                <div key={idx} className="mb-6 p-4 bg-gray-50 rounded border border-gray-100 last:mb-0">
                    <div className="whitespace-pre-wrap">{p}</div>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Questions Column */}
      <div className="lg:w-1/2 space-y-4">
        {group.questions.map((q) => (
          <QuestionCard
            key={q.q_id}
            question={q}
            userAnswer={userAnswers[q.q_id]}
            onSelect={onSelect}
            showText={!!q.question_text || q.question_text === ""} // Show even if empty string if part 6/7 logic requires it, but usually Part 6 embeds.
          />
        ))}
      </div>
    </div>
  );
};