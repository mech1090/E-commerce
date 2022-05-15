const mongoose = require('mongoose')
const config = require('config')

const datalink = config.get('database.uri')
const option ={useNewUrlParser:true,useUnifiedTopology:true}
module.exports = mongoose.connect(datalink,option).catch(error=>console.log(error))