import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Welcome from './Components/Welcome.jsx'
import About from './Components/About.jsx'
import Tech from './Components/Tech.jsx'
import Experience from './Components/Experience.jsx'
import Contact from './Components/Contact.jsx'
import Proyects from './Components/Proyects.jsx'
import './Styles/portfolio.css'

const Portfolio = () => {
  return (
    <>
    <Navbar/>
      <Welcome id="inicio"/>
      <About id="about"/>
      <Tech id='tech'/>
      <Experience id='xp'/>
      <Proyects id='proyect'/>
      <Contact id='contact'/>
    <Footer/>
    </>
  )
}

export default Portfolio