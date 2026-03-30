import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'
import TradeEnquiryForm from './Pages/TradeEnquiryForm'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Routes>
<Route path='/' element={<LandingPage/>}/>
<Route path='/trade-enquiry' element={<TradeEnquiryForm/>}/>


     </Routes>
     
     
     </BrowserRouter>
    </>
  )
}

export default App
