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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://mini-blog-frontend-dvnj.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



const PORT = process.env.PORT;
console.log(PORT);

app.use(express.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
