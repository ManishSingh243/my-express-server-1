const express = require('express')
const shopRoutes = express.Router();

shopRoutes.post('/product', (req, res, next) => {
    var name = (req.body.productName);
    var size = (req.body.productSize);

    res.send("product name is " + name +" and product size is " +size)

    console.log("Product name is "+ name + "Product Size is " + size)
})

module.exports = shopRoutes;