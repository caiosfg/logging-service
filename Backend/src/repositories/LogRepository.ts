import { EntityManager } from "typeorm";
import { Log } from "../entities/Log";

export class LogRepository {
    private manager: EntityManager

    constructor(
        manager: EntityManager
    ) {
        this.manager =  manager
    }

    createLog = async (log: Log ): Promise<Log> => {
        return this.manager.save(log)
    }

    getLog = async (logId: string): Promise<Log | null> => {
        return this.manager.findOne(Log, {
            where: {
                id_log: logId
            }
        })
    }
}