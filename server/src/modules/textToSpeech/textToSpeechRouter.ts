import express, { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import fs from "fs";
import * as dotenv from "dotenv";
import path from "path";
import { openai } from "../../common/utils/openAi";

const speechFile = path.resolve("./speech.mp3");

export const textToSpeech: Router = (() => {
  const router = express.Router();

  console.log("textToSpeechRouter  erreicht");

  router.post("/", async (_req: Request, res: Response) => {
    console.log("textToSpeech erreicht");
    console.log("body?" + JSON.stringify(_req.body));
    const { text } = _req.body;

    try {
      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "onyx",
        input: text,
      });
      console.log(speechFile);
      const buffer = Buffer.from(await mp3.arrayBuffer());
      await fs.promises.writeFile(speechFile, buffer);

      res.send(mp3);
    } catch (error) {
      console.error("Error processing audio:", error);
      return error;
    }
  });

  return router;
})();
