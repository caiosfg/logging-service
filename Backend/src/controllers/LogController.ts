import { LogService } from './../services/LogService';
import { Request, Response } from "express";

export class LogController {
    logService : LogService

    constructor(
        logService = new LogService()
    ){
        this.logService = logService
    }

    createLog = (request: Request, response: Response): Response => {
        const body = request.body;

        if(!body.ip || !body.date || !body.name || !body.id || !body.type || !body.text){
            return response.status(400).json({message: 'Bad Request'})
        }

        this.logService.createLog( body.ip, body.date, body.name, body.id, body.type, body.text )

        return response.status(201).json({ message: 'Logging criado' })
    }

    getAllLogs = (request: Request, response: Response) => {
        const logs = this.logService.getAllLogs()
        return response.status(200).json({message: logs})
    }

    deleteLog = (request: Request, response: Response) => {
        const logs = request.body
        console.log("deleteLog ~ logs:", logs)
        return response.status(200).json({message: 'log deletado'})
    }
}