Me-API Playground 🚀

A personal API showcase built with the MERN stack, designed to present my profile, skills, and projects through a RESTful API and a React frontend.

🌐 Live Demo Frontend: https://me-api-playground-frontend.onrender.com

Health Check: https://me-api-playground-backend-4n1g.onrender.com/health

GitHub Repository: https://github.com/Nishant-NITG/Me-API-Playground

Resume: https://drive.google.com/file/d/1RdQp85k_nfEzPtAssksR0PdqV43LdKsl/view?usp=sharing

🛠 Tech Stack

Client: React, JavaScript, TailwindCSS, Vite
Server: Node.js, Express.js, MongoDB, Mongoose, CORS
Deployment: Render (Frontend & Backend), MongoDB Atlas

📖 Project Overview

Me-API Playground is a dynamic personal API platform to showcase my developer profile, skills, and projects. It demonstrates backend API development through a RESTful interface while providing a sleek frontend built with React, featuring a modern glassmorphism UI design.

🏗 Architecture

System Flow:
Client (React Frontend) → API Gateway (Express.js) → MongoDB Database

Frontend Architecture:

Framework: React 18 with Vite

Styling: Tailwind CSS with custom glassmorphism

State Management: React Hooks

HTTP Client: Native Fetch API

Build Tool: Vite

Backend Architecture:

Runtime: Node.js

Framework: Express.js

Database: MongoDB via Mongoose

CORS: Configured for cross-origin requests

Environment Config: dotenv

🚀 Setup Instructions
Local Development

Prerequisites:

Node.js 16+

MongoDB Atlas account or local MongoDB

Git

Backend Setup:

git clone https://github.com/Nishant-NITG/Me-API-Playground.git
cd Me-API-Playground/backend
npm install
cp .env.example .env
# Update .env with your MongoDB URI
DB_CONNECT_STRING=your_mongodb_connection_string
PORT=5000
npm run dev


Frontend Setup:

cd ../frontend
npm install
npm run dev

Production Deployment

Backend (Render):

Connect GitHub repo to Render

Root directory: backend

Add environment variables:

DB_CONNECT_STRING = MongoDB connection string

PORT = 5000

NODE_ENV = production

Frontend (Render):

Create a static site

Root directory: frontend

Build command: npm run build

Publish directory: dist

Environment variable: VITE_API_URL = your-backend-url.onrender.com

🗄 Database Schema

User Collection:

{
  _id: ObjectId,
  name: String,
  email: String,
  education: [{ institution: String, degree: String, year: String }],
  skills: [String],
  projects: [{ title: String, description: String, links: [String], skills: [String] }],
  work: [{ company: String, position: String, duration: String, description: String }],
  links: { github: String, linkedin: String, portfolio: String },
  createdAt: Date,
  updatedAt: Date
}


Indexes:

email → Unique index for user identification

📡 API Endpoints

Base URL: https://me-api-playground-backend-4n1g.onrender.com/api

Method	Endpoint	Description	Parameters
GET	/user	Retrieve full user profile	None
PUT	/user	Create or update user profile	User data in request body
GET	/user/projects	Fetch projects filtered by skill	skill (query parameter)
GET	/user/skills/top	Get top skills	None
GET	/user/search	Search across all user data	q (query parameter)

cURL Examples:

# Health Check
curl https://me-api-playground-backend-4n1g.onrender.com/health

# Get User Profile
curl https://me-api-playground-backend-4n1g.onrender.com/api/user

# Get Projects by Skill
curl "https://me-api-playground-backend-4n1g.onrender.com/api/user/projects?skill=javascript"

# Search Across Data
curl "https://me-api-playground-backend-4n1g.onrender.com/api/user/search?q=react"

# Get Top Skills
curl https://me-api-playground-backend-4n1g.onrender.com/api/user/skills/top

⚠ Known Limitations

No authentication for write operations

No rate limiting

Large datasets not paginated

Limited input validation

Basic error handling without full logging

Minimal test coverage

No caching implemented

Profile image uploads not supported

📞 Contact Nishant Sharma

📧 Email: nishshar23@gmail.com

🔗 LinkedIn Profile

🐙 GitHub Profile

📄 License: MIT License - see LICENSE file
