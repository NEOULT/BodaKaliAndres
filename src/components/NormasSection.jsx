import React from "react";
import LandingSection from "./LandingSection";
import ThemedText from "./shared/ThemedText";
import "./NormasSection.css";
import ModalNormas from "./ModalNormas";
import { useState } from "react";

export default function NormasSection() {

  const [isModalNormasOpen, setModalNormasOpen] = useState(false);
  return (
    <LandingSection>
      <ModalNormas isModalOpen={isModalNormasOpen} setIsModalOpen={setModalNormasOpen} />
      <div className="normas-section">
        <ThemedText variant="title" style={{ fontFamily: 'GildaDisplay, serif', color: '#7C2323', fontSize: '2.1rem', textAlign: 'center', letterSpacing: '0.12em', marginBottom: 18 }}>
          NORMAS <br /> DEL LUGAR
        </ThemedText>
        <button className="normas-btn" onClick={() => setModalNormasOpen(true)}>
          <span style={{ fontFamily: 'Gilroy-ExtraBold, sans-serif', fontSize: '1.1rem', color: 'white', letterSpacing: '0.04em' }}>
            LEER LAS NORMAS
          </span>
        </button>
        <ThemedText variant="default" style={{ fontFamily: 'Gilroy-Light, sans-serif', color: '#683B06', fontSize: '1rem', fontWeight: 500, textAlign: 'center', marginTop: 24, lineHeight: 1.35 }}>
          Estas normas han sido establecidas con cariño para preservar la solemnidad del templo y honrar el significado profundo de la ceremonia. Su cumplimiento asegura que todos compartamos una experiencia armoniosa, respetuosa y digna del compromiso que celebraremos.  Agradecemos de corazón su comprensión y colaboración.
        </ThemedText>
      </div>
    </LandingSection>
  );
}
