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
    console.log("body?" + JSON.stringify(_req.body));
    const body = _req.body;
    const base64Audio = body.audio;
    const audio = Buffer.from(base64Audio, "base64");
    const filePath = "tmp/input.wav";

    try {
      fs.writeFileSync(filePath, audio);
      const readStream = fs.createReadStream(filePath);
      const data = await openai.audio.transcriptions.create({
        model: "whisper-1",
        file: readStream,
      });
      console.log("before remove");
      // Remove the file after use
      //fs.unlinkSync(filePath);
      console.log("text" + JSON.stringify(data));
      res.send(data.text);
    } catch (error) {
      console.error("Error processing audio:", error);
      return error;
    }
  });

  return router;
})();
