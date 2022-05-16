const productModel = require('../models/Product.model')

const findAll = async(req,res)=>{
    productList = await productModel.find({})
    res.send(productList)
}
const findOne = (req,res)=>{}

const createOne = async(req,res)=>{
    const{name,specs,price,inStock} = req.body
  //  const newfield = {name,specs,price,inStock}
    const newProduct = productModel({name,specs,price,inStock})
    await newProduct.save()
    res.send(newProduct)

}

const update= async(req,res)=>{
    const {id} = req.params
    const {price} = req.body
    const {fieldS} = {price}
    
    try{
        const existingProduct = await productModel.findById(id)
        if(existingProduct){
            console.log(existingProduct)
            console.log(fieldS)
            console.log(price)
            await productModel.updateOne({_id:id},fieldS)
        }
        return res.send('updated')
    } catch(error){
        return res.status(404).send(`can not find ${id}`)

    }
}


const deleteOne = (req,res)=>{}

module.exports = {
    findAll,
    findOne,
    update,
    createOne,
    deleteOne
}

