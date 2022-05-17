import Joi from "joi";
import { CreateEmpreitaData } from "../services/empreitaService.js";

export const empreitaSchema = Joi.object<CreateEmpreitaData>({
  obraId: Joi.number().required(),
  funcionarioId: Joi.number().required(),
  valor: Joi.number().required(),
  description: Joi.string().required(),
  valorPago: Joi.number(),
});