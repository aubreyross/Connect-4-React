
const Circles = ({currentPlayer, setCurrentPlayer, setBoard}) => {
    //handles toggling of players when a circle is clicked
    function togglePlayer (e) {
      //add player's color class to the clicked circle.
      e.target.classList.add(`circle-${currentPlayer}`);
      // toggle curr player to opposite color - if current is red, switch to black
      return currentPlayer === 'red'? setCurrentPlayer('black'): setCurrentPlayer('red');
    }
    //Circle component 
    return (
      <div 
        className="circle"
        onClick={(e)=>{togglePlayer(e)}}
      >
      </div>
    )
  }
  
  
  export default Circles 