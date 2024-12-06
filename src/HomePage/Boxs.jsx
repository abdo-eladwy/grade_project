import "bootstrap/dist/css/bootstrap.min.css";
import "./Boxs.css";
import img1 from "./fullscreen.jpg";
import img2 from "./custody-battle.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Boxs() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="boxs col-12 d-flex flex-wrap text-light">
        <img className="box-img col-6" src={img1} alt="" />
        <div className="box-cont col-6  d-flex flex-column justify-content-center align-items-start align-content-center  p-5">
          <h6 className="mb-5">{t("h62")}</h6>
          <h1 className="mb-5 pb-5 " style={{fontSize:'48px', fontWeight:'700'}}>{t("h19")}</h1>
          <p className="mb-3  d-flex flex-wrap">
            {t("carouselp14")}
          </p>
          <p className="mb-5 pb-2 d-flex flex-wrap">
          {t("carouselp15")}
          </p>
          <Link className="" to="/AboutUs">
            <button className="btn btn-outline-light">{t("button1")}</button>
          </Link>
        </div>

        <div className="box-cont col-6  d-flex flex-column justify-content-center align-items-start text-start p-5">
          <h6 className="mb-5">{t("h63")}</h6>
          <h1 className="mb-5 pb-3"style={{fontSize:'48px', fontWeight:'700'}}>{t("h20")} </h1>
          <p className="mb-3 pb-2 d-flex flex-wrap"style={{fontSize:'16px' , fontWeight:'400'}}>
          {t("carouselp16")}
          </p>
          <ul className="list-square mb-5 pb-2">
            <li> {t("li1")}</li>
            <li>{t("li2")} </li>
            <li>{t("li3")} </li>
            <li>{t("li4")}</li>
          </ul>
          <Link className="mb-5 pb" to="/OurVision">
            <button className="btn btn-outline-light">{t("button1")}</button>
          </Link>
        </div>
        <img className="box-img col-6" src={img2} alt="" />
      </div>
    </div>
  );
}
