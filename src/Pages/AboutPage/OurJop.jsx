import React, { useState } from "react";
import "./OurJop.css";
import { useTranslation }  from"react-i18next";

export default function OurJop() {
  // حالة واحدة تتحكم في كلا الأكورديونين
  const [open, setOpen] = useState("");

  const toggleAccordion = (id) => {
    setOpen(open === id ? "" : id); 
  };
  const { t } = useTranslation();


  return (
    <div className="pb-5 text-light col-12" style={{ background: "#000000" }}>
      <div className="header1 col-12 container d-flex text-white ">
        <h1 className="col-12 text-center mt-3" style={{color:'rgb(255, 102, 102)',fontSize:'45px',fontWeight:'700'}}>Most Frequent Questions</h1>
        <h4 className=" col-12 text-center pt-3">
          {t("carouselh9")}
        </h4>
      </div>
      <div className="acord container d-flex justify-content-center align-items-center align-content-center col-12 pt-5">
        {/* أكورديون 1 */}
        <div className="col-12 col-md-11 col-lg-6 xx1  mb-0 pb-0">
          <div
            className="header2 col-12  d-flex justify-content-center  mb-0 pb-0"
            style={{ marginTop: "0px", paddingTop: "0px" }}
          >
            <div
              className="header1 col-12 mb-0 pb-0"
              style={{ marginTop: "0px", paddingTop: "0px" }}
            >
              <ul
                className="accordion col-12  mb-0 pb-0 "
                style={{ marginTop: "0px", paddingTop: "0px" }}
              >
                <li>
                  <label
                    onClick={() => toggleAccordion("first")}
                    className={open === "first" ? "active" : ""}
                  >
                    1. {t("label1")}
                  </label>
                  <div className={`content ${open === "first" ? "open" : ""}`}>
                    <p style={{ color: " #e3edf78f" }}>
                      {t("carouselp41")}
                    </p>
                  </div>
                </li>
                <li>
                  <label
                    onClick={() => toggleAccordion("second")}
                    className={open === "second" ? "active" : ""}
                  >
                    2. {t("label2")}
                  </label>
                  <div className={`content ${open === "second" ? "open" : ""}`}>
                    <p style={{ color: " #e3edf78f" }}>
                      {t("carouselp42")}
                    </p>
                  </div>
                </li>
                <li>
                  <label
                    onClick={() => toggleAccordion("third")}
                    className={open === "third" ? "active" : ""}
                  >
                    3. {t("label3")}
                  </label>
                  <div className={`content ${open === "third" ? "open" : ""}`}>
                    <p style={{ color: " #e3edf78f" }}>
                      {t("carouselp43")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* أكورديون 2 */}
        <div className="col-12 col-md-11 col-lg-6  xx2  mb-0 pb-0">
          <div
            className="header2 col-12  d-flex justify-content-center  mb-0 pb-0"
            style={{ marginTop: "0px", paddingTop: "0px" }}
          >
            <div
              className="header1 col-12  mb-0 pb-0"
              style={{ marginTop: "0px", paddingTop: "0px" }}
            >
              <ul
                className="accordion col-12  mb-0 pb-0"
                style={{ marginTop: "0px", paddingTop: "0px" }}
              >
                <li>
                  <label
                    onClick={() => toggleAccordion("fourth")}
                    className={open === "fourth" ? "active" : ""}
                  >
                    4. {t("label4")}
                  </label>
                  <div className={`content ${open === "fourth" ? "open" : ""}`}>
                    <p style={{ color: " #e3edf78f" }}>
                      {t("carouselp44")}
                    </p>
                  </div>
                </li>
                <li>
                  <label
                    onClick={() => toggleAccordion("fifth")}
                    className={open === "fifth" ? "active" : ""}
                  >
                    5. {t("label5")}
                  </label>
                  <div className={`content ${open === "fifth" ? "open" : ""}`}>
                    <p style={{ color: " #e3edf78f" }}>
                     {t("carouselp45")}
                    </p>
                  </div>
                </li>
                <li>
                  <label
                    onClick={() => toggleAccordion("sixth")}
                    className={open === "sixth" ? "active" : ""}
                  >
                    6. {t("label6")}
                  </label>
                  <div className={`content ${open === "sixth" ? "open" : ""}`}>
                    <p style={{ color: " #e3edf78f" }}>
                     {t("carouselp46")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
