import React from "react";
import "./Section11.scss"
import { useTranslation }  from"react-i18next";

export default function Section11() {
  const { t } = useTranslation();

  return (
    <div className="all-contnt col-12 d-flex justify-content-center align-items-center p-1 p-md-5 "style={{background:'#0e1205'}}>
      <div className="col-12 d-flex   flex-wrap text-light container ">
        <div className="col-12 col-md-6 ">
          <p  style={{color:'rgb(255, 102, 102)',fontWeight:'500',fontSize:'17px'}}>{t("span5")}</p>
          <h3 className="title col-12 ">
           {t("carouselh7")}
            <i>{t("carouselh8")}</i>
          </h3>
        </div>
        <div className="col-12 col-md-6  p-md-3 p-lg-2 text-center ">
          <p >
         {t("carouselp39")}
          </p>
          <p className="my-5">
          {t("carouselp40")}
          </p>
        </div>
      </div>
    </div>
  );
}
