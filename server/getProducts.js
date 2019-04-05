const products = require('../products')

function getProducts(req, res) {
    let qCheck = req.query.price
    console.log(qCheck)
    if(qCheck > 0){
        let reqPrice = products.filter(function(ele){
            return ele.price >= +qCheck
        })
        console.log('ping from getproducts query')
        res.status(200).send(reqPrice)
    } else {
        console.log('ping from getproducts no query')
        res.status(200).send(products)
    }
    
}

function getProductsById(req, res){
    let {id} = req.params
    let idTarget =  products.filter(function(ele){
        return +ele.id === +id
    })
    if(idTarget[0]){
        res.status(200).send(idTarget[0])
    } else {
        res.status(500).send('Item not in list')
    }
    
}

module.exports = {
    getProducts,
    getProductsById
}