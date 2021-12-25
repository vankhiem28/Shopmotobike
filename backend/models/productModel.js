import mongoose  from 'mongoose'

const productShema =new mongoose.Schema({
    name:{type:String, required:true,unique:true},
    image: {type:String, required:true},
    image_left: {type:String, required:true},
    image_bottom: {type:String, required:true},
    image_right: {type:String, required:true},
    brand: {type:String, required:true},
    category: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    countInStock: {type:Number, required:true},
},{
    timestamps: true,
})

const Product= mongoose.model("Product",productShema)

export default Product