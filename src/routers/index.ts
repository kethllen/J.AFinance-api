import { Router } from "express";
import userRouter from "./userRouter.js";
import obraRouter from "./obrasRouter.js";
import entradaRouter from "./entradaRouter.js";
import materialRouter from "./materialRouter.js";
import fechamentoRouter from "./fechamentoRouter.js";

const router = Router();
router.use(userRouter);
router.use(obraRouter);
router.use(entradaRouter);
router.use(materialRouter);
router.use(fechamentoRouter);

export default router;
