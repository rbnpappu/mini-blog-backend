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


const allowedOrigins = [
  'https://mini-blog-frontend-dvnj.vercel.app',
  'https://mini-blog-frontend-dvnj-jyumoxyh0-pappu-thakurs-projects.vercel.app',
  'https://mini-blog-frontend-dvnj-pappu-thakurs-projects.vercel.app',
];


app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.options('*', cors())
app.use(express.json());

// ✅ Define API routes
const router = express.Router();
router.get('/admin/posts', getPosts);
router.post('/admin/posts', createPost);
router.put('/admin/posts/:id', updatePost);
router.delete('/admin/posts/:id', deletePost);


app.use(router);

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
