const jwt = require('jsonwebtoken')

const encodedtoken = jwt.sign({id:'xyz'},'mysecret')
console.log(encodedtoken)
try{
    const decodedtoken = jwt.verify(encodedtoken,'mysecret')
    console.log(decodedtoken)
}catch(e){
    console.error('ERROR IS ',e.message)
}