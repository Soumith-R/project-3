import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUsPage from './pages/about-us/page'
import BeaconOfHopePage from './pages/beacon-of-hope/page'
import ContactPage from './pages/contact/page'
import HomePage from './pages/home/page'
import WhatWeDoPage from './pages/what-we-do/page'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/gallery" element={<BeaconOfHopePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
      </Routes>
    </Router>
  )
}

export default App
