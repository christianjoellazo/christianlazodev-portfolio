
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { KNOWLEDGE_BASE } from "./Chatbot-utils";
import { AnimatePresence, motion } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    text: "Hi there! I'm Christian's AI assistant. Ask me anything about his skills, experience, or projects!",
    sender: "bot",
    timestamp: new Date(),
  },
];

// Enhanced RAG function with better response relevance
const getAnswer = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  const relevantEntries = [];
  
  // Score each knowledge base entry by relevance
  for (const entry of KNOWLEDGE_BASE) {
    if (entry.question.some(q => lowerQuestion.includes(q))) {
      relevantEntries.push({
        answer: entry.answer,
        relevance: entry.question.filter(q => lowerQuestion.includes(q)).length
      });
    }
  }
  
  // Sort by relevance score and return most relevant
  if (relevantEntries.length > 0) {
    relevantEntries.sort((a, b) => b.relevance - a.relevance);
    return relevantEntries[0].answer;
  }
  
  return "I don't have specific information about that. Please ask about Christian's skills, education, projects, or experience, or use the contact form to reach out directly.";
};

// Suggested questions for better user engagement
const SUGGESTED_QUESTIONS = [
  "Tell me about Christian's skills",
  "What projects has Christian worked on?", 
  "What is Christian's educational background?",
  "What technologies does Christian use?"
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(SUGGESTED_QUESTIONS);
  const [isDocked, setIsDocked] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);

  // Handle window resize to determine docked vs floating mode
  useEffect(() => {
    const handleResize = () => {
      setIsDocked(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle clicking outside to close chatbot
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Handle keyboard accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSendMessage = (text: string = input) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Remove the used suggestion if it matches
    setSuggestions(prev => prev.filter(q => q !== text));

    // Simulate response delay with typing indicator
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAnswer(text),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
      
      // Regenerate suggestions based on the conversation
      if (suggestions.length < 2) {
        setSuggestions(SUGGESTED_QUESTIONS.slice(0, 3));
      }
    }, 1000 + Math.random() * 500); // Variable response time for realism
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast.info("AI Assistant activated! Ask me anything about Christian's portfolio.", {
        duration: 3000,
        icon: "🤖",
      });
    }
  };

  // Position class for chatbot container
  const positionClass = isDocked 
    ? "fixed bottom-24 left-0 right-0 mx-auto max-w-[90vw] md:max-w-md" 
    : "fixed bottom-24 right-6 z-40 w-full md:w-96 max-w-[90vw] md:max-w-md";

  return (
    <>
      {/* Floating chat button with pulse effect */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={toggleChatbot}
          className="rounded-full p-4 h-14 w-14 flex items-center justify-center shadow-lg bg-navy hover:bg-navy/90 dark:bg-primary dark:text-navy dark:hover:bg-primary/90 transition-colors duration-300 relative focus-ring"
          aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          {!isOpen && (
            <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></span>
          )}
        </Button>
      </motion.div>

      {/* Chatbot container with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatbotRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={positionClass}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chatbot-title"
          >
            <div className="flex flex-col h-[450px] bg-background dark:bg-gray-800 border border-border dark:border-gray-700 shadow-xl rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-navy dark:bg-gray-900 text-white p-4 flex justify-between items-center" id="chatbot-title">
                <div className="flex items-center space-x-2">
                  <Bot size={18} aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">AI Assistant</h3>
                    <p className="text-xs opacity-80">
                      Powered by Christian's knowledge base
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs flex items-center gap-1 dark:bg-primary dark:text-navy">
                  <Sparkles size={12} aria-hidden="true" />
                  <span>Jarvis</span>
                </Badge>
              </div>

              {/* Messages */}
              <div 
                className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin bg-slate-50 dark:bg-gray-800"
                aria-live="polite"
                aria-relevant="additions"
              >
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                        message.sender === "user"
                          ? "bg-navy text-white dark:bg-primary dark:text-navy rounded-br-none"
                          : "bg-white dark:bg-gray-700 dark:text-white rounded-bl-none"
                      }`}
                      role={message.sender === "bot" ? "status" : undefined}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-70 block mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                    aria-label="Assistant is typing"
                  >
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-lg max-w-[80%] rounded-bl-none">
                      <div className="flex space-x-1">
                        <div
                          className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                          aria-hidden="true"
                        />
                        <div
                          className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                          aria-hidden="true"
                        />
                        <div
                          className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested questions */}
              {suggestions.length > 0 && (
                <div className="px-4 py-2 bg-slate-100 dark:bg-gray-700 flex flex-wrap gap-2">
                  {suggestions.map((question, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="cursor-pointer hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors text-xs py-1 focus-ring"
                      onClick={() => handleSendMessage(question)}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(question)}
                      role="button"
                      aria-label={`Ask: ${question}`}
                    >
                      {question}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Input area */}
              <div className="p-4 border-t border-border dark:border-gray-700 flex items-center gap-2 bg-white dark:bg-gray-800">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 resize-none border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
                  rows={1}
                  aria-label="Type your message"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  size="icon"
                  disabled={!input.trim()}
                  aria-label="Send message"
                  className="bg-navy hover:bg-navy/90 dark:bg-primary dark:text-navy dark:hover:bg-primary/90 transition-all duration-300 hover:scale-105 focus-ring"
                >
                  <Send size={18} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
