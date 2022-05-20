import { Router } from "express";
import funcionarioController from "../controllers/funcionarioController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { funcionarioSchema  } from "../schemas/funcionarioSchema.js";

const funcionarioRouter = Router();

funcionarioRouter.post(
  "/funcionarios",
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(funcionarioSchema),
  funcionarioController.createFuncionario
);
funcionarioRouter.get(
  "/funcionarios",
  ensureAuthenticatedMiddleware,
  funcionarioController.findAllFuncionarios
);
funcionarioRouter.get(
  "/funcionarios/:id",
  ensureAuthenticatedMiddleware,
  funcionarioController.findFuncionario
);
funcionarioRouter.put(
  "/funcionarios/:id",
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(funcionarioSchema),
  funcionarioController.updateFuncionario
);

export default funcionarioRouter;