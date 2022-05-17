import Joi from "joi";
import { CreateFuncionarioData } from "../services/funcionarioService.js";

export const funcionarioSchema = Joi.object<CreateFuncionarioData >({
  nome: Joi.string().required(),
  conta: Joi.string().required(),
  agencia: Joi.string().required(),
  operacao: Joi.string().required(),
  pix: Joi.string().required(),
});