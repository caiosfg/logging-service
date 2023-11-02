import { Router, Request, Response } from "express";
import { LogController } from './controllers/LogController';

export const router = Router()

const logController = new LogController()

router.get('/logging', logController.getAllLogs)
router.post('/logging', logController.createLog )
router.delete('/logging', (request: Request, response : Response) => {
    const log = request.body
    console.log("🚀 ~ file: routes.ts:12 ~ router.delete ~ log:", log)

    return response.status(200).json({message: 'Log Deleted'})
})