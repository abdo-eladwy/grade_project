import React from "react";
import "./Sections.css";

import img3 from "./practice-icon-1.png";
import img4 from "./practice-icon-2.png";
import img5 from "./practice-icon-3.png";
import img6 from "./practice-icon-4.png";
import img7 from "./practice-icon-5.png";
import img8 from "./practice-icon-6.png";
import img1 from "./practice-icon-7.png";
import img2 from "./practice-icon-8.png";
import img9 from "./practice-icon-9.png";
import { Link } from "react-router-dom";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
export default function Sections() {
  const { pathname } =  useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
  return (

    <div>
      <NavBar />
      <div>
        <div>
          <div className="cardsss col-12 pb-5 pt-5 ">
            <div className="p-4 col-12 d-flex flex-column justify-content-center align-content-center align-items-center mt-3 mb-4">
              <h6>HIGH LEVEL SERVICES</h6>
              <h2>Our Practice Areas</h2>
            </div>
            <div className="  col-12 d-flex  flex-wrap justify-content-center align-content-center align-items-center g-4 text-center mb-4">
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3 d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img3} alt="" />
                <h6>Bankruptcy</h6>
                <h1 className=" pb-4">Business Litigation</h1>
                <p className=" pb-3">
                  Facer verterem duo ea. Option feugait te mel, mea autem
                  dissentias ne. Porro adipisci sadipscing ne sit, augue
                  detracto senserit
                </p>
                <Link to="/BusinessLitigation" className="mb-4">
                  Read More →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3   p-3 d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img6} alt="" />
                <h6>Legal</h6>
                <h1 className=" pb-4">Medical Malpractice</h1>
                <p className=" pb-3">
                  Facer verterem duo ea. Option feugait te mel, mea autem
                  dissentias ne. Porro adipisci sadipscing ne sit, augue
                  detracto senserit
                </p>
                <Link to="/MedicalMalpractice" className="mb-4">
                  Read More →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img5} alt="" />
                <h6>Justice</h6>
                <h1 className=" pb-4">Insurance Coverage</h1>
                <p className=" pb-3">
                  Facer verterem duo ea. Option feugait te mel, mea autem
                  dissentias ne. Porro adipisci sadipscing ne sit, augue
                  detracto senserit
                </p>
                <Link to="/InsuranceCoverage" className="mb-4">
                  Read More →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img4} alt="" />
                <h6>Transactions</h6>
                <h1 className=" pb-4">Real Estate</h1>
                <p className=" pb-3">
                  Facer verterem duo ea. Option feugait te mel, mea autem
                  dissentias ne. Porro adipisci sadipscing ne sit, augue
                  detracto senserit
                </p>
                <Link to="/RealEstate" className="mb-4">
                  Read More →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img8} alt="" />
                <h6>Legal</h6>
                <h1 className=" pb-4">Family Law</h1>
                <p className=" pb-3">
                  Facer verterem duo ea. Option feugait te mel, mea autem
                  dissentias ne. Porro adipisci sadipscing ne sit, augue
                  detracto senserit
                </p>
                <Link to="/FamilyLaw" className="mb-4">
                  Read More →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img7} alt="" />
                <h6>Justice</h6>
                <h1 className=" pb-4">Injury Litigation</h1>
                <p className=" pb-3">
                  Facer verterem duo ea. Option feugait te mel, mea autem
                  dissentias ne. Porro adipisci sadipscing ne sit, augue
                  detracto senserit
                </p>
                <Link to="/InjuryLitigation" className="mb-4">
                  Read More →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img1} alt="" />
                <h6>Justice</h6>
                <h1 className=" pb-4">Labor Law</h1>
                <p className=" pb-3">
                  Facer verterem duo ea. Option feugait te mel, mea autem
                  dissentias ne. Porro adipisci sadipscing ne sit, augue
                  detracto senserit
                </p>
                <Link to="/LaborLaw" className="mb-4">
                  Read More →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img2} alt="" />
                <h6>Traffic Law</h6>
                <h1 className=" pb-4">Auto Accidents</h1>
                <p className=" pb-3">
                  Facer verterem duo ea. Option feugait te mel, mea autem
                  dissentias ne. Porro adipisci sadipscing ne sit, augue
                  detracto senserit
                </p>
                <Link to="/AutoAccidents" className="mb-4">
                  Read More →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img9} alt="" />
                <h6>Transactions</h6>
                <h1 className=" pb-4">Corporate Fraud</h1>
                <p className=" pb-3">
                  Facer verterem duo ea. Option feugait te mel, mea autem
                  dissentias ne. Porro adipisci sadipscing ne sit, augue
                  detracto senserit
                </p>
                <Link to="/CorporateFraud" className="mb-4">
                  Read More →{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
