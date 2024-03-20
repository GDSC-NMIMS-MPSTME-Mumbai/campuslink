// get user API

import { type NextApiRequest, type NextApiResponse } from 'next'
import { type User, getUserById } from '~/server/controllers/user';
import { isUser } from '~/server/middleware/isUser';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'GET') {
            throw new Error('Invalid request method');
        }
        // check if User is logged in or exists using jwt
        const token: string = req.headers.authorization!.split(' ')[1]!;
        const user = await isUser(token);
        if (!user) {
            throw new Error('User does not exist');
        }
        const userData: User | null = await getUserById('2',"test2@test.com");
        res.status(200).json(userData);
    }
    catch (error) {
        res.status(500).json({ error: 'Error connecting to database' });
    }
}