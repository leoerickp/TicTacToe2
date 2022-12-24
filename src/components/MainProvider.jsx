import { createContext, useState } from 'react'
export const MainContext = createContext();
let m = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
const isWinner = (f, c) => {
    const x = m[f][c];
    if (m[f][0] === x && m[f][1] === x && m[f][2] === x)
        return true;
    if (m[0][c] === x && m[1][c] === x && m[2][c] === x)
        return true;

    if (f === c) {
        if (m[0][0] === x && m[1][1] === x && m[2][2] === x)
            return true;
        if (m[2][0] === x && m[1][1] === x && m[0][2] === x)
            return true;
    }
    if (f === 0 && c === 0 || f === 2 && c === 2) {
        if (m[0][0] === x && m[1][1] === x && m[2][2] === x)
            return true;
    }
    if (f === 2 && c === 0 || f === 0 && c === 2) {
        if (m[2][0] === x && m[1][1] === x && m[0][2] === x)
            return true;
    }
    return false;
};
export const MainProvider = ({ children }) => {
    const [stateWin, setStateWin] = useState({
        isWin: false,
        win: ''
    });
    const [turn, setTurn] = useState('X');
    const [matrix, setMatrix] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);


    const resetGame = () => {
        setTurn('X');
        m = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        setMatrix([
            [...m[0]],
            [...m[1]],
            [...m[2]],
        ]);
        setStateWin({ isWin: false, win: '' });
    }

    const evalWinner = (f, c) => {
        m[f][c] = turn;
        setMatrix([
            [...m[0]],
            [...m[1]],
            [...m[2]],
        ]);
        if (isWinner(f, c)) {
            setStateWin({ isWin: true, win: turn });
        }
        else {
            if (turn === 'X') setTurn('O');
            else setTurn('X');
        }
        //console.log(m);
    }
    return (
        <MainContext.Provider value={{ evalWinner, resetGame, matrix, stateWin, turn, setTurn }}>
            {children}
        </MainContext.Provider>
    )
}
