const mongoose = require('mongoose')
// Collection Schema

// Product
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  thumbnail: String,
  gallery: Array,
  price: String,
  color: String
})
const collectionName = 'product';
module.exports = mongoose.model('Product', productSchema, collectionName)