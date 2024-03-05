import React from 'react';
import * as Styled from './styles';


const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <Styled.ModalWrapper onClick={onClose}>
        <Styled.ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </Styled.ModalContent>
      </Styled.ModalWrapper>
    );
  };
  
  export default Modal;