import express from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
import { getPosts, createPost, updatePost, deletePost } from './controllers/posts.js';









dotenv.config();

const app = express();


app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
}))


const router = express.Router();

router.get('/admin/posts', getPosts);
router.post('/admin/posts', createPost);
router.put('/admin/posts/:id', updatePost);
router.delete('/admin/posts/:id', deletePost);




const PORT = process.env.PORT;
console.log(PORT);

app.use(express.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
