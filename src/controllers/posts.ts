import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import db, { Post } from '../db/postsDB.js';

const getPosts = async (req: Request, res: Response) => {
    try {
        await db.read();
        return res.status(200).json(db.data?.posts || []);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching posts', error });
    }
};

const createPost = async (req: Request, res: Response) => {
    try {
        const { title, body } = req.body;

        if (!title || !body) {
            return res.status(400).json({
                message: 'Title and post body are required',
            });
        }

        const newPost: Post = {
            id: uuidv4(),
            title,
            body
        };

        await db.read();
        db.data?.posts.push(newPost);
        await db.write();

        return res.status(201).json({
            message: 'Post created successfully',
            post: newPost
        });

    } catch (error) {
        return res.status(500).json({ message: 'Error creating post', error });
    }
};

const updatePost = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { title, body } = req.body;

        if (!title || !body) {
            return res.status(400).json({
                message: 'Title and post body are required',
            });
        }

        await db.read();

        const findPost = db.data?.posts.find((post: Post) => post.id === id);
        if (!findPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        findPost.title = title;
        findPost.body = body;

        await db.write();

        return res.status(200).json({
            message: 'Post updated successfully',
            post: findPost,
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Error updating post',
            error: error instanceof Error ? error.message : error,
        });
    }
};

const deletePost = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const findPost = db.data?.posts.find((post: Post) => post.id === id);

        if (!findPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        db.data!.posts = db.data!.posts.filter((post: Post) => post.id !== id);
        await db.write();

        return res.status(200).json({ message: 'Post deleted successfully' });

    } catch (error) {
        return res.status(500).json({ message: 'Error deleting post', error });
    }
};

export {
    createPost,
    getPosts,
    updatePost,
    deletePost
};
