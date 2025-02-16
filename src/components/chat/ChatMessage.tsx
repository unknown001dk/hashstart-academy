import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage = ({ message, isBot }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && <Bot className="h-6 w-6 text-green-600" />}
      <div className={`rounded-lg px-4 py-2 max-w-[80%] ${
        isBot ? 'bg-gray-100' : 'bg-green-600 text-white'
      }`}>
        <p className="text-sm">{message}</p>
      </div>
      {!isBot && <User className="h-6 w-6 text-green-600" />}
    </div>
  );
};

export default ChatMessage;