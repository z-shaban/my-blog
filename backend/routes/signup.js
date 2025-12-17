import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import bcrypt  from 'bcryptjs'


const signup = Router()

signup.post('/', async(req,res)=>{
    try{
       const user = await prisma.user.findUnique({
        where:{
            username: req.body.username
        }
       })

       if(user){
        return res.status(409).json({error: 'Username already exist'})
       }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await prisma.user.create({
            data:{
                username : req.body.username,
                password: hashedPassword
            }
    
        })
        res.json('user added')
    } catch(error){
        console.error(error)
    }
})

export {signup}