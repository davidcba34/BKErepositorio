import express from 'express'

import ProductManager from './managers/ProductManager.js';

const PORT = 8080;


const productManager = new ProductManager();
const app = express();

app.use(express.urlencoded({extended: true}))

app.listen (PORT, ()=> {
    console.log (' Servidor levantado por puerto: '+ PORT)
})

app.get('/', async (req,res) =>{
    const products = await productManager.getProducts();
    res.send(products)
})

app.get('/product/:id', async (req,res) =>{

    const id = req.params.id;
    const product = await productManager.getProduct(id);
    res.send(product)
    
})

app.get('/delete/:id', async (req,res) =>{

    const id = req.params.id;
    const msg = await productManager.deleteProduct(id);
    res.send(msg)
})


app.get('/newquery', async (req,res)=>{
    const { name, description, price, code, category} = req.query;


    if( !name || !description || !price || !code || !stock || !category){
        res.send('Faltan datos')
        return
    }

    const product = {
        id, name, description, price, code, stock, category
    }

    const msg = await productManager.addProduct(product);

    res.send(msg)
})


app.get('/editquery', async (req,res)=>{
    const {id, name, description, price, code, stock, category} = req.query;


    if(!id || !name || !description || !price || !stock || !code || !category){
        res.send('Faltan datos')
        return
    }

    

    const msg = await productManager.modifyProduct(id, name, description, price, code, stock, category);

    res.send(msg)
})