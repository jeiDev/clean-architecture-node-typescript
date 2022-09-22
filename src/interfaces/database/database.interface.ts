import { DataSource } from "typeorm";

export interface ExtraSSLDBI {
    ssl: {
        rejectUnauthorized: boolean
    }
}

export interface DefaultDBI {
    name: string
    type: string
    url: string
    host: string
    port: number
    username: string
    password: string
    database: string
    ssl: boolean
    schema: string
    synchronize: boolean
    logging: boolean
    autoReconnect: boolean
    reconnectTries: number
    reconnectInterval: number
    extra?: ExtraSSLDBI
    entities: Array<string>
    migrations?: Array<string>
    seeds?: Array<string>
    factories?: Array<string>
    subscribers?: Array<string>
    cli?: { [key: string]: string }
}

export interface ConnectionsDBI {
    default: DataSource
}