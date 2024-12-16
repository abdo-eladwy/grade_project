import "./ScrollSlider.scss";
import { useTranslation } from "react-i18next";

export default function ScrollSlider() {
  const { t } = useTranslation();

  return (
    <div className="section4 d-flex justify-content-center align-items-center col-12">
      <div className="overlay  d-flex justify-content-center align-items-center w-100 h-100"></div>
      {/* Add text content here */}
      <div className="content container  text-center col-12 pb-5">
        <h1
          style={{ fontSize: "48px", fontWeight: "700" }}
          className="text-center col-12 pb-1"
        >
          {t("h30")}
        </h1>
        <h4
          className="col-12 d-flex justify-content-center align-items-center align-content-center text-center pb-3"
          style={{ color: "rgb(118, 112, 112" }}
        >
          {t("h29")}
        </h4>
        <p style={{ lineHeight: "35px", color: "rgb(165, 149, 149)" }}>
          {t("carouselp23")}
        </p>
      </div>
    </div>
  );
}
