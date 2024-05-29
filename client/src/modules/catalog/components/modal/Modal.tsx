import React from 'react';
import './Modal.css';

export const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} title='Cerrar'>X</button>
                {content}
            </div>
        </div>
    );
}
