import React from "react";
import "./AutoAccidents.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useTranslation } from "react-i18next";
import img from "./custody-battle-800x550 (1).jpg";
import img1 from "./practice-item-8-800x550.jpg";
import img2 from "./personal-injury-lawyer (1).jpg";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function AutoAccidents() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <div>
          <div>
            <NavBar />
            <div className="col-12 mb-5">
              <div className="OurVision col-12 position-relative">
                <img className="col-12 d-flex" src={img2} alt="" />
                <div className="overlay-color"></div>
                <div className="overlay-text">
                  <h1 className="d-flex">{t("carouselp54")}</h1>
                </div>
              </div>
            </div>
            <div className="container-fluid m-2 text-light pt-5">
              <div className="row gap-4 p-4">
                {/* container1 */}
                <div className="col-12 col-lg-8 mb-5 ">
                  <div className="img col-12 pb-4">
                    <img className="img-fluid" src={img1} alt="" />
                  </div>
                  <div className="paragraph col-12 pb-2">
                    <p className="pb-4">
                      {t("carouselp94")}
                    </p>
                    <p className="pb-3">
                     {t("carouselp95")}
                    </p>
                    <p className="pb-3">
                      {t("carouselp96")}
                    </p>
                  </div>

                  {/* box with img1 and text */}
                  <div className="row box mb-5 mt-2">
                    <div className="col-12 col-lg-6">
                      <img className="img-fluid1" src={img} alt="" />
                    </div>
                    <div className="col-12 col-lg-6 p-3">
                      <h1 className="d-flex">{t("h90")}</h1>
                      <p>{t("carouselp73")}</p>
                    </div>
                  </div>

                  <div className="col-12 mb-5 text-center">
                    <h1 className="pb-2">{t("h91")}</h1>
                    <p>{t("carouselp74")}</p>
                  </div>
                </div>

                {/* container2 */}
                <div className="col-12 col-lg-3 mt-3 mb-5 pb-4">
                  <div className="container3">
                    <div className="container4 mb-5 text-start">
                      <h1>{t("carouselh14")}</h1>
                      <ul>
                        <li>
                          <a href="">{t("h23")}</a>
                        </li>
                        <li>
                          <a href="">{t("a2")}</a>
                        </li>
                        <li>
                          <a href="">{t("h25")}</a>
                        </li>
                        <li>
                          <a href="">{t("h26")}</a>
                        </li>
                        <li>
                          <a href="">{t("h27")}</a>
                        </li>
                        <li>
                          <a href="">{t("h28")}</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 p-4 mb-5 d-flex flex-wrap justify-content-center align-items-center text-start border m-1">
                      <p>{t("carouselp53")}</p>
                      <h3>1-800-111-2222</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container5 container col-12 d-flex flex-column justify-content-center text-center mt-4">
                <h1 className="container3h1 p-3">{t("h92")}</h1>
                <p className="container3p pb-5">{t("carouselp75")}</p>
              </div>
              <div className="button col-12 d-flex container justify-content-center mb-5 pb-5">
                <button>{t("a111")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
