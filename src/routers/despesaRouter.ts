import { Router } from "express";
import despesaController from "../controllers/despesaController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { despesaSchema  } from "../schemas/despesaSchema.js";

const despesaRouter = Router();

despesaRouter.post(
  "/despesas",
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(despesaSchema ),
  despesaController.createDespesa
);
despesaRouter.get(
  "/despesas/:id",
  ensureAuthenticatedMiddleware,
  despesaController.findAllDespesas
);

export default despesaRouter;