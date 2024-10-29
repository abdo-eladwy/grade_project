import React from 'react'
import NavBar from '../HomePage/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../HomePage/Footer'

export default function MainLayout() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
