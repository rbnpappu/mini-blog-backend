import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getPosts, createPost, updatePost, deletePost } from './controllers/posts.js';

dotenv.config();

const app = express();

// ✅ Log incoming origin for CORS debugging
app.use((req, res, next) => {
  console.log('🌍 Request Origin:', req.headers.origin);
  next();
});

// ✅ Allowed production frontends (no trailing slashes!)
const allowedOrigins = [
  'https://mini-blog-frontend-dvnj.vercel.app',
  'https://mini-blog-frontend-dvnj-jyumoxyh0-pappu-thakurs-projects.vercel.app',
  'https://mini-blog-frontend-dvnj-pappu-thakurs-projects.vercel.app',
];

// ✅ CORS config
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // ✅ allow
    } else {
      console.log(`❌ Blocked by CORS: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Define API routes
const router = express.Router();
router.get('/admin/posts', getPosts);
router.post('/admin/posts', createPost);
router.put('/admin/posts/:id', updatePost);
router.delete('/admin/posts/:id', deletePost);

// ✅ Register router
app.use(router);

// ✅ Dynamic port for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
