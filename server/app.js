const express = require("express");
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/audiophileCart');
mongoose.connect("mongodb+srv://SmileAndWaveBoyz:Newcross971@cluster0.o6lompz.mongodb.net/audiophileCart", {useNewUrlParser: true});


const Cart = mongoose.model('Item', { name: String, quantity: Number, price: Number, totalPrice: Number, shortName: String, mobileImagePath: String, productID: Number});
const Orders = mongoose.model('Order', { 
  name: String,
  email: String,
  phone: Number,
  address: String,
  postCode: String,
  city: String,
  country: String,
  eMoneyNumber: Number,
  eMoneyPin: Number,
  uniqueIdentifier: String,
  Order: String
});

app.use(express.json());
app.use(cors());

app.get('/api/cart', async (req, res) => { // This poplates the items variable with the Items MongoDB database
    try {
      const items = await Cart.find({}).sort({ productID: 1 }); // Sort by productID in ascending order
      res.json(items);
      // console.log(items);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Receive a new order
  app.post('/api/order', async (req, res) => {
    const orderData = req.body;

    try {
        const newOrder = new Orders(orderData);
        await newOrder.save(); // Use await to wait for the save operation to complete

        res.status(200).send('Order saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving order');
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