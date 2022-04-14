const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Product } = require('../../db/models')

const router = express.Router();

const validateProduct = [
  check('title')
    .exists({checkFalsy: true})
    .withMessage('Title cannot be empty.'),
  check('description')
    .exists({checkFalsy: true})
    .withMessage('Description cannot be empty.'),
  check('imgUrl')
    .exists({checkFalsy: true})
    .withMessage('Image URL cannot be empty.'),
  check('price')
    .exists({checkFalsy: true})
    .withMessage('Price cannot be empty.')
    .isFloat({ min: 0 })
    .withMessage('Price cannot be less than 0.'),
  check('inventory')
    .exists({checkFalsy: true})
    .withMessage('Inventory cannot be empty')
    .isInt({ min: 1 })
    .withMessage('Inventory cannot be less than 1'),
]


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
router.post('/', validateProduct, handleValidationErrors, asyncHandler(async(req, res) => {
  const data = req.body;
  const newProduct = await Product.create(data);

  return res.json(newProduct)
}))

// update a product
router.put('/:id', validateProduct, handleValidationErrors, asyncHandler(async(req, res) => {
  const id = req.params.id;
  const targetProduct = await Product.findByPk(id);
  const updatedProduct = req.body;

  if (targetProduct) {
    await targetProduct.update(updatedProduct)
    return res.json(targetProduct)
  } else {
    throw new Error('Cannot find this product.')
  }

}))

// delete a product
router.delete('/:id', asyncHandler(async(req, res) => {
  const id = req.params.id;
  const targetProduct = await Product.findByPk(id);

  if (targetProduct) {
    await targetProduct.destroy()
    return res.json(id)
  } else {
    throw new Error('Cannot find this product.')
  }
}))


module.exports = router;
