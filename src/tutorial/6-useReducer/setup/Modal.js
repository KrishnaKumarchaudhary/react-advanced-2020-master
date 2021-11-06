import React, { useEffect } from 'react';

const Modal = ({modalContant,closeModal}) => {
  useEffect(() => {
  setInterval(() => {
    closeModal();
  }, 3000);
  })
  return <div>{modalContant}</div>;
};

export default Modal;
