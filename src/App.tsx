import { useState } from 'react';
import { DifficultySelector } from './components/DifficultySelector';
import { GameControls } from './components/GameControls';
import { GameInfo } from './components/GameInfo';
import { StartScreen } from './components/StartScreen';
import { type Difficulty, type DifficultyConfig } from './types';

const difficultySettings: Record<Difficulty, DifficultyConfig> = {
  easy: { maxAttempts: 10, name: 'Easy' },
  medium: { maxAttempts: 7, name: 'Medium' },
  hard: { maxAttempts: 5, name: 'Hard' }
};

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [secretNumber, setSecretNumber] = useState<number>(0);
  const [guess, setGuess] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [hasWon, setHasWon] = useState<boolean>(false);

  const generateNewNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const initializeGame = (newDifficulty?: Difficulty) => {
    if (newDifficulty) {
      setDifficulty(newDifficulty);
    }
    setSecretNumber(generateNewNumber());
    setGuess('');
    setMessage('Make your guess!');
    setAttempts(0);
    setGameOver(false);
    setHasWon(false);
  };

  const startGame = (selectedDifficulty: Difficulty) => {
    setGameStarted(true);
    initializeGame(selectedDifficulty);
  };

  const handleGuess = () => {
    const numberGuess = parseInt(guess);
    
    if (isNaN(numberGuess) || numberGuess < 1 || numberGuess > 100) {
      setMessage('Please enter a valid number between 1 and 100');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (numberGuess === secretNumber) {
      setMessage(`Congratulations! You won in ${newAttempts} attempts!`);
      setGameOver(true);
      setHasWon(true);
    } else {
      const remainingAttempts = difficultySettings[difficulty].maxAttempts - newAttempts;
      
      if (remainingAttempts === 0) {
        setMessage(`Game Over! The number was ${secretNumber}`);
        setGameOver(true);
      } else {
        setMessage(
          `${numberGuess > secretNumber ? 'Too high' : 'Too low'}! ${remainingAttempts} ${
            remainingAttempts === 1 ? 'guess' : 'guesses'
          } remaining`
        );
      }
    }
    setGuess('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (/^\d{1,3}$/.test(value) && parseInt(value) <= 100)) {
      setGuess(value);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !gameOver && guess !== '') {
      handleGuess();
    }
  };

  const handleRestart = () => {
    setGameStarted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Number Guesser
        </h1>
        
        {!gameStarted ? (
          <StartScreen
            onStart={startGame}
            difficultySettings={difficultySettings}
          />
        ) : (
          <>
            <DifficultySelector
              difficulty={difficulty}
              difficultySettings={difficultySettings}
              onDifficultyChange={(newDifficulty) => initializeGame(newDifficulty)}
              disabled={!gameOver}
            />
            <GameInfo
              message={message}
              attempts={attempts}
              maxAttempts={difficultySettings[difficulty].maxAttempts}
              gameOver={gameOver}
              hasWon={hasWon}
            />
            <GameControls
              guess={guess}
              onGuess={handleGuess}
              onInputChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onRestart={handleRestart}
              gameOver={gameOver}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;