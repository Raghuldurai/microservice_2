const Product = require("../models/Product");

exports.getProducts = async (req,res)=>{
  const products = await Product.find();
  res.json(products);
};

exports.getProduct = async (req,res)=>{
  const product = await Product.findById(req.params.id);
  res.json(product);
};

exports.createProduct = async (req,res)=>{
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};