import React from "react";
import { Routes, Route } from "react-router-dom";
import Address from "../Pages/address/address";
import { Dashboard } from "../Pages/Admin/Dashboard";
import { Orders } from "../Pages/Admin/orders";
import { Products } from "../Pages/Admin/Products";
import { Users } from "../Pages/Admin/Users";
import { Cart } from "../Pages/Cart/cart";
import DemoPage from "../Pages/DemoPage/DemoPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/Login&SignUp/LoginPage";
import SignUpPage from "../Pages/Login&SignUp/SignUpPage";
import Mens from "../Pages/Mens/ProductsPage";
import Payment from "../Pages/payment/payment";

import { Singlepage } from "../Pages/SingleProductPage/singlepage";
// import Women from "../Pages/Women/Women";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/singlepage/:_id" element={<Singlepage />} />
      <Route path="/products/:target" element={<Mens />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/address" element={<Address/>} />
      <Route path="/payment" element={<Payment/>} />
    </Routes>
  );
};

export default AllRoutes;
