import React from "react";
import styled from "styled-components";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background-color: #b1f7e2;
  border: none;
  padding: 10px 35px;
  border-radius: 20px;
  cursor: pointer;

  :hover{
    background-color: #238669;

  }
`;
