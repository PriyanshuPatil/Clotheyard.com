const express = require("express");
const {
  getProduct,
  getSingleProduct,
  updateProduct,
  addProduct,
  deleteProduct,
} = require("../controller/product.controller");
const productRouter = express.Router();

// /product -- GET/user ==> To get product data.
productRouter.get("/", getProduct);

// /product/:id -- GET/user ==> To get single product data.

productRouter.get("/:id", getSingleProduct);

// /product/:id -- PATCH/admin ==> To update data.

productRouter.patch("/:id", updateProduct);

//  /product -- POST/admin ==> To add new product data.

productRouter.post("/", addProduct);

// /product/:id -- DELETE/admin ==> To delete single product data.

productRouter.delete("/:id", deleteProduct);

module.exports = { productRouter };
