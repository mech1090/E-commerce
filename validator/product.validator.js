const Joi = require('joi')

const validateProduct = fields=>{
    const productValidateSchema = Joi.object({
        name:Joi.string().min(3).max(120).required(),
        specs:Joi.string().max(120).required(),
        price:Joi.number().required(),
        inStock:Joi.boolean().required()


    })
    const {error,value} = productValidateSchema.validate(fields)
    return {error,value}
}
const validateupdatedProduct = fields=>{
    const productValidateSchema = Joi.object({
        name:Joi.string().min(3).max(120),
        specs:Joi.string().max(120),
        price:Joi.number(),
        inStock:Joi.boolean()


    })
    const {error,value} = productValidateSchema.validate(fields)
    return {error,value}
}
module.exports = {validateProduct,validateupdatedProduct}