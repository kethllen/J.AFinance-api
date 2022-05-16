import { Router } from "express";
import userRouter from "./userRouter.js";
import obraRouter from "./obrasRouter.js";


const router = Router();
router.use(userRouter);
router.use(obraRouter);

export default router;
