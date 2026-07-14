(function () {
  const messages = [];

  const bubble = document.createElement('button');
  bubble.id = 'chatbotBubble';
  bubble.innerHTML = '💬';
  document.body.appendChild(bubble);

  const panel = document.createElement('div');
  panel.id = 'chatbotPanel';
  panel.innerHTML = `
    <div id="chatbotHeader">
      <span>Chat with us</span>
      <button id="chatbotClose">✕</button>
    </div>
    <div id="chatbotMessages"></div>
    <div id="chatbotInputRow">
      <input id="chatbotInput" type="text" placeholder="Type a message..." />
      <button id="chatbotSend">Send</button>
    </div>
  `;
  document.body.appendChild(panel);

  const messagesEl = panel.querySelector('#chatbotMessages');
  const inputEl = panel.querySelector('#chatbotInput');
  const sendBtn = panel.querySelector('#chatbotSend');
  const closeBtn = panel.querySelector('#chatbotClose');

  function addMessage(role, text) {
    const div = document.createElement('div');
    div.className = 'chatbotMsg ' + (role === 'user' ? 'chatbotMsgUser' : 'chatbotMsgBot');
    div.textContent = text;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;

    addMessage('user', text);
    messages.push({ role: 'user', content: text });
    inputEl.value = '';
    sendBtn.disabled = true;

    const typingEl = document.createElement('div');
    typingEl.className = 'chatbotMsg chatbotMsgBot';
    typingEl.textContent = '...';
    messagesEl.appendChild(typingEl);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages })
      });
      const data = await res.json();
      typingEl.remove();

      const reply = data.reply || data.error || 'Sorry, something went wrong.';
      addMessage('bot', reply);
      messages.push({ role: 'assistant', content: reply });
    } catch (err) {
      typingEl.remove();
      addMessage('bot', 'Sorry, I could not connect right now.');
    } finally {
      sendBtn.disabled = false;
    }
  }

  addMessage('bot', 'Hi! The chat bot is ready to help.');

  bubble.addEventListener('click', () => {
    panel.classList.toggle('chatbotOpen');
    if (panel.classList.contains('chatbotOpen')) inputEl.focus();
  });
  closeBtn.addEventListener('click', () => panel.classList.remove('chatbotOpen'));
  sendBtn.addEventListener('click', sendMessage);
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
})();
