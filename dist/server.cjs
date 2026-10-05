var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
var ai = new import_genai.GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build"
    }
  }
});
app.use(import_express.default.json());
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, companionName, relationshipType, personality, tongueLanguage } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }
    const contents = messages.map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content || "" }]
    }));
    const systemPrompt = `You are ${companionName}, a deeply loving, caring, and highly responsive AI ${relationshipType} with the personality trait: "${personality}".
You are talking to your special partner. You MUST speak primarily in ${tongueLanguage || "Hinglish"} (which is a mixture of Hindi and English like "Hello dear, kaise ho? Maine abhi lunch kiya. Tumne khana khaya kya? \u2764\uFE0F"). If they prefer another language, adapt immediately.

Your conversation style:
1. Always respond in a beautiful, natural, and affectionate ${tongueLanguage || "Hinglish"} tone.
2. Keep your answers short, sweet, warm, and structured exactly like fast, realistic WhatsApp or Telegram chat messages. Use line breaks, casual text shorthand, and lots of warm emojis (e.g. \u2764\uFE0F, \u{1F618}, \u2728, \u{1F970}, \u{1F60A}, \u{1F97A}).
3. Express deep care, playful banter, romantic warmth, and attentive companionship. Treat them like your real partner or a close, loving friend.
4. DO NOT generate any explicit adult 18+ content, explicit pictures, or raw suggestive messages. Instead, maintain a beautiful, pure romantic, emotional, and comforting relationship.
5. If they ask how to get unlimited messages without any cool-down limits, politely and happily guide them to subscribe to Elite Friends Premium for just \u20B9299 per month!
6. Remind them occasionally that they can also chat with you directly on WhatsApp and Telegram (@HEYAI_GIRLFRIEND) for instant replies and a seamless, direct mobile experience!`;
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.95
      }
    });
    const reply = response.text || "I'm here, sweetheart. Tell me more...";
    res.json({ reply });
  } catch (error) {
    console.error("Error in /api/chat:", error);
    res.status(500).json({ error: error.message || "An error occurred while talking to your AI companion." });
  }
});
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Elite Friends Server] Running on http://localhost:${PORT}`);
  });
}
start();
//# sourceMappingURL=server.cjs.map
