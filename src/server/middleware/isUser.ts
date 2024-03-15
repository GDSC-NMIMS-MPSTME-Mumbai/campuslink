// check if User is logged in or exists using jwt 
import jwt from 'jsonwebtoken';
import { db } from '~/server/db/db';
import { env } from '~/env';

export async function isUser(token: string) {
    try {
        if (!token) {
            throw new Error("Unauthorized")
        }
        const decoded = jwt.verify(token, env.JWT_SECRET);
        const user = await db.user.findUnique({
            where: {
                id: decoded as string
            },
            select: {
                id: true,
                email: true,
                username: true
            }
        });
        return user;
    }
    catch (error) {
        throw new Error('Error connecting to database')
    }
}
