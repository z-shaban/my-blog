const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT,(error)=>{
 if(error){
    throw(error)
 }
 console.log('server is running')
})