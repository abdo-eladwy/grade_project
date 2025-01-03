import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Contact1.scss";
import { useTranslation } from "react-i18next";

export default function Contact1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const phoneRegex = /^(\+20|0)?1[0125][0-9]{8}$/; 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!phoneRegex.test(phone)) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'برجاء إدخال رقم هاتف مصري صالح.'
      });
      return;
    }

    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'برجاء إدخال بريد إلكتروني صالح.'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'شكرا',
      text: 'شكرا على مشاركتنا قضيتك. سيتم نقلك إلى WhatsApp.',
      showConfirmButton: true
    }).then(() => {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=+201026194164&text=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

      window.open(whatsappUrl, "_blank");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    });
  };

  return (
    <div className="col-12 justify-content-center align-content-center p-3 pt-5 pb-5 text-light">
      <div className="col-12 container d-flex flex-wrap p-0">
        <div className="col-12 col-lg-6 part1 d-flex flex-column gap-4">
          <div className="part1-1">
            <span>{t("a111")}</span>
            <h2>{t("h89")}</h2>
          </div>
          <p className="part1-2 lh-lg">
            {t("carouselp69")}
          </p>
          <div className="part1-3 d-flex flex-column flex-md-row justify-content-between pt-md-3 pb-md-3">
            <div className="">
              <a href="#" className="link">
                {t("a22")}
              </a>
              <h2>1-800-111-222</h2>
            </div>
            <div className="pt-3 pt-md-0">
              <a href="#" className="link">
                {t("a23")}
              </a>
              <h2>contact@example.com</h2>
            </div>
          </div>
          <div className="part1-4 d-flex flex-column flex-md-row justify-content-between pb-md-5 pt-md-5">
            <div>
              <span>{t("a24")}</span>
              <h2>
                40 Park Ave,
                <br />
                New York 70250
              </h2>
            </div>
            <div className="pt-3 pt-md-0">
              <span>{t("a25")}</span>
              <h2>
                Mon-Sat: 10AM to 6PM <br />
                Sn: Closed
              </h2>
            </div>
          </div>
        </div>

        <form className="col-12 col-lg-6 part2 d-flex flex-column p-lg-4 gap-5 pt-5 pt-md-0" onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter Message" required />
          <button className="col-7 col-md-6 col-lg-6 m-md-auto m-0 m-lg-0 butt">{t("button3")}</button>
        </form>
      </div>
    </div>
  );
}
