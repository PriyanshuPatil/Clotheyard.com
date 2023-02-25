const { connection } = require("./configs/db");
const { productRouter } = require("./routes/products.routes");
const { usersRouter } = require("./routes/users.routes");
// const {Authenticator}=require("./middleware/authentication.middleware")
const express = require("express");
const cors = require("cors");
const { cartRouter } = require("./routes/cart.routes");
const { ordersRouter } = require("./routes/order.routes");
require("dotenv").config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Home-Page");
});
app.use("/users", usersRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/orders", ordersRouter);

// app.use(Authenticator)

//port information
app.listen(process.env.port || 3000, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(err.message);
  }
  console.log(`application running at ${process.env.port}`);
});
