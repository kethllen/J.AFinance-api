import Joi from "joi";
import { CreateFechamentoData } from "../services/fechamentoService.js";

export const fechamentoSchema = Joi.object<CreateFechamentoData>({
  obraId: Joi.number().required(),
  name: Joi.string(),
  data: Joi.string(),
  valor: Joi.number(),
});