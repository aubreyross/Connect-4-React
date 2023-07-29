import Circles from './Circles.jsx';

//Column component
const Column = ({column, currentPlayer, setCurrentPlayer, setBoard}) => {
  return (
    <div className = "column">
      {column.map((col, index)=>{
        return <>
       {/* Render Circles component and pass relevant props */}
          <Circles 
            key={index} 
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            setBoard={setBoard}/> 
        </>
      })}
    </div>
  )
}


export default Column 