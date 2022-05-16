import { Router } from "express";
import userRouter from "./userRouter.js";
import entradaRouter from "./obrasRouter.js";


const router = Router();
router.use(userRouter);
router.use(entradaRouter);

export default router;
