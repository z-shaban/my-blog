import { prisma } from '../lib/prisma.js';
import  jwt from 'jsonwebtoken';
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
        res.json('edited')
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
        res.send('deleted post')
    }catch(error){
        console.error(error)
    }
}

async function addComment(req,res){
    try{
        await prisma.comment.create({
            data:{
                userId : +req.body.userId,
                comment: req.body.comment,
                postId: +req.params.blogId
            }
        })
        res.json('comment added')
    }catch(error){
        console.error(error)
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
    }
}

async function deleteComment(req,res) {
    try{
        await prisma.comment.delete({
            where:{
                id : +req.params.commentId
            }
        })
        res.send('deleted comment')
    }catch(error){
        console.error(error)
    } 
}
export{createBlogPost, allBlogPosts, blogById, updatePost, deletePost, allComments, addComment,deleteComment}