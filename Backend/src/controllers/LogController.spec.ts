import { LogService } from '../services/LogService';
import { LogController } from './LogController';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';
import { Request } from 'express';

describe('LogController', () => {
    const mockLogService : Partial<LogService> = {
        createLog: jest.fn()
    }
    const logController = new LogController(mockLogService as LogService)
    
    it('Add new Log', () => {
        const mockRequest = {
            body: {
                ip : '192.168.0.1',
                date: '06-11-2023',
                name: ' Caio',
                id: '0001',
                type: 'Alert',
                text: 'Lorem Ipsum'
            }
        } as Request;

        const mockResponse = makeMockResponse()
        logController.createLog(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Logging criado' })
    })
})