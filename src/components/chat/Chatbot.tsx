import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface Message {
  text: string;
  isBot: boolean;
}

const initialMessages: Message[] = [
  {
    text: "Hi! I'm HashBot. How can I help you today?",
    isBot: true,
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSend = (message: string) => {
    // Add user message
    setMessages(prev => [...prev, { text: message, isBot: false }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! Our team will get back to you soon.",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[350px] max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border border-gray-200">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">HashBot</h3>
            <p className="text-sm opacity-90">Ask me anything about our courses</p>
          </div>

          {/* Messages */}
          <div className="h-[400px] max-h-[50vh] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isBot={message.isBot}
              />
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;