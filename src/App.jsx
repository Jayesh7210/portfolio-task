import { useState } from 'react'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Home />
    </>
  )
}

export default App
