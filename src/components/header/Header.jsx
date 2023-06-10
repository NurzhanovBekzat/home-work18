import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <ContainHeader>
      <nav>
        <StyledHeader>
          <StyledLink to="materials">Material</StyledLink>
          <StyledLink to="students">Students</StyledLink>
          <StyledLink to="rating">Rating</StyledLink>
        </StyledHeader>
      </nav>
    </ContainHeader>
  );
};

export default Header;

const StyledHeader = styled.ul`
  margin: 0;
  display: flex;
  gap: 20px;
`;

const ContainHeader = styled.div`
  background-color: #6e6eac;
  height: 73px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  &.active {
    color: #222;
    text-decoration: underline yellow 4px;
  }
`;
