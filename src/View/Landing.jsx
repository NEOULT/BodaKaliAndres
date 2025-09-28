import React from "react";
import "./Landing.css";
import LandingHero from "../components/LandingHero";
import LandingSection from "../components/LandingSection";
import DecorFlor from "../components/DecorFlor";
import ThemedText from "../components/shared/ThemedText";
import CountdownSection from "../components/CountdownSection";
import TeEsperamosSection from "../components/TeEsperamosSection";
import CeremoniaSection from "../components/CeremoniaSection";
import ModalNormas from "../components/ModalNormas";
import ModalMenu from "../components/ModalMenu";
import { useState } from "react";

export default function Landing() {

  const [isModalNormasOpen, setModalNormasOpen] = useState(false);
  const [isModalMenuOpen, setModalMenuOpen] = useState(false);

  return (
    <div className="landing-page">
      <button onClick={() => setModalMenuOpen(true)}>
        Abrir Modal
      </button>
      <LandingHero />
      {/* <DecorFlor src="/img/landing/flor2.png" className="flor-izquierda" /> */}
      <ModalMenu isModalOpen={isModalMenuOpen} setIsModalOpen={setModalMenuOpen} />
      <ModalNormas isModalOpen={isModalNormasOpen} setIsModalOpen={setModalNormasOpen} />
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
      
      {/* <DecorFlor src="/img/landing/flor1.png" className="flor-derecha" /> */}
      
    </div>
  );
}