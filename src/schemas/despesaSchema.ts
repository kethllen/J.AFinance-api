import Joi from "joi";
import { CreateDespesaData } from "../services/despesaService.js";

export const despesaSchema = Joi.object<CreateDespesaData>({
  obraId: Joi.number().required(),
  description: Joi.string().required(),
  data: Joi.string(),
  valor: Joi.number().required(),
});
