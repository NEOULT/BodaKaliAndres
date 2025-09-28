import React from "react";
import LandingSection from "./LandingSection";
import "./MenuSection.css";

export default function MenuSection() {
  return (
    <LandingSection>
      <div className="menu-section">
        <img src="/img/landing/menu_icon.png" alt="Menú" className="menu-img" />
        <button className="menu-btn" onClick={() => window.open("/menu.pdf", "_blank") }>
          <span className="menu-btn-text">VER MENÚ</span>
        </button>
      </div>
    </LandingSection>
  );
}
