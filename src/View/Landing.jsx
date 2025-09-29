import React from "react";
import "./Landing.css";
import LandingHero from "../components/LandingHero";
import LandingSection from "../components/LandingSection";
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
import FotosSection from "../components/FotosSection";
import RegaloSection from "../components/RegaloSection";
import TeEsperamosFinalSection from "../components/TeEsperamosFinalSection";
import FadeInOnScroll from "../components/FadeInOnScroll";
import { useState } from "react";
import ModalMenu from "../components/ModalMenu";

export default function Landing() {

  const [isModalMenuOpen, setModalMenuOpen] = useState(false);

  // Obtener el parámetro r de la URL
  const searchParams = new URLSearchParams(window.location.search);
  const reserva = searchParams.get('r');
  const showReserva = reserva !== 'false';

  return (
    <div className="landing-page">
      <FadeInOnScroll>
        <LandingHero />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <LandingSection>
          <h2 className="landing-title">UNA PROMESA...</h2>
          <p className="landing-main-text">El Señor mismo marchará al frente de ti y estará contigo; nunca te dejará ni te abandonará. No temas ni te desanimes</p>
          <p className="landing-verse">DEUTERONOMIO 31:8</p>
        </LandingSection>
      </FadeInOnScroll>

      <FadeInOnScroll delay={100}>
        <LandingSection>
          <h2 className="landing-title">...DOS VIDAS</h2>
          <p className="landing-main-text">Unidas por nuestro buen Dios<br />para escribir una</p>
          <p className="landing-history">NUEVA HISTORIA</p>
        </LandingSection>
      </FadeInOnScroll>

      <FadeInOnScroll delay={200}>
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
      </FadeInOnScroll>

      <FadeInOnScroll delay={300}>
        <LandingSection>
          <CountdownSection />
        </LandingSection>
      </FadeInOnScroll>

      <FadeInOnScroll delay={400}>
        <TeEsperamosSection />
      </FadeInOnScroll>

      <FadeInOnScroll delay={500}>
        <CeremoniaSection />
      </FadeInOnScroll>

      <FadeInOnScroll delay={600}>
        <DressCodeSection />
      </FadeInOnScroll>

      <FadeInOnScroll delay={700}>
        <NormasSection />
      </FadeInOnScroll>

      <FadeInOnScroll delay={800}>
        <LandingSection>
          <img 
            style={{ maxWidth: '110%', height: 'auto' }}
            src="/webp/imagen_intermedia.webp" alt="Celebración" className="celebracion-img" />
        </LandingSection>
      </FadeInOnScroll>

      <FadeInOnScroll delay={1000}>
        <NinosSection />
      </FadeInOnScroll>

      {showReserva && (
        <>
          <FadeInOnScroll delay={900}>
            <RecepcionSection />
          </FadeInOnScroll>
          <FadeInOnScroll delay={1100}>
            <SobreRecepcionSection />
          </FadeInOnScroll>
          <FadeInOnScroll delay={1200}>
            <MenuSection setModalMenuOpen={setModalMenuOpen} />
          </FadeInOnScroll>
        </>
      )}
      <ModalMenu isModalOpen={isModalMenuOpen} setIsModalOpen={setModalMenuOpen} />
      <div style={{ marginTop: '120px' }}>
        <FadeInOnScroll delay={1300}>
          <div style={{ marginTop: '-90px' }}>
            <ConfirmacionSection />
          </div>
        </FadeInOnScroll>
      </div>
      

      <FadeInOnScroll delay={1400}>
        <FotosSection />
      </FadeInOnScroll>

      <FadeInOnScroll delay={1500}>
        <RegaloSection />
      </FadeInOnScroll>

      <FadeInOnScroll delay={1600}>
        <TeEsperamosFinalSection />
      </FadeInOnScroll>
      
    </div>
  );
}