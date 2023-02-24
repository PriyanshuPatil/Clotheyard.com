const { ProductModel } = require("../modal/products.model");

const getProduct = async (req, res) => {
  // const category=req.params ;
  // type,page,limit,sort,order
  try {
    const productdata = await ProductModel.find();
    res.send(productdata);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const productdata = await ProductModel.findById(id);
    if (productdata) {
      res.send(productdata);
    } else {
      res.status(404).send({ msg: "Item not found" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    let productdata = await ProductModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    res.send({ msg: "Product Succesfully Updated" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const newuser = new ProductModel(req.body);
    await newuser.save();
    res.send({ msg: "Product Succesfully added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    let productdata = await ProductModel.findByIdAndDelete(id);
    res.send({ msg: "Product Succesfully deleted" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

module.exports = {
  getProduct,
  getSingleProduct,
  updateProduct,
  addProduct,
  deleteProduct,
};
