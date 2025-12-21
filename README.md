# My Blog Backend

A RESTful API for managing blog posts and comments

---

## Features

-  CRUD operations for blog posts
-  CRD operations for comments
-  User authentication with JWT
-  Role-based access control
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
```bash
   git clone <your-repo-url>
   cd my-blog
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
```env
   DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
   JWT_SECRET="your-secret-key"
   PORT=3000
```

4. **Run database migrations**
```bash
   npx prisma migrate dev
```

5. **Start the server**
```bash
   npm start
```

The API will be running at `http://localhost:3000`

---

## Authentication

This API uses JWT (JSON Web Tokens) for authentication.

### User Roles

- **USER** (default): Can create and delete own comments, view all posts
- **ADMIN**: Full access to create, update, delete posts and all comments

---

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Blog Posts

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/blogs` | Public | Get all posts |
| GET | `/blogs/:blogId` | Public | Get single post |
| POST | `/blogs` | Admin only | Create blog post |
| PUT | `/blogs/:blogId` | Admin only | Update post |
| DELETE | `/blogs/:blogId` | Admin only | Delete post |

### Comments

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/blogs/:blogId/comments` | Public | Get all comments for a post |
| POST | `/blogs/:blogId/comments` | Authenticated users | Add comment |
| DELETE | `/blogs/:blogId/comments/:commentId` | Admin or Comment owner | Delete comment |

---

## Error Handling

The API uses standard HTTP status codes:

- `200` - Success
- `401` - Unauthorized (not logged in)
- `403` - Forbidden (insufficient permissions)
- `404` - Not found
- `500` - Server error

---

