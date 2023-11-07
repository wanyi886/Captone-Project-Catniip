const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Review, User } = require('../../db/models');

const router = express.Router();

const validateReview = [
    check('title')
      .exists({checkFalsy: true})
      .withMessage('Title cannot be empty.'),
    check('description')
      .exists({checkFalsy: true})
      .withMessage('Description cannot be empty.'),
  ]

  
  // load reviews under a product
  router.get('/product/:id', handleValidationErrors, asyncHandler(async(req, res) => {
    const productId = req.params.id;

    const reviews = await Review.findAll(
      {
        where: { productId: productId },
        include: [{ model: User }],
  
      })
    
    return res.json(reviews)
  }))

  // create a review
  router.post('/', validateReview, handleValidationErrors, asyncHandler(async(req, res) => {
    
    const data = req.body;
    
    const newReview = await Review.create(data);
    const review = await Review.findAll(
      {
        where: { id: newReview.id },
        include: [{ model: User }],
      })
  
    return res.json(review[0])
  }))

  module.exports = router;
