import { Question, Group } from '../types';

/**
 * Fisher-Yates shuffle algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const getTagColor = (tag?: string) => {
  switch (tag) {
    case 'Grammar': return 'bg-blue-100 text-blue-800';
    case 'Vocabulary': return 'bg-purple-100 text-purple-800';
    case 'Inference': return 'bg-yellow-100 text-yellow-800';
    case 'Tense': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};