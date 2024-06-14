import React, { useState } from "react";
import { ModalContent, StyledModal } from "./style";

const Modal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>Abrir Modal</button>
      {open && (
        <StyledModal>
          <ModalContent>
            <p>Modal Content</p>
            <button onClick={() => setOpen(false)}>Fechar</button>
          </ModalContent>
        </StyledModal>
      )}
    </>
  );
};

export default Modal;
