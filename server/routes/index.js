const productCtrl = require('../controllers/product')

const routes = [
  {
    method: 'GET',
    url: '/api/products',
    handler: productCtrl.getProducts
  },
  {
    method: 'GET',
    url: '/api/products/:id',
    handler: productCtrl.getProductById
  }
]

module.exports = routes