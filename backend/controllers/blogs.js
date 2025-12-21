import { prisma } from '../lib/prisma.js';
import "dotenv/config"

async function createBlogPost(req,res){
    try{
        await prisma.posts.create({
            data:{
                title:  req.body.title,
                content: req.body.content
            }
           
        })
         res.json('added')
    }catch(error){
        console.error(error)
         res.status(500).json({error: 'Server error'})
    }
}


async function allBlogPosts(req,res){
    try{
        const posts = await prisma.posts.findMany();
        res.json(posts)
    }catch(error){
        console.error(error)
         res.status(500).json({error: 'Server error'})
    }
}

async function blogById(req,res){
    try{
        const post = await prisma.posts.findUnique({
            where:{
                id : +req.params.blogId
            }
        })

         if(!post){
            return res.status(404).json({error: 'Post not found'});
        }
        res.json(post)
    }catch(error){
        console.error(error)
         res.status(500).json({error: 'Server error'})
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
        res.json('edited')
    }catch(error){
        console.error(error)
         res.status(500).json({error: 'Server error'})
    }
}

async function deletePost(req,res) {
     try{
        await prisma.posts.delete({
            where:{
                id : +req.params.blogId
            }
        })
        res.send('deleted post')
    }catch(error){
        console.error(error)
         res.status(500).json({error: 'Server error'})
    }
}

async function addComment(req,res){
    try{
             await prisma.comment.create({
            data:{
                userId : req.user.sub,
                comment: req.body.comment,
                postId: +req.params.blogId
            }
        })
        res.json('comment added')
        
    }catch(error){
        console.error(error)
         res.status(500).json({error: 'Server error'})
    }
}

async function allComments(req,res) {
    try{
        const comments = await prisma.comment.findMany({
            where:{
                postId : +req.params.blogId
            }
        })
        res.json(comments)
    }catch(error){
        console.error(error)
         res.status(500).json({error: 'Server error'})
    }
}

async function deleteComment(req,res) {
    try{
        const comment = await prisma.comment.findUnique({
            where: {id: +req.params.commentId}
        })

        if(!comment){
            return res.status(404).json({error : "comment not found"})
        }
        if(req.user.role === "ADMIN" || req.user.sub === comment.userId){
            await prisma.comment.delete({
            where:{
                id : +req.params.commentId
            }
        })
        res.send('deleted comment')
        }else{
            res.status(403).json({error: "not allowed"})
        }
        
    }catch(error){
        console.error(error)
         res.status(500).json({error: 'Server error'})
    } 
}
export{createBlogPost, allBlogPosts, blogById, updatePost, deletePost, allComments, addComment,deleteComment}