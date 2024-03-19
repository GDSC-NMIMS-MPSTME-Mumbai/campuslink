// pages/api/comment/deleteComment.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { deleteComment } from '~/server/controllers/comment';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Extract only commentId from the request body
    const { commentId } = req.body as { commentId: string; };

    // checking comment id which is needed for deletion
    if (!commentId) {
        return res.status(400).json({ error: 'Comment ID is required' });
    }

    try {
        await deleteComment(commentId);
        res.status(204).end(); // indicating successful deletion
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}
