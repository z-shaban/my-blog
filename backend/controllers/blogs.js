import { prisma } from '../lib/prisma.js';

async function createBlogPost(req,res){
    try{
        await prisma.posts.create({
            data:{
                title:  req.body.title,
                content: req.body.content
            }
           
        })
         res.send('added')
    }catch(error){
        console.error(error)
    }
}


async function allBlogPosts(req,res){
    try{
        const posts = await prisma.posts.findMany();
        res.send(posts)
    }catch(error){
        console.error(error)
    }
}

export{createBlogPost, allBlogPosts}