import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import helmet from "helmet";
import path from "path";

import errorHandler from "./common/middleware/errorHandler";
import rateLimiter from "./common/middleware/rateLimiter";
import { getCorsOrigin } from "./common/utils/envConfig";
import { speechToText } from "./modules/speechToText/speechToTextRouter";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

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
