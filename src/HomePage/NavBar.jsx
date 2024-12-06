import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import logo from "./volenti-logo3.png";
import { Link, NavLink } from "react-router-dom";




import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";



export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseOffcanvas = () => {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (offcanvas) offcanvas.hide();
  };

  const { i18n, t } = useTranslation();

  // وظيفة تبديل اللغة
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };



  return (
    <div className="col-12 d-flex">
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : "transparent-navbar"} fixed-top col-12`}
      >
        <div className="container ">
          <Link className="navbar-brand col-3" to="/">
            <img src={logo} alt="Law Firm Logo" style={{ height: "40px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              {/* Navbar links */}
              <li className="nav-item d-none d-lg-block m-2">
              <Link className="nav-link" style={{fontSize:'1.0rem'}} to="/">{t("home")}</Link>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
              <Link className="nav-link" style={{fontSize:'1.0rem'}}  to="/AboutUs">{t("about")}</Link>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
              <Link className="nav-link" style={{fontSize:'1.0rem'}}  to="/OurVision">{t("vision")}</Link>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
              <Link className="nav-link" style={{fontSize:'1.0rem'}}  to="/Sections">{t("areas")}</Link>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
              <Link className="nav-link" style={{fontSize:'1.0rem'}}  to="/Achievement">{t("achievements")}</Link>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
                {/* <a className="nav-link" style={{fontSize:'1.2rem'}} href="#services">English</a> */}
                <button className="nav-link" style={{fontSize:'1.0rem'}} onClick={toggleLanguage}>
                  {i18n.language === "en" ? "عربي":"English" }
                </button>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
              <Link className="nav-link " style={{fontSize:'1.0rem'}}  to="/Contact">{t("contact")}</Link>
              </li>
            </ul>
          </div>
          {/* Link for larger screens */}
          <div className="d-none d-lg-block">
          <button className="btn btn-outline-secondary border-danger-subtle text-light p-2" href="#services">Our Service</button>
          </div>
        </div>
      </nav>

      {/* Offcanvas Menu */}
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
          <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleCloseOffcanvas}>Home +</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs" onClick={handleCloseOffcanvas}>About Us +</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={handleCloseOffcanvas}>Help You +</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OurVision" onClick={handleCloseOffcanvas}>Our Vision +</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sections" onClick={handleCloseOffcanvas}>Articles +</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Achievement" onClick={handleCloseOffcanvas}>Achievements +</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" onClick={handleCloseOffcanvas}>Contact +</Link>
            </li>
            {/* Link for small screens */}
            <li className="nav-item d-lg-none">
              <a className="btn btn-outline-info border border-danger-subtle nav-link" href="#services" onClick={handleCloseOffcanvas}>Your Service</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}




