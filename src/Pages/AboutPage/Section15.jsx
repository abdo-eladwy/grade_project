import React from "react";
import "./Section15.scss"
import { useTranslation }  from"react-i18next";

export default function Section15() {
  const { t } = useTranslation();

  return (
    <div className="col-12   text-light d-flex justify-content-center align-content-center pt-5    p-lg-4" style={{background:'#000000'}}>
      <div className="container col-12 d-flex flex-wrap justify-content-between allcontnt mb-5 mt-4">
        <div className=" col-12 col-lg-6 p-3 ">
          <img
            src="https://matchthemes.com/demowp/volenti/wp-content/uploads/case-studies-3-800x550.jpg"
            alt="#"
            className=" w-100 "
            style={{objectFit: "content"}}
          />
        </div>
        <div className="col-12 col-lg-6 p-md-3 ">
          <span className=" d-block d-lg-inline mt-5  ">{t("span6")}</span>
          <h2 className="mt-3" style={{fontSize:'45px',fontWeight:'700'}}>{t("carouselh22")}</h2>
          <p className="mt-5" >
           {t("carouselp37")}
          </p>
          <p className="mt-5" >
           {t("carouselp38")}
          </p>
        </div>
      </div>
    </div>
  );
}
