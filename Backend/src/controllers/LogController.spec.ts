import { LogController } from './LogController';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';
import { Request } from 'express';


const mockLogService = {
    createLog: jest.fn()
}

jest.mock('./../services/LogService', () => {
    return {
        LogService: jest.fn().mockImplementation(() => {
            return mockLogService
        })
    }
})

describe('LogController', () => {
    const logController = new LogController()
    
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
    it('Add Log Deleted', () => {
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
        logController.deleteLog(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({ message: 'log deletado' })
    })
})