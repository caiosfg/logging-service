import { Request, Response } from 'express';
import { LogService } from '../services/LogService';
import { LogController } from './LogController';
import { Params } from 'express-serve-static-core';


describe('LogController', () => {
    const mockLogService : Partial<LogService> = {}

    const logController = new LogController(mockLogService as LogService)

    const makeMockRequest = ({ params, query }: { params?: Params, query?: Params }): Request => {
        const request = {
            params: params || {},
            query: query || {},
        } as unknown;

        return request as Request
    }
    
    it('Add new Log', () => {
        const mockRequest = makeMockRequest({})

        const response = logController.createLog(mockRequest)
    })
})