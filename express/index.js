const express =require("express");
const mongoose = require("mongoose")

const app =express();

const productcontroller =require("./controllers/product.controllers");
const cartcontroller =require("./controllers/cart.controller")

app.use(express.json());
 
const connect =require("./config/db")


app.use("/product",productcontroller)
app.use("/cart",cartcontroller)






app.listen(5501,async()=>{
    try {
        await connect()
    } catch (error) {
        console.log(error);
    }
    console.log("listining at 5000")
    });













