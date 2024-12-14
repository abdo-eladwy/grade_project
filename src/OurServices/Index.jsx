import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { useTranslation } from "react-i18next";
import "./Index.css";
import img1 from "./download.jpg";
import img2 from "./download.jpg";
import img3 from "./download.jpg";
import img4 from "./download.jpg"; // إضافة صورة إضافية للعرض

export default function ServicesList() {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);

  const fetchServices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/service-requests",
        {
          params: { populate: "*" },
        }
      );
      setServices(response.data.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // إعداد التمرير التلقائي
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1.5) % 9); // تحديث الفهرس للتمرير بمقدار بطاقة ونصف
    }, 3000); // التمرير كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, []);

  const scrollItems = [
    { img: img1, title: "عنوان الكارد 1", text: "نص توضيحي 1" },
    { img: img2, title: "عنوان الكارد 2", text: "نص توضيحي 2" },
    { img: img3, title: "عنوان الكارد 3", text: "نص توضيحي 3" },
    { img: img4, title: "عنوان الكارد 4", text: "نص توضيحي 4" },
    { img: img1, title: "عنوان الكارد 5", text: "نص توضيحي 5" },
    { img: img2, title: "عنوان الكارد 6", text: "نص توضيحي 6" },
    { img: img3, title: "عنوان الكارد 7", text: "نص توضيحي 7" },
    { img: img4, title: "عنوان الكارد 8", text: "نص توضيحي 8" },
    { img: img1, title: "عنوان الكارد 9", text: "نص توضيحي 9" },
  ];

  return (
    <div>
      <NavBar />
      <div className="container-fluid text-light pt-5">
        <div className="row p-4">
          <div className="col-12 mb-5 text-center">
            <h1 className="pb-2" style={{ color: "rgb(255, 102, 102)" }}>
              خدمات مكتب المحاماة
            </h1>
            <p>هنا تجد كافة الطلبات المقدمة عبر نموذج الحجز.</p>
          </div>

          {services.map((el, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card service-card h-100">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                    {el.user_name || "غير متاح"}
                  </h5>
                  <p className="card-text">
                    <strong>الإيميل:</strong> {el.user_email || "غير متاح"}
                  </p>
                  <p className="card-text">
                    <strong>التليفون:</strong> {el.user_phone || "غير متاح"}
                  </p>
                  <p className="card-text">
                    <strong>الخدمة:</strong> {el.checkbox_text || "غير متاح"}
                  </p>
                  <p className="card-text">
                    <strong>ملاحظات إضافية:</strong>{" "}
                    {el.notes || "لا توجد ملاحظات"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-12 mb-5 text-center">
          <h2 className="pb-2" style={{ color: "rgb(255, 102, 102)" }}>
            فريق العمل
          </h2>
          <div className="row gap-1 p-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card team-card h-100">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                    المحامي أحمد سعيد
                  </h5>
                  <p className="card-text">
                    مختص في القضايا الجنائية والمدنية.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card team-card h-100">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                    المحامية سارة علي
                  </h5>
                  <p className="card-text">متخصصة في قضايا الأسرة والعقود.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card team-card h-100">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                    المحامية سارة علي
                  </h5>
                  <p className="card-text">متخصصة في قضايا الأسرة والعقود.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-container mb-5">
          <div
            className="scroll-content"
            style={{
              transform: `translateX(calc(-${scrollIndex} * 100% / 4.5))`,
            }}
          >
            {scrollItems.map((item, index) => (
              <div key={index} className="scroll-item">
                <img
                  src={item.img}
                  alt={`Slide ${index + 1}`}
                  className="img-fluid"
                />
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 mb-5 text-center">
          <h2 className="pb-2" style={{ color: "rgb(255, 102, 102)" }}>
            خدمات إضافية
          </h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card extra-service-card h-100">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                    الاستشارات القانونية
                  </h5>
                  <p className="card-text">
                    نقدم استشارات قانونية متخصصة في مختلف المجالات.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card extra-service-card h-100">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                    التمثيل القانوني
                  </h5>
                  <p className="card-text">
                    نقوم بتمثيل عملائنا في مختلف القضايا القانونية.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card extra-service-card h-100">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "rgb(208, 115, 115)" }}
                  >
                    إعداد العقود
                  </h5>
                  <p className="card-text">
                    نساعدك في إعداد ومراجعة العقود القانونية بشكل دقيق.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mb-5 text-center">
          <h2 className="pb-2" style={{ color: "rgb(255, 102, 102)" }}>
            اتصل بنا
          </h2>
          <p>
            <strong>العنوان:</strong> شارع المحاماة، المدينة، الدولة
            <br />
            <strong>البريد الإلكتروني:</strong> info@example.com
            <br />
            <strong>الهاتف:</strong> 123-456-7890
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
