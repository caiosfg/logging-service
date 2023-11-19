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

        if(!body.ip || !body.date || !body.name || !body.type || !body.text){
            return response.status(400).json({message: 'Bad Request'})
        }

        this.logService.createLog( body.ip, body.date, body.name, body.type, body.text )

        return response.status(201).json({ message: 'Logging criado' })
    }

    getLog = (request: Request, response: Response) => {
        return response.status(200).json()
    }

    deleteLog = (request: Request, response: Response) => {
        const logs = request.body
        console.log("deleteLog ~ logs:", logs)
        return response.status(200).json({message: 'log deletado'})
    }
}