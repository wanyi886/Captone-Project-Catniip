const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Product } = require('../../db/models')

const router = express.Router();

// get all products
router.get('/', asyncHandler(async (req, res) => {
  console.log("hey")
  const products = await Product.findAll();
  console.log('products', products)
  return res.json(products);
}))

// get one product

// create a product

// update a product

// delete a product


module.exports = router;
