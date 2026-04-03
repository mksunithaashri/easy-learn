import { GoogleGenAI } from '@google/genai';

export async function POST(request) {
  try {
    const { topic } = await request.json();

    if (!topic) {
      return Response.json({ error: 'Topic is required' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return Response.json({ error: 'API Key not configured. Please set GEMINI_API_KEY in your environment.' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // Using generative model to get a simple kid-friendly explanation
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Explain this topic to me like I am 5 years old. Keep it safe, warm, friendly, short, and use basic analogies if needed. Topic: ${topic}`,
    });

    return Response.json({ explanation: response.text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return Response.json({ error: 'Failed to generate explanation. Please try again.' }, { status: 500 });
  }
}
