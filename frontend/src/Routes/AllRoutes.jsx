import React from "react";
import { Routes, Route } from "react-router-dom";
import DemoPage from "../Pages/DemoPage/DemoPage";
import Mens from "../Pages/Mens/Mens";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/mens" element={<Mens />} />
    </Routes>
  );
};

export default AllRoutes;
