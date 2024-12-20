import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./Container.css";
import { useTranslation } from "react-i18next";
import img from "./Practice-item-1.jpg";
import img1 from "./custody-battle-800x550 (1).jpg";
import { Link } from "react-router-dom";

export default function Container() {
  const { t } = useTranslation();

  return (
    <div
      className="container-fluid  text-light pt-5"
      style={{ background: " #0e1219" }}
    >
      <div className="row gap-4 p-lg-4">
        {/* container1 */}
        <div className="col-12 col-lg-8 pb-5 ">
          <div className="img col-12 pb-4">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="paragraph col-12 pb-4">
            <p className="pb-4">{t("carouselp47")}</p>
            <p className="pb-3">{t("carouselp48")}</p>
            <p className="pb-3">{t("carouselp49")}</p>
          </div>

          {/* box with img1 and text */}
          <div className="row box pb-5 mt-2">
            <div className="col-12 col-lg-6">
              <img className="img-fluid" src={img1} alt="" />
            </div>
            <div className="col-12 col-lg-6 p-3">
              <h1
                className="d-flex"
                style={{
                  fontSize: "45px",
                  fontWeight: "700",
                  color: "rgb(255, 102, 102,0.7)",
                }}
              >
                {t("carouselh11")}
              </h1>
              <p>{t("carouselp50")}</p>
            </div>
          </div>

          <div className="col-12 mb-5">
            <h1 className="pb-2">{t("carouselh12")}</h1>
            <p>{t("carouselp51")}</p>
          </div>
        </div>

        {/* container2 */}
        <div className="col-12 col-lg-3 mt-3 mb-5 pb-4">
          <div className="container3">
            <div className="container4 mb-4 text-center">
              <h1 style={{ color: "rgb(208, 115, 115)" }}>
                {t("carouselh14")}
              </h1>
              <ul>
                <li>
                  <Link to="/BusinessLitigation"> ›› {t("h23")}</Link>
                </li>
                <li>
                  <Link to="/RealEstate"> ›› {t("a2")}</Link>
                </li>
                <li>
                  <Link to="/InsuranceCoverage"> ›› {t("h25")}</Link>
                </li>
                <li>
                  <Link to="/MedicalMalpractice"> ›› {t("h26")}</Link>
                </li>
                <li>
                  <Link to="/FamilyLaw"> ›› {t("h27")}</Link>
                </li>
                <li>
                  <Link to="/InjuryLitigation"> ›› {t("h28")}</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 p-4 mb-5 d-flex flex-wrap justify-content-center align-items-center text-start border m-1 rounded-4">
              <p>{t("carouselp53")}</p>
              <h3>1-800-111-2222</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container5 container col-12 d-flex flex-column justify-content-center text-center mt-4">
        <h1 className="container3h1 "> {t("carouselh13")}</h1>
        <p className="container3p pb-5">{t("carouselp52")}</p>
      </div>
      <div className="button col-12 d-flex container justify-content-center  pb-5">
        <Link to="/Contact">
          <button className=" rounded-5">{t("a111")}</button>
        </Link>
      </div>
    </div>
  );
}
