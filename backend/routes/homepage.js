import { Router } from "express";

const homepage = Router();

homepage.get('/',(req,res)=>{
    res.json('homepage')
})

export {homepage}