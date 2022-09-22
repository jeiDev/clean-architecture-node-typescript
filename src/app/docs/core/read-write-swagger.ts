import { serverConfig } from '@config';
import yaml from 'js-yaml';
import fs from 'fs';

export const WriteDocs = () => {
    try {
        console.log('🚀🚀🚀');
        const fileContent = fs.readFileSync(`${__dirname}/swagger.yaml`, 'utf8');
        const data: any = yaml.load(fileContent, {
            json: true,
            onWarning: (warn) => console.log({ warn: warn.message })
        });

        const paths = Object.keys(data.paths).reduce((acc: any, cur: any) => {
            acc[cur] = {
                '$ref': data.paths[cur]['$ref'].replace(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)*:\d*/i, serverConfig.url)
            };

            return acc;
        }, {});

        const yamlStr = yaml.dump({ paths })
        return fs.writeFileSync(`${__dirname}/swagger.yaml`, yamlStr, 'utf8');
    }
    catch (error: any) {
        console.error(`❌ ~ file: read-write-swagger.ts ~ line 23 ~ WriteDocs ~ ${error.message}`)
    }
}