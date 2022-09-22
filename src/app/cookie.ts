import { cookieConfig, serverConfig } from "@config";
import SQLite3 from 'sqlite3';
import session from 'express-session';
import sqliteStoreFactory from 'express-session-sqlite';

const SQLiteStore = sqliteStoreFactory(session);
const isProd = serverConfig.isProd;

export default session({
    store: new SQLiteStore({
        driver: SQLite3.Database,
        path: './sessions.db',
        ttl: cookieConfig.expiration,
        prefix: 'session:'
    }),
    name: cookieConfig.name,
    secret: cookieConfig.secret,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: isProd, 
        httpOnly: true, 
        maxAge: cookieConfig.expiration, 
        sameSite: isProd ? 'none' : 'lax' 
    }
})