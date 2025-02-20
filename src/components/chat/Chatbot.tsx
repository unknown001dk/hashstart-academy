import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

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
  const chatRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const ChatMessage = ({
    message,
    isBot,
    isButton,
  }: {
    message: string;
    isBot: boolean;
    isButton?: boolean;
  }) => {
    return (
      <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
        <div
          className={`p-3 rounded-lg ${
            isBot ? "bg-gray-200 text-black" : "bg-green-500 text-white"
          }`}
        >
          {message}
          {isButton && (
            <a
              href="https://yourwebsite.com/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Visit Courses
            </a>
          )}
        </div>
      </div>
    );
  };

  const handleSend = (message: string) => {
    const badWords = ["fuck", "shit", "bitch"]; // Add more if needed
    const sanitizedMessage = message
      .split(" ")
      .map((word) => (badWords.includes(word.toLowerCase()) ? "****" : word))
      .join(" ");
    // Add user message
    setMessages((prev) => [...prev, { text: sanitizedMessage, isBot: false }]);

    // Check if the message is only censored text (*** or ****)
    if (/^\*+$/.test(sanitizedMessage)) {
      // sanitizedMessage = "****"; // Ensure it stays censored
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: sanitizedMessage, isBot: false },
          { text: "Please avoid using inappropriate language.", isBot: true },
        ]);
      }, 1000);
      return;
    }

    // Simulate bot response
    setTimeout(() => {
      let botResponse =
        "I'm not sure I understand. Try asking about courses, support, or our blog.";

      switch (true) {
        case /\bhii\b|\bhey\b|\bhiii\b|\bhi\b|\bhello\b/i.test(message):
          botResponse = "Hello! How can I assist you today?";
          break;
        case /courses?/i.test(message):
          botResponse =
            "We offer various courses in programming, data science, and design. Visit our website for more details![View Courses](https://yourwebsite.com/courses)";
          break;
        case /support/i.test(message):
          botResponse = "For support, please email contacthashstart@gmail.com.";
          break;
        case /blog/i.test(message):
          botResponse = "Check out our blog for the latest updates and tips!";
          break;
        case /\bhi\b|\bhello\b/i.test(message):
          botResponse = "Hello! How can I assist you today?";
          break;
        case /python/i.test(message):
          botResponse =
            "We offer Python courses for beginners to advanced learners. Check out our Python course page!";
          break;
        default:
          botResponse =
            "I'm not sure I understand. Try asking about courses, support, or our blog.";
      }

      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
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

      {/* Chat Window with Smooth Transition */}
      <div
        className={`absolute bottom-16 right-0 w-[350px] max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border border-gray-200 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-green-600 text-white p-4 rounded-t-lg">
          <h3 className="font-semibold">HashBot</h3>
          <p className="text-sm opacity-90">
            Ask me anything about our courses
          </p>
        </div>

        {/* Messages */}
        <div
          ref={chatRef}
          className="h-[400px] max-h-[50vh] overflow-y-auto p-4 space-y-4"
        >
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
    </div>
  );
};

export default Chatbot;
