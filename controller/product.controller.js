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
    const{id} = req.params
    const{price} = req.body
    const{fields} = {price}
try{
    const existingProduct = await productModel.findById(id)
    if(existingProduct){
        console.log('IN UPDATE AREA')
        await productModel.updateOne({_id:id},{price})
    }
    return res.send(price)
}catch(error){
    console.log(error.message)
   // res.status(404).send(`product with id ${id} not found`)
    res.sendstatus(404)
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

