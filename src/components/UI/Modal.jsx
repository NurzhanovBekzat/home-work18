import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Button from "./Button";

const Modal = ({ onClose }) => {
  return (
    <>
      {createPortal(
        <MaterialModal>
          <h2>Add new material modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            repellat et consequatur cum quis facilis voluptate expedita ex at?
            Illum doloribus repellat recusandae nihil, voluptas cum debitis
            repudiandae culpa provident!
          </p>
          <Button onClick={onClose}>close modal</Button>
        </MaterialModal>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;

const MaterialModal = styled.div`
  margin: 0 auto;
  width: 500px;
  padding: 10px 10px;
  background-color: #c28f8f;
  z-index: 1000;
`;
