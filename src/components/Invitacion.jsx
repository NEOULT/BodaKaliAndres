import React from "react";
import "./Invitacion.css";
import ThemedText from "./shared/ThemedText";
import { useNavigate } from "react-router-dom";

export default function Invitacion() {
  const navigate = useNavigate();

  // Obtiene el parámetro "n" de la URL
  const params = new URLSearchParams(window.location.search);
  const numero = params.get("n") === "2" ? "2" : "1"; // Por defecto muestra "1"
  const r = params.get("r") === "true";

  const handleAbrirInvitacion = () => {
    navigate(`/Boda-Kaliana-Andres?n=${numero}&r=${r}`);
  };

  return (
    <div className="invitacion">
  <img src="/webp/diseño_flor_regordete.webp" alt="" className="decor-top-left" />
  <img src="/webp/diseño_flor_alargado.webp" alt="" className="decor-bottom-right" />
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
      <div className="sobre-container" onClick={handleAbrirInvitacion} style={{ cursor: 'pointer' }}>
  <img className="sobre-img" src="/webp/sobre_rojo.webp" alt="Sobre" />
  <img className="pareja-img" src="/webp/pareja.webp" alt="Pareja" />
        <img className="flecha-img" src="/img/icon/icono_flecha_punteada.svg" alt="Flecha" />
      </div>
      <ThemedText
        style={{
          fontFamily: "GildaDisplay, sans-serif",
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
        <ThemedText variant="footer" style={{ fontFamily: 'GildaDisplay, serif' }}>
          HEMOS<br />RESERVADO
        </ThemedText>
        <span className="numero">{numero}</span>
        <ThemedText variant="footer" style={{ fontFamily: 'GildaDisplay, serif' }}>
          {numero === "2" ? "LUGARES" : "LUGAR"}<br />DE HONOR
        </ThemedText>
      </div>
    </div>
  );
}