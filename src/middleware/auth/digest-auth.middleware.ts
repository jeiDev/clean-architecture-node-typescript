import { cryptoUsingMD5DigetAuth, parseInfoDigetAuth, userDigetAuth } from "@helpers/digest-auth.helper";
import { ObjectDynamicI } from "@interfaces/general/general.interface";
import { NextFunction, Request, Response } from "express";

export default (credentials: ObjectDynamicI) => {
    let hash: string = cryptoUsingMD5DigetAuth(credentials.realm);;

    return function (req: Request, res: Response, next: NextFunction) {
        let authInfo: any = {};
        let digestAuthObject: ObjectDynamicI = {};

        const authenticate = () => {
            userDigetAuth(res, credentials, hash)
        }
    
        if (!req.headers.authorization) return authenticate();
    
        authInfo = req.headers.authorization.replace(/^Digest /, '');
        authInfo = parseInfoDigetAuth(authInfo);
        
        if (authInfo.username !== credentials.userName) return authenticate();
    
        digestAuthObject.ha1 = cryptoUsingMD5DigetAuth(authInfo.username + ':' + credentials.realm + ':' + credentials.password);
        digestAuthObject.ha2 = cryptoUsingMD5DigetAuth(req.method + ':' + authInfo.uri);
        
        let resp = cryptoUsingMD5DigetAuth([digestAuthObject.ha1, authInfo.nonce, authInfo.nc, authInfo.cnonce, authInfo.qop, digestAuthObject.ha2].join(':'));
        
        digestAuthObject.response = resp;
    
        if (authInfo.response !== digestAuthObject.response) return authenticate();
    
        next();
    }
}