import Joi from "joi";
import { CreateObraData } from "../services/obrasService.js";

type Obra= Omit<CreateObraData, "userId">;

export const obraSchema = Joi.object<Obra>({
  name: Joi.string().required(),
  valor: Joi.number().required(),
  valorAtual: Joi.number(),
});
