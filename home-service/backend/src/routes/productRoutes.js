const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct
} = require("../controllers/productController");

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);

module.exports = router;