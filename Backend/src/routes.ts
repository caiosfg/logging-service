import { Router, Request, Response } from "express";
import { LogController } from './controllers/LogController';

export const router = Router()

const logController = new LogController()

router.get('/logging', logController.getLog)
router.post('/logging', logController.createLog )
router.delete('/logging', logController.deleteLog )