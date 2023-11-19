import { EntityManager } from 'typeorm';
import { getMockEntityManager } from '../__mocks__/mockEntityManager.mock';
import { Log } from '../entities/Log';
import { LogRepository } from './LogRepository';
describe('LogRepository', () => {
    let logRepository: LogRepository
    let managerMock: Partial<EntityManager>

    const mockLog: Log = {
        log_id: '0001',
        ip: '192.168.0.1' ,
        date: '16-11-2023' ,
        name:  'New Test',
        type: 'Warning' ,
        text:  'Lorem ipsum for test',
    }

    beforeAll(async () => {
        managerMock = await getMockEntityManager({
            saveReturn: mockLog
        })
        logRepository = new LogRepository(managerMock as EntityManager)
    })
    it('Cadastar um novo log no banco', async () => {
        const response = await logRepository.createLog(mockLog)
        expect(managerMock.save).toHaveBeenCalled()
        expect(response).toMatchObject(mockLog)
    })
})