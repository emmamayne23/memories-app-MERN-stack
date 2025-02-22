# Memories - Share Your Experiences

A full-stack social media application that allows users to share and interact with memorable experiences. Users can create, like, and comment on posts about their special moments.

## Overview

Memories is a MERN stack application where users can post and share their experiences, adventures, and special moments with others. Each memory can include text, images, and tags, allowing for rich content sharing.

![Memories App Screenshot]![memories app site](https://github.com/user-attachments/assets/cda8884c-e9be-4770-8545-781093f02ca6)

## Features


- **User Authentication**
  - Secure signup and login
  - JWT-based authentication
  - Google OAuth integration (if implemented)

- **Post Management**
  - Create new memory posts
  - Upload images
  - Edit existing posts
  - Delete posts
  - Like posts
  - Add tags to posts

- **Social Features**
  - Comment on posts
  - View other users' memories
  - Search memories by tags
  - Real-time updates

## Technologies Used

<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material UI" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" />
</div>

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/memories.git
cd memories
```

2. Install dependencies for both frontend and backend
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables
```bash
# In server directory, create a .env file
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# In client directory, create a .env file
REACT_APP_API_URL=http://localhost:5000
```

4. Start the development servers
```bash
# Start server (from server directory)
npm run dev

# Start client (from client directory)
npm start
```

## Project Structure

```
memories/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── actions/
│   │   ├── reducers/
│   │   └── api/
│   └── public/
└── server/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    └── config/
```

## API Endpoints

```
POST   /api/users/signup    - Register new user
POST   /api/users/signin    - Login user
POST   /api/posts          - Create new post
GET    /api/posts          - Fetch all posts
PATCH  /api/posts/:id      - Update post
DELETE /api/posts/:id      - Delete post
PATCH  /api/posts/:id/like - Like post
```

## Features in Detail

### Authentication
- JWT-based authentication system
- Secure password hashing
- Protected routes

### Posts
- Create, read, update, and delete posts
- Image upload functionality
- Tag system for categorization
- Like/unlike functionality

### User Interface
- Responsive design
- Material UI components
- Tailwind CSS styling
- Modern and intuitive layout

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Future Improvements

- Real-time notifications
- User profiles
- Follow/unfollow functionality
- Direct messaging
- Post sharing
- Enhanced search functionality
