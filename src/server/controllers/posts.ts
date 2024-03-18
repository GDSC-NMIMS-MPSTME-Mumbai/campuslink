import { User } from '@prisma/client';
import { db as prisma } from '~/server/db/db';

export interface Posts {
    id: string;
    caption: string;
    userId: string;
}

export async function createPosts(post: Posts){
    try{
        const createdPost = await prisma.post.create({
            data: {
                ...post,
            },
            select: {
                id: true,
                caption: true,
                userId: true
            },
        })
        return createdPost
    }
    catch (error) {
        throw new Error('Error connection to database')
    }
}

export async function getPostById(id: string, userId: string) {
    try{
        const post = await prisma.post.findUnique({
            where: {
                id: id,
                userId: userId,
            },
            select: {
                id: true,
                caption: true,
                userId: true
            }
        })
        return post
    }
    catch (error) {
        throw new Error('Error connecting to database')
    }
}

export async function getAllPostsByUserId(id: string) {
    try
    {
        const allposts = await prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                posts: true,
            }
        });
        return allposts;
    }
    catch (error)
    {
        throw new Error('Error connecting to database');
    }
}