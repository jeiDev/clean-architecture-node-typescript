import { serverConfig } from "@config";
import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import router from '@routers';
import cookieParser from 'cookie-parser';
import cookie from "./cookie";

import docs from "./docs";

const app = express();
const isProd = serverConfig.isProd;

if (isProd) {
    app.set('trust proxy', 1);
}

// Setting cookie
app.use(cookieParser());
app.use(cookie);

// Parser data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(helmet({
    crossOriginResourcePolicy: false
}));

app.use("/", router);
app.use("/", docs);

export default app;