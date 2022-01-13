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

productRouter.post('/', async (req, res) => {
    const product = new Product({
        name:req.body.name,
        image:req.body.image ,
        image_left:req.body.image_left ,
        image_bottom:req.body.image_bottom ,
        image_right:req.body.image_right ,
        brand:req.body.brand ,
        category:req.body.category ,
        description:req.body.description ,
        price:req.body.price ,
        countInStock:req.body.countInStock,
    });
    const newProduct = await product.save();
    if (newProduct) {
      return res
        .status(201)
        .send({ message: 'New Product Created', data: newProduct });
    }
    return res.status(500).send({ message: ' Error in Creating Product.'});
  })

  productRouter.put('/:id', async (req, res) => {
      const productId = req.params.id
      const product = await Product.findById(productId)
      if(product) {
        product.name=req.body.name
        product.image=req.body.image 
        product.image_left=req.body.image_left 
        product.image_bottom=req.body.image_bottom 
        product.image_right=req.body.image_right 
        product.brand=req.body.brand 
        product.category=req.body.category 
        product.description=req.body.description 
        product.price=req.body.price 
        product.countInStock=req.body.countInStock
        const updateProduct = await product.save()
        if(updateProduct) {
            return res.status(200).send({message:'product update',data:newProduct})
        }
      }
      return res.status(500).send({message:'error in updating product'})

  })

productRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const deletedproduct = await Product.findById(req.params.id);
    if (deletedproduct) {
      await deletedproduct.remove();
      res.send({ message: 'Product Deleted'});
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
)



export default productRouter