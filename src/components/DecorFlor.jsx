import React from "react";
import "./DecorFlor.css";

export default function DecorFlor({ src, posicion = "izquierda", style = {} }) {
  // posicion: "izquierda" | "derecha"
  return (
    <img
      src={src}
      alt=""
      className={`decor-flor ${posicion}`}
      style={style}
    />
  );
}