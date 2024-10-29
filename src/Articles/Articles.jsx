import React from 'react'
import './Link.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sections from './Sections'
import BusinessLitigation from './BusinessLitigation'
import MedicalMalpractice from './MedicalMalpractice'
import InsuranceCoverage from './InsuranceCoverage'
import RealEstate from './RealEstate'
import FamilyLaw from './FamilyLaw'
import InjuryLitigation from './InjuryLitigation'
import LaborLaw from './LaborLaw'
import AutoAccidents from './AutoAccidents'
import CorporateFraud from './CorporateFraud'

export default function Articles() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<Sections/>}/>  */}
            <Route path='/BusinessLitigation' element={<BusinessLitigation/>}/>           
            <Route path='/MedicalMalpractice' element={<MedicalMalpractice/>}/>           
            <Route path='/InsuranceCoverage' element={<InsuranceCoverage/>}/>           
            <Route path='/RealEstate' element={<RealEstate/>}/>           
            <Route path='/FamilyLaw' element={<FamilyLaw/>}/>           
            <Route path='/InjuryLitigation' element={<InjuryLitigation/>}/>           
            <Route path='/LaborLaw' element={<LaborLaw/>}/>           
            <Route path='/AutoAccidents' element={<AutoAccidents/>}/>           
            <Route path='/CorporateFraud' element={<CorporateFraud/>}/>           
          </Routes>
        </BrowserRouter>
    </div>
  )
}
