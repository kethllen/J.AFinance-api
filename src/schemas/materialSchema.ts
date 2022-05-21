import Joi from "joi";
import { CreateMaterialData } from "../services/materialService.js";

export const materialSchema = Joi.object<CreateMaterialData >({
  obraId: Joi.number().required(),
  description: Joi.string().required(),
  fornecedor:  Joi.string().required(),
  data: Joi.string(),
  valor: Joi.number().required(),
});
