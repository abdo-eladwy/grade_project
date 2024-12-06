import React from "react";
import "./AboutMe.css";
import img2 from './top-header-about-us.jpg'
import { useTranslation }  from"react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="col-12 ">
      <div className="OurVision col-12 position-relative">
        <img className="col-12 d-flex" src={img2} alt="" />
        <div className="overlay-color"></div>
        <div className="overlay-text">
          <h1 className="d-flex">{t("h37")}</h1>
          <h6> {t("h69")}</h6>
        </div>
      </div>
    </div>
  );
}

