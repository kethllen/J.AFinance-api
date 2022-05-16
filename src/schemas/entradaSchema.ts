import Joi from "joi";
import { CreateEntradaData } from "../services/entradaService.js";

export const entradaSchema = Joi.object<CreateEntradaData>({
  obraId: Joi.number().required(),
  data: Joi.date(),
  valor: Joi.number().required(),
});
