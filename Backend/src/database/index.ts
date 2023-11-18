import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/db.sqlite",
    migrations: [
        "./src/database/migrations/*.ts"
    ],
})

AppDataSource.initialize()
    .then(() => {
        console.log('Database initialized!')
    })
    .catch((error) => console.log(error))
