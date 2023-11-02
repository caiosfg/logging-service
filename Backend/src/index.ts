import express, { Request, Response } from 'express';

const server = express();

server.use(express.json());


server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'ok' })
})

server.post('/logging', (request: Request, response: Response) => {
    const body = request.body;
    console.log(body)
    return response.status(201).json({ message: 'Logging criado' })
})

server.listen(6000, () => console.log('Running on 6000'))