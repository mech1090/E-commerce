const productModel = require('../models/Product.model')
const {validateProduct,validateupdatedProduct} = require('../validator/product.validator')
const serviceProduct = require('../services/product.service')

const findAll = async(req,res)=>{
    try{
        const products = await serviceProduct.findAll()
        return res.send(products)
    }catch(error){
        return res.status(404).send('Bad error')
    }
}
const findOne = async (req,res)=>{
    const {id} = req.params
    try{
        const product = await serviceProduct.findOne(id)

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
    const validatedFields = validateupdatedProduct(fields)
try{
    const product = await serviceProduct.updateService(id,validatedFields)
    return res.send(product)
}catch(error){
    console.log(error.message)
    res.status(404).send(`product with id ${id} not found`)
}

}


const deleteOne = async(req,res)=>{
    const {id} = req.params
    try{
            const {badError,product} = await serviceProduct.deleteProduct(id)
            return res.send(product)
            if(badError){
                return res.status(400).send('Can not be deleted')
            }
    }catch(error){
        return res.status(404).send(`Product with id ${id} not found`)
    }
   

}


module.exports = {
    findAll,
    findOne,
    update,
    createOne,
    deleteOne
}

