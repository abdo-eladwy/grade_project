import React from "react";
import "./Section12.scss"
import { useTranslation }  from"react-i18next";

export default function Section12() {
  const { t } = useTranslation();

  return (
    <div className="col-12  h-75 d-flex justify-content-center align-items-center parent" style={{background: '#0e1219'}}>
      <div className="container text-light ">
       <div className="col-12 text-center  gap-3 ">
       <span className="m-3" >{t("span5")}</span>
       <h3 className="pargrf" >{t("h45")}</h3>
       </div>
      <div className="d-flex flex-wrap ">
      <p className="col-12 col-md-6 p-3 text-start">
          {t("carouselp35")}
        </p>
        <p  className="col-12 col-md-6 p-3" >
         {t("carouselp36")}
        </p>
      </div>
      </div>
    </div>
  );
}
