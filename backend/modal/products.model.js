const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    category: { type: String },
    title: { type: String },
    type: { type: String },
    subtitle: { type: String },
    discounted_price: { type: Number },
    strike_price: { type: Number },
    discount: { type: String },
    images: { type: [String] },
    size: { type: [String] },
    rating: { type: Number },
    rating_count: { type: String },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("product", productSchema);
module.exports = { ProductModel };
