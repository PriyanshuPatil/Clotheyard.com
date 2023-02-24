import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart/cart";
import DemoPage from "../Pages/DemoPage/DemoPage";
import Mens from "../Pages/Mens/ProductsPage";

import { Singlepage } from "../Pages/SingleProductPage/singlepage";
// import Women from "../Pages/Women/Women";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/demo" element={<DemoPage />} />


      <Route path="/cart" element={<Cart/>} />
      <Route path="/single/:_id" element={<Singlepage/>} />
      <Route path="/products/:target" element={<Mens />} />

    </Routes>
  );
};

export default AllRoutes;
