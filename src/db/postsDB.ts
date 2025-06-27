import { Low } from 'lowdb';

import { JSONFile } from 'lowdb/node';

export type Post = {
    id: string,
    title: string,
    body: string
}


type Data = {
    posts: Post[];
};

const adapter = new JSONFile<Data>('posts.json');
const db = new Low<Data>(adapter, {posts: []});

await db.read();
db.data ||= { posts: [] };

export default db;