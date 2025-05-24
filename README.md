# 🎯 Number Guesser Game

A fun and interactive number-guessing game built with TypeScript, HTML, and CSS. Players try to guess a secret number between 1 and 100 within a limited number of attempts.

## 🎮 How to Play

1. **Choose a Difficulty**  
   Select one of the three difficulty levels:
   - **Easy**: 10 attempts
   - **Medium**: 7 attempts
   - **Hard**: 5 attempts

2. **Enter a Guess**  
   Type a number between **1 and 100** into the input field and click **Submit Guess**.

3. **Feedback**  
   After each guess, you'll get feedback:
   - "Too low!" if the guess is lower than the secret number
   - "Too high!" if the guess is higher than the secret number
   - "🎉 You guessed it right!" if the guess is correct

4. **Attempts Remaining**  
   The game tracks how many guesses you have left. If you run out, the game ends and reveals the secret number.

5. **Restart the Game**  
   Click the **Restart Game** button or change the difficulty to play again without reloading the page.

## ⚙️ How It Works

- A **random number between 1 and 100** is generated at the start of each game.
- The number of allowed attempts depends on the selected difficulty.
- The player's input is validated to ensure it's a number between 1 and 100.
- The game provides real-time feedback and disables input when the game ends.
- Changing the difficulty or clicking "Restart Game" will reset the game state.

## 🛠️ Technologies Used

- **TypeScript** – for game logic and input validation
- **HTML** – for structure and interface
- **CSS** – for styling the game

## 🚀 Getting Started

1. Download or clone the project.
2. Compile `main.ts` to `main.js` using the TypeScript compiler:

   ```bash
   tsc main.ts
   ```

3. Open `index.html` in your browser.

---

Enjoy playing!
