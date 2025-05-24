export type Difficulty = 'easy' | 'medium' | 'hard';

export interface DifficultyConfig {
  maxAttempts: number;
  name: string;
}