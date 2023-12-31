import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from 'crypto'

@Entity('logs')
export class Log {
    @PrimaryGeneratedColumn()
    id_log: string

    @Column({ nullable: false })
    ip: string

    @Column({ nullable: false })
    date: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    type: string

    @Column({ nullable: false })
    text: string

    constructor(
        ip: string,
        date: string,
        name: string,
        type: string,
        text: string,
    ) {
        this.id_log = randomUUID()
        this.ip = ip
        this.date = date
        this.name = name
        this.type = type
        this.text = text
    }
}