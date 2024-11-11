import React from 'react'
import NavBar from '../HomePage/NavBar'
import Vision from './Vision'
import Container from './Container'
import './OurVision.css'
import Footer from '../HomePage/Footer'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
export default function OurVision() {
  const { pathname } =  useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
  return (
    <div style={{background:'#0e1219'}}>
      <NavBar/>
      <Vision/>
      <Container/>
      <Footer/>
    </div>
  )
}
