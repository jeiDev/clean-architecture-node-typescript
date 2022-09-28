import path from "path";
import { serverConfig } from "@config";

export default {
    name: `${process.env.APP_DB_NAME}`,
    type: `${process.env.APP_DB_TYPE}`,
    url: `${process.env.APP_DB_URL}`,
    host: `${process.env.APP_DB_HOST}`,
    port: parseInt(`${process.env.APP_DB_PORT}`),
    username: `${process.env.APP_DB_USERNAME}`,
    password: `${process.env.APP_DB_PASSWORD}`,
    database: `${process.env.APP_DB_DATABASE}`,
    ssl: process.env.APP_DB_EXTRA_SSL === "true",
    schema: process.env.APP_DB_SCHEMA || "public",
    synchronize: process.env.APP_DB_SYNCHRONIZE === "true",
    logging: process.env.APP_DB_LOGGING === "true",
    autoReconnect: process.env.APP_DB_AUTO_RECONNECT === "true",
    reconnectTries: parseInt(`${process.env.APP_DB_AUTO_RECONNECT_TRIES}`),
    reconnectInterval: parseInt(`${process.env.APP_DB_AUTO_RECONNECT_INTERVAL}`),
    ...(serverConfig.isProd) && {
      extra: {
        ssl: {
          rejectUnauthorized: process.env.APP_DB_EXTRA_SSL_REJECT_UNAUTHORIZED === "true",
        },
      },
    },
    entities: [
      path.join(__dirname, "/../../../database/**/infrastructure/typeorm/*.entity.{ts,js}"),
      path.join(__dirname, "/../../../database/**/infrastructure/typeorm/*.view.{ts,js}"),
    ],
    migrations: [
      path.join(__dirname, "/../../../database/__migrations/typeorm/*.migration.{ts,js}")
    ],
    seeds: [
      path.join(__dirname, "/../../../database/__seeds/typeorm/*.seed.{ts,js}"),
    ],
    factories: [
      path.join(__dirname, "/../../../database/__seeds/typeorm/*.factory.{ts,js}"),
    ],
    subscribers: [
      path.join(__dirname, "/../../../database/__subscribers/typeorm/*.subcribe.{ts,js}")
    ],
    cli: {
      entitiesDir: path.join(__dirname, "/../../../database/**/infrastructure/typeorm"),
      migrationsDir: path.join(__dirname, "/../../../database/__migrations/typeorm"),
      subscribersDir: path.join(__dirname, "/../../../database/__subscribers/typeorm")
    }
}