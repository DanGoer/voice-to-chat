import express, { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import fs from "fs";
import * as dotenv from "dotenv";
import OpenAI from "openai";
import { getAPIKey } from "../../common/utils/envConfig";

const openai = new OpenAI({
  apiKey: getAPIKey(),
});

export const textToSummary: Router = (() => {
  const router = express.Router();

  console.log("textToSummaryRouter  erreicht");

  router.post("/", async (_req: Request, res: Response) => {
    console.log("textToSummary erreicht");
    console.log("body?" + JSON.stringify(_req.body));
    const { text } = _req.body;

    try {
      let summary = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Gib mir bitte eine kurze und knappe Zusammenfassung dieses Textes:${text}`,
          },
        ],
      });

      console.log("text" + JSON.stringify(summary));
      res.send(summary);
    } catch (error) {
      console.error("Error processing audio:", error);
      return error;
    }
  });

  return router;
})();
