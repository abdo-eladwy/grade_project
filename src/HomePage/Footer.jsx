import { Link } from "react-router-dom";
import "./Footer.scss";
import { useTranslation }  from"react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer col-12 d-flex align-content-center">
      <div className="footercontent container  d-flex p-0 flex-wrap  ">
        <div className="col-6  col-md-6 col-lg-3 p-3 ">
          <h5 className="text-light">{t("h37")}</h5>
          <p>
           {t("carouselp29")}
          </p>
          <p>
            P: 1-800-111-222 <br /> E:contact@example.com
          </p>
        </div>
        <div className="col-6 col-md-6 col-lg-3 p-3">
          <h5 className="text-light">{t("h38")}</h5>
        
         <ul>
            <li>
              <Link to='/BusinessLitigation'>{t("a1")}</Link>
            </li>
            <li>
              <Link to='/RealEstate'>{t("a2")}</Link>
            </li>
            <li>
              <Link to='/InsuranceCoverage'>{t("a3")}</Link>
            </li>
            <li>
              <Link to='/MedicalMalpractice'>{t("a4")}</Link>
            </li>
            <li>
              <Link to='/InjuryLitigation'>{t("a5")}</Link>
            </li>
          </ul>
         
        </div>
        <div className="col-6 col-md-6 col-lg-3 p-3">
          <h5 className="text-light">{t("h39")}</h5>
          <ul>
            <li>
              <Link to='/Sections'>{t("a6")}</Link>
            </li>
            <li>
              <Link to='/AboutUs'>{t("a7")}</Link>
            </li>
            <li>
              <Link to='/Achievement'>{t("a8")}</Link>
            </li>
            <li>
              <Link to='/OurVision'>{t("a9")}</Link>
            </li>
            <li>
              <Link to='/Contact'>{t("a10")}</Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-6 col-lg-3 p-3">
          <h5 className="text-light">{t("h40")}</h5>

         
         <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Instgram</a>
            </li>
          </ul>
         
        </div>
      </div>
    </div>
  );
}
