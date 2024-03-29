import { config } from "dotenv";

config();

export const serverConfig = {
    name: process.env.APP_NAME || "",
    isProd: ["production"].includes(`${process.env.NODE_ENV}`),
    isLive: ["production", "staging"].includes(`${process.env.NODE_ENV}`),
    port: parseInt(`${process.env.PORT}`),
    url: `${process.env.APP_URL}`,
    nodeEnv: `${process.env.NODE_ENV}`,
}

export const cookieConfig = {
    secret: `${process.env.COOKIE_SECRET}`,
    domain: `${process.env.COOKIE_DOMAIN}`,
    name: `${process.env.COOKIE_NAME}`,
    expiration: parseInt(`${process.env.COOKIE_EXPIRATION}`),
}

export const swaggerConfig = {
    user: `${process.env.SWAGGER_AUTH_USER}`,
    password: `${process.env.SWAGGER_AUTH_PASSWORD}`,
    realm: `${process.env.SWAGGER_AUTH_REALM}`,
}

export const databaseConfig = {
    provider: `${process.env.DATABASE_PROVIDER}`
}