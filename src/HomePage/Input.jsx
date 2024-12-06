// import React from "react";
import "./Input.scss";
import { useTranslation } from "react-i18next";
import React, { useRef } from "react";

export default function Input() {
  const { t } = useTranslation();
   // تعريف المراجع لجميع الحقول
   const nameRef = useRef();
   const emailRef = useRef();
   const phoneRef = useRef();
   const messageRef = useRef();
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
     // الحصول على البيانات المدخلة باستخدام المراجع
     const name = nameRef.current.value;
     const email = emailRef.current.value;
     const phone = phoneRef.current.value;
     const message = messageRef.current.value;
 
     // إرسال البيانات إلى WhatsApp فقط
     const whatsappUrl = `https://api.whatsapp.com/send?phone=+201026194164&text=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
     
     // فتح نافذة WhatsApp مع البيانات المدخلة
     window.open(whatsappUrl, "_blank");
   };
  return (
    <div className="section251 col-12  ">
      <div className="section1content col-12 container d-flex flex-wrap">
        <div className="col-12 col-md-6 p-3">
          <span>
            <h5 className="mb-3">{t("span2")}</h5>
          </span>
          <h2 className=" mb-5 ">{t("h36")}</h2>
          <p
            style={{ fontSize: "25px", fontWeight: "500", lineHeight: "1.7" }}
            className=" pb-3"
          >
            {t("carouselp27")}
          </p>
          <p>{t("carouselp28")}</p>
        </div>
        <form className="form col-12 col-md-6 d-flex flex-column gap-3 p-3"  onSubmit={handleSubmit}>
          <input type="text" ref={nameRef} placeholder="Name" required />
          <input type="email" ref={emailRef} placeholder="Email" required />
          <input type="text" ref={phoneRef} placeholder="Phone" required />
          <textarea
            ref={messageRef}
            placeholder="Enter Message"
            required
          ></textarea>
          <button className="col-7 col-md-6 col-lg-4">{t("button3")}</button>
        </form>
      </div>
    </div>
  );
}
