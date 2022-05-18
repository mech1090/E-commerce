const express = require('express')
const router = express.Router()
const productController = require('../controller/product.controller')
router.get('/',productController.signIn)
router.post('/',productController.signIn)
router.get('/',productController.signUp)
router.post('/',productController.signUp)



module.exports = router