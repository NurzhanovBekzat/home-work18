import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/UI/Button";

const Schedule = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <p>Schedule</p>
      <Button onClick={() => navigate("/notifications")}>
        Go to Notifications page
      </Button>
    </Container>
  );
};

export default Schedule;

const Container = styled.div`
  height: 100vh;
  background-color: #fff;
  padding: 10px;
  margin: 0 15px;



`;
