import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Car from './pages/Car'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
