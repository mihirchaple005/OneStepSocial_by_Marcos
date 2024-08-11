import React, { useState, useEffect, useRef } from 'react';
import { FaRobot } from 'react-icons/fa';

const Sanrakshak = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prevMessages => [...prevMessages, { text: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'Bot response', sender: 'bot' }
        ]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex items-center justify-center text-xl">
        <FaRobot className="mr-2" />
        Sanrakshak
      </header>
      <div ref={chatContainerRef} className="flex flex-col flex-grow p-4 overflow-auto relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-gray-400">Welcome to OneStep Social! I'm Sanrakshak, your digital guardian</p>
        </div>
        <div className="flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-lg ${msg.sender === 'user' ? 'bg-pink-200 text-black' : 'bg-blue-200 text-black'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-white flex">
        <input
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Always here to help you ^_^"
        />
        <button
          className="bg-blue-600 text-white p-2 rounded-r-lg"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Sanrakshak;

