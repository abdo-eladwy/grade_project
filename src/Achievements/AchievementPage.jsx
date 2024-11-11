import React from 'react'
import NavBar from '../HomePage/NavBar'
import './AchievementPage.css'
import Succes from './Succes'
import ScrollCounter from './ScrollCounter'
import OurJop from './OurJop'
import OurProcess from './OurProcess'
import Footer from '../HomePage/Footer'
import Section16 from './OurProcess'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
export default function AchievementPage() {
  const { pathname } =  useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
  return (
    <div>
      <NavBar/>
      <Succes/>
      <ScrollCounter/>
      <OurJop/>
      <OurProcess/>
      <Footer/>
    </div>
  )
}
