import Joi from "joi";
import { CreateUserData } from "../services/userService.js";

type UserLogin= Omit<CreateUserData, "name">;

export const userSchema = Joi.object<UserLogin>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
