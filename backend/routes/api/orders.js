const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Order, OrderItem, Product } = require('../../db/models')


const router = express.Router();

router.get(`/users/:id`, asyncHandler(async (req, res) => {
  // console.log("beginning of router")
  const userId = req.params.id
  // console.log("userId from router", userId)
  const orders = await Order.findAll(
    {
      where: { buyerId: userId },
      include: [{ model: OrderItem,
                  include: [{ model: Product }] }]
    }
  )

  return res.json(orders)

}))

router.post(`/users/:id`, asyncHandler(async(req, res) => {
  console.log("beginning of post route")
  const userId = req.params.id
  const data = req.body;

  const orderData = { buyerId: userId, total: data.total }
  const newOrder = await Order.create(orderData);

  const orderItems = data.orderItems

  // since the data from req.body has no orderId, so need to add orderId for each item
  const addOrderIdItems = orderItems.map(orderItem => {
    return {...orderItem, orderId: newOrder.id}
  })


  if (newOrder) {
    for (let i = 0; i < addOrderIdItems.length; i++) {
      await OrderItem.create(addOrderIdItems[i])
    }
  }

  console.log("finished!")


}))


module.exports = router;
