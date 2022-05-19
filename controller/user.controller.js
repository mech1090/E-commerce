const bcrypt = require('bcrypt')
const config = require('config')
const userModel = require('../models/Users')

const getLoginForm = (req,res)=>{
    res.render('login/layout')
}
const login = (req,res)=>{}
const getSignupForm = (req,res)=>{
    res.render('signup/layout')
}
const signUp = async(req,res)=>{
    const {email,password} = req.body
    const passwordHash = await bcrypt.hash(password,config.get('hashing.salt'))
    const user = await userModel.create({email,password:passwordHash})
    console.log(email,passwordHash)
    res.send(user)
}


module.exports = {getLoginForm,login,getSignupForm,signUp}