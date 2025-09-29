import React from "react";
import LandingSection from "./LandingSection";
import "./MenuSection.css";
import ModalMenu from "./ModalMenu";

export default function MenuSection({ setModalMenuOpen }) {

  

  return (
      <>
        <LandingSection>
          <div className="menu-section">
            <img src="/webp/menu_icon.webp" alt="Menú" className="menu-img" />
            <button
              className="menu-btn"
              onClick={() => {
                setModalMenuOpen(true);
              }}
            >
              <span className="menu-btn-text">VER MENÚ</span>
            </button>
          </div>
        </LandingSection>
      </>
    );
}
