import React from "react";
import { useState, useRef, useEffect } from "react";
import ModalBase from "./shared/ModalBase";
import "./ModalNormas.css";

const ModalNormas = ({ isModalOpen, setIsModalOpen }) => {
    const closeModal = () => setIsModalOpen(false);

    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const lastNormaRef = useRef(null);

    useEffect(() => {

        if (!isModalOpen) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsButtonEnabled(entry.isIntersecting); 
            },
            { root: document.querySelector(".normas-text-container"), threshold: 1.0 }
        );

        if (lastNormaRef.current) {
            observer.observe(lastNormaRef.current);
        }

        return () => {
            if (lastNormaRef.current) {
                observer.unobserve(lastNormaRef.current);
            }
        };
    }, [isModalOpen]);

    return (
        <ModalBase isOpen={isModalOpen} onClose={closeModal}>
            <div className="modal-normas-content">
                <h2 className="landing-title" style={{color: "#731516"}}>NORMAS <br />DEL LUGAR</h2>

                <div className="normas-text-container">
                    <ul className="normas-list">
                        <li className="normas-item">Prohibidos los vestidos escotados</li>
                        <li className="normas-item">Prohibidos los vestidos cortos</li>
                        <li className="normas-item">Nada de mascotas</li>
                        <li className="normas-item">Nada de cigarros</li>
                        <li className="normas-item">Nada de armas blancas o de fuego</li>
                        <li className="normas-item">Prohibido el ingreso de bebidas, comidas o dulces</li>
                        <li className="normas-item">Nada de arroz o alguna cosa de tradición o cultura</li>
                    </ul>
                    <p className="normas-item" style={{textAlign: "center"}} ref={lastNormaRef}><strong>NOTA:</strong> se debe dejar las instalaciones de la iglesia limpia e impecable.</p>
                </div>

                <button onClick={closeModal} className={`close-modal-button ${isButtonEnabled ? "enabled" : "disabled"}`} disabled={!isButtonEnabled} >
                    Estoy de acuerdo
                </button>
            </div>
        </ModalBase>
    );
};

export default ModalNormas;