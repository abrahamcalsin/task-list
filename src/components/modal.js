import React from "react";
import reactDom from "react-dom";

function Modal({ children }) {
  return reactDom.createPortal(
    <div className="fixed left-0 top-0 w-full px-5 h-full bg-black-alpha flex justify-center items-center">
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
