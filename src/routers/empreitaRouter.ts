import { Router } from "express";
import empreitaController from "../controllers/empreitaController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { empreitaSchema  } from "../schemas/empreitaSchema.js";

const empreitaRouter = Router();

empreitaRouter.post(
  "/empreitas",
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(empreitaSchema),
  empreitaController.createEmpreita
);
empreitaRouter.get(
  "/empreita/:id",
  ensureAuthenticatedMiddleware,
  empreitaController.findEmpreita
);
empreitaRouter.get(
  "/obras/:id/empreitas",
  ensureAuthenticatedMiddleware,
  empreitaController.findAllEmpreitas
);

export default empreitaRouter;