const boom = require('boom')

// Import Model Schema
const Product = require('../models/product')

exports.addProduct = async (req, reply) => {
  try {
    const product = new Product(req.body)
    return product.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}
exports.getProducts = async (req, reply) => {
  try {
    const products = await Product.find()
    return products
  } catch (err) {
    throw boom.boomify(err)
  }
}
exports.getProductsByOffset = async (req, reply) => {
  try {
    const current = Number(req.params.current)
    const offset = Number(req.params.offset)
    const products = await Product.find().skip(current).limit(offset)
    return products
  } catch (err) {
    throw boom.boomify(err)
  }
}
exports.getProductById = async (req, reply) => {
  try {
    const id = req.params.id
    const product = await Product.findById(id)
    return product
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getProductByCategory = async (req, reply) => {
  try {
    const category = req.params.category
    const product = await Product.find({'category': category})
    return product
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getRelatedProduct = async (req, reply) => {
  try {
    // Random Product
    var qry = {};
    var amt = Product.count(qry);
    var rnd = Math.floor(Math.random() * amt);
    const product = await Product.find(qry).limit(10).skip(rnd)
    return product
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.deleteProduct = async (req, reply) => {
  try {
    const id = req.params.id
    const product = Product.findByIdAndRemove(id)
    return product
  } catch (err) {
    throw boom.boomify(err)
  }
}