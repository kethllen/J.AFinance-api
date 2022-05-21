import Joi from "joi";
import { CreatePagamentoData } from "../services/pagamentoService.js";

export const pagamentoSchema = Joi.object<CreatePagamentoData>({
  fechamentoId: Joi.number().required(),
  empreitaId: Joi.number().required(),
  funcionarioId: Joi.number().required(),
  valor: Joi.number().required(),
  quantDias: Joi.number().required(),
  valorTotal: Joi.number(),
});