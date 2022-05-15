const express = require('express')
const cors = require('cors')
const config = require('config')

const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(cors)

app.set('view engine','ejs')
app.set('views','./views')

const port = config.get('port')

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

