import { Router } from "express";
const router = Router();

import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './core';

router.use("/docs", swaggerUI.serve, swaggerSpec);

export default router;