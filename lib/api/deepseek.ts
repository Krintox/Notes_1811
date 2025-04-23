const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export const summarizeText = async (text: string): Promise<string> => {
  const API_KEY = process.env.GEMINI_API_KEY;
  
  if (!API_KEY) {
    console.error('Gemini API key is missing');
    throw new Error('API service is currently unavailable');
  }

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Summarize the following text in 2-3 concise sentences. Focus on key points and maintain original meaning:\n\n${text.substring(0, 3000)}`
          }]
        }]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error:', {
        status: response.status,
        statusText: response.statusText,
        errorText
      });
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Updated to match Gemini's response format
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.error('Unexpected API response format:', data);
      throw new Error('Unexpected response format from API');
    }

    return data.candidates[0].content.parts[0].text.trim();
  } catch (error) {
    console.error('Summarization Error:', error);
    throw new Error('Failed to generate summary. Please try again.');
  }
};