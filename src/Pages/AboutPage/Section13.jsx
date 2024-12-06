import React from "react";
import "./Section13.scss"
import { useTranslation }  from"react-i18next";

export default function Section13() {
  const { t } = useTranslation();

  return (
    <div className="col-12 section d-flex align-items-center justify-content-center">
      <div className="overly"></div>
      <div className="container col-10  col-md-11 col-lg-8 allcontent ">
        <h4>
         {t("carouselh5")}  <span>{t("span7")}</span>
        </h4>
      </div>
    </div>
  );
}
