import { Log, LogService } from './LogService';

describe('LogService', () => {
    const mockDb: Log[] = []
    const logService = new LogService (mockDb);

    it('Adicionar um novo Log', () => {
        const mockConsole = jest.spyOn(global.console, 'log')

        logService.createLog('192.168.0.1', '02-11-2023', 'BRADDOCK', '000001', 'Info', 'Test create Log')

        expect(mockConsole).toHaveBeenCalledWith("DB atualized", mockDb)
    })
})