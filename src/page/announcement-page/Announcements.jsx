import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/UI/Button";

const Announcements = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <p>Announcements</p>
      <Button onClick={() => navigate("/courses/students")}>
        Go to Students page
      </Button>
    </Container>
  );
};

export default Announcements;

const Container = styled.div`
  height: 100vh;
  background-color: #fff;
  padding: 10px;
  margin: 0 15px;

  p {
    margin: 0 0 1rem 0;
  }
`;
