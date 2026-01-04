export interface OptionMap {
  [key: string]: string;
}

export interface Question {
  q_id: number;
  question_text?: string;
  options: OptionMap;
  answer: string;
  explanation: string;
  tag?: string;
}

export interface Group {
  group_id: string;
  passage?: string; // Part 6
  passage_type?: string; // Part 7
  passages?: string[]; // Part 7
  questions: Question[];
}

export interface Content {
  part_5: Question[];
  part_6: Group[];
  part_7: Group[];
}

export interface Metadata {
  year: number;
  test_no: number;
  series: string;
}

export interface TestData {
  metadata: Metadata;
  content: Content;
}

export type PartFilter = 'all' | 'part_5' | 'part_6' | 'part_7';

export interface FilterState {
  year: number;
  testNo: number | 'all';
  part: PartFilter;
  shuffle: boolean;
}