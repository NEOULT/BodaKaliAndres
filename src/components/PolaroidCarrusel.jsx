import React, { useState, useEffect } from "react";
import "./PolaroidCarrusel.css";

const images = [
  "/img/landing/carrusel/_DSC9551[1].JPG",
  "/img/landing/carrusel/_DSC9554[1].JPG",
  "/img/landing/carrusel/_DSC9564[1].JPG",
  "/img/landing/carrusel/_DSC9568[1].JPG",
  "/img/landing/carrusel/_DSC9572[1].JPG",
  "/img/landing/carrusel/_DSC9574[1].JPG",
  "/img/landing/carrusel/_DSC9589[1].JPG",
  "/img/landing/carrusel/_DSC9609[1].JPG",
  "/img/landing/carrusel/_DSC9629[1].JPG",
  "/img/landing/carrusel/_DSC9630[1].JPG",
  "/img/landing/carrusel/_DSC9631[1].JPG",
  "/img/landing/carrusel/_DSC9647[1].JPG",
  "/img/landing/carrusel/_DSC9649[1].JPG",
  "/img/landing/carrusel/_DSC9657[1].JPG",
  "/img/landing/carrusel/_DSC9658[1].JPG",
  "/img/landing/carrusel/_DSC9663[1].JPG",
  "/img/landing/carrusel/_DSC9665[1].JPG",
  "/img/landing/carrusel/_DSC9666[1].JPG",
  "/img/landing/carrusel/_DSC9672[1].JPG",
  "/img/landing/carrusel/_DSC9683[1].JPG",
  "/img/landing/carrusel/_DSC9687[1].JPG",
  "/img/landing/carrusel/_DSC9700[1].JPG",
  "/img/landing/carrusel/_DSC9701[1].JPG",
  "/img/landing/carrusel/_DSC9702[1].JPG",
  "/img/landing/carrusel/_DSC9703[1].JPG",
  "/img/landing/carrusel/_DSC9708[1].JPG",
  "/img/landing/carrusel/_DSC9710[1].JPG",
  "/img/landing/carrusel/_DSC9719[1] (1).JPG",
  "/img/landing/carrusel/_DSC9721[1].JPG",
  "/img/landing/carrusel/_DSC9732[1].JPG",
  "/img/landing/carrusel/_DSC9733[1].JPG",
  "/img/landing/carrusel/_DSC9742[1].JPG",
  "/img/landing/carrusel/_DSC9752[1].JPG",
  "/img/landing/carrusel/_DSC9765[1].JPG",
  "/img/landing/carrusel/_DSC9767[1].JPG",
  "/img/landing/carrusel/_DSC9769[1].JPG",
  "/img/landing/carrusel/_DSC9807[1].JPG",
  "/img/landing/carrusel/_DSC9839[1].JPG",
  "/img/landing/carrusel/_DSC9851[1].JPG"
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
