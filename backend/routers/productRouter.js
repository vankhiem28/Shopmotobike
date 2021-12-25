import express from "express"
import expressAsyncHandler from "express-async-handler"
import  mongoose  from "mongoose"
import data from "../data.js"
import Product from "../models/productModel.js"

const productRouter = express.Router()

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.send(products);
}))

productRouter.get('/seed',expressAsyncHandler(async (req, res) => {
    const createdProducts= await Product.insertMany(data.products)
    res.send({createdProducts});
}))


productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const id = req.params.id
    const products = await Product.findById(id)
    if(products) {
        res.send(products)
    }else {
        res.status(404).send({message: 'Product not found'})
    }
}))

export default productRouter