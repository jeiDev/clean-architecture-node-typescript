import { Router } from "express";
const router = Router();

import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './core';
import auth from "./auth";

router.use("/docs", auth);
router.use("/docs", swaggerUI.serve, swaggerSpec);

export default router;