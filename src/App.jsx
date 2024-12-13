import Homepage from "./HomePage/Homepage";
import AboutUs from "./Pages/AboutPage/AboutUs";
import Contact from "./Pages/ContactPage/Contact";
import OurVision from './Ourvision/OurVision'
import AchievementPage from "./Achievements/AchievementPage";

// import Linkk from "./Articles/Articles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./Articles/Articles";
import Sections from "./Articles/Sections";
import BusinessLitigation from "./Articles/BusinessLitigation";
import MedicalMalpractice from "./Articles/MedicalMalpractice";
import InsuranceCoverage from "./Articles/InsuranceCoverage";
import RealEstate from "./Articles/RealEstate";
import FamilyLaw from "./Articles/FamilyLaw";
import InjuryLitigation from "./Articles/InjuryLitigation";
import LaborLaw from "./Articles/LaborLaw";
import AutoAccidents from "./Articles/AutoAccidents";
import CorporateFraud from "./Articles/CorporateFraud";
import Login from "./LoginRegister/Login";
import Register from "./LoginRegister/Register";
import "./i18n";
import GoToTopButton from "./GoToTopButton";
import WhatsAppButton from "./WhatsAppButton";
export default function App() {
  return (
    
  <div>
    <BrowserRouter>
    <GoToTopButton/>

      <Routes>
        <Route path="/" element={ <Homepage/>}/>
        <Route path="/Login" element={ <Login/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Contact" element={ <Contact/>}/>
        <Route path="/OurVision" element={<OurVision/>}/>
        <Route path="/Achievement" element={<AchievementPage/>}/>
        <Route path="/Articles" element={<Articles/>}/>
        <Route path="/Sections" element={<Sections/>}/>
        <Route path="/BusinessLitigation" element={<BusinessLitigation/>}/>
        <Route path="/MedicalMalpractice" element={<MedicalMalpractice/>}/>
        <Route path="/InsuranceCoverage" element={<InsuranceCoverage/>}/>
        <Route path="/RealEstate" element={<RealEstate/>}/>
        <Route path="/FamilyLaw" element={<FamilyLaw/>}/>
        <Route path="/InjuryLitigation" element={<InjuryLitigation/>}/>
        <Route path="/LaborLaw" element={<LaborLaw/>}/>
        <Route path="/AutoAccidents" element={<AutoAccidents/>}/>
        <Route path="/CorporateFraud" element={<CorporateFraud/>}/>
        <Route path="/Register" element={<Register/>} />
      </Routes>
      <WhatsAppButton />

    </BrowserRouter>
  </div>
  )
}




