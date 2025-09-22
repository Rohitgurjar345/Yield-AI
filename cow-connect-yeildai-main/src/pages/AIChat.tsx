import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Bot, User, Lightbulb } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const suggestedQuestions = [
  "What is the best breed for milk production in hot climate?",
  "How to improve fertility in dairy cattle?",
  "What are the signs of healthy livestock?",
  "Which goat breed is best for meat production?",
  "How to prevent common diseases in buffalo?"
];

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI livestock advisor. I can help you with breed selection, animal care, breeding recommendations, and general livestock farming questions. How can I assist you today?",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const mockAIResponses = [
    "For hot climate milk production, I recommend Gir cattle. They are well-adapted to tropical conditions and can produce 1,200-1,800 liters per lactation. Gir cattle have excellent heat tolerance and disease resistance.",
    "To improve fertility in dairy cattle, focus on proper nutrition with adequate protein and minerals, maintain optimal body condition score (3.0-3.5), ensure regular health check-ups, and implement proper breeding management with AI or quality bulls.",
    "Signs of healthy livestock include: bright, alert eyes; smooth, shiny coat; normal body temperature (101-103°F for cattle); regular eating and rumination; normal milk yield; and active, social behavior.",
    "For meat production, Boer goats are excellent choice. They have high growth rates, good feed conversion, and can reach 35-45 kg body weight. In Indian conditions, also consider Sirohi or Black Bengal breeds.",
    "Common buffalo diseases can be prevented through: regular vaccination schedule, proper hygiene, clean water supply, balanced nutrition, deworming every 3-4 months, and maintaining proper shelter with good ventilation."
  ];

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const randomResponse = mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)];
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "ai",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            AI Livestock Advisor
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get expert advice on livestock breeds, care practices, breeding strategies, 
            and farming techniques from our intelligent AI assistant.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Suggested Questions */}
          <div className="lg:col-span-1">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  <span>Quick Questions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-full text-left h-auto p-3 text-xs justify-start"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="shadow-medium h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <span>Chat with AI Advisor</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex space-x-2 max-w-[80%] ${
                          message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent text-accent-foreground"
                          }`}
                        >
                          {message.sender === "user" ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                        </div>
                        <div
                          className={`p-3 rounded-lg ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex space-x-2 max-w-[80%]">
                        <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask about livestock breeds, care, breeding..."
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} disabled={!inputMessage.trim() || isTyping}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;