// Import CSS styles
import './index.css'
// Import useState hook 
import { useState } from 'react';
//Import Board component
import Board from './components/Board.jsx';

export default function App() {
  //State to hold game board as 2D array of cells
  const [board, setBoard] = useState(Array(7).fill().map(() => Array(7).fill('')));
  // State to keep track of the current player's color
  const [currentPlayer, setCurrentPlayer] = useState('red');
  // State to keep track of the winner of the game
  const [winner, setWinner] = useState(null);

//Render App component
  return (
    <div className="game-container">
      <Board
        board={board}
        currentPlayer={currentPlayer}
        winner={winner}
        setCurrentPlayer={setCurrentPlayer}
        setBoard={setBoard}
      />
      <div className="player">Current Player: {currentPlayer}</div>
    </div>
  );
}
