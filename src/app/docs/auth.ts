import {  Router } from "express"
import { swaggerConfig } from "@config";
import digestAuthMiddleware from "@middleware/auth/digest-auth.middleware";

const router = Router();

const credentials = {
    userName: swaggerConfig.user,
    password: swaggerConfig.password,
    realm: swaggerConfig.realm
};

router.use(digestAuthMiddleware(credentials));

export default router;