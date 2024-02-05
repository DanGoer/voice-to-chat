import express, { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import fs from "fs";
import * as dotenv from "dotenv";
import OpenAI from "openai";
import { getAPIKey } from "../../common/utils/envConfig";

const openai = new OpenAI({
  apiKey: getAPIKey(),
});

export const textToChat: Router = (() => {
  const router = express.Router();

  console.log("textToChatRouter  erreicht");

  router.post("/", async (_req: Request, res: Response) => {
    console.log("textToChat erreicht");
    console.log("body?" + JSON.stringify(_req.body));
    const { text, settings } = _req.body;

    try {
      let [summary, question] = await Promise.all([
        openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Gib mir bitte eine kurze und knappe Zusammenfassung dieses Textes:${text}`,
            },
          ],
        }),
        openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Du bist ein professioneller Berufsbildner, erwähne dies aber nicht extra. Sprich per du mit dem Autor. Der gegebene Text ist ein Lernjournal. Gehe auf die diversen wichtigen Aspekte ein und erwähne wenn nötig Punkte die in diesem Journal fehlen oder besser ausgearbeitet werden sollten. Hebe aber auch positive Aspekte hevor. Dies ist der Text:${text}`,
            },
          ],
        }),
      ]);
      const finalData = { summary, question };
      console.log("text" + JSON.stringify(finalData));
      res.send(finalData);
    } catch (error) {
      console.error("Error processing audio:", error);
      return error;
    }
  });

  return router;
})();
