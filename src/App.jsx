import React from 'react'
import Header from './Copmpnents/Header'
import Hero from './Copmpnents/Hero'
import WhatIdo from './Copmpnents/WhatIdo'
import FeaturedProjects from './Copmpnents/FeaturedProjects'
import Aboutme from './Copmpnents/Aboutme'
import TechnicalSkills from './Copmpnents/TechnicalSkills'
import ContactMe from './Copmpnents/ContactMe'
import Footer from './Copmpnents/Footer'
import './App.css'

function App() {
  return (
     <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header/>
      <Hero/>
      <WhatIdo/>
      <FeaturedProjects/>
      <Aboutme/>
      <TechnicalSkills/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
