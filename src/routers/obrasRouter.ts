import { Router } from "express";
import obrasController from "../controllers/obrasController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { obraSchema  } from "../schemas/obraSchema.js";

const obraRouter = Router();

obraRouter.post(
  "/obras",
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(obraSchema),
  obrasController.createObra
);
obraRouter.get(
  "/obras",
  ensureAuthenticatedMiddleware,
  obrasController.findAllObras
);
obraRouter.get(
  "/obras/:id",
  ensureAuthenticatedMiddleware,
  obrasController.findObra
);

export default obraRouter;