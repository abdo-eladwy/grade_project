import "bootstrap/dist/css/bootstrap.min.css";
import './Cards.css'

import img3 from "./practice-icon-1.png";
import img4 from "./practice-icon-2.png";
import img5 from "./practice-icon-3.png";
import img6 from "./practice-icon-4.png";
import img7 from "./practice-icon-5.png";
import img8 from "./practice-icon-6.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Cards() {
  const { t } = useTranslation();

  return (
    <div> 
          <div className="cards col-12 pb-5">
        <div className="p-4 col-12 d-flex flex-column justify-content-center align-content-center align-items-center mt-5">
          <h6 style={{fontSize:'16px',fontWeight:'600'}}>{t("h21")} </h6>
          <h2 style={{fontSize:'48px',fontWeight:'700'}} className="pb-4">{t("h22")} </h2>
        </div>
        <div className="  col-12 d-flex  flex-wrap justify-content-center align-content-center align-items-center g-5 text-center">
          <div className="card1 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3 d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
            <img className=" pb-3" src={img3} alt="" />
            <h6 style={{fontSize:'16px',fontWeight:'400'}}>{t("h64")} </h6>
            <h1 style={{fontWeight:'700'}} className=" pb-1">{t("h23")} </h1>
            <p className=" pb-3">{t("carouselp17")}</p>
            <Link to="/BusinessLitigation" className="mb-4">{t("h14")} → </Link>
          </div>
          <div className="card1 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
            <img className=" pb-3" src={img4} alt="" />
            <h6 style={{fontSize:'16px',fontWeight:'400'}}>{t("h65")} </h6>
            <h1  style={{fontWeight:'700'}} className=" pb-1">{t("h24")}</h1>
            <p className=" pb-3">{t("carouselp18")}</p>
            <Link to="/RealEstate" className="mb-4">{t("h14")} →  </Link>
          </div>
          <div className="card1 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
            <img className=" pb-3" src={img5} alt="" />
            <h6 style={{fontSize:'16px',fontWeight:'400'}}>{t("h66")}</h6>
            <h1 style={{fontWeight:'700'}} className=" pb-1">{t("h25")}</h1>
            <p className=" pb-3">{t("carouselp19")}</p>
            <Link to="/InsuranceCoverage" className="mb-4">{t("h14")} → </Link>
          </div>
          <div className="card1 col-3 col-11 container col-md-5 col-lg-3 m-3   p-3 d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
            <img className=" pb-3" src={img6} alt="" />
            <h6 style={{fontSize:'16px',fontWeight:'400'}}>{t("h67")}</h6>
            <h1 style={{fontWeight:'700'}}  className=" pb-1">{t("h26")}</h1>
            <p className=" pb-3">{t("carouselp20")}</p>
            <Link to="/MedicalMalpractice" className="mb-4">{t("h14")} → </Link>
          </div>
          <div className="card1 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
            <img className=" pb-3" src={img8} alt="" />
            <h6 style={{fontSize:'16px',fontWeight:'400'}}>{t("h67")}</h6>
            <h1 style={{fontWeight:'700'}} className=" pb-1">{t("h27")} </h1>
            <p className=" pb-3">{t('carouselp21')}</p>
            <Link to="/FamilyLaw" className="mb-4">{t("h14")} →  </Link>
          </div>
          <div className="card1 col-3 col-11 container col-md-5 col-lg-3 m-3  p-3  d-flex flex-column justify-content-center align-content-center align-items-center g-4 text-center">
            <img className=" pb-3" src={img7} alt="" />
            <h6 style={{fontSize:'16px',fontWeight:'400'}}>{t("h68")}</h6>
            <h1 style={{fontWeight:'700'}} className=" pb-1">{t("h28")}</h1>
            <p className=" pb-3">{t("carouselp22")}</p>
            <Link to="/InjuryLitigation" className="mb-4">{t("h14")} →  </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
