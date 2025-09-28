import React from "react";
import "./Landing.css";
import LandingHero from "../components/LandingHero";
import LandingSection from "../components/LandingSection";
import DecorFlor from "../components/DecorFlor";
import ThemedText from "../components/shared/ThemedText";
import CountdownSection from "../components/CountdownSection";
import DressCodeSection from "../components/DressCodeSection";
import NormasSection from "../components/NormasSection";
import TeEsperamosSection from "../components/TeEsperamosSection";
import CeremoniaSection from "../components/CeremoniaSection";
import RecepcionSection from "../components/RecepcionSection";
import NinosSection from "../components/NinosSection";
import SobreRecepcionSection from "../components/SobreRecepcionSection";
import MenuSection from "../components/MenuSection";
import ConfirmacionSection from "../components/ConfirmacionSection";


export default function Landing() {
  return (
    <div className="landing-page">
      <LandingHero />
      {/* <DecorFlor src="/img/landing/flor2.png" className="flor-izquierda" /> */}
      
      <LandingSection>
        <h2 className="landing-title">UNA PROMESA...</h2>
        <p className="landing-main-text">El Señor mismo marchará al frente de ti y estará contigo; nunca te dejará ni te abandonará. No temas ni te desanimes</p>
        <p className="landing-verse">DEUTERONOMIO 31:8</p>
      </LandingSection>
      
      <LandingSection>
        <h2 className="landing-title">...DOS VIDAS</h2>
        <p className="landing-main-text">Unidas por nuestro buen Dios<br />para escribir una</p>
        <p className="landing-history">NUEVA HISTORIA</p>
      </LandingSection>

      <LandingSection>
        <ThemedText variant="title" style={{ marginBottom: 12, fontSize: '30px' }}>
          NUESTRA BODA
        </ThemedText>
        <div className="nombres-boda">
          <ThemedText variant="names" className="nombre-andres">
            Andrés
          </ThemedText>
          <ThemedText variant="ampersand" className="ampersand">
            &amp;
          </ThemedText>
          <ThemedText variant="names" className="nombre-kaliana">
            Kaliana
          </ThemedText>
        </div>
      </LandingSection>

      <LandingSection>
        <CountdownSection />
      </LandingSection>

      <TeEsperamosSection />

      <CeremoniaSection />

      <DressCodeSection />

      <NormasSection />

      <LandingSection>
        <img 
        style={{ maxWidth: '110%', height: 'auto' }}
        src="/img/landing/imagen_intermedia.png" alt="Celebración" className="celebracion-img" />
      </LandingSection>
      
      <RecepcionSection />
      <NinosSection />
      <SobreRecepcionSection />
  <MenuSection />
  <ConfirmacionSection />
      {/* <DecorFlor src="/img/landing/flor1.png" className="flor-derecha" /> */}
      
    </div>
  );
}