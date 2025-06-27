import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getPosts, createPost, updatePost, deletePost } from './controllers/posts.js';

dotenv.config();

const app = express();


app.use((req, res, next) => {
  console.log('🌍 Request origin:', req.headers.origin);
  next();
});


const allowedOrigins = [
  'https://mini-blog-frontend-dvnj.vercel.app',
  'https://mini-blog-frontend-dvnj-jyumoxyh0-pappu-thakurs-projects.vercel.app',
  'https://mini-blog-frontend-dvnj-pappu-thakurs-projects.vercel.app'
];


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('❌ Not allowed by CORS: ' + origin));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

const router = express.Router();
router.get('/admin/posts', getPosts);
router.post('/admin/posts', createPost);
router.put('/admin/posts/:id', updatePost);
router.delete('/admin/posts/:id', deletePost);
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
