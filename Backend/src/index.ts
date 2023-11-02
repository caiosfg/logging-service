import express, { Request, Response } from 'express';
import { LogController } from './controllers/LogController';

const logController = new LogController()

const server = express();

server.use(express.json());


server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'Logging Service 1.0' })
})

server.get('/logging', logController.getAllLogs)
server.post('/logging', logController.createLog )

server.listen(6000, () => console.log('Running on 6000'))