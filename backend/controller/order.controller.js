const { OrderModel } = require("../modal/orders.model");

const getOrders = async (req, res) => {
  const { userId } = req.body;
  try {
    const orderData = await OrderModel.find({ userId }).populate({
      path: "products",
      populate: {
        path: "product",
      },
    });
    if (orderData) {
      res.send(orderData);
    } else {
      res.status(404).send({ msg: "Orders Not Found" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const getSingleOrder = async (req, res) => {
  const id = req.params.id;
  try {
    const orderData = await OrderModel.findById(id).populate([
      "userId",
      {
        path: "products",
        populate: {
          path: "product",
        },
      },
    ]);
    if (orderData) {
      res.send(orderData);
    } else {
      res.status(404).send({ msg: "Item not found" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const updateOrders = async (req, res) => {
  const id = req.params.id;
  try {
    await OrderModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({ msg: "Order Succesfully Updated" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orderData = await OrderModel.find().populate([
      "userId",
      {
        path: "products",
        populate: {
          path: "product",
        },
      },
    ]);
    if (orderData) {
      res.send(orderData);
    } else {
      res.status(404).send({ msg: "Orders Not Found" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const addOrders = async (req, res) => {
  try {
    const newCartItem = new OrderModel(req.body);
    await newCartItem.save();
    res.send({ msg: "Order is Succesfully placed" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const deleteOrders = async (req, res) => {
  const id = req.params.id;
  try {
    await OrderModel.findByIdAndDelete(id);
    res.send({ msg: "Product Succesfully deleted from the cart" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

module.exports = {
  getOrders,
  getSingleOrder,
  updateOrders,
  addOrders,
  deleteOrders,
  getAllOrders,
};
