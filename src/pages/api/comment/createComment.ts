import type { NextApiRequest, NextApiResponse } from 'next';
// import { isUser } from '~/server/middleware/isUser'; // Commented out as it's not used currently, can be used later for jwt 
import { createComment } from '~/server/controllers/comment';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { content, postId, parentCommentId } = req.body as { content: string; postId: string; parentCommentId?: string };

        // Validate the input
        if (!content || !postId) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create the comment
        const newComment = await createComment({
            content,
            postId,
            userId: "1", // Hardcoded user ID for testing
            parentCommentId,
        });

        res.status(201).json(newComment);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}
