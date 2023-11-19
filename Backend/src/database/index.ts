import { DataSource } from "typeorm"
import { Log } from "../entities/Log"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/db.sqlite",
    entities: [
        Log
    ],
    migrations: [
        "./src/database/migrations/*.ts"
    ],
})

AppDataSource.initialize()
    .then(() => {
        console.log('Database initialized!')
    })
    .catch((error) => console.log(error))
