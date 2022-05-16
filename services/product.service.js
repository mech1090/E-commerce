const productModel = require('../models/Product.model')

const create = async fields=>{
    const newProduct = productModel(fields)
    newProduct.save()
    return newProduct
}

module.exports = {create}