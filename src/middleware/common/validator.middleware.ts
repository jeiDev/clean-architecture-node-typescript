import { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export const validationDTO = (dtoClass: any) => {
    return function (req: Request, res: Response, next: NextFunction) {
        if(!req.body) return res.status(400).json({message: "Missing body"});
        const data = plainToInstance(dtoClass, req.body, { excludeExtraneousValues: true });
        validate(data, { whitelist: true })
            .then(errors => {
                if (Array.from(errors || []).length > 0) return res.status(400).json({ error: { message: errors.pop() } });
                for (const key in data) {
                    if (data[key] === '' || data[key] === null || data[key] === undefined) delete data[key];   
                }
                req.body = data;
                return next();
            }).catch(error => {
                return res.status(500).json({ error: { message: error.message, code: 500 } });
            });
    };
};