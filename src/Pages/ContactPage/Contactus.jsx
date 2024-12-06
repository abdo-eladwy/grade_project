import React from "react";
import "./Contactus.css";
import img2 from './contact-us-page.jpg'
import { useTranslation } from "react-i18next";
export default function Contactus() {
  const { t } = useTranslation();

  return (
    <div className="col-12">
      <div className="OurVision col-12 position-relative">
        <img className="col-12 d-flex" src={img2} alt="" />
        <div className="overlay-color"></div>
        <div className="overlay-text">
          <h1 className="d-flex">{t("h87")}</h1>
          <span className="text-light">{t("span11")}</span>
        </div>
      </div>
    </div>
  );
}
