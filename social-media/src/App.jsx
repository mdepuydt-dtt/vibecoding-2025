import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
