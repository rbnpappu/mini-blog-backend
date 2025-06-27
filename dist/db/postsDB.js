import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
const adapter = new JSONFile('posts.json');
const db = new Low(adapter, { posts: [] });
await db.read();
db.data || (db.data = { posts: [] });
export default db;
