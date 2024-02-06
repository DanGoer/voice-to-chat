import OpenAI from "openai";
import { getAPIKey } from "./envConfig";

const openai = new OpenAI({
  apiKey: getAPIKey(),
});

export { openai };
