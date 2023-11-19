import { LogService } from './LogService';

jest.mock('./../repositories/LogRepository')
jest.mock('../database', () => {
    initialize: jest.fn()
})

const mockLogRepository = require('./../repositories/LogRepository')

describe('LogService', () => {
    const logService =  new LogService(mockLogRepository)

    it('Adicionar um novo Log', async () => {
        mockLogRepository.createLog = jest.fn().mockImplementation(() => Promise.resolve ({
            id_log: '0001',
            ip: '192.168.0.1' ,
            date: '16-11-2023' ,
            name:  'New Test',
            type: 'Warning' ,
            text:  'Lorem ipsum for test',
        }))
        const response = await logService.createLog('192.168.0.1', '16-11-2023', 'New Test', 'Warning', 'Lorem ipsum for test')
        expect(mockLogRepository.createLog).toHaveBeenCalled()
        expect(response).toMatchObject({
            id_log: '0001',
            ip: '192.168.0.1' ,
            date: '16-11-2023' ,
            name:  'New Test',
            type: 'Warning' ,
            text:  'Lorem ipsum for test',
        })
    })
})