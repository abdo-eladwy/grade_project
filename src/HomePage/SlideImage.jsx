import "bootstrap/dist/css/bootstrap.min.css";
import './SlideImage.css'
import slider1 from "./slider-3.jpg"; 
import slider2 from "./slider-2.jpg"; 
import slider3 from "./slider-1.jpg"; 
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function SlideImage() {
  const { t } = useTranslation();
  return (
    <div className="col-12 d-flex">
      <div>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={slider3} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white mb-3">{t("carouselh2")}</h2>
                <p className=" mb-4" style={{lineHeight:'30px'}}>
                    {t("carouselp1")}
                </p>
                <Link className="btn btn-outline-light" to="/AboutUs">
                 {t("carouselp2")}
                </Link>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={slider2} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white mb-3">{t("carouselh3")}</h2>
                <p style={{lineHeight:'30px'}} className=" mb-4">
                  {t("carouselp3")}
                </p>
                <Link className="btn btn-outline-light" to="/AboutUs">
                {t("carouselp2")}
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slider1} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white">{t("carouselh4")}</h2>
                <p style={{lineHeight:'30px'}}>
                  {t("carouselp4")}
                 </p>
                <Link className="btn btn-outline-light" to="/AboutUs">
                {t("carouselp2")}
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
