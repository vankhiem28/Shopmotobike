import express from 'express'
import data from './data.js'

const app = express();

app.get('/api/productsHome', (req, res) => {
    res.send(data.productsHome)
})

app.get('/', (req, res) => {
    res.send('server is ready')
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})