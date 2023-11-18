import { EntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { Log } from "../entities/Log";

export class LogRepository {
    private manager: EntityManager

    constructor(
        manager = AppDataSource.manager
    ) {
        this.manager =  manager
    }

    createLog = async (log: Log ) => {
        return this.manager.save(log)
    }
}