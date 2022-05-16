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
    const{name,specs,price,inStock} = req.body
    const fields = {name,specs,price,inStock}
try{
    const existingProduct = await productModel.findById(id)
    if(existingProduct){
        await productModel.updateOne({_id:id},{name,specs,price,inStock})
    }
    return res.send(price)
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

