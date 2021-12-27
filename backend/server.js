import express from 'express'
import mongoose  from 'mongoose'
import data from './data.js'
import dotenv from 'dotenv'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import Product from './models/productModel.js'

dotenv.config()


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/shopmotobike',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
})

// app.get('/api/productsHome/:id', (req, res) => {
//     const productId = req.params.id
//     const product = data.productsHome.find((x) => x._id ===Number(productId))
//     if (product) {
//         res.send(product)
//     }else {
//         res.status(404).send({message: 'Product not found'})
//     }

//     console.log(productId);
// })

// app.get('/api/productsHome', (req, res) => {
//     res.send(data.productsHome)
// })

app.use('/api/users',userRouter)

app.use('/api/products',productRouter)




app.get('/', (req, res) => {
    res.send('server is ready')
})

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message})
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})
