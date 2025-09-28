import React from "react";
import LandingSection from "./LandingSection";
import ThemedText from "./shared/ThemedText";
import "./RecepcionSection.css";

export default function RecepcionSection() {
  return (
    <LandingSection>
      <div className="recepcion-section">
        <img src="/img/landing/logo_recepción.png" alt="Copas brindis" className="recepcion-img" />
        <ThemedText variant="title" style={{ fontFamily: 'GildaDisplay, serif', color: '#7C2323', fontSize: '2.1rem', textAlign: 'center', letterSpacing: '0.12em', marginBottom: 12 }}>
          RECEPCIÓN
        </ThemedText>
        <ThemedText variant="subtitle" style={{ fontFamily: 'Poppins, sans-serif', color: '#B1732A', fontSize: '1.25rem', textAlign: 'center', fontWeight: 700, marginBottom: 2, letterSpacing: '5px' }}>
          PICAÑA GRILL
        </ThemedText>
        <ThemedText variant="default" style={{ fontFamily: 'Poppins, sans-serif', color: '#B1732A', fontSize: '1.25rem', textAlign: 'center', marginBottom: 12, letterSpacing: '5px' }}>
          CALLE 73 C / AV 16A
        </ThemedText>
        <div className="recepcion-hora-row">
          <img src="/img/landing/reloj.png" alt="Hora" className="recepcion-clock" />
          <span className="recepcion-hora" style={{ fontFamily: 'NekaLaurent', color: '#B1732A', fontWeight: 400, fontSize: '2rem', marginLeft: 8, letterSpacing: '0.04em' }}>8:30PM</span>
        </div>
        <button className="recepcion-btn" onClick={() => window.open("https://www.google.com/maps/place/Pica%C3%B1a+Grill+Maracaibo/@10.6661073,-71.6234789,18.78z/data=!4m6!3m5!1s0x8e89991ef4a3412d:0x66400b5b3d636ad7!8m2!3d10.6665554!4d-71.6231384!16s%2Fg%2F1ptw2f53b?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D", "_blank", "noopener,noreferrer") }>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', color: 'white', letterSpacing: '0.04em' }}>
            CÓMO LLEGAR
          </span>
        </button>
      </div>
    </LandingSection>
  );
}
