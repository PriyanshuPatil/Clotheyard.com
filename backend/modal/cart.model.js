const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    quantity: { type: Number, default: 1 },
    size: { type: String, default: "5-6Y" },
    userId: { type: String, required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "product",
    },
  },
  { versionKey: false }
);

const CartModel = mongoose.model("cart_item", cartSchema);
module.exports = { CartModel, cartSchema };
