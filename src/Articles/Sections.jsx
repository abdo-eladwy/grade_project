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
import { useTranslation } from "react-i18next";

export default function Sections() {
  const { pathname } =  useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
  const { t } = useTranslation();

  return (

    <div>
      <NavBar />
      <div>
        <div>
          <div className="cardsss col-12 pb-5 pt-5 ">
            <div className="p-4 col-12 d-flex flex-column justify-content-center align-content-center align-items-center mt-3 mb-4">
              <h6>{t("h21")} </h6>
              <h2>{t("h22")} </h2>
            </div>
            <div className="  col-12 d-flex  flex-wrap justify-content-center align-content-center align-items-center g-4 text-center mb-4">
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3 d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img3} alt="" />
                <h6>{t("h64")} </h6>
                <h1 className=" pb-4">{t("h23")}</h1>
                <p className=" pb-3">
                {t("carouselp17")}
                </p>
                <Link to="/BusinessLitigation" className="mb-4">
                {t("h14")} →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3   p-3 d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img6} alt="" />
                <h6>{t("h67")}</h6>
                <h1 className=" pb-4">{t("h26")}</h1>
                <p className=" pb-3">
                {t("carouselp20")}
                </p>
                <Link to="/MedicalMalpractice" className="mb-4">
                {t("h14")} →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img5} alt="" />
                <h6>{t("h66")}</h6>
                <h1 className=" pb-4">{t("h25")}</h1>
                <p className=" pb-3">
                {t("carouselp19")}
                </p>
                <Link to="/InsuranceCoverage" className="mb-4">
                {t("h14")} →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img4} alt="" />
                <h6>{t("h65")}</h6>
                <h1 className=" pb-4">{t("h24")}</h1>
                <p className=" pb-3">
                 {t("carouselp20")}
                </p>
                <Link to="/RealEstate" className="mb-4">
                  {t("h14")} →
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img8} alt="" />
                <h6>{t("h67")}</h6>
                <h1 className=" pb-4">{t("h27")}</h1>
                <p className=" pb-3">
                 {t("carouselp21")}
                </p>
                <Link to="/FamilyLaw" className="mb-4">
                {t("h14")} →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img7} alt="" />
                <h6>{t("h68")}</h6>
                <h1 className=" pb-4">{t("h28")}</h1>
                <p className=" pb-3">
                  {t("carouselp22")}
                </p>
                <Link to="/InjuryLitigation" className="mb-4">
                {t("h14")} →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img1} alt="" />
                <h6>{t("h68")}</h6>
                <h1 className=" pb-4">{t("h46")}</h1>
                <p className=" pb-3">
                {t("carouselp55")}
                </p>
                <Link to="/LaborLaw" className="mb-4">
                {t("h14")} →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img2} alt="" />
                <h6>{t("h71")}</h6>
                <h1 className=" pb-4">{t("carouselp54")}</h1>
                <p className=" pb-3">
                 {t("carouselp56")}
                </p>
                <Link to="/AutoAccidents" className="mb-4">
                {t("h14")} →{" "}
                </Link>
              </div>
              <div className="card2 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
                <img className=" pb-5" src={img9} alt="" />
                <h6>{t("h65")}</h6>
                <h1 className=" pb-4">{t("carouselp57")}</h1>
                <p className=" pb-3">
                 {t("carouselp58")}
                </p>
                <Link to="/CorporateFraud" className="mb-4">
                {t("h14")} →{" "}
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
