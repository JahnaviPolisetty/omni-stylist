import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PageContainer } from "@/components/ui/page-container";
import { NavHeader } from "@/components/ui/nav-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  showButton?: boolean;
}

const initialMessages: Message[] = [
  { id: 1, text: "Hi! I'm your personal stylist. How can I help you today?", sender: "ai" },
  { id: 2, text: "I need an outfit for a wedding.", sender: "user" },
  {
    id: 3,
    text: "Sure! What style do you prefer?\n\n• Indo-Western\n• Traditional\n• Modern Minimal",
    sender: "ai",
    showButton: true,
  },
];

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    };
    setMessages([...messages, newMessage]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Great choice! Let me show you some stunning options that would be perfect for the occasion.",
          sender: "ai",
          showButton: true,
        },
      ]);
    }, 1000);
  };

  return (
    <PageContainer className="flex flex-col">
      <NavHeader title="AI Stylist" backTo="/" />

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <AnimatePresence mode="popLayout">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className="max-w-[80%]">
                {message.sender === "ai" && (
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">OmniStylist</span>
                  </div>
                )}
                <div
                  className={`px-4 py-3 rounded-2xl whitespace-pre-line ${
                    message.sender === "user"
                      ? "bg-chat-user text-chat-user-foreground rounded-br-md"
                      : "bg-chat-ai text-chat-ai-foreground rounded-bl-md"
                  }`}
                >
                  {message.text}
                </div>
                {message.showButton && message.sender === "ai" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-3"
                  >
                    <Button
                      size="sm"
                      className="rounded-full gap-2"
                      onClick={() => navigate("/recommendations")}
                    >
                      <Sparkles className="w-4 h-4" />
                      Show Recommendations
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-background border-t border-border p-4">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 h-12 rounded-full bg-secondary border-0 px-5"
          />
          <Button
            size="icon"
            className="w-12 h-12 rounded-full shrink-0"
            onClick={handleSend}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
