import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import express, { Express } from "express";
import helmet from "helmet";

import errorHandler from "./common/middleware/errorHandler";
import rateLimiter from "./common/middleware/rateLimiter";
import { getCorsOrigin } from "./common/utils/envConfig";
import { speechToText } from "./modules/speechToText/speechToTextRouter";

const app: Express = express();
const corsOrigin = getCorsOrigin();

// Middlewares
app.use(cors({ origin: [corsOrigin], credentials: true }));
app.use(helmet());
app.use(rateLimiter);

// Routes
app.use("/speechToText", speechToText);

// Error handlers
app.use(errorHandler());

export { app };
