const mongoose = require('mongoose')
const Joi = require('joi')

const schemaDefination = {
    name:{
        type:String,
        required:[true,'Price is required']

    },
    specs:{
        type:String
    },
    price:{
        type:Number,
        required:[true,'Price is required']
    },
    inStock:{
        type:Boolean,
        required:[true,'Stock status is required']
    }
}

const productSchema = new mongoose.Schema(schemaDefination)

const Product = mongoose.model('Product',productSchema)

module.exports = Product