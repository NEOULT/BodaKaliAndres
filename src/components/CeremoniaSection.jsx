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
        <div className="ceremonia-place">Iglesia cristiana<br />evangélica pentecostal <br /> de la Cruz</div>
        <div className="ceremonia-time-row">
          <img src="img/landing/reloj.png" alt="Hora" className="ceremonia-clock" />
          <span className="ceremonia-time">6:00PM</span>
        </div>
<button
  className="ceremonia-btn"
  onClick={() =>
    window.open(
      "https://maps.app.goo.gl/jvpuP9JuAeHWq6cS6",
      "_blank",
      "noopener,noreferrer"
    )
  }
>
  CÓMO LLEGAR
</button>



      </div>
    </LandingSection>
  );
}
