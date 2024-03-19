// pages/api/comment/updateComment.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { updateComment } from '~/server/controllers/comment';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PATCH') { // Ensuring the HTTP method is PATCH for updates
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { commentId, content } = req.body as {
        commentId: string;
        content: string;
    };

    if (!commentId || !content) { // Only checking for commentId and content
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const updatedComment = await updateComment(commentId, content); // Calling the update function with the necessary arguments
        res.status(200).json(updatedComment);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}
