// OpenAI SDK client placeholder
import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "dummy_key",
});
