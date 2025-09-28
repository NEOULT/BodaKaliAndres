import React from "react";
import LandingSection from "./LandingSection";
import ThemedText from "./shared/ThemedText";
import "./ConfirmacionSection.css";

export default function ConfirmacionSection() {
  return (
    <LandingSection>
      <div className="confirmacion-section">
        <img src="/img/landing/flor_abajo_izquierda_asistencia.png" alt="Flor abajo izquierda" className="confirmacion-flor confirmacion-flor-abajo-izq" />
        <img src="/img/landing/flor_abajo_derecha_asistencia.png" alt="Flor abajo derecha" className="confirmacion-flor confirmacion-flor-abajo-der" />
        <img src="/img/landing/flor_arriba_izquierda_asistencia.png" alt="Flor izquierda" className="confirmacion-flor confirmacion-flor-izq" />
        <img src="/img/landing/flor_arriba_derecha_asistencia.png" alt="Flor derecha" className="confirmacion-flor confirmacion-flor-der" />
        <div className="confirmacion-titulo-wrapper">
          <ThemedText variant="title" style={{ fontFamily: 'GildaDisplay, serif', color: '#DCC3A4', fontSize: '2rem', textAlign: 'center', letterSpacing: '0.12em'}}>
            CONFIRMA TU
          </ThemedText>
          <span style={{ fontFamily: 'Slight', fontSize: '3.5rem', color: '#DCC3A4', fontWeight: 400, position: 'relative', top: '-40px' }}>asistencia</span>
        </div>
        <p className="confirmacion-text">
          Para ayudarnos a organizar con amor y orden este día tan especial, te pedimos <b>que confirmes tu asistencia a la ceremonia eclesiástica y/o a la recepción</b>. Tu respuesta nos permitirá preparar cada detalle con cariño y asegurar que todos los invitados estén debidamente registrados.
        </p>
        <button className="confirmacion-btn" onClick={() => window.open('https://forms.gle/2h1Jw6QwQwQ2', '_blank', 'noopener,noreferrer')}>
          CONFIRMAR
        </button>
        <div className="confirmacion-importante">
          <b>IMPORTANTE:</b>
          <p>
            En caso de no confirmar tu asistencia, entenderemos que no estarás presente y no serás incluido en la lista de ingreso. Por respeto a la logística del evento y a las normas del templo, solo podrán ingresar quienes estén previamente registrados.
          </p>
        </div>
        <ThemedText variant="title" style={{ fontFamily: 'GildaDisplay, serif', color: '#d6b08a', fontSize: '1.7rem', textAlign: 'center', marginTop: 32 }}>
          TRANSMISIÓN 
        </ThemedText>
        <span style={{ fontFamily: 'Slight', fontSize: '2.5rem', color: '#d6b08a', fontWeight: 400, top: '-30px', position: 'relative' }}>en vivo</span>
        <p className="confirmacion-text" style={{ color: '#fff', fontSize: '1.1rem', marginTop: 8 }}>
          Si nos acompañas desde la distancia: Ese día estaremos transmitiendo en vivo por Instagram desde la cuenta:
        </p>
        <a href="https://instagram.com/kalianaacamarrillo" target="_blank" rel="noopener noreferrer" className="confirmacion-instagram">@kalianaacamarrillo</a>
      </div>
    </LandingSection>
  );
}
