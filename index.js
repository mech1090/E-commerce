const express = require('express')
const cors = require('cors')
const config = require('config')

const app = express()

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.set('view engine','ejs')
app.set('views','./views')

const port = config.get('port') || 8080
app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})