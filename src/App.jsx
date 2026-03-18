import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
<Route path='/' element={<LandingPage/>}/>

     </Routes>
     
     
     </BrowserRouter>
    </>
  )
}

export default App
