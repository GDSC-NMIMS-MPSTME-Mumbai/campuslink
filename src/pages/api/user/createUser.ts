// create user API

import { type NextApiRequest, type NextApiResponse } from 'next'
import { type User, createUser }  from '~/server/controllers/user';
import { isUser } from '~/server/middleware/isUser';
    
    
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') {
            throw new Error('Invalid request method');
        }
        // check if User is logged in or exists using jwt
        const token: string = req.headers.authorization!.split(' ')[1]!;
        const user = await isUser(token);
        if (user) {
            throw new Error('User already Exists');
        }
        const userData = {
            id: '1',
            email: 'test@test.com',
            username: 'test'
        }
        const createdUser: User  = await createUser(userData);
        return res.status(200).json(createdUser);
    }
    catch (error) {
        if (error instanceof Error)
        {
            return res.status(500).json({ error: error.message });    
        }
        return res.status(500).json(error);
    }
}