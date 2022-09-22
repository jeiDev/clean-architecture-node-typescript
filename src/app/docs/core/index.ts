import { serverConfig } from '@config';
import swaggerJSDoc, { OAS3Options, OAS3Definition } from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";
import path from 'path';
import { WriteDocs } from './read-write-swagger';

serverConfig.isLive && WriteDocs();

const ROOT_DIR = global.rootDir;

const swaggerDefinition: OAS3Definition = {
    openapi: '3.0.1',
    basePath: '/',
    info: {
        title: `Express API for ${serverConfig.name}`,
        version: '1.0.0',
        description: `This is a REST API application made with Express. It retrieves data from ${serverConfig.name}.`,
    },
    servers: [
        {
            url: `${serverConfig.url}`,
            description: 'Development server',
        },
    ],
};

const options: OAS3Options = {
    swaggerDefinition,
    apis: [
        path.join(__dirname, '../../../routers/*.ts'),
        path.join(__dirname, '../../../routers/**/*.ts'),
        path.join(ROOT_DIR, '../docs/*.yaml'),
        path.join(ROOT_DIR, '../docs/**/**/*.yaml'),
    ],
};

const swaggerSpec = swaggerUi.setup({ ...swaggerJSDoc(options) }, {
    customSiteTitle: `${serverConfig.name} - Documentation`,
    customfavIcon: '/assets/images/favicon.png',
    customCssUrl: '/assets/css/swagger.css',
});

export default swaggerSpec;