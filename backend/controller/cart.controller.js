const { CartModel } = require("../modal/cart.model");

const getCartItem = async (req, res) => {
  const { userId } = req.body;
  try {
    const cartData = await CartModel.find({ userId }).populate("product");
    if (cartData) {
      res.send(cartData);
    } else {
      res.status(404).send({ msg: "Item not found" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const getSingleCartItem = async (req, res) => {
  const id = req.params.id;
  try {
    const cartData = await CartModel.findById(id);
    if (cartData) {
      res.send(cartData);
    } else {
      res.status(404).send({ msg: "Item not found" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const updateCartItem = async (req, res) => {
  const id = req.params.id;
  try {
    await CartModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({ msg: "Cart Succesfully Updated" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const addCartItem = async (req, res) => {
  try {
    const newCartItem = new CartModel(req.body);
    await newCartItem.save();
    res.send({ msg: "Product is Succesfully added to cart" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const deleteCartItem = async (req, res) => {
  const id = req.params.id;
  try {
    await CartModel.findByIdAndDelete(id);
    res.send({ msg: "Product Succesfully deleted from the cart" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const clearCartItems = async (req, res) => {
  const { userId } = req.body;
  try {
    await CartModel.deleteMany({ userId });
    res.send({ msg: "Cart is clear" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  getCartItem,
  getSingleCartItem,
  updateCartItem,
  addCartItem,
  deleteCartItem,
  clearCartItems,
};
