(function () {
  const messages = [];
  let isOpen = false;

  const bubble = document.createElement('button');
  bubble.id = 'chatbotBubble';
  bubble.innerHTML = '<span class="chatbotBubbleIcon">💬</span>';
  document.body.appendChild(bubble);

  const panel = document.createElement('div');
  panel.id = 'chatbotPanel';
  panel.innerHTML = `
    <div id="chatbotHeader">
      <div class="chatbotHeaderInfo">
        <div class="chatbotAvatar">🤖</div>
        <div>
          <div class="chatbotHeaderTitle">Trợ lý AI</div>
          <div class="chatbotHeaderStatus"><span class="chatbotStatusDot"></span>Đang hoạt động</div>
        </div>
      </div>
      <button id="chatbotClose" aria-label="Đóng">✕</button>
    </div>
    <div id="chatbotMessages"></div>
    <div id="chatbotInputRow">
      <input id="chatbotInput" type="text" placeholder="Nhập tin nhắn..." />
      <button id="chatbotSend" aria-label="Gửi">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </div>
  `;
  document.body.appendChild(panel);

  const messagesEl = panel.querySelector('#chatbotMessages');
  const inputEl = panel.querySelector('#chatbotInput');
  const sendBtn = panel.querySelector('#chatbotSend');
  const closeBtn = panel.querySelector('#chatbotClose');
  const bubbleIcon = bubble.querySelector('.chatbotBubbleIcon');

  function addMessage(role, text) {
    const row = document.createElement('div');
    row.className = 'chatbotRow ' + (role === 'user' ? 'chatbotRowUser' : 'chatbotRowBot');

    if (role !== 'user') {
      const avatar = document.createElement('div');
      avatar.className = 'chatbotMsgAvatar';
      avatar.textContent = '🤖';
      row.appendChild(avatar);
    }

    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'chatbotMsg ' + (role === 'user' ? 'chatbotMsgUser' : 'chatbotMsgBot');
    bubbleEl.textContent = text;
    row.appendChild(bubbleEl);

    messagesEl.appendChild(row);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function addTypingRow() {
    const row = document.createElement('div');
    row.className = 'chatbotRow chatbotRowBot';

    const avatar = document.createElement('div');
    avatar.className = 'chatbotMsgAvatar';
    avatar.textContent = '🤖';
    row.appendChild(avatar);

    const typing = document.createElement('div');
    typing.className = 'chatbotMsg chatbotMsgBot chatbotTyping';
    typing.innerHTML = '<span></span><span></span><span></span>';
    row.appendChild(typing);

    messagesEl.appendChild(row);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return row;
  }

  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;

    addMessage('user', text);
    messages.push({ role: 'user', content: text });
    inputEl.value = '';
    sendBtn.disabled = true;

    const typingRow = addTypingRow();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, context: window.chatbotContext || '' })
      });
      const data = await res.json();
      typingRow.remove();

      const reply = data.reply || data.error || 'Xin lỗi, đã có lỗi xảy ra.';
      addMessage('bot', reply);
      messages.push({ role: 'assistant', content: reply });
    } catch (err) {
      typingRow.remove();
      addMessage('bot', 'Xin lỗi, hiện tại mình không thể kết nối được.');
    } finally {
      sendBtn.disabled = false;
    }
  }

  addMessage('bot', 'Xin chào! Mình là trợ lý AI của Life Performance Scan. Mình có thể giúp gì cho bạn?');

  function togglePanel(open) {
    isOpen = open !== undefined ? open : !isOpen;
    panel.classList.toggle('chatbotOpen', isOpen);
    bubble.classList.toggle('chatbotBubbleActive', isOpen);
    bubbleIcon.textContent = isOpen ? '✕' : '💬';
    if (isOpen) inputEl.focus();
  }

  bubble.addEventListener('click', () => togglePanel());
  closeBtn.addEventListener('click', () => togglePanel(false));
  sendBtn.addEventListener('click', sendMessage);
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
})();
