import { Router } from "express";
import pagamentoController from "../controllers/pagamentoController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { pagamentoSchema  } from "../schemas/pagamentoSchema.js";

const pagamentoRouter = Router();

pagamentoRouter.post(
  "/pagamentos",
  ensureAuthenticatedMiddleware,
  validateSchemaMiddleware(pagamentoSchema ),
  pagamentoController.createPagamento
);
pagamentoRouter.get(
  "/empreitas/:id/pagamentos",
  ensureAuthenticatedMiddleware,
  pagamentoController.findAllPagamentos
);

export default pagamentoRouter;