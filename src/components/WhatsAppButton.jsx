import React from "react";

export default function WhatsAppButton({
  phone = "+918796951483",
  message = "Hi, I am interested in your plots.",
}) {
  const url = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
  return (
    <a
      className="whatsapp-fab no-print"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true" />
    </a>
  );
}
