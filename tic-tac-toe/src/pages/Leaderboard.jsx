import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('ticTacToeScores')
    if (saved) {
      const scores = JSON.parse(saved)
      const data = [
        { player: 'Player X', wins: scores.X, symbol: 'X' },
        { player: 'Player O', wins: scores.O, symbol: 'O' },
      ].sort((a, b) => b.wins - a.wins)
      setLeaderboard(data)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <Link to="/" className="text-blue-100 hover:text-white mb-2 inline-block">
            ← Back to Game
          </Link>
          <h1 className="text-4xl font-bold text-white">Leaderboard</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Players</h2>
          <div className="space-y-4">
            {leaderboard.map((entry, index) => (
              <div
                key={entry.player}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gray-400">#{index + 1}</span>
                  <div>
                    <p className="font-bold text-lg">{entry.player}</p>
                    <p className="text-sm text-gray-600">Symbol: {entry.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">{entry.wins}</p>
                  <p className="text-sm text-gray-600">wins</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Leaderboard
