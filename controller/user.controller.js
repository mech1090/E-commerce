const bcrypt = require('bcrypt')
const config = require('config')
const User = require('../models/Users')
const userModel = require('../models/Users')
const jwt = require('jsonwebtoken')

const getLoginForm = (req,res)=>{
    res.render('login/layout')
}
const login = async(req,res)=>{
    try{
        const{email,password} = req.body
        //   const passwordHash = await bcrypt.hash(password,config.get('hashing.salt'))
           user = await User.findOne({email})
           const isuthorized = await bcrypt.compare(password,user.password)
           if(isuthorized){
               const token = jwt.sign({_id:user._id},'mysecret')
               console.log(token)
               return res.header({'x-auth-token':token})
               .render('login/layout',{message:'Login Successful'})
            }
            return res.render('login/layout',{message:'Email not Found'})
    }catch(error){
        res.render('login/layout',{message:'Error while Login'})
    }

}

const getSignupForm = (req,res)=>{
    res.render('signup/layout')
}
const signUp = async(req,res)=>{
    try{
        const {email,password} = req.body
        const passwordHash = await bcrypt.hash(password,config.get('hashing.salt'))
        const user = await userModel.create({email,password:passwordHash})
        return res.render('signup/layout',{message:'Signup successful'})
    }catch(error){
        res.render('signup/layout',{message:'Error while Signup'})
    }
}


module.exports = {getLoginForm,login,getSignupForm,signUp}