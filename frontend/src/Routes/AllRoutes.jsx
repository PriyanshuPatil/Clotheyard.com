import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart/cart";
import DemoPage from "../Pages/DemoPage/DemoPage";
import Mens from "../Pages/Mens/Mens";
import { Singlepage } from "../Pages/SingleProductPage/singlepage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/mens" element={<Mens/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/single/:_id" element={<Singlepage/>} />
    </Routes>
  );
};

export default AllRoutes;