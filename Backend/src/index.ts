import express, { Request, Response } from 'express';
import { router } from './routes';

const server = express()

server.use(express.json())
server.use(router)

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'Logging Service 1.0' })
})

server.listen(6000, () => console.log('Running on 6000'))