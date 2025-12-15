import { Router } from 'express';
import { allBlogPosts, blogById, createBlogPost, deletePost, updatePost } from '../controllers/blogs.js';


const blogs = Router();

blogs.post('/', createBlogPost)

blogs.get('/', allBlogPosts)

blogs.get('/:blogId', blogById)

blogs.put('/:blogId',updatePost)

blogs.delete('/:blogId',deletePost)


export {blogs}