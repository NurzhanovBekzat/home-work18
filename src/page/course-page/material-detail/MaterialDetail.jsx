import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

const MaterialDetail = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <Container>
        <div>
          <p>Material detail page: </p>
          <p>Material {param.materialId}</p>
        </div>
      </Container>
      <div>
        <StyledUl>
          <StyledLink to="submitted">Submitted</StyledLink>
          <StyledLink to="waiting">Waiting</StyledLink>
          <StyledLink to="late">Late</StyledLink>
        </StyledUl>
        <Outlet />
      </div>
    </>
  );
};

export default MaterialDetail;

const Container = styled.div`
  background-color: #fff;
  padding: 10px;
  margin: 15px 15px 0;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 15px;
  background-color: #19ae9f;
  height: 50px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #fff;

  &.active {
    color: #222;
    text-decoration: underline yellow 4px;
  }
`;
