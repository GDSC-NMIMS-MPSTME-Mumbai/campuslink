// get post api

import { type NextApiRequest, type NextApiResponse } from 'next'
import { type Posts, getPostById } from '~/server/controllers/posts';
import { isUser } from '~/server/middleware/isUser';
import jwt from 'jsonwebtoken';
import { env } from '~/env';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const postData: Posts | null = await getPostById('1', '2');
        res.status(200).json(postData);
    }
    catch (error) {
        res.status(500).json({ error: 'Error connecting to database' });
    }
}
