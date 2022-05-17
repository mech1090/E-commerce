const productModel = require('../models/Product.model')
const {validateProduct} = require('../validator/product.validator')
const serviceProduct = require('../services/product.service')

const findAll = async(req,res)=>{
    productList = await productModel.find({})
    res.send(productList)
}
const findOne = async (req,res)=>{
    const {id} = req.params
    try{
        const product = await productModel.findById(id)
        return res.send(product)
    }catch(error){
        res.status(404).send(`product with id ${id} not found `)
    }

}

const createOne = async(req,res)=>{
    const{name,specs,price,inStock} = req.body
    const fields = {name,specs,price,inStock}
    const {error,value} = validateProduct(fields)
    if(error){
        res.status(400).send(error.details[0].message)
    }
    const newProduct = await serviceProduct.create(value)
    res.send(newProduct)

}

const update= async(req,res)=>{
    const{id} = req.params
    const{name,specs,price,inStock} = req.body
    const fields = {name,specs,price,inStock}
try{
    const updatedProduct = await serviceProduct(id,fields)
    return res.send(updatedProduct)
}catch(error){
    console.log(error.message)
    res.status(404).send(`product with id ${id} not found`)
}

}


const deleteOne = async(req,res)=>{
    const {id} = req.params
    try{
            await productModel.findByIdAndDelete(id)
            return res.send('Deleted')
    }catch(error){
        res.status(404).send(`Product with id ${id} not found`)
    }
   

}


module.exports = {
    findAll,
    findOne,
    update,
    createOne,
    deleteOne
}

/*
const createOne = async(req,res)=>{
    const{name,specs,price,inStock} = req.body
    const fields = {name,specs,price,inStock}
    const {error,value} = validateProduct(fields)
    if(error){
        res.status(400).send(error.details[0].message)
    }
    const newProduct = productModel(value)
    await newProduct.save()
    res.send(newProduct)

}
*/