import { AppDataSource } from '../database';
import { Log } from '../entities/Log';
import { LogRepository } from './../repositories/LogRepository';

export class LogService {
    private logRepository: LogRepository

    constructor(
        logRepository = new LogRepository(AppDataSource.manager)
    ){
        this.logRepository =  logRepository
    }

    createLog = async ( ip: string, date: string, name: string, type: string, text: string ): Promise<Log> => {
        const log = new Log(ip, date, name, type, text)

        return this.logRepository.createLog(log)
    }

    getLog = () => {
        // return this.db
    }
}