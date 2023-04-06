import express from 'express'

import ProductManager from './managers/ProductManager.js'


const PORT = 8080;


const productManager = new ProductManager();
const app = express();

app.listen (PORT, ()=> {
    console.log (' Servidor levantado por puerto: '+ PORT)
})

app.get('/', async (req,res)=>{
    const products = await productManager.getProducts();
    res.send(products)
}
)