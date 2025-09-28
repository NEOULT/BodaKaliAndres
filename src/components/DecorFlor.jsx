import React from "react";
import "../View/Landing.css";

export default function DecorFlor({ src, className = "" }) {
  return <img src={src} alt="" className={className} />;
}