import React from "react";
import LandingSection from "./LandingSection";
import "./CeremoniaSection.css";

// Asegúrate de tener los íconos en tu carpeta public o assets
// Ejemplo: /public/ceremonia-icon.png y /public/clock-icon.png

export default function CeremoniaSection() {
  return (
    <LandingSection>
      <div className="ceremonia-section">
        <img src="img/landing/logo_iglesia.png" alt="Ceremonia" className="ceremonia-icon" />
        <div className="ceremonia-title">CEREMONIA</div>
        <div className="ceremonia-place">Iglesia cristiana evangélica pentecostal de la Cruz</div>
        <div className="ceremonia-time-row">
          <img src="img/landing/reloj.png" alt="Hora" className="ceremonia-clock" />
          <span className="ceremonia-time">6:00PM</span>
        </div>
<button
  className="ceremonia-btn"
  onClick={() =>
    window.open(
      "https://www.google.com/maps/place/Iglesia+Cristiana+Evang%C3%A9lica+Pentecostal+De+La+Cruz/@10.6461483,-71.6182734,17z",
      "_blank",
      "noopener,noreferrer"
    )
  }
>
  Ver ubicación
</button>



      </div>
    </LandingSection>
  );
}
