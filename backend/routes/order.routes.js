const express = require("express");
const {
  getOrders,
  getSingleOrder,
  updateOrders,
  addOrders,
  deleteOrders,
  getAllOrders,
} = require("../controller/order.controller");
const { AdminRoleAuth } = require("../middleware/AdminRoleAuth");

const { Authenticator } = require("../middleware/authentication.middleware");

const ordersRouter = express.Router();

ordersRouter.get("/allorders", AdminRoleAuth, getAllOrders);

ordersRouter.use(Authenticator);

// /product -- GET/user ==> To get product data.
ordersRouter.get("/", getOrders);

// /product/:id -- GET/user ==> To get single product data.

ordersRouter.get("/:id", getSingleOrder);

// /product/:id -- PATCH/admin ==> To update data.

ordersRouter.patch("/:id", AdminRoleAuth, updateOrders);

//  /product -- POST/admin ==> To add new product data.

ordersRouter.post("/", addOrders);

// /product/:id -- DELETE/admin ==> To delete single product data.

ordersRouter.delete("/:id", AdminRoleAuth, deleteOrders);

module.exports = { ordersRouter };
