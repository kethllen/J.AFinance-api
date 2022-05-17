import { Router } from "express";
import fechamentoController from "../controllers/fechamentoController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { fechamentoSchema  } from "../schemas/fechamentoSchema.js";

const fechamentoRouter = Router();

fechamentoRouter.post(
  "/fechamentos",
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(fechamentoSchema ),
  fechamentoController.createFechamento
);
fechamentoRouter.get(
  "/fechamentos/:id",
  ensureAuthenticatedMiddleware,
  fechamentoController.findAllFechamentos
);

export default fechamentoRouter;