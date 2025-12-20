import express from 'express'
import { homepage } from './routes/homepage.js'
import { blogs } from './routes/blogs.js'
import { signup } from './routes/signup.js'
import { login } from './routes/login.js'



const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/signup', signup)
app.use('/login', login)
app.use('/', homepage)
app.use('/blogs', blogs)


app.listen(PORT,(error)=>{
 if(error){
    throw(error)
 }
 console.log('server is running')
})