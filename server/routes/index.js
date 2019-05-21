const productCtrl = require('../controllers/product')

const routes = [
  {
    method: 'GET',
    url: '/api/products',
    handler: productCtrl.getProducts
  },
  {
    method: 'GET',
    url: '/api/products-offset/:current/:offset',
    handler: productCtrl.getProductsByOffset
  },
  {
    method: 'POST',
    url: '/api/products',
    handler: productCtrl.addProduct
  },
  {
    method: 'GET',
    url: '/api/products/:id([0-9]+)',
    handler: productCtrl.getProductById
  },
  {
    method: 'DELETE',
    url: '/api/products/:id([0-9]+)',
    handler: productCtrl.deleteProduct
  },
  {
    method: 'GET',
    url: '/api/products-category/:category',
    handler: productCtrl.getProductByCategory
  },
]

module.exports = routes