import { DataUnlessMiddlewareI } from "@interfaces/middleware/common/unless/unless.interface";
import { Request, Response } from "express";

export const unless = (data: Array<DataUnlessMiddlewareI>, middleware: Function) => {

    return function (req: Request, res: Response, next: Function) {
        let { path, method } = req;
        let exclude = data.find(data => {
            let excludePathSplit = data.path.split("/");
            let urlPathSplit = path.split("/");

            if (data.method != method) return false;
            if (data.path === path) return true;
            if (!(excludePathSplit.length == urlPathSplit.length) || !(data.path.indexOf("/:") >= 0)) return false;

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