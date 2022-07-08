import React, { useState } from "react";
import { ModalCont, ModalInfo } from "./modal.style";

function Modal({ handleClose, children }) {
  return (
    <ModalCont className='flex justify-center items-center'>
      <ModalInfo className='flex justify-center items-center py-10 px-10 flex-col'>
        <div className='close-btn'>
          <button onClick={() => handleClose(false)}> X </button>
        </div>
        <div className='flex flex-col justify-center items-center pt-10'>
          {children}
        </div>
      </ModalInfo>
    </ModalCont>
  );
}

export default Modal;
