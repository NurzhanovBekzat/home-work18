import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <h2>LOGO</h2>
      </Logo>
      <nav>
        <NavBar>
          <Link to="/courses">Courses</Link>
          <Link to="/announcements">Announcements</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/schedule">Schedule</Link>
        </NavBar>
      </nav>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 250px;
  height: 100vh;
  background-color: rgb(213, 203, 203);
  position: fixed;
  display: flex;
  flex-direction: column;
 
`;

const Logo = styled.div`
  color: #05ff09;
  text-align: center;
`;

const NavBar = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  background-color: #f3e2e2;
  height: 40px;
  text-decoration: none;
  color: #22229e;
  font-weight: 600;

  &.active {
    color: #222;
    background-color: #c6b8d349;
  }
`;
