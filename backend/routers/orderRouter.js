import express from "express"
import expressAsyncHandler from "express-async-handler"
import Order from "../models/orderModel.js";
import { isAuth } from "../utils.js";
const orderRouter = express.Router()


orderRouter.get('/', expressAsyncHandler(async (req, res) => {
  const order = await Order.find({})
  res.send(order);
}))

orderRouter.get('/:id',isAuth,expressAsyncHandler(async (req, res) => {
  const orderId = req.params.id
  const order = await Order.findById(orderId)
  if (order) {
    res.status(order)
  } else {
    res.status(404).send({ message: 'order not found '})
  }
})
)

orderRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
      } else {
        const order = new Order({
          orderItems: req.body.orderItems,
          shippingAddress: req.body.shippingAddress,
          paymentMethod:req.body.paymentMethod,
          itemsPrice: req.body.itemsPrice,
          shippingPrice: req.body.shippingPrice,
          totalPrice: req.body.totalPrice,
          user: req.user._id,
        });
        const createdOrder = await order.save();
        res.status(201).send({ message: 'New Order Created', order: createdOrder });
      }
    })
  );




export default orderRouter