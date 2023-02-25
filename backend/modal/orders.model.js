const mongoose = require("mongoose");
const { cartSchema } = require("./cart.model");
const orderSchema = new mongoose.Schema(
  {
    booking_date: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "clotheyard_user",
    },
    products: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "cart_item" }],
      required: true,
    },
    address: { type: String, default: "46-D Nagin Nagar,Indore" },
    status: { type: String, default: "Pending" },
  },
  { versionKey: false }
);

const OrderModel = mongoose.model("order_list", orderSchema);
module.exports = { OrderModel };
