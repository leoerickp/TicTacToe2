import { useContext, useState } from "react";
import { CellGame } from "./components/CellGame";
import { MainContext } from "./components/MainProvider";


export const App = () => {
    const { matrix, stateWin, turn, resetGame } = useContext(MainContext);
    return (
        <>
            <div className="main">
                <div><h1>{!stateWin.isWin ? 'Turno' : 'Ganador'}: <span className={(turn === 'X') ? 'XValue' : 'OValue'}>{turn}</span></h1></div>
                <div className="Game-Section">
                    {
                        matrix.map((rowMatrix, row) => rowMatrix.map((cellValue, col) => (
                            <CellGame key={"" + row + col} row={row} col={col} />
                        )
                        ))
                    }
                </div>

                <div className="reset-section">
                    <button onClick={() => resetGame()}>Reset</button>
                </div>
            </div>

        </>
    )
}
