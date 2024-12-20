import React, { useState } from "react";
import "./OurJop.css";
import img from "./faq-1.jpg";
import { useTranslation } from "react-i18next";

export default function OurJop() {
  const [open, setOpen] = useState(""); 

  const toggleAccordion = (id) => {
    setOpen(open === id ? "" : id);
  };
  const { t } = useTranslation();

  return (
    <div className="pb-5" style={{ background: "#0e1219" }}>
      <div className="header1 col-12 container d-flex text-white pb-4">
        <h4 className="mt-5 mb-3  col-12 text-center">{t("carouselh9")}</h4>
      </div>
      <div className="header2 col-12 container d-flex justify-content-around mb-3">
        <div className=" header1 col-lg-6 col-md-12 col-12 mt-5">
          <ul className="accordion">
            <li className="li">
              <label
                onClick={() => toggleAccordion("first")}
                className={open === "first" ? "active" : ""}
              >
                1. {t("label7")}
              </label>
              <div className={`content ${open === "first" ? "open" : ""}`}>
                <p style={{color:'#d6c8c8'}}>
                  {t("carouselp62")}
                </p>
              </div>
            </li>
            <li className="li">
              <label
                onClick={() => toggleAccordion("second")}
                className={open === "second" ? "active" : ""}
              >
                2. {t("label8")}
              </label>
              <div className={`content ${open === "second" ? "open" : ""}`}>
                <p style={{color:'#d6c8c8'}}>
                  {t("carouselp64")}
                </p>
              </div>
            </li>
            <li className="li">
              <label
                onClick={() => toggleAccordion("third")}
                className={open === "third" ? "active" : ""}
              >
                3. {t("label9")}
              </label>
              <div className={`content ${open === "third" ? "open" : ""}`}>
                <p style={{color:'#d6c8c8'}}>
                  {t("carouselp63")}
                </p>
              </div>
            </li>
            <li className="li">
              <label
                onClick={() => toggleAccordion("fourth")}
                className={open === "fourth" ? "active" : ""}
              >
                4. {t("label10")}
              </label>
              <div className={`content ${open === "fourth" ? "open" : ""}`}>
                <p style={{color:'#d6c8c8'}}>
                  {t("carouselp65")}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="body1 col-lg-6 col-md-12 col-12  mt-3 pt-4 d-flex justify-content-center p-4">
          <div className="body2 col-12">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
