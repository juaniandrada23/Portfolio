import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Welcome from './Components/Welcome.jsx'
import About from './Components/About.jsx'
import Tech from './Components/Tech.jsx'
import Experience from './Components/Experience.jsx'
import './Styles/portfolio.css'

const Portfolio = () => {
  return (
    <>
    <Navbar/>
      <Welcome/>
      <About/>
      <Tech/>
      <Experience/>
    <Footer/>
    </>
  )
}

export default Portfolio