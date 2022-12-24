import { useContext, useEffect, useState } from "react"
import { MainContext } from "./MainProvider"

export const CellGame = ({ row, col }) => {
    const { evalWinner, matrix } = useContext(MainContext);
    const [cellValue, setCellValue] = useState('');
    useEffect(() => {
        setCellValue(matrix[row][col]);
    }, [matrix]);

    const changeStateCellValue = () => {
        if (matrix[row][col] === '') evalWinner(row, col);
    }
    return (
        <div className={`cell ${(cellValue === '') ? 'shadow' : ''} ${(cellValue === 'X') ? 'XValue' : 'OValue'}`} onClick={() => changeStateCellValue()}> {cellValue}</div >
    )
}
