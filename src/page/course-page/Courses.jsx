import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

const Courses = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Courses;
