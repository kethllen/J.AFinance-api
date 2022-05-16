import { Router } from "express";
import userRouter from "./userRouter.js";
import obraRouter from "./obrasRouter.js";
import entradaRouter from "./entradaRouter.js";

const router = Router();
router.use(userRouter);
router.use(obraRouter);
router.use(entradaRouter);
export default router;
