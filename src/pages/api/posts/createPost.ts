// create post api

import { type NextApiRequest, type NextApiResponse } from "next";
import { createPosts, type Posts } from "~/server/controllers/posts";
import jwt from 'jsonwebtoken';
import { env } from '~/env';
import { db as prisma } from '~/server/db/db';


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    try{
        const token: string = req.headers.authorization!.split(' ')[1]!;
        if(!token){
            throw new Error("User is not logged in.")
        }
        const decoded = jwt.verify(token, env.JWT_SECRET);
        const user = await prisma.user.findUniqueOrThrow({where:{id: decoded as string}})
        //dummy data
        const postData = {
            id: '1',
            caption: 'This is a dummy caption',
            userId: '2',
        }
        const createdPost: Posts = await createPosts(postData);
        return res.status(200).json(createdPost);
    }
    catch (error) {
        if (error instanceof Error)
        {
            return res.status(500).json({ error: error.message });    
        }
        return res.status(500).json(error);
    }
}