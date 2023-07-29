//Import Column component
import Column from './Column.jsx'

//Board component
//2D array for board, color of curr player, update curr player's color , update board with new moves
const Board = ({board, currentPlayer, setCurrentPlayer, setBoard}) => {
  return (
    <div className="board-container">
    <div className="board">      {/* game board */}
      {board.map((col, index)=>{
        return <>
          <Column 
            column={col} 
            key={index} 
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            setBoard={setBoard}
            />  
        </>
      })}
    </div>
    <div className="board-stand"></div>
    </div>
  )
}


export default Board;