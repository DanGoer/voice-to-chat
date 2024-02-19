import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import express, { Express } from "express";
import helmet from "helmet";

import errorHandler from "./common/middleware/errorHandler";
import rateLimiter from "./common/middleware/rateLimiter";
import { getCorsOrigin, getPort } from "./common/utils/envConfig";
import { speechToText } from "./modules/speechToText/speechToTextRouter";
import { textToChat } from "./modules/textToChat/textToChatRouter";
import { textToSummary } from "./modules/textToSummary/textToSummaryRouter";
import { textToSpeech } from "./modules/textToSpeech/textToSpeechRouter";

//TODO: DB

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
app.use(bodyParser.json({ limit: "25mb" }));

// Routes
app.use("/api/speechToText", speechToText);
app.use("/api/textToChat", textToChat);
app.use("/api/textToSummary", textToSummary);
app.use("/api/textToSpeech", textToSpeech);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// Error handlers
app.use(errorHandler());

export { app };
