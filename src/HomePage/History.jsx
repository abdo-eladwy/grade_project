import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./History.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function History() {
  const { t } = useTranslation();

  return (
    <div
      className="componentcomponent col-12"
      style={{ background: "#0e1219" }}
    >
      <div className="component col-12 d-flex justify-content-center flex-wrap text-light py-5">
        <div className="component1 col-12 col-lg-5 d-flex flex-column justify-content-center align-items-start p-5 mb-5">
          <h6
            className="text-uppercase pb-4"
            style={{ color: "rgb(255, 102, 102)" }}
          >
            {t("h61")}
          </h6>
          <h1 className="mb-5 pb-5 ">{t("h17")}</h1>
          <h4 className="mb-2 pb-3">{t("h441")}</h4>
          <p className="mb-4">{t("carouselp9")}</p>
          <Link to="/Achievement">
            <button className="btn-outline-light">{t("h14")}</button>
          </Link>
        </div>

        <div className="component2 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="component3 row w-100 mb-4 d-flex justify-content-between align-items-start">
            <div className="component5 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-between border-bottom p-3">
              <h4>
                <span>1995</span>
              </h4>
              <h1 className="pb-4">{t("h15")}</h1>
              <p className="pb-5">
               {t("carouselp11")}
              </p>
            </div>
            <div className="component6 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-between border-bottom p-3">
              <h4>
                <span>2004</span>
              </h4>
              <h1 className="pb-4">100 {t("h16")}</h1>
              <p className="pb-5">
              {t("carouselp10")}
              </p>
            </div>
          </div>

          <div className="component4 row w-100  mb-4 d-flex justify-content-between align-items-start">
            <div className="component7 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-center align-items-start text-start p-3">
              <h4>
                <span>2010</span>
              </h4>
              <h1 className="pb-4">{t("h97")}</h1>
              <p className="pb-5">
               {t("carouselp12")}
              </p>
            </div>
            <div className="component8 container col-12 col-md-5 mb-5 d-flex flex-column justify-content-center align-items-start text-start p-3">
              <h4>
                <span>2019</span>
              </h4>
              <h1 className="pb-4">{t("h18")}</h1>
              <p className="pb-5">
               {t("carouselp13")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
