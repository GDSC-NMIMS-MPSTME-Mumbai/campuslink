import type { NextApiRequest, NextApiResponse } from 'next';
import { getCommentsForPost } from '~/server/controllers/comment';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Extract post ID from query parameters and assert the type for better type safety
    const postId = req.query.postId as string;

    if (!postId) {
        return res.status(400).json({ error: 'Post ID is required' });
    }

    try {
        const comments = await getCommentsForPost(postId);
        res.status(200).json(comments);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}
