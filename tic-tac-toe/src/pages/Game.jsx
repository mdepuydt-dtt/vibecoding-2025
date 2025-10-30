import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Board from '../components/Board'

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ]
  for (let line of lines) {
    const [a, b, c] = line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line }
    }
  }
  return null
}

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 })

  useEffect(() => {
    const saved = localStorage.getItem('ticTacToeScores')
    if (saved) setScores(JSON.parse(saved))
  }, [])

  const result = calculateWinner(squares)
  const winner = result?.winner
  const winningLine = result?.line
  const isDraw = !winner && squares.every(Boolean)

  const handleClick = (i) => {
    if (squares[i] || winner) return
    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
    setXIsNext(!xIsNext)

    const result = calculateWinner(newSquares)
    if (result) {
      const newScores = { ...scores, [result.winner]: scores[result.winner] + 1 }
      setScores(newScores)
      localStorage.setItem('ticTacToeScores', JSON.stringify(newScores))
    } else if (newSquares.every(Boolean)) {
      const newScores = { ...scores, draws: scores.draws + 1 }
      setScores(newScores)
      localStorage.setItem('ticTacToeScores', JSON.stringify(newScores))
    }
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h1 className="text-4xl font-bold text-white">Tic Tac Toe</h1>
          <Link to="/leaderboard" className="text-blue-100 hover:text-white mt-2 inline-block">
            View Leaderboard →
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="card p-8 mb-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">
              {winner ? `Winner: ${winner}!` : isDraw ? "It's a Draw!" : `Next: ${xIsNext ? 'X' : 'O'}`}
            </h2>
            <div className="flex justify-center gap-8 mb-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Player X</p>
                <p className="text-3xl font-bold text-blue-600">{scores.X}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Draws</p>
                <p className="text-3xl font-bold text-gray-600">{scores.draws}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Player O</p>
                <p className="text-3xl font-bold text-red-600">{scores.O}</p>
              </div>
            </div>
          </div>

          <Board squares={squares} onClick={handleClick} winningLine={winningLine} />

          <div className="text-center mt-6">
            <button onClick={resetGame} className="btn btn-primary">
              New Game
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Game
