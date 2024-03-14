const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const wishlistController = require('../Controllers/wishlistController')
const cartController = require('../Controllers/cartController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const router = new express.Router()

// getAllproduct route
router.get('/all-products',productController.getAllProducts)

// register route
router.post('/register',userController.register)

// login router
router.post('/login',userController.login)

// get A product
router.get('/get-a-product/:id',productController.getAProduct)

// add to wishlist
router.post('/add-to-wishlist',jwtMiddleware,wishlistController.addToWishlist)

// view wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlist)

// remove from wishlist
router.delete('/wishlist-remove/:id',jwtMiddleware,wishlistController.removeProductWishlist)

// add to cart
router.post('/add-to-cart',jwtMiddleware,cartController.addToCart)

// get cart
router.get('/get-cart',jwtMiddleware,cartController.getCart)

// remove cart item
router.delete('/remove-cart/:id',jwtMiddleware,cartController.removeCartItem)

// increment item
router.get('/cart-increment/:id',cartController.incrementItem)

// decrement item
router.get('/cart-decrement/:id',cartController.decrementItem)

// empty cart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)

module.exports = router