import React from "react";
import "../View/Landing.css";

export default function LandingHero() {
  return (
    <section className="landing-hero">
  <img src="/webp/flor2.webp" alt="" className="flor-izquierda" />
  <img src="/webp/flor1.webp" alt="" className="flor-derecha" />
  <img src="/webp/Foto_Principal.webp" alt="Foto pareja" className="foto-principal" />
      <div className="audio-player">
        <audio controls>
          <source src="/audio/fidelidad.mp3" type="audio/mp3" />
          Tu navegador no soporta audio.
        </audio>
      </div>
    </section>
  );
}