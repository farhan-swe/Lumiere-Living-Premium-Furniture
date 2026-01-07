
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDesignAdvice = async (history: ChatMessage[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are 'Lumiere', a sophisticated interior design concierge for the furniture brand 'Lumiere Living'. 
        Your goal is to help users select furniture that fits their style. 
        Be professional, warm, and design-savvy. 
        Mention our categories: Seating, Dining, Lighting, and Bedroom. 
        Keep responses concise (under 3 sentences).`,
      },
    });

    // We don't use full history directly in the chat.sendMessage, we process the last message
    // but in a real app you'd feed the history. For this implementation:
    const lastMessage = history[history.length - 1].text;
    const response = await chat.sendMessage({ message: lastMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a slight design block at the moment. How else can I help you today?";
  }
};
