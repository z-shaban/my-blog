# my-blog
My Blog Backend
A RESTful API for managing blog post and comments

## Features
CRUD operations for blog post
CRD operations for comments
user authentication with jwt
Role based access control
secure hashing with bcrypt

## Tech Stack
Runtime - nodejs
Framework - express
Database - PostgreSQL
ORM - Prisma
Authentication- JWT(jsonwebtoken)
Password hashing - bcrypt
Environment Variables -dotenv

## Getting Started

### Prerequisites
Node.js
PostgreSQL database
npm

### Installation

1. Clone the repository

2. Install dependencies

3. Set up environment variables
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET="your-secret-key"
PORT=3000

4. Run database migrations

5. Start the server

## Authentication
Authentication is by JWT
### User Roles

- **USER** (default): Can create and delete own comments, view all posts
- **ADMIN**: Full access to create, update, delete posts and all comments

## API Endpoints
## Blog Posts
# Get all Post
GET /blogs
# Get one Post
GET /blogs/:blogId
# Create blog Post
POST/blogs (Admin only)
# Update Post 
PUT/blogs/:blogId (admin only)
# Delete Post
DELETE/blogs/:blogId(admin only)

## Comments
# Get comments
GET/blogs/:blogId/comments

# add comments
POST/blogs/:blogId/comments(user)

# delete comment
DELETE/blogs/:blogId/comments/:commentId(admin/user)

## Error Handling 
uses standard error handling