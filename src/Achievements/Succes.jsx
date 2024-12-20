import "./Succes.css";
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTranslation } from "react-i18next";

export default function Succes() {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".Succes");
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isVisible) {
        startCounting();
      }
    };

    startCounting();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const startCounting = () => {
    const duration = 2000;
    smoothAnimateValue(setProgress1, 0, 70, duration);
    smoothAnimateValue(setProgress2, 0, 100, duration);
    smoothAnimateValue(setProgress3, 0, 85, duration);
    smoothAnimateValue(setProgress4, 0, 96, duration);
  };
  const { t } = useTranslation();

  const smoothAnimateValue = (setState, start, end, duration) => {
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOutProgress * (end - start) + start);
      setState(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <div className="Succes  col-12 d-flex flex-column flex-lg-row bg-white justify-content-around align-items-center align-content-center pt-5 ">
      <div className="Succes 1col-12  col-lg-6 text-start d-flex flex-column justify-content-center align-items-start p-3 pt-5">
        <h6 className="pb-2">{t("h72")}</h6>
        <h1>{t("h73")}</h1>
        <p>
         {t("carouselp59")}
        </p>
        <div className="divv container d-flex ">
          <p>
           {t("carouselp60")}
          </p>
        </div>
      </div>
      <div className="Succes2 col-12  col-lg-5 mt-4 mt-lg-0 pt-5">
        <div
          className="d-flex flex-column align-items-center mb-4"
          style={{ padding: "30px" }}
        >
          <div className="d-flex justify-content-around col-12  flex-wrap">
            <div style={{ width: "80px", marginBottom: "1rem" }}>
              <CircularProgressbar
                value={progress1}
                text={`${Math.round(progress1)}%`}
                styles={buildStyles({
                  textColor: "#000",
                  pathColor: "#b85c38",
                  trailColor: "#f7f7f7",
                })}
              />
              <h3 className="pt-2">{t("h74")}</h3>
            </div>
            <div style={{ width: "80px", marginBottom: "1rem" }}>
              <CircularProgressbar
                value={progress2}
                text={`${Math.round(progress2)}%`}
                styles={buildStyles({
                  textColor: "#000",
                  pathColor: "#b85c38",
                  trailColor: "#f7f7f7",
                })}
              />
              <h3 className="pt-2">{t("h75")}</h3>
            </div>
          </div>

          <div className="d-flex justify-content-around col-12 flex-wrap">
            <div style={{ width: "80px", marginBottom: "1rem" }}>
              <CircularProgressbar
                value={progress3}
                text={`${Math.round(progress3)}%`}
                styles={buildStyles({
                  textColor: "#000",
                  pathColor: "#b85c38",
                  trailColor: "#f7f7f7",
                })}
              />
              <h3 className="pt-2">{t("h76")}</h3>
            </div>
            <div style={{ width: "80px", marginBottom: "1rem" }}>
              <CircularProgressbar
                value={progress4}
                text={`${Math.round(progress4)}%`}
                styles={buildStyles({
                  textColor: "#000",
                  pathColor: "#b85c38",
                  trailColor: "#f7f7f7",
                })}
              />
              <h3 className="pt-2"> {t("h77")}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
