import React from "react";
import "./ModalBase.css";
import { useEffect } from "react";

const ModalBase = ({ isOpen, children, slideAnimation = false }) => {

    useEffect(() => {
        if (isOpen) {
            // document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Permite cerrar el modal al hacer click fuera del contenido
    const handleOverlayClick = () => {
        if (typeof window !== "undefined" && typeof document !== "undefined") {
            document.body.classList.remove("overflow-hidden");
        }
        if (typeof slideAnimation === "function") {
            slideAnimation(false);
        }
        if (typeof children?.props?.onClose === "function") {
            children.props.onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className={`modal-content ${slideAnimation ? "slide-in" : ""}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalBase;
