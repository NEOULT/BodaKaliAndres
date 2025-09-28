import React from "react";
import "./FotosSection.css";
import PolaroidCarrusel from "./PolaroidCarrusel";

export default function FotosSection() {
  return (
    <section className="fotos-section">
      <div className="fotos-polaroid fotos-polaroid-1">
        <img src="/img/landing/foto_carrusel1.jpg" alt="Foto 1" />
      </div>
      <PolaroidCarrusel />
    </section>
  );
}
