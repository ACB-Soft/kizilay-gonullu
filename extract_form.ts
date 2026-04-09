import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function extract() {
  for (let i = 1; i <= 2; i++) {
    const data = fs.readFileSync(`./public/form_sayfa${i}.png`);
    const base64EncodeString = data.toString("base64");
    
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/png",
              data: base64EncodeString,
            },
          },
          {
            text: "Please extract all the form fields, labels, and options from this image. Output them in a structured way.",
          },
        ],
      },
    });
    console.log(`--- Page ${i} ---`);
    console.log(response.text);
  }
}

extract().catch(console.error);
