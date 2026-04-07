import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'
import TradeEnquiryForm from './Pages/TradeEnquiryForm'
import Navbar from './Components/Navbar'
import { AnimatePresence } from "framer-motion"
import Loader from '../Loader'
import MembershipPage from './Pages/MembershipPage'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3.5 seconds ke baad loader gayab ho jayega
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
     <BrowserRouter>
     <Navbar />
     <Routes>
<Route path='/' element={<LandingPage/>}/>

<Route path='/membership-enquiry' element={<MembershipPage/>}/>


     </Routes>
     
     
     </BrowserRouter>
    </>
  )
}

export default App
