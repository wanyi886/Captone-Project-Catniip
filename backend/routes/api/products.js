const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Product } = require('../../db/models')

const router = express.Router();


// get all products
router.get('/', asyncHandler(async (req, res) => {

  const products = await Product.findAll();

  return res.json(products);
}))

// get one product
router.get('/:id/detail', asyncHandler(async(req, res) => {
  const productId = req.params.id;
  const product = await Product.findByPk(productId);
  return res.json(product);
}))

// create a product
router.post('/', asyncHandler(async(req, res) => {
  const data = req.body;
  const newProduct = await Product.create(data);
  
  return res.json(newProduct)
}))

// update a product

// delete a product


module.exports = router;
