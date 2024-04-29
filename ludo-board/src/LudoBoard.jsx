import { useState } from "react";

export default function LudoBoard() {
    let[moves,setMoves] = useState({Blue:0, Yellow:0, Green:0, Red:0 })
    
    let updateBlue = () => {
        setMoves((preMoves) => {
            return { ...preMoves, Blue:preMoves.Blue + 1};
        });
    };
    
    let updateYellow = () => {
        setMoves((preMoves) => {
            return { ...preMoves, Yellow:preMoves.Yellow + 1};
        });
    };

    let updateGreen = () => {
        setMoves((preMoves) => {
            return { ...preMoves, Green:preMoves.Green + 1};
        });
    };

    let updateRed = () => {
        setMoves((preMoves) => {
            return { ...preMoves, Red:preMoves.Red + 1};
        });
    };

    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves ={moves.Blue}</p>
                <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves ={moves.Yellow}</p>
                <button style={{backgroundColor : "yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves ={moves.Green}</p>
                <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves ={moves.Red}</p>
                <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}