import React from 'react'
import Contactus from "./Contactus";
import Contact1 from "./ContactForm";
import NavBar from '../../HomePage/NavBar';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../../HomePage/Footer';
export default function Contact() {
  const { pathname } =  useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
  return (
    <div>
      <NavBar/>
      <Contactus></Contactus>
      <Contact1></Contact1>
      <Footer></Footer>
    </div>
  )
}
