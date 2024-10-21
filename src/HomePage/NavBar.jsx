import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css'
import logo from "./volenti-logo3.png"; // استيراد شعار



export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <div className='col-12'>
           {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg ${
          isScrolled ? "scrolled" : "transparent-navbar"
        } fixed-top col-12`}
      >
        <div className="container">
          <a className="navbar-brand col-3" href="#">
            <img src={logo} alt="Law Firm Logo" style={{ height: "40px" }} />
          </a>
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
              {/* روابط النافبار */}
              <li className="nav-item d-none d-lg-block m-2">
                <a className="nav-linkss" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
                <a className="nav-linkss" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
                <a className="nav-linkss" href="#services">
                  Help You
                </a>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
                <a className="nav-linkss" href="#vision">
                  Our Vision
                </a>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
                <a className="nav-linkss" href="#articles">
                Our Practice Areas
                </a>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
                <a className="nav-linkss" href="#achievements">
                  Achievements
                </a>
              </li>
              <li className="nav-item d-none d-lg-block m-2">
                <a className="nav-linkss" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* رابط "Your Service" للشاشات الأكبر من 992px */}
          <div className="d-none d-lg-block">
            <a
              className="btn btn-outline-secondary border-danger-subtle text-light"
              href="#services"
            >
              Your Service
            </a>
          </div>
        </div>
      </nav>

      {/* Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Navigation
          </h5>
          <button
            type="button"
            className="btn-close text-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close "
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-linkss active" aria-current="page" href="#home">
                Home +
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-linkss" href="#about">
                About Us +
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-linkss" href="#help">
                Help You +
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-linkss" href="#vision">
                Our Vision +
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-linkss" href="#articles">
              Our Practice Areas +
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-linkss" href="#achievements">
                Achievements +
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-linkss" href="#contact">
                Contact +
              </a>
            </li>
            {/* رابط "Your Service" للشاشات الأصغر من 992px */}
            <li className="nav-item d-lg-none">
              <a
                className="btn btn-outline-info border border-danger-subtle nav-link border-danger-subtle"
                href="#services"
              >
                Your Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
