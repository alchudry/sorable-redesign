const mongoose = require('mongoose')
// Collection Schema

// Product
const productSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  category: String,
  featuredImage: String,
  galleryImage: Array,
  price: String,
  color: String
})
const collectionName = 'product';
module.exports = mongoose.model('Product', productSchema, collectionName)