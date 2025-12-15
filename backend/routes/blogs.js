import { Router } from 'express';
import { allBlogPosts, createBlogPost } from '../controllers/blogs.js';


const blogs = Router();

blogs.post('/', createBlogPost)

blogs.get('/', allBlogPosts)

/*blog.get('/:blogId', blogById)*/


export {blogs}