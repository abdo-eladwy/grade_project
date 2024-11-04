import React from 'react'
import NavBar from '../HomePage/NavBar'
import './AchievementPage.css'
import Succes from './Succes'
import ScrollCounter from './ScrollCounter'
import OurJop from './OurJop'
import OurProcess from './OurProcess'
import Footer from '../HomePage/Footer'
import Section16 from './OurProcess'
export default function AchievementPage() {
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
