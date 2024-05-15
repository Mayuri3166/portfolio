import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage2 from '../components/Heroimage2'
// import Workcard from '../components/Workcard'
import Skills from '../components/Skills'
import Work from '../components/Work'



const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Project