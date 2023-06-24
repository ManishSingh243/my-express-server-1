const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get("/add-product", (req, res)=>{
    res.sendFile(__dirname+"/addProduct.html")
})

app.post("/", (req, res)=>{
    var name = (req.body.productName);
    var size = (req.body.productSize);

   console.log("Product name is:-"+ name+ "product size is:-" + size)
})

app.listen(3000)