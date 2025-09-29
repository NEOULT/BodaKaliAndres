import React from "react";
import LandingSection from "./LandingSection";
import ThemedText from "./shared/ThemedText";
import "./NinosSection.css";

export default function NinosSection() {
  return (
    <LandingSection>
      <div className="ninos-section">
        <ThemedText variant="title" style={{ fontFamily: 'GildaDisplay, serif', color: '#B1732A', fontSize: '1.8rem', textAlign: 'center', letterSpacing: '0.12em', marginBottom: 18 }}>
          NIÑOS,<br />DULCES SUEÑOS
        </ThemedText>
        <ThemedText variant="default" style={{ fontFamily: 'Poppins, sans-serif', color: '#683B06', fontSize: '1.35rem', textAlign: 'center', maxWidth: 600, margin: '0 auto', letterSpacing: '0.04em', lineHeight: 1.4 }}>
          Amamos a los niños, pero debido al espacio disponible, la recepción está pensada para que solo los adultos disfruten de la fiesta
        </ThemedText>
      </div>
    </LandingSection>
  );
}
