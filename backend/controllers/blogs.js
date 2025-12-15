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

async function blogById(req,res){
    try{
        const post = await prisma.posts.findUnique({
            where:{
                id : +req.params.blogId
            }
        })
        res.send(post)
    }catch(error){
        console.error(error)
    }
}

async function updatePost(req,res) {
    try{
        await prisma.posts.update({
            where:{
                id : +req.params.blogId
            },
            data:{
                title : req.body.title,
                content : req.body.content
            }
        })
        res.send('edited')
    }catch(error){
        console.error(error)
    }
}

async function deletePost(req,res) {
     try{
        await prisma.posts.delete({
            where:{
                id : +req.params.blogId
            }
        })
        res.send('deleted')
    }catch(error){
        console.error(error)
    }
}

export{createBlogPost, allBlogPosts, blogById, updatePost, deletePost}