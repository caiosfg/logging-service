const db = [{
    "ip" : "1.1",
    "date": "19-12",
    "name": "caio",
    "id": "1212",
    "type": "warning",
    "text": "lorem ipsum"
}]


export class LogService {
    createLog = ( ip: string, date: string, name: string, id: string, type: string, text: string ) => {
        const log = { ip, date, name, id, type, text }

        db.push(log)
        console.log("🚀 ~ file: LogService.ts:23 ~ LogService ~ log:", db)
    }

    getAllLogs = () => {
        return db
    }
}