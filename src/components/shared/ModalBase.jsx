import React from "react";
import "./ModalBase.css";
import { useEffect } from "react";

const ModalBase = ({ isOpen, children, slideAnimation = false }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    if (!isOpen) return null; 

    return (
        <div className="modal-overlay">
            <div className={`modal-content ${slideAnimation ? "slide-in" : ""}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalBase;
