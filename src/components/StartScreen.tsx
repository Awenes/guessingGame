import { useState } from 'react';
import { type Difficulty, type DifficultyConfig } from '../types';
import { DifficultySelector } from './DifficultySelector';

interface StartScreenProps {
  onStart: (difficulty: Difficulty) => void;
  difficultySettings: Record<Difficulty, DifficultyConfig>;
}

export function StartScreen({ onStart, difficultySettings }: StartScreenProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('medium');

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Select Difficulty
      </h2>
      <DifficultySelector
        difficulty={selectedDifficulty}
        difficultySettings={difficultySettings}
        onDifficultyChange={setSelectedDifficulty}
        disabled={false}
      />
      <button
        onClick={() => onStart(selectedDifficulty)}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg 
          hover:bg-indigo-700 transition-colors text-lg font-semibold"
      >
        Start Game
      </button>
    </div>
  );
}