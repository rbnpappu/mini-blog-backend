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

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['*'],
}));

const PORT = process.env.PORT||5000;
console.log(PORT);

app.use(express.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
