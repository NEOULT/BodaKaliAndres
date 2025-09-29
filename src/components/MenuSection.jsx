import React from "react";
import LandingSection from "./LandingSection";
import "./MenuSection.css";
import ModalMenu from "./ModalMenu";
import { useState } from "react";

export default function MenuSection() {
  const [isModalMenuOpen, setModalMenuOpen] = useState(false);

  return (
      <>
        <ModalMenu isModalOpen={isModalMenuOpen} setIsModalOpen={setModalMenuOpen} />
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
