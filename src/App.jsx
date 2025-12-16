import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import About from './Pages/About'
// import Blog from './Pages/Blog'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Career from './Components/Career'
import TeamPage from './Components/Team'
import NotFound from './Pages/NotFound'
import Appointment from './Components/Appointment'
import Cookies from './Components/Cookies'
import PrivacyPolicy from './Components/PrivacyPolicy'
import TOS from './Components/TOS'
import Legal from './Components/Legal'
import Newsletters from './Components/Newsletters'
import Feedback from './Components/Feedback'
import Partner from './Pages/Partner'
import FooterService from './Pages/FooterService'
import Sitemap from './Pages/Sitemap'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Service/>} />
        {/* <Route path='/blog' element={<Blog/>} /> */}
        <Route path='/contact' element={<Contact/>} />
        <Route path='/careers' element={<Career/>} />
        <Route path='/team' element={<TeamPage/>} />
        <Route path='/legal' element={<Legal/>} />
        <Route path='/newsletter' element={<Newsletters/>} />
        <Route path='/feedback' element={<Feedback/>} />

        <Route path='/terms-of-service' element={<TOS/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/cookies-policy' element={<Cookies/>} />
        <Route path='/partner' element={<Partner/>} />
        <Route path='/services' element={<FooterService/>} />
        <Route path='/sitemap' element={<Sitemap/>} />




        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
