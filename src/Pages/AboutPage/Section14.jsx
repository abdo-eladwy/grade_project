import React from "react";
import "./section14.scss";
import { useTranslation }  from"react-i18next";

export default function Section14() {
  const { t } = useTranslation();

  return (
    <div className="col-12 section14  justify-content-center align-content-center ">
      <div className="container col-12 d-flex flex-wrap justify-content-between">
        <div className="col-12 col-lg-6   D1" style={{background: '#ff6360'}}>
          <img
            src="https://matchthemes.com/demowp/volenti/wp-content/uploads/practice-item-3-800x550.jpg"
            alt="#"
            className="container"
           
          />
        </div>
        <div className=" col-12   col-lg-6    D2">
          <div className="firstsec pt-4 pt-lg-0 ">
            <span >{t("span4")}</span>
            <h3>{t("h70")}</h3>
            <p className=" text-center">
             {t("carouselp30")}
            </p>
          </div>
          <div className="d-flex flex-wrap  text-end">
            <div className=" col-12 col-md-6  son">
              <h4>{t("h41")}</h4>
              <p>
               {t("carouselp31")}
              </p>
            </div>
            <div className=" col-12 col-md-6 son1  ">
              <h4>{t("h42")}</h4>
              <p>
              {t("carouselp32")}
              </p>
            </div>
          </div>
          <div className="d-flex  flex-wrap text-end">
            <div className=" col-12 col-md-6   son">
              <h4>{t("h43")}</h4>
              <p>
               {t("carouselp34")}
              </p>
            </div>
            <div className=" col-12 col-md-6  son1 ">
              <h4>{t("h44")}</h4>
              <p>
               {t("carouselp33")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
