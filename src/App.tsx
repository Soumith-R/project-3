import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import AboutUsPage from './pages/about-us/page'
import BeaconOfHopePage from './pages/beacon-of-hope/page'
import GalleryPage from './pages/gallery/page'
import ContactPage from './pages/contact/page'
import HomePage from './pages/home/page'
import WhatWeDoPage from './pages/what-we-do/page'
import GetInvolvedPage from './pages/get-involved/page'
import CertificationsPage from './pages/certifications/page'
import { NotFound } from './components/not-found-page'
import { Analytics } from "@vercel/analytics/react"
import './App.css'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path="/beacon-of-hope" element={<BeaconOfHopePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/login" element={<NotFound />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  )
}
export default App
