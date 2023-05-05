
import PropTypes from 'prop-types';
import { TURNS } from '../constants';
import Square from './square';
export default function BoardUI({ board, turn, updateBoard, resetGame }) {
    return (
        <>
            <h1>Tic tac toe</h1>
            <button onClick={resetGame}>Reset del juego</button>
            <section className='game'>
                {
                    board.map((square, index) => {
                        return (
                            <Square key={index} index={index} updateBoard={updateBoard} >
                                {square}
                            </Square>
                        )
                    })
                }

            </section>

            <section className="turn">
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>

                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>
        </>
    );
}

BoardUI.propTypes = {
    board: PropTypes.arrayOf(PropTypes.oneOf([null, TURNS.X, TURNS.O])),
    turn: PropTypes.oneOf([TURNS.X, TURNS.O]),
    updateBoard: PropTypes.func,
    resetGame: PropTypes.func
};
