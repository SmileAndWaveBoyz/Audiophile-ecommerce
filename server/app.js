const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/audiophileCart');

const Cart = mongoose.model('Item', { name: String, quantity: Number, price: Number, totalPrice: Number});

async function logCart() {
    const items= await Cart.find({});
    items.forEach(function(item){
        console.log(item);
    });
}
logCart();


app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo"]})
});

app.listen(5000, () => {
    console.log("Server started on port 5000"); // You start the server with: npm run dev
});