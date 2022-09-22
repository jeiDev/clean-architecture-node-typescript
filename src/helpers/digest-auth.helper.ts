import { Response } from "express"
import crypt from "crypto"
import { ObjectDynamicI } from "@interfaces/general/general.interface";

export const cryptoUsingMD5DigetAuth = (data: crypt.BinaryLike) => {
    return crypt.createHash('md5').update(data).digest('hex');
}

export const userDigetAuth = (res: Response, credentials: ObjectDynamicI, hash: string) =>{
    res.writeHead(401, { 'WWW-Authenticate': 'Digest realm="' + credentials.realm + '",qop="auth",nonce="' + Math.random() + '",opaque="' + hash + '"' });
    res.end('Authorization is needed.');
}

export const parseInfoDigetAuth = (authData: string) => {
    return authData.split(', ').reduce((store: ObjectDynamicI, d) => {
        let s = d.split('=');
        store[s[0]] = s[1].replace(/"/g, '');
        return store
    }, {});
}
