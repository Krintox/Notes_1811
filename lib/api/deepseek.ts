// lib/api/deepseek.ts
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

export const summarizeText = async (text: string): Promise<string> => {
  const API_KEY = process.env.DEEPSEEK_API_KEY;
  
  if (!API_KEY) {
    console.error('DeepSeek API key is missing');
    throw new Error('API service is currently unavailable');
  }

  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'Summarize the following text in 2-3 concise sentences. Focus on key points and maintain original meaning.',
          },
          {
            role: 'user',
            content: `Text to summarize:\n\n${text.substring(0, 3000)}` // Limit input length
          }
        ],
        temperature: 0.5,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('DeepSeek API Error:', {
        status: response.status,
        statusText: response.statusText,
        errorText
      });
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.choices?.[0]?.message?.content) {
      console.error('Unexpected API response format:', data);
      throw new Error('Unexpected response format from API');
    }

    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Summarization Error:', error);
    throw new Error('Failed to generate summary. Please try again.');
  }
};