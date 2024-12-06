import React from "react";
import "./WhatsAppButton.scss";
import whatsappIcon from "./WhatsApp-Logo-Circle-768x768.png"; // تأكد من مسار الصورة

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+201026194164"; // رقم الهاتف بصيغة الدولة
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-button "  onClick={handleWhatsAppClick}>
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </div>
  );
}
