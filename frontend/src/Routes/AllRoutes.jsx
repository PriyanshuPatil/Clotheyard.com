import React from "react";
import { Routes, Route } from "react-router-dom";
import DemoPage from "../Pages/DemoPage/DemoPage";
const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<div>Home</div>} />
      <Route path="/demo" element={<DemoPage/>} />
    </Routes>
  );
};

export default AllRoutes;