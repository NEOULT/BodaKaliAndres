import React from "react";
import LandingSection from "./LandingSection";
import ThemedText from "./shared/ThemedText";
import "./DressCodeSection.css";

export default function DressCodeSection() {
  return (
    <LandingSection>
      <div className="dresscode-section">
        <img src="/img/landing/vestimenta.png" alt="Vestimenta" className="dresscode-img" />
        <ThemedText variant="title" style={{ color: '#731516', fontSize: '1.8rem', fontFamily: 'GildaDisplay, serif', textAlign: 'center' }}>
          DRESS CODE
        </ThemedText>
        <ThemedText variant="subtitle" style={{ fontFamily: 'Gilroy-ExtraBold, sans-serif', color: '#B1732A', letterSpacing: '0.2em', fontWeight: 700, fontSize: '1.3rem', textAlign: 'center', marginBottom: 12, textDecoration: 'underline' }}>
          FORMAL
        </ThemedText>
        <ThemedText variant="subtitle" style={{ fontFamily: 'Gilroy-ExtraBold, sans-serif', color: '#683B06', fontWeight: 800, fontSize: '1.1rem', textAlign: 'center', marginTop: 18 }}>
          COLORES NO ADMITIDOS:
        </ThemedText>
        <ThemedText variant="default" style={{ fontFamily: 'Gilroy-ExtraBold, sans-serif', color: '#683B06', fontWeight: 400, fontSize: '1.1rem', textAlign: 'center', marginTop: 4 }}>
          BEIGE, BLANCO, VINOTINTO, ROJO Y DORADO
        </ThemedText>
      </div>
    </LandingSection>
  );
}
