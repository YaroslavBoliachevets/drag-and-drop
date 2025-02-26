import { useEffect, useState } from 'react';
import './App.css';

import fetchMessages from './api.tsx';
import { Message } from './types';
import { MessagesList } from './components/MessagesList.tsx';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    const loadMessages = async () => {
      const data = await fetchMessages();
      // console.log('messages:', data);
      setMessages(data);
    };
    loadMessages();
  }, []);

  return (
    <>
      <div className="app">
        <h1 className="name">Drag and Drop messages</h1>

        <div className="messages-box">
          {messages.length > 0 ? (
            <MessagesList messages={messages} setMessages={setMessages} />
          ) : (
            <p>Loading messages...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
