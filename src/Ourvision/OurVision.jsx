import React from 'react'
import NavBar from '../HomePage/NavBar'
import Vision from './Vision'
import Container from './Container'
import './OurVision.css'
import Footer from '../HomePage/Footer'
export default function OurVision() {
  return (
    <div style={{background:'#0e1219'}}>
      <NavBar/>
      <Vision/>
      <Container/>
      <Footer/>
    </div>
  )
}
