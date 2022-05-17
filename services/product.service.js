const productModel = require('../models/Product.model')

const create = async fields=>{
    const newProduct = productModel(fields)
    newProduct.save()
    return newProduct
}

const updateService = async (id,fields)=>{
    return productModel.findByIdAndUpdate({_id:id},fields)
}

const deleteProduct = async (id) =>{
    return productModel.findByIdAndDelete(id)
}

const findOne = async (id)=>{return productModel.findById(id)}
const findAll = async()=>{return productModel.find()}
    

module.exports = {create,updateService,deleteProduct,findOne,findAll}