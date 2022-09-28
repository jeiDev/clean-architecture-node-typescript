import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import databaseConfig from "@config/database/typeorm";


export const connection = new DataSource(databaseConfig as PostgresConnectionOptions)

export const createDataSourceConnections = () => {
    return new Promise(async(resolve) => {
        try {
            await connection.initialize();
            console.log(`Database  connected`);
            resolve(true);
        } catch (error) {
            console.error("Could no connected database");
        }
    })
};

export default connection;