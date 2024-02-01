import express, { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import fs from "fs";
import * as dotenv from "dotenv";
import OpenAI from "openai";
import { getAPIKey } from "../../common/utils/envConfig";

const openai = new OpenAI({
  apiKey: getAPIKey(),
});

export const speechToText: Router = (() => {
  const router = express.Router();

  console.log("speechToText router erreicht");

  router.post("/", async (_req: Request, res: Response) => {
    console.log("speechToText erreicht");
    console.log("body?" + _req.body);
    /*
    const body = await _req.json();
    const base64Audio = _req.audio;
    const audio = Buffer.from(base64Audio, "base64");
    const filePath = "tmp/input.wav";

    try {
      fs.writeFileSync(filePath, audio);
      const readStream = fs.createReadStream(filePath);
      const data = await openai.audio.transcriptions.create({
        model: "whisper-1",
        file: readStream,
      });
      // Remove the file after use
      fs.unlinkSync(filePath);
      return data.text;
    } catch (error) {
      console.error("Error processing audio:", error);
      return error;
    }*/
  });

  return router;
})();
