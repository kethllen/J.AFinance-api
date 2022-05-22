import cors from "cors";
import express from "express";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import dotenv from "dotenv";
import router from "../src/routers/index.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
