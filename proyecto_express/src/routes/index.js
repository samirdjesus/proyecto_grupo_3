const express = require('express');
const router = express.Router();

const Product = require('../models/product') 

//routes
router.get('/', async (req,res)=>{
    // res.send('Hola mundo');
    const products = await Product.find();
    res.send(products);
});

router.post('/',async (req,res)=>{
    // res.send(new Product(req.body));
    // res.send(req.body);
    // res.send('Post request');
    const product = new Product(req.body);
    await product.save();
    res.send(product);
});

router.get('/:id', async(req,res)=>{
    const product = await Product.findById(req.params.id);
    res.send(product);
});

module.exports = router;