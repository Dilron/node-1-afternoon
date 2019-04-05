const express = require('express')
const app = express()
const port = 5000
const products = require('../products.json')
const getProducts = require('./getProducts')

app.listen(port, () => {
    console.log('start listening')
})

app.get('/api/products', getProducts.getProducts)

app.get('/api/products/:id', getProducts.getProductsById)