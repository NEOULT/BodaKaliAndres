import React from "react";
import "../View/Landing.css";

export default function LandingHero() {
  return (
    <section className="landing-hero">
      <img src="/img/landing/flor2.png" alt="" className="flor-izquierda" />
      <img src="/img/landing/flor1.png" alt="" className="flor-derecha" />
      <img src="/img/landing/Foto_Principal.png" alt="Foto pareja" className="foto-principal" />
      <div className="audio-player">
        <audio controls>
          <source src="../../public/audio/fidelidad.mp3" type="audio/mp3" />
          Tu navegador no soporta audio.
        </audio>
      </div>
    </section>
  );
}