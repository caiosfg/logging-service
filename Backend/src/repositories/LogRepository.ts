import { EntityManager } from "typeorm";
import { Log } from "../entities/Log";

export class LogRepository {
    private manager: EntityManager

    constructor(
        manager: EntityManager
    ) {
        this.manager =  manager
    }

    createLog = async (log: Log ) => {
        return this.manager.save(log)
    }
}