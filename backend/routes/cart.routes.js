const express = require("express");
const {
  getCartItem,
  getSingleCartItem,
  updateCartItem,
  addCartItem,
  deleteCartItem,
  clearCartItems,
} = require("../controller/cart.controller");
const { Authenticator } = require("../middleware/authentication.middleware");

const cartRouter = express.Router();

cartRouter.use(Authenticator);

// /product -- GET/user ==> To get product data.
cartRouter.get("/", getCartItem);

// /product/:id -- GET/user ==> To get single product data.

cartRouter.get("/:id", getSingleCartItem);

// /product/:id -- PATCH/admin ==> To update data.

cartRouter.patch("/:id", updateCartItem);

//  /product -- POST/admin ==> To add new product data.

cartRouter.post("/", addCartItem);

// /product/:id -- DELETE/admin ==> To delete single product data.

cartRouter.delete("/clearcart", clearCartItems);

cartRouter.delete("/:id", deleteCartItem);

module.exports = { cartRouter };
