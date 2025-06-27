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

const allowedOrigins = ['https://mini-blog-frontend-dvnj.vercel.app/', 'http://localhost:3000', 'https://miniblogfrontend.vercel.app'];
    app.use(cors({
      origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
          const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      }
    }));

const PORT = process.env.PORT;
console.log(PORT);

app.use(express.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
