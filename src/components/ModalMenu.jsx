import ModalBase from "./shared/ModalBase";
import "./ModalMenu.css";

const ModalMenu = ({isModalOpen, setIsModalOpen}) => {

    const closeModal = () => setIsModalOpen(false);

    const CardComponent = ({ price, children }) => (
        <div className="modal-menu-card">
            <div className="modal-menu-card-price">
                {price}
            </div>
            <div className="modal-menu-card-content">
                {children}
            </div>
        </div>
    );

    return (
        <ModalBase isOpen={isModalOpen} onClose={closeModal} slideAnimation={true}>
            <div className="modal-menu-content">

                <img src="/img/flor_inferior_izq_menu.png" alt="Flor abajo izquierda"  />
                <img src="/img/flor_lateral_derecha_menu.png" alt="Flor abajo derecha"  />
                <img src="/img/flor_lateral_izq_menu.png" alt="Flor izquierda"  />
                <img src="/img/flor_superior_izq_menu.png" alt="Flor derecha" />

                <h2 className="landing-title modal-title" style={{ color: '#DCC3A4', marginTop: '30px'}}>MENÚ</h2>
                <CardComponent price="$10">
                    <ul className="menu-list">
                        <li><strong>Lomo de Cerdo:</strong> Ensalada César y un contorno a elegir</li>
                        <li><strong>Pinchos de pollo:</strong> 2 contornos a elegir</li>
                        <li><strong>Pollo al grill:</strong> Dos contornos a elegir</li>
                        <li><strong>Parrillas Personales (Pollo, Carne o Mixta):</strong> Con ensalada coleslaw y yuca cocida</li>
                        <li><strong>Pasta Boloñesa</strong></li>
                    </ul>
                    <p style={{ textAlign: 'center' }}>Bebidas: <br />Pepsi, 7up y Té Jamaica</p>
                </CardComponent>

                <CardComponent price="$15">
                    <p style={{ textAlign: 'center' }}>2 Hamburguesas con 2 bebidas y papas fritas</p>
                    <p style={{ textAlign: 'center' }}>Bebidas: <br />Pepsi, 7up y Té Jamaica</p>
                </CardComponent>
                <button onClick={closeModal} className="modal-close-button">
                    Cerrar
                </button>
            </div>
        </ModalBase>
    );
};

export default ModalMenu;