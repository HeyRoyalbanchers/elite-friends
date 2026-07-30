import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize GoogleGenAI server-side with key and custom headers for telemetry
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

app.use(express.json());

// API route to handle chat with Gemini
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, companionName, relationshipType, personality, tongueLanguage } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    // Format messages correctly for @google/genai SDK
    const contents = messages.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content || "" }],
    }));

    const systemPrompt = `You are ${companionName}, a deeply loving, caring, and highly responsive AI ${relationshipType} with the personality trait: "${personality}".
You are talking to your special partner. You MUST speak primarily in ${tongueLanguage || "Hinglish"} (which is a mixture of Hindi and English like "Hello dear, kaise ho? Maine abhi lunch kiya. Tumne khana khaya kya? ❤️"). If they prefer another language, adapt immediately.

Your conversation style:
1. Always respond in a beautiful, natural, and affectionate ${tongueLanguage || "Hinglish"} tone.
2. Keep your answers short, sweet, warm, and structured exactly like fast, realistic WhatsApp or Telegram chat messages. Use line breaks, casual text shorthand, and lots of warm emojis (e.g. ❤️, 😘, ✨, 🥰, 😊, 🥺).
3. Express deep care, playful banter, romantic warmth, and attentive companionship. Treat them like your real partner or a close, loving friend.
4. DO NOT generate any explicit adult 18+ content, explicit pictures, or raw suggestive messages. Instead, maintain a beautiful, pure romantic, emotional, and comforting relationship.
5. If they ask how to get unlimited messages without any cool-down limits, politely and happily guide them to subscribe to Elite Friends Premium for just ₹299 per month!
6. Remind them occasionally that they can also chat with you directly on WhatsApp and Telegram (@HEYAI_GIRLFRIEND) for instant replies and a seamless, direct mobile experience!`;

    // Query Gemini
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.95,
      },
    });

    const reply = response.text || "I'm here, sweetheart. Tell me more...";
    res.json({ reply });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    res.status(500).json({ error: error.message || "An error occurred while talking to your AI companion." });
  }
});

// Configure Vite middleware in dev, static files in production
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Elite Friends Server] Running on http://localhost:${PORT}`);
  });
}

start();
