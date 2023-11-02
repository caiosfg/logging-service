import { LogService } from './../services/LogService';
import { Request, Response } from "express";

export class LogController {
    createLog = (request: Request, response: Response) => {
        const logService = new LogService()
        const body = request.body;

        if(!body.ip || !body.date || !body.name || !body.id || !body.type || !body.text){
            return response.status(400).json({message: 'Bad Request'})
        }

        logService.createLog( body.ip, body.date, body.name, body.id, body.type, body.text )

        return response.status(201).json({ message: 'Logging criado' })
    }

    getAllLogs (request: Request, response: Response) {
        const logService = new LogService()
        const logs = logService.getAllLogs()

        return response.status(200).json({message: logs})
    }
}