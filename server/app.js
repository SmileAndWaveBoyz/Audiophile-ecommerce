const express = require("express");
const app = express();

const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/audiophileCart');
mongoose.connect("mongodb+srv://SmileAndWaveBoyz:Newcross971@cluster0.o6lompz.mongodb.net/audiophileCart", {useNewUrlParser: true});


const Cart = mongoose.model('Item', { name: String, quantity: Number, price: Number, totalPrice: Number, shortName: String, mobileImagePath: String});

app.use(express.json());

app.get('/api/cart', async (req, res) => { // This poplates the items variable with the Items MongoDB database
    try {
      const items = await Cart.find({});
      res.json(items);
      // console.log(items);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Update the quantity of one item
  app.put('/api/cart/:itemName', async (req, res) => {
    const { itemName } = req.params;
    const { newQuantity } = req.body;
  
    try {
      const item = await Cart.findOneAndUpdate(
        { name: itemName },
        { $set: { quantity: newQuantity } },
        { new: true }
        
      );
      console.log("Updated " + itemName);
  
      if (!item) {
        console.log('Item not found');
        return res.status(404).json({ error: 'Item not found' });
      }
  
      return res.json(item);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.log("Internal Server Error");
    }
  });

app.listen(5000, () => {
    console.log("Server started on port 5000"); // You start the server with: npm run dev
});