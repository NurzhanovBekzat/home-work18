import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StudentsDetail = () => {
  const param = useParams();

  return (
    <Container>
      <p>Student detail page: </p>
      <p>Student {param.studentId}</p>
    </Container>
  );
};

export default StudentsDetail;

const Container = styled.div`
  height: 100vh;
  background-color: #fff;
  padding: 10px;
  margin: 15px 15px 0;
`;
