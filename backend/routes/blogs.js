import { Router } from 'express';
import { addComment, allBlogPosts, allComments, blogById, createBlogPost, deleteComment, deletePost, updatePost } from '../controllers/blogs.js';
import { authenticate, isAdmin } from '../middlewares/auth.js';


const blogs = Router();

blogs.post('/', authenticate,isAdmin,createBlogPost)

blogs.get('/', allBlogPosts)

blogs.get('/:blogId', blogById)

blogs.put('/:blogId',authenticate, isAdmin ,updatePost)

blogs.delete('/:blogId',authenticate,isAdmin,deletePost)

blogs.get('/:blogId/comments', allComments)

blogs.post('/:blogId/comments',authenticate, addComment)

blogs.delete('/:blogId/comments/:commentId',authenticate,deleteComment)





export {blogs}