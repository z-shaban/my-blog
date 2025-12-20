import { Router } from 'express';
import { addComment, allBlogPosts, allComments, blogById, createBlogPost, deleteComment, deletePost, updatePost } from '../controllers/blogs.js';
import { authenticate } from '../middlewares/auth.js';


const blogs = Router();

blogs.post('/', createBlogPost)

blogs.get('/', allBlogPosts)

blogs.get('/:blogId', blogById)

blogs.put('/:blogId',updatePost)

blogs.delete('/:blogId',deletePost)

blogs.get('/:blogId/comments',authenticate, allComments)

blogs.post('/:blogId/comments', addComment)

blogs.delete('/:blogId/comments/:commentId', deleteComment)





export {blogs}