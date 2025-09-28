import React from "react";
import "./LandingSection.css";

export default function LandingSection({ children }) {
  return (
    <section className="landing-section">
      {children}
    </section>
  );
}