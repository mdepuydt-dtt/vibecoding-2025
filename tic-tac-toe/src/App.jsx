import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Game from './pages/Game'
import Leaderboard from './pages/Leaderboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
