const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Order, OrderItem, Product } = require('../../db/models')


const router = express.Router();

router.get(`/users/:id`, requireAuth, asyncHandler(async (req, res) => {
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
  const userId = req.params.id
  const data = req.body;

  // create order first
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

  // const createdOrder = await Order.findOne(
  //   {
  //     where: {
  //       id: newOrder.id
  //     },
  //     include: [{ model: OrderItem,
  //                 include: [{ model: Product }]  }]
  //   })

  // console.log("createdOrder(for sending back to thunk)", createdOrder)
  return res.json(newOrder)

}))

router.delete('/api/orders/:id', asyncHandler(async(req, res) => {
  const orderId = req.params.id;
  const tagetOrderItems = await OrderItem.findAll({
    where: {
      orderId: orderId
    }
  })
  // TODO: Maybe can use cascade delete???? Try add hook in the data model
  const targetOrder = await Order.findByPk(orderId);

  // TODO: destroy the data

  return res.json(orderId)

}))


module.exports = router;
