// This runs on the SERVER (Vercel serverless function), never in the browser.
// The API key lives here, as an environment variable — never in your HTML/JS.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, apiKey, context } = req.body || {};
  const openAIKey = (apiKey || process.env.OPENAI_API_KEY || '').trim();

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  if (!openAIKey) {
    return res.status(401).json({ error: 'OpenAI API key is missing. Paste it in the chat widget or set OPENAI_API_KEY on the server.' });
  }

  const systemPrompt = 'You are a helpful assistant for the Life Performance Scan website. Keep answers short and friendly.'
    + (context ? `\n\nHere is the user's own assessment data — use it to personalize your answers instead of asking them to repeat it:\n${context}` : '');

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openAIKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          ...messages
        ],
        max_tokens: 500
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI error:', data);
      return res.status(response.status).json({ error: data.error?.message || 'OpenAI request failed' });
    }

    const reply = data.choices?.[0]?.message?.content || 'Sorry, I had trouble responding.';
    return res.status(200).json({ reply });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
