import React, { useRef } from "react";
import Swal from "sweetalert2";
import "./Input.scss";
import { useTranslation } from "react-i18next";

export default function Input() {
  const { t } = useTranslation();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;

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

      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      messageRef.current.value = "";
    });
  };

  return (
    <div className="section251 col-12">
      <div className="section1content col-12 container d-flex flex-wrap">
        <div className="col-12 col-md-6 p-3">
          <span>
            <h5 className="mb-3">{t("span2")}</h5>
          </span>
          <h2 className="mb-5">{t("h36")}</h2>
          <p style={{ fontSize: "25px", fontWeight: "500", lineHeight: "1.7" }} className="pb-3">
            {t("carouselp27")}
          </p>
          <p>{t("carouselp28")}</p>
        </div>
        <form className="form col-12 col-md-6 d-flex flex-column gap-3 p-3" onSubmit={handleSubmit}>
          <input type="text" ref={nameRef} placeholder="Name" required />
          <input type="email" ref={emailRef} placeholder="Email" required />
          <input type="tel" ref={phoneRef} placeholder="Phone" required />
          <textarea ref={messageRef} placeholder="Enter Message" required></textarea>
          <button className="col-7 col-md-6 col-lg-4">{t("button3")}</button>
        </form>
      </div>
    </div>
  );
}
