import { DataUnlessMiddlewareI } from "@interfaces/middleware/common/unless/unless.interface";
import { Request, Response } from "express";

export const validateUnless = (path: Array<string>, urls: Array<string>, data: DataUnlessMiddlewareI, payload: DataUnlessMiddlewareI) => {
    if (data.method != payload.method) return false;
    if (data.path === payload.path) return true;
    if (!(path.length == urls.length) || !(data.path.indexOf("/:") >= 0)) return false;
    return null
}

export const unless = (data: Array<DataUnlessMiddlewareI>, middleware: Function) => {

    return function (req: Request, res: Response, next: Function) {
        let { path, method } = req;
        let exclude = data.find(data => {
            let excludePathSplit = data.path.split("/");
            let urlPathSplit = path.split("/");
            let validate = validateUnless(excludePathSplit, urlPathSplit, data, { path, method });

            if(validate !== null) return validate;

            return excludePathSplit.reduce((_, data, i, array) => {
                if (urlPathSplit[i] !== data && data.indexOf(":") == -1) {
                    array.splice(1);
                    return false;
                }

                return true;
            }, false);
        });

        if (exclude) {
            return next();
        } else {
            return middleware(req, res, next);
        }
    }
}