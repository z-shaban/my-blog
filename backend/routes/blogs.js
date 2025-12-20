import { Router } from 'express';
import { addComment, allBlogPosts, allComments, blogById, createBlogPost, deleteComment, deletePost, updatePost } from '../controllers/blogs.js';
import { authenticate, authorize } from '../middlewares/auth.js';


const blogs = Router();

blogs.post('/', authenticate,authorize,createBlogPost)

blogs.get('/', allBlogPosts)

blogs.get('/:blogId', blogById)

blogs.put('/:blogId',authenticate, authorize,updatePost)

blogs.delete('/:blogId',authenticate,authorize,deletePost)

blogs.get('/:blogId/comments', allComments)

blogs.post('/:blogId/comments',authenticate, addComment)

blogs.delete('/:blogId/comments/:commentId',authenticate,deleteComment)





export {blogs}