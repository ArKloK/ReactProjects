import { Square } from "./Square"
import PropTypes from 'prop-types'

export function WinnerModal({winner, resetGame}) {
    if (winner === null) return null

    const winnerText = winner == false ? 'Draw' : winner + ' won'

    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>

                <header className='win'>
                    {
                        winner != null &&
                        <Square>
                            {winner}
                        </Square>
                    }
                </header>

                <footer>
                    <button onClick={resetGame}>
                        Restart game
                    </button>
                </footer>
            </div>

        </section>
    )

}

WinnerModal.propTypes = {
    winner: PropTypes.string,
    resetGame: PropTypes.func.isRequired
}