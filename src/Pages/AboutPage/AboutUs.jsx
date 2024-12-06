import AboutMe from "./AboutMe";
import Section11 from "./Section11";
import Section14 from "./Section14";
import Section12 from "./Section12";
import Section13 from "./Section13";
import Section15 from "./Section15";
import Footer from "../../HomePage/Footer";
import NavBar from "../../HomePage/NavBar";
import OurJop from "./OurJop";
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
export default function AboutUs() {
  const { pathname } =  useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
  return (
    <div>
      <NavBar/>
      <AboutMe></AboutMe>
      <Section14></Section14>
      <Section12></Section12>
      <Section15></Section15>
      <Section13></Section13>
      <Section11></Section11>
      <OurJop/>
      <Footer></Footer>
    </div>
  )
}


