import React from "react";
import { Routes, Route } from "react-router-dom";
import DemoPage from "../Pages/DemoPage/DemoPage";
import HomePage from "../Pages/HomePage/HomePage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/demo" element={<DemoPage />} />
    </Routes>
  );
};

export default AllRoutes;
