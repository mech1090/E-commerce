const productModel = require('../models/Product.model')

const create = async fields=>{
    const newProduct = productModel(fields)
    newProduct.save()
    return newProduct
}

const updateService = async (id,fields)=>{
    return productModel.findByIdAndUpdate({_id:id},fields)
}

module.exports = {create,updateService}