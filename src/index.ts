import express from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
import { getPosts, createPost, updatePost, deletePost } from './controllers/posts.js';



const router = express.Router();

router.get('/admin/posts', getPosts);
router.post('/admin/posts', createPost);
router.put('/admin/posts/:id', updatePost);
router.delete('/admin/posts/:id', deletePost);




dotenv.config();

const app = express();

const allowedOrigins = [
  'https://mini-blog-frontend-dvnj.vercel.app',
  'https://mini-blog-frontend-dvnj-jyumoxyh0-pappu-thakurs-projects.vercel.app'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

const PORT = process.env.PORT||5000;
console.log(PORT);

app.use(express.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
