// hello world api to test api

import { type NextApiRequest, type NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json('Hello World!')
}