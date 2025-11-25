import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

/**
 * Generates a quick, actionable sustainability tip using Gemini.
 */
export const generateEcoTip = async (): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key not found. Returning fallback tip.");
    return "Nezapomeňte třídit odpad! (Chybí API klíč)";
  }

  try {
    const modelId = 'gemini-2.5-flash';
    // Updated prompt to ask for Czech language
    const prompt = "Napiš jeden krátký, kreativní a praktický tip pro udržitelnější život. Piš česky. Maximálně 25 slov. Buď inspirativní.";

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });

    return response.text || "Přejděte na LED žárovky a ušetřete energii.";
  } catch (error) {
    console.error("Error generating eco tip:", error);
    return "Redukuj, použij znovu, recykluj. (Chyba připojení k AI)";
  }
};