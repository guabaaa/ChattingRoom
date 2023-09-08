import React from 'react';

interface ModalProps {
    isOpen: boolean;
    imageUrl: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, imageUrl, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <img src={imageUrl} alt="확대된 이미지" />
            </div>
        </div>
    );
};

export default Modal;