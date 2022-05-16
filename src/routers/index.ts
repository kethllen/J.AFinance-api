import { Router } from "express";
import userRouter from "./userRouter.js";
import obraRouter from "./obrasRouter.js";
import entradaRouter from "./entradaRouter.js";
import materialRouter from "./materialRouter.js";

const router = Router();
router.use(userRouter);
router.use(obraRouter);
router.use(entradaRouter);
router.use(materialRouter);

export default router;
