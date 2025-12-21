# My Blog Backend

A RESTful API for managing blog posts and comments

---

## Features

- CRUD operations for blog posts
- CRD operations for comments
- User authentication with JWT
- Role-based access control
- Secure password hashing with bcrypt

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** bcrypt
- **Environment Variables:** dotenv

---

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL database
- npm

### Installation

1. **Clone the repository**

2. **Install dependencies**

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
```env
   DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
   JWT_SECRET="your-secret-key"
   PORT=3000
```

4. **Run database migrations**

5. **Start the server**

---

## Authentication

This API uses JWT (JSON Web Tokens) for authentication.

### User Roles

- **USER** (default): Can create and delete own comments, view all posts
- **ADMIN**: Full access to create, update, delete posts and all comments

---

## API Endpoints


### Blog Posts

**Get all posts**
```
GET /blogs
```
*Access: Public*

**Get single post**
```
GET /blogs/:blogId
```
*Access: Public*

**Create blog post**
```
POST /blogs
```
*Access: Admin only*

**Update post**
```
PUT /blogs/:blogId
```
*Access: Admin only*

**Delete post**
```
DELETE /blogs/:blogId
```
*Access: Admin only*

---

### Comments

**Get all comments for a post**
```
GET /blogs/:blogId/comments
```
*Access: Public*

**Add comment**
```
POST /blogs/:blogId/comments
```
*Access: Authenticated users*

**Delete comment**
```
DELETE /blogs/:blogId/comments/:commentId
```
*Access: Admin or Comment owner*

---

## Error Handling

The API uses standard HTTP status codes:

- `200` - Success
- `401` - Unauthorized (not logged in)
- `403` - Forbidden (insufficient permissions)
- `404` - Not found
- `500` - Server error

---

