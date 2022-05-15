const express = require('express')
const cors = require('cors')
const config = require('config')

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('OOK')
})
app.get('/home',(req,res)=>{
    res.send('HOME')
})

app.get('*',(req,res)=>{
    res.status(404).send('BAD REQUEST')
})
const port = config.get('port')

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})