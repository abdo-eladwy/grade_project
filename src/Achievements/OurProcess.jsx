import React from "react";
import "./OurProcess.scss";
import img from "./case-1.jpg";
import img2 from "./case-s-800x550.jpg";
import img3 from "./case-2.jpg";
import { useTranslation } from "react-i18next";
export default function OurProcess() {
  const { t } = useTranslation();
  return (
    <div className="col-12  text-light sec_content d-flex justify-content-center align-content-center " >
      <div className="container col-12 ">
        <div className="col-12  d-flex flex-wrap  parent1 ">
          <div className="col-12 col-md-6 images2">
            <img
             src={img}
              alt="#"
              className="h-100 w-100 "
            />
          </div>
          <div className="col-12 col-md-6  pt-3 child child1">
            <span>{t("span8")}</span>
            <h2 className="mt-3">{t("h84")}</h2>
            <p className="mt-5 mt-md-3 mt-lg-5">
             {t("carouselp66")}
            </p>
          </div>
        </div>
        <div className="col-12   d-flex flex-wrap parent2">
          <div className="col-12 col-md-6 pt-3 child1">
            <span>{t("span9")}</span>
            <h2 className="mt-3">{t("h85")}</h2>
            <p className="mt-5 mt-md-3 mt-lg-5">
              {t("carouselp67")}
            </p>
          </div>
          <div className="col-12 col-md-6 images2  child">
            <img
             src={img2}
              alt="#"
              className="h-100 w-100"
            />
          </div>
        </div>
        <div className="col-12  d-flex flex-wrap parent3">
          <div className="col-12 col-md-6 images2">
            <img
              src={img3}
              alt="#"
              className="h-100 w-100"
            />
          </div>
          <div className="col-12 col-md-6 pt-3 child child1 ">
            <span>{t("span10")}</span>
            <h2 className="mt-3">{t("h86")}</h2>
            <p className="mt-5 mt-md-3 mt-lg-5">
              {t("carouselp68")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
