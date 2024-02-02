import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import express, { Express } from "express";
import helmet from "helmet";

import errorHandler from "./common/middleware/errorHandler";
import rateLimiter from "./common/middleware/rateLimiter";
import { getCorsOrigin, getPort } from "./common/utils/envConfig";
import { speechToText } from "./modules/speechToText/speechToTextRouter";

const app: Express = express();
const bodyParser = require("body-parser");
const corsOrigin = getCorsOrigin();
const port = getPort();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
console.log("after cors");
app.use(helmet());
app.use(rateLimiter);
app.use(bodyParser.json());

// Routes
app.use("/api/speechToText", speechToText);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// Error handlers
app.use(errorHandler());

export { app };
