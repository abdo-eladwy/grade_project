import "bootstrap/dist/css/bootstrap.min.css";
import './Artical.css'
import icon1 from "./about-h24.png";
import icon2 from "./about-h26.png";
import icon3 from "./about-h25.png";
import icon4 from "./about-h23.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Artical() {
  const { t } = useTranslation();
  return (
    <div>
         <div
        className="artical d-flex justify-content-center flex-wrap p-5 bg-dark g-4"
        style={{ backgroundColor: "#0e1219" }}
      >
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon1} alt="Image 1" className="img-fluiid mb-5" />
          <h1 className="mb-5">01. {t("h1")}</h1>
          <p className="mb-5">
          {t("carouselp5")} 
          </p>
          <Link to="/AboutUs">{t("h14")} → </Link>
        </div>
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon2} alt="Image 2" className="img-fluiid mb-5" />
          <h1 className="mb-5">02. {t("h11")}</h1>
          <p className="mb-5">
         {t("carouselp6")}
          </p>
          <Link to="/Achievement">{t("h14")} → </Link>
        </div>
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon3} alt="Image 3" className="img-fluiid mb-5" />
          <h1 className="mb-5">03. {t("h12")}</h1>
          <p className="mb-5">
         {t("carouselp7")}
          </p>
          <Link to="/Sections">{t("h14")} → </Link>
        </div>
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center p-4 text-light mb-5 pb-4">
          <img src={icon4} alt="Image 3" className="img-fluiid mb-5" />
          <h1 className="mb-5">04. {t("h13")}</h1>
          <p className="mb-5">
         {t("carouselp8")}
          </p>
          <Link to="/OurVision">{t("h14")} → </Link>
        </div>
      </div>
    </div>
  )
}
