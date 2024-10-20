
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/ContactPage/Contact"
import AboutUs from "./Pages/AboutPage/AboutUs";
import Home from "./Pages/HomePage/Home";
export default function App() {
  return (
    <div className="col-12 ">
      {/* <Homepage></Homepage>
      <AboutPage></AboutPage>
      <Contact></Contact> */}
     
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home></Home>}></Route>
           <Route path="/about" element = {<AboutUs></AboutUs>}></Route>
           <Route path="/contact" element = {<Contact></Contact>}></Route>
          
         </Routes>
      </BrowserRouter> 
    </div> 
  );
}
