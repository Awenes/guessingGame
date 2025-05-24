import { type Difficulty, type DifficultyConfig } from '../types';

interface DifficultySelectorProps {
  difficulty: Difficulty;
  difficultySettings: Record<Difficulty, DifficultyConfig>;
  onDifficultyChange: (difficulty: Difficulty) => void;
  disabled: boolean;
}

export function DifficultySelector({ 
  difficulty, 
  difficultySettings, 
  onDifficultyChange, 
  disabled 
}: DifficultySelectorProps) {
  return (
    <div className="flex gap-2 justify-center mb-8">
      {Object.entries(difficultySettings).map(([key, value]) => (
        <button
          key={key}
          className={`px-4 py-2 rounded-lg border-2 border-indigo-600 transition-all
            ${difficulty === key 
              ? 'bg-indigo-600 text-white' 
              : 'text-indigo-600 hover:bg-indigo-600 hover:text-white'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => onDifficultyChange(key as Difficulty)}
          disabled={disabled}
        >
          {value.name}
        </button>
      ))}
    </div>
  );
}