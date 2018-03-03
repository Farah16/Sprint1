/*const fs = require('fs')

app.post('/users', function (req, res) {
    const products = req.body
    fs.appendFile('products.txt', JSON.stringify({ID: products.ID, name: products.name, price: products.price, createdAt: products.createdAt, updatedAt: products.updatedAt, Seller: products.sellerName }), (err) => {
        res.send('successfully registered')
    })
})*/
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
  ID: {
    type: Number,
    required: true,
    min: 1
  },

  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
  SellerName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
});

mongoose.model('Product', productSchema);
