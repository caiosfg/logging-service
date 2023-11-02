export interface Log {
    ip : string,
    date: string,
    name: string,
    id: string,
    type: string,
    text: string
}

const db = [{
    "ip" : "1.1",
    "date": "19-12",
    "name": "caio",
    "id": "1212",
    "type": "warning",
    "text": "lorem ipsum"
}]


export class LogService {
    db: Log[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createLog = ( ip: string, date: string, name: string, id: string, type: string, text: string ) => {
        const log = { ip, date, name, id, type, text }

        this.db.push(log)
        console.log("DB atualized", this.db)
    }

    getAllLogs = () => {
        return this.db
    }
}