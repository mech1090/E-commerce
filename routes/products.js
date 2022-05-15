const express = require('express')
const router = express.Router()
const productController = require('../controller/product.controller')
router.get('/',productController.findAll)
router.get('/:id',productController.findOne)
router.post('/',productController.createOne)
router.patch('/:id',productController.update)
router.delete('/:id',productController.deleteOne)

module.exports = router