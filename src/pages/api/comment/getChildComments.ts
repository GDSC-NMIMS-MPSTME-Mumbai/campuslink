import type { NextApiRequest, NextApiResponse } from 'next';
import { getChildComments } from '~/server/controllers/comment';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const parentCommentId = req.query.parentCommentId as string;

    if (!parentCommentId) {
        return res.status(400).json({ error: 'Parent Comment ID is required' });
    }

    try {
        const comments = await getChildComments(parentCommentId);
        res.status(200).json(comments);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}
