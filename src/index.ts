global.rootDir = `${__dirname}`;

import { serverConfig } from "@config";
import core from "@core";
import http from "http";
import app from "./app";

const PORT = serverConfig.port;

async function root() {
    await core();
    
    const server = http.createServer(app);
    
    server.listen(PORT, () => {
        console.log(`🚀 Server running http://localhost:${PORT}`);
        console.log(`🚀 Documentation running http://localhost:${PORT}/docs`);
        console.timeEnd("Server started in");
    });
}

root();