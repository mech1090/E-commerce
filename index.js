const express = require('express')
const cors = require('cors')
const config = require('config')
const productsPage = require('./routes/products')
const { default: mongoose } = require('mongoose')
require('./db')

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use('/products',productsPage)

app.set('view engine','ejs')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.send('OOK')
})


app.get('*',(req,res)=>{
    res.status(404).send('BAD REQUEST')
})


const port = config.get('port')

mongoose.connection.once('open',()=>{
    app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})
    console.log('db connected')
})
