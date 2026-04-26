import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { AnimatePresence } from "framer-motion"
import Loader from '../Loader'

// Layout Import
import SidebarLayout from './Components/SidebarLayout'
import Navbar from './Components/Navbar'

// Component Imports
import LandingPage from './Components/LandingPage'
import HomePage from './Components/HomePage'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import EQuotationForm from './Components/EQuotationForm'
import Chatbot from './Components/Chatbot'

import TradeEnquiryForm from './Pages/TradeEnquiryForm'
import MembershipPage from './Pages/MembershipPage.jsx'
import EAuctionForm from './Pages/EAuctionForm.jsx'
import AppointmentPage from './Pages/AppointmentPage'
import ChamberManagement from './Pages/ChamberManagement'
import ChamberServices from './Pages/ChamberServices'
import TenderContract from './Pages/TenderContract'
import Career from './Pages/Career'
import CircularsPage from './Pages/CircularsPage'
import BlogPage from './Pages/BlogPage'
import NoticeBoard from './Pages/NoticeBoard'
import MediaGallery from './Pages/MediaGallery'
import Associates from './Pages/Associates'

import ScrollToTop from './utils/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Main Layout Wrapper */}
          <Route element={<SidebarLayout />}>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/services' element={<ChamberServices />} />
            <Route path='/management' element={<ChamberManagement />} />
            <Route path='/trade-enquiry' element={<TradeEnquiryForm />} />
            <Route path='/quotation' element={<EQuotationForm />} />
            <Route path='/auction' element={<EAuctionForm />} />
            <Route path='/tender-contract' element={<TenderContract />} />
            <Route path='/career' element={<Career />} />
            <Route path='/circular' element={<CircularsPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/visit-appointment' element={<AppointmentPage />} />
            <Route path='/notice-board' element={<NoticeBoard />} />
            <Route path='/media-gallery' element={<MediaGallery />} />
            <Route path='/associates' element={<Associates />} />
            <Route path='/membership-enquiry' element={<MembershipPage />} />
          </Route>
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </>
  )
}

export default App
