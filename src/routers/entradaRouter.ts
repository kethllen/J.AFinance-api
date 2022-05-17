import { Router } from "express";
import entradaController from "../controllers/entradaController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { entradaSchema  } from "../schemas/entradaSchema.js";

const entradaRouter = Router();

entradaRouter.post(
  "/entradas",
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(entradaSchema ),
  entradaController.createEntrada
);
entradaRouter.get(
  "/entradas/:id",
  ensureAuthenticatedMiddleware,
  entradaController.findAllEntradas
);

export default entradaRouter;