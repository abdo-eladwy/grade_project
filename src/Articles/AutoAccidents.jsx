import React, { useEffect, useRef, useState } from "react";
import "./AutoAccidents.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useTranslation } from "react-i18next";
import img from "./custody-battle-800x550 (1).jpg";
import img1 from "./practice-item-8-800x550.jpg";
import img2 from "./personal-injury-lawyer (1).jpg";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function AutoAccidents() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);

  // Fetch service requests data
  const getProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1337/api/service-requests`,
        {
          params: { populate: "*" },
        }
      );
      setProducts(res.data.data);
    } catch (error) {
      console.error("Error fetching service requests:", error);
      // Swal.fire({
      //   icon: "error",
      //   title: "حدث خطأ في تحميل البيانات",
      //   timer: 2000,
      // });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const emailInput = useRef();
  const phoneInput = useRef();
  const nameInput = useRef();
  const booleanInput = useRef();

  // Handle form submission
  const login = (event) => {
    event.preventDefault();

    const checkboxLabelElement = booleanInput.current.parentElement;
    const checkboxLabel = checkboxLabelElement
      ? checkboxLabelElement.textContent.trim()
      : "";

    const phoneNumber = phoneInput.current.value;
    const phoneRegex = /^(01)[0-9]{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Swal.fire({
        icon: "error",
        title: "رقم الهاتف غير صالح. يرجى إدخال رقم هاتف صحيح.",
        timer: 1500,
      });
      return;
    }

    const formData = {
      user_email: emailInput.current.value,
      user_phone: phoneNumber,
      user_name: nameInput.current.value,
      user_checkbox: booleanInput.current.checked,
      checkbox_text: checkboxLabel,
    };

    axios
      .post(`http://localhost:1337/api/service-requests`, { data: formData })
      .then((res) => {
        console.log(res.data);

        emailInput.current.value = "";
        phoneInput.current.value = "";
        nameInput.current.value = "";
        booleanInput.current.checked = false;

        Swal.fire({
          icon: "success",
          title: "تم إرسال طلبك بنجاح!",
          timer: 1500,
        });

        const whatsappMessage = `
          الاسم: ${formData.user_name}
          البريد الإلكتروني: ${formData.user_email}
          الهاتف: ${formData.user_phone}
          الحالة: ${formData.user_checkbox ? "موافق" : "غير موافق"}
          النص: ${formData.checkbox_text}
        `;

        const whatsappUrl = `https://wa.me/201026194164?text=${encodeURIComponent(
          whatsappMessage
        )}`;
        window.open(whatsappUrl, "_blank");
      })
      .catch((error) => {
        console.error("حدث خطأ أثناء تقديم الطلب:", error);
        Swal.fire({
          icon: "error",
          title: "حدث خطأ أثناء تقديم طلبك. حاول مرة أخرى.",
          timer: 2000,
        });
      });
  };

  return (
    <div>
      <NavBar />
      <div className="col-12 mb-5">
        <div className="OurVision col-12 position-relative">
          <img className="col-12 d-flex" src={img2} alt="" />
          <div className="overlay-color"></div>
          <div className="overlay-text">
            <h1 className="d-flex">{t("carouselp54")}</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid m-2 text-light pt-5">
        <div className="row gap-4 p-4">
          <div className="col-12 col-lg-8 mb-5">
            <div className="img col-12 pb-4">
              <img className="img-fluid" src={img1} alt="" />
            </div>
            <div className="paragraph col-12 pb-2">
              <p className="pb-4">{t("carouselp94")}</p>
              <p className="pb-3">{t("carouselp95")}</p>
              <p className="pb-3">{t("carouselp96")}</p>
            </div>

            <div className="row box mb-5 mt-2">
              <div className="col-12 col-lg-6">
                <img className="img-fluid1" src={img} alt="" />
              </div>
              <div className="col-12 col-lg-6 p-3">
                <h1
                  className="d-flex"
                  style={{
                    fontSize: "45px",
                    fontWeight: "700",
                    color: "rgb(255, 102, 102, 0.7)",
                  }}
                >
                  {t("h90")}
                </h1>
                <p>{t("carouselp73")}</p>
              </div>
            </div>

            <div className="col-12 mb-5 text-center">
              <h1 className="pb-2">{t("h91")}</h1>
              <p>{t("carouselp74")}</p>
            </div>
          </div>

          <div className="col-12 col-lg-3 mt-2 mb-5 pb-4">
            <div className="container3">
              <div className="container4 mb-2 text-center">
                <h1 style={{ color: "rgb(208, 115, 115)" }}>
                  {t("carouselh14")}
                </h1>
                <ul>
                  <li>
                    <Link to="/BusinessLitigation"> ›› {t("h23")}</Link>
                  </li>
                  <li>
                    <Link to="/RealEstate"> ›› {t("a2")}</Link>
                  </li>
                  <li>
                    <Link to="/InsuranceCoverage"> ›› {t("h25")}</Link>
                  </li>
                  <li>
                    <Link to="/MedicalMalpractice"> ›› {t("h26")}</Link>
                  </li>
                  <li>
                    <Link to="/FamilyLaw"> ›› {t("h27")}</Link>
                  </li>
                  <li>
                    <Link to="/InjuryLitigation"> ›› {t("h28")}</Link>
                  </li>
                </ul>
              </div>

              <div className="pb-3 mt-4">
                <form
                  className="borderborderborder border border-1 col-12 col-lg-12 col-md-12 p-3 m-1 rounded-5"
                  onSubmit={login}
                >
                  <div className="d-flex justify-content-center text-center">
                    <h4 className="p-3" style={{ color: "rgb(255, 102, 102)" }}>
                      {t("carouselp100")}
                    </h4>
                  </div>
                  <label htmlFor="input1">
                    <h5 className="p-1" style={{ color: "rgb(255, 102, 100)" }}>
                      {t("carouselp101")} :
                    </h5>
                  </label>
                  <input
                    type="text"
                    id="input1"
                    ref={nameInput}
                    className="form-control rounded-5 text-white"
                    style={{ background: "#121113" }}
                    required
                  />
                  <label htmlFor="input2">
                    <h5 className="p-1" style={{ color: "rgb(255, 102, 100)" }}>
                      {t("carouselp102")} :
                    </h5>
                  </label>
                  <input
                    type="email"
                    id="input2"
                    className="form-control rounded-5 text-white"
                    ref={emailInput}
                    style={{ background: "#121113" }}
                    required
                  />
                  <label htmlFor="input3">
                    <h5 className="p-1" style={{ color: "rgb(255, 102, 100)" }}>
                      {t("carouselp103")} :
                    </h5>
                  </label>
                  <input
                    type="tel"
                    id="input3"
                    ref={phoneInput}
                    className="form-control rounded-5 text-white"
                    style={{ background: "#121113" }}
                    required
                  />
                  <label className="material-checkbox mt-4 mb-4">
                    <input type="checkbox" required ref={booleanInput} />
                    <span className="checkmark"></span>
                    {t("carouselp106")}
                  </label>
                  <div className="button col-12 d-flex container justify-content-center rounded-4">
                    <button className="rounded-5">{t("carouselp105")}</button>
                  </div>
                </form>
              </div>

              <div className="col-12 p-4 mb-7 d-flex flex-wrap justify-content-center rounded-4 align-items-center text-start border m-1">
                <p>{t("carouselp53")}</p>
                <h3>1-800-111-2222</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container5 container col-12 d-flex flex-column justify-content-center text-center mt-4">
          <h1 className="container3h1 p-3">{t("h92")}</h1>
          <p className="container3p pb-5">{t("carouselp75")}</p>
        </div>

        <div className="button col-12 d-flex container justify-content-center  pb-5">
          <Link to="/Contact">
            <button className=" rounded-5">{t("a111")}</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
