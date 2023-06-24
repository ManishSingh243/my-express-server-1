const express = require('express')

const adminRouter = express.Router()

adminRouter.get("/add-product", (req, res)=>{
    res.send("<html><body><form action='/product' method='POST'><input type='text' name='productName'><input type='text' name='productSize'><button type='submit' name='result'>submit</button></form></body></html>")
})

module.exports = adminRouter