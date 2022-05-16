import { Router } from "express";
import materialController from "../controllers/materialController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { materialSchema  } from "../schemas/materialSchema.js";

const materialRouter = Router();

materialRouter.post(
  "/materiais",
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(materialSchema ),
  materialController.createMaterial
);
materialRouter.get(
  "/materiais",
  ensureAuthenticatedMiddleware,
  materialController.findAllMateriais
);

export default materialRouter;