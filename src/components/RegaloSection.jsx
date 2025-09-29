import React from "react";
import LandingSection from "./LandingSection";
import ThemedText from "./shared/ThemedText";
import "./RegaloSection.css";

export default function RegaloSection() {
  return (
    <LandingSection>
      <div className="regalo-section">
        <ThemedText variant="title" style={{ fontFamily: 'GildaDisplay, serif', color: '#7C2323', fontSize: '1.6rem', textAlign: 'center', letterSpacing: '0.12em', marginBottom: 0 }}>
          ¿QUIERES DARNOS 
        </ThemedText>
        <span style={{ fontFamily: 'Slight', color: '#B1732A', fontSize: '2.2rem', fontWeight: 400, top: '-20px', position: 'relative' }}>un regalo?</span>
        <ThemedText variant="default" style={{ fontFamily: 'Poppins, sans-serif', color: '#683B06', fontSize: '1.15rem', textAlign: 'center', margin: '18px 0 18px 0', maxWidth: 420 }}>
          Tu presencia será el mejor regalo, pero si deseas obsequiarnos algo más, aquí te dejamos estas opciones:
        </ThemedText>
  <img src="/webp/logo_regalos.webp" alt="Sobre regalo" className="regalo-img" />
        <ThemedText variant="title" style={{ fontFamily: 'GildaDisplay, serif', color: '#7C2323', fontSize: '1.5rem', textAlign: 'center', letterSpacing: '0.12em', margin: '18px 0 0 0' }}>
          LLUVIA DE SOBRES
        </ThemedText>
        <ThemedText variant="default" style={{ fontFamily: 'Poppins, sans-serif', color: '#683B06', fontSize: '1.1rem', textAlign: 'center', margin: '8px 0 18px 0' }}>
          El día del evento
        </ThemedText>
        <div className="regalo-opciones">
          <div className="regalo-opcion">
            <span className="regalo-opcion-titulo">PAGO MÓVIL</span>
            <span>Kaliana Camarillo</span>
            <div>Mercantil</div>
            <div>28.467.720</div>
            <div>04143614530</div>
          </div>
          <div className="regalo-opcion">
            <span className="regalo-opcion-titulo">BINANCE</span>
            <span>andrespagonca@gmail.com</span>
          </div>
          <div className="regalo-opcion">
            <span className="regalo-opcion-titulo">ZELLE</span>
            <div>molerorosillo@gmail.com</div>
            <div>Marco Molero</div>
          </div>
        </div>
      </div>
    </LandingSection>
  );
}
