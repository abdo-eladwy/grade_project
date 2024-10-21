import React from 'react'
import Footer from './Footer'
import Input from './Input'
import  './Homepage.css'
import Achievements from './Achievements'
import Team from './Team'
import ScrollSlider from './ScrollSlider'
import SlideImage from './SlideImage'
import NavBar from './NavBar'
import Artical from './Artical'
import History from './History'
import Boxs from './Boxs'
import Cards from './Cards'


export default function Homepage() {
  return (
    <div>
     <NavBar/>
     <SlideImage/> 
     <Artical/>
     <History/>
     <Boxs/>
     <Cards/>
     <ScrollSlider/>
     <Team/>
     <Achievements/>
     <Input/>
     <Footer/>
    </div>
  )
}
