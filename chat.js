// This runs on the SERVER (Vercel serverless function), never in the browser.
// The API key lives here, as an environment variable — never in your HTML/JS.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Key is read from an environment variable set in your hosting
        // dashboard (Vercel/Netlify/etc), NOT hardcoded here.
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant for the Life Performance Scan website. Keep answers short and friendly.'
          },
          ...messages
        ],
        max_tokens: 500
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI error:', data);
      return res.status(response.status).json({ error: 'OpenAI request failed' });
    }

    const reply = data.choices?.[0]?.message?.content || 'Sorry, I had trouble responding.';
    return res.status(200).json({ reply });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
