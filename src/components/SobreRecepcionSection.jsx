import React from "react";
import LandingSection from "./LandingSection";
import ThemedText from "./shared/ThemedText";
import "./SobreRecepcionSection.css";

export default function SobreRecepcionSection() {
  return (
    <LandingSection>
      <div className="sobre-recepcion-section">
        <ThemedText variant="title" style={{ fontFamily: 'GildaDisplay, serif', color: '#7C2323', fontSize: '2.1rem', textAlign: 'center', letterSpacing: '0.12em', marginBottom: 18 }}>
          SOBRE LA<br />RECEPCIÓN
        </ThemedText>
        <div className="sobre-recepcion-text">
          <p>Para facilitar la logística y mantener la armonía del momento, hemos acordado que:</p>
          <p style={{ fontWeight: 700, color: '#683B06', margin: '18px 0 0 0' }}>
            Cada invitado cubrirá el costo de su plato directamente en el restaurante.
            <span style={{ fontWeight: 400 }}>
              &nbsp;La modalidad será <span style={{ fontWeight: 700 }}>una sola cuenta por mesa</span>, por lo que agradecemos que puedan coordinar entre los integrantes de su mesa al momento de realizar el pago.
            </span>
          </p>
          <p>Este gesto nos permite enfocarnos en lo más importante: celebrar juntos el amor, la fe y la alegría de este nuevo comienzo.</p>
          <p>Gracias por comprender y acompañarnos con el corazón abierto.</p>
        </div>
      </div>
    </LandingSection>
  );
}
