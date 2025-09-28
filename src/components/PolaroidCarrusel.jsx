import React, { useState, useEffect } from "react";
import "./PolaroidCarrusel.css";

const images = [
  "/img/landing/foto_carrusel2.jpg",
  "/img/landing/foto_carrusel1.jpg",
  "/img/landing/foto_carrusel2.jpg"
];

export default function PolaroidCarrusel() {
  const [current, setCurrent] = useState(0);
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide(true);
      setTimeout(() => {
        setSlide(false);
        setCurrent((prev) => (prev + 1) % images.length);
      }, 700); // duración del slide
    }, 2500); // tiempo entre imágenes
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="polaroid-carrusel">
      <div className="polaroid-frame">
        <div className="polaroid-image-wrapper">
          <img
            src={images[current]}
            alt={`Foto ${current + 1}`}
            className="polaroid-image"
            style={{ zIndex: 1 }}
          />
          {slide && (
            <img
              src={images[(current + 1) % images.length]}
              alt={`Foto ${(current + 2)}`}
              className="polaroid-image slide-in"
              style={{ zIndex: 2, position: "absolute", left: 0, top: 0 }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
