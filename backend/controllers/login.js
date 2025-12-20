import jwt from "jsonwebtoken" 
import { prisma } from "../lib/prisma.js"
import bcrypt from "bcryptjs"
import 'dotenv/config'

async function userLogin(req,res){
   try{
    const user = await prisma.user.findUnique({
        where:{
            username: req.body.username
        }
    })

    if(!user){
        return res.status(401).json({error:"Invalid Credentials"})
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword){
        return res.status(401).json({error:"Invalid Credentials"})
    }
    
    
   jwt.sign(
    {sub: user.id,
    role: user.role
    },
    process.env.JWT_SECRET,
    {expiresIn:"7d"},
   (error,token)=>{
    if(error){
        res.status(500).json({error: "Error generating token"})
    }
    res.json({token})
   })

   }catch(error){
    console.error(error)
   }

}

export {userLogin}