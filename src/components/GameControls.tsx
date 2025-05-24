interface GameControlsProps {
  guess: string;
  onGuess: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onRestart: () => void;
  gameOver: boolean;
}

export function GameControls({
  guess,
  onGuess,
  onInputChange,
  onKeyPress,
  onRestart,
  gameOver
}: GameControlsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <input
        type="text"
        value={guess}
        onChange={onInputChange}
        onKeyPress={onKeyPress}
        placeholder="Enter your guess"
        disabled={gameOver}
        className="px-4 py-2 border border-gray-300 rounded-lg w-32 text-center 
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        onClick={onGuess}
        disabled={gameOver || guess === ''}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg 
          hover:bg-indigo-700 transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Guess
      </button>
      {gameOver ? (
        <button 
          onClick={onRestart}
          className="px-4 py-2 bg-green-600 text-white rounded-lg 
            hover:bg-green-700 transition-colors"
        >
          Play Again
        </button>
      ) : (
        <button 
          onClick={onRestart}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg 
            hover:bg-yellow-700 transition-colors"
        >
          Restart
        </button>
      )}
    </div>
  );
}