import { prisma } from '../lib/prisma.js';
import { Router } from "express";

const homepage = Router();

homepage.get('/',async(req,res)=>{
    try{
        const posts = await prisma.posts.findMany({
            take: 3
        })
         res.json(posts)
    }catch(error){
        console.error(error)
        res.status(500).json({error:'server error'})
    }
   
})

export {homepage}