interface GameInfoProps {
  message: string;
  attempts: number;
  maxAttempts: number;
  gameOver: boolean;
  hasWon: boolean;
}

export function GameInfo({
  message,
  attempts,
  maxAttempts,
  gameOver,
  hasWon
}: GameInfoProps) {
  return (
    <div className="space-y-4 mb-8">
      <p className="text-gray-700 dark:text-gray-300 text-center">
        Guess a number between 1 and 100
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        Attempts: {attempts}/{maxAttempts}
      </p>
      <p className={`text-center p-2 rounded-lg transition-colors ${
        gameOver 
          ? hasWon 
            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
            : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
          : 'text-gray-700 dark:text-gray-300'
      }`}>
        {message}
      </p>
    </div>
  );
}