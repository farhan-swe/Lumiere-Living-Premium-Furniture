
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { getDesignAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Lumiere Living. I am your personal design concierge. How can I help you transform your space today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    const advice = await getDesignAdvice(newMessages);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-stone-100 flex flex-col mb-4 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-300">
          <div className="p-5 bg-stone-900 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Design Concierge</h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-stone-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-stone-900 text-white rounded-tr-none' 
                    : 'bg-white text-stone-800 shadow-sm border border-stone-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-stone-200 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce delay-75" />
                    <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce delay-150" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-stone-100">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for design advice..."
                className="w-full bg-stone-100 border-none rounded-full py-3 px-5 pr-12 text-sm focus:ring-2 focus:ring-stone-400 focus:outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-2 p-2 bg-stone-900 text-white rounded-full hover:scale-110 active:scale-95 transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-center text-stone-400 mt-3 uppercase tracking-tighter">Powered by Lumiere AI & Gemini</p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-90 ${
          isOpen ? 'bg-white text-stone-900' : 'bg-stone-900 text-white'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : (
          <div className="relative">
            <MessageSquare className="w-8 h-8" />
            <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-amber-400 animate-pulse" />
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatAssistant;
