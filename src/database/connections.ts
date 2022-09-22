import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { ConnectionsDBI } from "@interfaces/database/database.interface";
import databaseConfig from "@config/database";

export const connections: ConnectionsDBI = {
    default: new DataSource(databaseConfig.default as PostgresConnectionOptions)
};

export const createDataSourceConnections = () => {
    let keys: Array<string> = Object.keys(connections);

    return new Promise((resolve) => {
        Promise.all(keys.map(async (name) => {
            try {
                //@ts-ignore
                let connection = connections[name];
                await connection.initialize();
                
                console.log(`Database ${name} connected`);

                return { connected: true, name };
            } catch (error) {
                console.error("Could no connected database", {name});
                return { connected: false, name };
            }
    
        })).then((connections) => {
            let lengthConnected = connections.filter((c) => (c.connected == true)).length;
            if(lengthConnected != keys.length) return console.error("There is a missing database connection to connect", {connections});

            resolve(true);

        }).catch(error => {
            console.error("Unexpected error in database connections", {error});
        })
        
    })
   
};

export default connections.default;