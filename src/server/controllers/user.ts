import { db as prisma } from '~/server/db/db';

export interface User {
    id: string;
    email: string;
    username: string;
}

export async function createUser(user: User) {
    try {

        const createdUser = await prisma.user.create({
            data: {
                ...user,
            },
            select: {
                id: true,
                email: true,
                username: true
            }
        });
        return createdUser;
    }
    catch (error) {
        throw new Error('Error connecting to database');
    }
}

export async function getUserById(id: string,email:string) {
    
    try
    {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
                email: email,
            },
            select: {
                id: true,
                email: true,
                username: true
            }
        });
        return user;
    }
    catch (error)
    {
        throw new Error('Error connecting to database');
    }
}