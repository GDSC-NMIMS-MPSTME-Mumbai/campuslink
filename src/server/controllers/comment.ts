import { db as prisma } from '~/server/db/db';



export interface Comment {
    id: string;
    content: string;
    postId: string;
    userId: string;
    parentCommentId?: string | null; // Keeping it Optional
}

// Function to create a comment
export async function createComment(commentData: Omit<Comment, 'id'>) {
    try {
        const createdComment = await prisma.comment.create({
            data: {
                content: commentData.content,
                postId: commentData.postId, // Connects the comment to the post
                userId: commentData.userId, // Connects the comment to the user
                parentCommentId: commentData.parentCommentId, // Optional, for nested comments
            },
            select: {
                id: true,
                content: true,
                postId: true,
                userId: true,
                parentCommentId: true,
            },
        });
        return createdComment;
    } catch (error) {
        if (error instanceof Error) { 
            throw new Error('Error connecting to database: ' + error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}

// Function to get all comments for a specific post
export async function getCommentsForPost(postId: string) {
    try {
        const comments = await prisma.comment.findMany({
            where: {
                postId: postId,
            },
            select: {
                id: true,
                content: true,
                postId: true,
                userId: true,
                parentCommentId: true,

            },
        });
        return comments;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error connecting to database: ' + error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}


// Function to update a comment's content
export async function updateComment(commentId: string, content: string) {
    try {
        const updatedComment = await prisma.comment.update({
            where: {
                id: commentId,
            },
            data: {
                content,
            },
            select: {
                id: true,
                content: true,
                postId: true,
                userId: true,
                parentCommentId: true,
            },
        });
        return updatedComment;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error connecting to database: ' + error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}

// Function to delete a comment
export async function deleteComment(commentId: string) {
    try {
        await prisma.comment.delete({
            where: {
                id: commentId,
            },
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error connecting to database: ' + error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}

// Function to get all child comments for a specific parent comment
export async function getChildComments(parentCommentId: string) {
    try {
        const childComments = await prisma.comment.findMany({
            where: {
                parentCommentId: parentCommentId,
            },
            select: {
                id: true,
                content: true,
                postId: true,
                userId: true,
                parentCommentId: true,
            },
        });
        return childComments;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error connecting to database: ' + error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}
