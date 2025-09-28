import React from "react";
import "./Invitacion.css";
import ThemedText from "./shared/ThemedText";

export default function Invitacion() {

  // Obtiene el parámetro "n" de la URL
  const params = new URLSearchParams(window.location.search);
  const numero = params.get("n") === "2" ? "2" : "1"; // Por defecto muestra "1"

  return (
    <div className="invitacion">
      <img src="/img/diseño_flor_regordete.png" alt="" className="decor-top-left" />
      <img src="/img/diseño_flor_alargado.png" alt="" className="decor-bottom-right" />
      <ThemedText variant="title" style={{ marginTop: 32 }}>
        NUESTRA BODA
      </ThemedText>
      <div className="nombres-boda">
        <ThemedText variant="names" className="nombre-andres">
          Andrés
        </ThemedText>
        <ThemedText variant="ampersand" className="ampersand">
          &amp;
        </ThemedText>
        <ThemedText variant="names" className="nombre-kaliana">
          Kaliana
        </ThemedText>
      </div>
      <ThemedText
        style={{
          marginTop: 8,
          fontFamily: "NekaLaurent, serif",
          fontSize: 22,
          color: "#B1732A",
          textTransform: "uppercase",
          letterSpacing: 2,
          textAlign: "center",
          fontWeight: 400,
        }}
      >
        7-NOV-2025
      </ThemedText>
      <div className="sobre-container">
        <img className="sobre-img" src="/img/sobre_rojo.png" alt="Sobre" />
        <img className="pareja-img" src="/img/pareja.png" alt="Pareja" />
        <img className="flecha-img" src="/img/icon/icono_flecha_punteada.svg" alt="Flecha" />
      </div>
      <ThemedText
        style={{
          fontFamily: "Poppins, sans-serif",
          color: "#683B06", 
          marginTop: 10,
          fontSize: 15,
          fontWeight: 100,
          textTransform: "uppercase",
          letterSpacing: 3,
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        TOCA PARA ABRIR<br />LA INVITACIÓN
      </ThemedText>
      <div className="footer">
        <ThemedText variant="footer">
          HEMOS<br />RESERVADO
        </ThemedText>
        <span className="numero">{numero}</span>
        <ThemedText variant="footer">
          LUGARES<br />DE HONOR
        </ThemedText>
      </div>
    </div>
  );
}