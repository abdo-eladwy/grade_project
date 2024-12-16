import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { useTranslation } from "react-i18next";
import "./Index.css";
import { useLocation } from "react-router-dom";

export default function ServicesList() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { t } = useTranslation();
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/service-requests",
        {
          params: { populate: "*" },
        }
      );
      setServices(response.data.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container-fluid text-light pt-5">
        <div className="col-12 mb-1 mt-3 text-center">
          <h2 className="pb-2" style={{ color: "rgb(255, 102, 102)" }}>
            {t("carouselp114")}
          </h2>
          <div className="row gap-1 p-3 justify-content-center">
           
            <div className="col-12 col-md-4 col-lg-4 mb-3" >
              <div className="card team-card h-100"style={{ background: "rgb(187, 183, 183)" }}>
                <div className="card-body">
                  <h4
                    className="card-title"
                    style={{ color: "rgb(215, 120, 120)" }}
                  >
                   {t("carouselp115")}
                  </h4>
                  <p className="card-text"> {t("carouselp116")}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3" >
              <div className="card team-card h-100"style={{ background: "rgb(187, 183, 183)" }}>
                <div className="card-body">
                  <h4
                    className="card-title"
                    style={{ color: "rgb(215, 120, 120)" }}
                  >
                    {t("carouselp117")}
                  </h4>
                  <p className="card-text">{t("carouselp118")}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 mb-3">
              <div className="card team-card h-100" style={{ background: "rgb(187, 183, 183)" }}>
                <div className="card-body">
                  <h4
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                    {t("carouselp119")}
                  </h4>
                  <p className="card-text">{t("carouselp120")}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 mb-1">
              <div className="card team-card h-100" style={{ background: "rgb(187, 183, 183)" }}>
                <div className="card-body">
                  <h4
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                    {t("carouselp121")}
                  </h4>
                  <p className="card-text">{t("carouselp122")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-4">
          <div className="col-12 mb-5 text-center">
            <h1 className="pb-2" style={{ color: "rgb(255, 102, 102)" }}>
              {t("carouselp123")}
            </h1>
            <h5 style={{ color: "rgb(152, 58, 58)" }}>
             {t("carouselp124")}
            </h5>
          </div>

          {services.map((el, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card service-card h-100">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)"}}
                  >
                    {el.user_name || "غير متاح"}
                  </h5>
                  <p className="card-text"style={{ color: "rgb(132, 132, 132)" }}>
                    <strong>{t("carouselp102")} :</strong> {el.user_email || "غير متاح"}
                  </p>
                  <p className="card-text"style={{ color: "rgb(132, 132, 132)" }}>
                    <strong>{t("carouselp103")} :</strong> {el.user_phone || "غير متاح"}
                  </p>
                  <p className="card-text"style={{ color:"rgb(132, 132, 132)" }}>
                    <strong>{t("carouselp125")} :</strong> {el.checkbox_text || "غير متاح"}
                  </p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-12 mb-5 text-center">
          <h2 className="pb-2 mb-4 " style={{ color: "rgb(255, 102, 102)" }}>
            {t("carouselp126")}
          </h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card extra-service-card h-100">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                   {t("carouselp127")}
                  </h5>
                  <p className="card-text">
                    {t("carouselp128")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card extra-service-card h-100">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                    {t("carouselp129")}
                  </h5>
                  <p className="card-text">
                    {t("carouselp130")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card extra-service-card h-100">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                   {t("carouselp131")}
                  </h5>
                  <p className="card-text">
                    {t("carouselp132")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* اعتمد اتصل بنا */}
        <div className="col-12 mb-5 text-center">
          <h2 className="pb-2" style={{ color: "rgb(255, 102, 102)" }}>
            {t("a111")}
          </h2>
          <p>
            <strong>العنوان:</strong> شارع المحاماة، المدينة، الدولة
            <br />
            <strong>البريد الإلكتروني:</strong> info@example.com
            <br />
            <strong>الهاتف:</strong> 123-456-7890
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
