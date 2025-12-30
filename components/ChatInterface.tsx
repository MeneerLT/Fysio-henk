
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, ShieldCheck } from 'lucide-react';
import { Message } from '../types';
import { getFysioHenkResponse } from '../services/geminiService';
import { HenkAvatar } from './HenkAvatar';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  onBotResponse: (content: string) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSendMessage, onBotResponse }) => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    onSendMessage(userMessage);
    setIsTyping(true);

    const response = await getFysioHenkResponse([...messages, { role: 'user', content: userMessage }]);
    setIsTyping(false);
    onBotResponse(response);
  };

  return (
    <div className="flex flex-col h-full bg-[#fcfcfc]">
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
          <ShieldCheck className="w-4 h-4 text-[#ef5a24]" />
          Directe Medische Triage
        </div>
        <div className="text-[10px] text-green-600 flex items-center gap-2 font-black uppercase tracking-[0.15em]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Henk staat klaar
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-10 scroll-smooth"
      >
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-4 duration-500`}
          >
            <div className={`flex gap-4 max-w-[90%] sm:max-w-[80%] ${msg.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="mt-1 flex-shrink-0">
                {msg.role === 'assistant' ? (
                  <HenkAvatar className="w-12 h-12" />
                ) : (
                  <div className="w-12 h-12 rounded-full border-2 border-slate-200 bg-slate-100 flex items-center justify-center shadow-md">
                    <User className="w-6 h-6 text-slate-500" />
                  </div>
                )}
              </div>
              <div className={`relative p-5 rounded-2xl shadow-sm text-[15px] leading-relaxed transition-all duration-300 ${
                msg.role === 'assistant' 
                  ? 'bg-white text-slate-800 rounded-tl-none border border-slate-100 border-l-4 border-l-[#ef5a24]' 
                  : 'bg-[#1a1a1a] text-white rounded-tr-none shadow-xl'
              }`}>
                <div className="prose prose-sm max-w-none">
                  {msg.content.split('\n').map((line, i) => (
                    <p key={i} className={`${line.trim().startsWith('-') ? 'ml-2 mb-2 pl-3 border-l-2 border-orange-100 text-slate-600 font-medium' : 'mb-3 last:mb-0'}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-4 items-center">
              <HenkAvatar className="w-12 h-12 opacity-50 grayscale animate-pulse" />
              <div className="flex items-center gap-1.5 bg-white border border-slate-100 px-5 py-3 rounded-2xl rounded-tl-none shadow-sm">
                <div className="w-2 h-2 bg-[#ef5a24] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-[#ef5a24] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-[#ef5a24] rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-8 border-t border-slate-200 bg-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <form onSubmit={handleSubmit} className="relative max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hoi Henk, ik heb last van mijn..."
            className="w-full pl-6 pr-16 py-5 bg-slate-50 border border-slate-200 rounded-[2rem] focus:ring-4 focus:ring-orange-50 focus:bg-white focus:border-[#ef5a24] transition-all outline-none text-base shadow-inner font-medium placeholder:text-slate-400"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="absolute right-2.5 top-2.5 p-3.5 bg-[#ef5a24] text-white rounded-full hover:bg-[#d44d1d] disabled:opacity-50 transition-all shadow-lg active:scale-95 group"
          >
            <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </form>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-5 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">Fy-fit Nijmegen</span>
           <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">Evidence-Based</span>
           <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">Privacy Geborgd</span>
        </div>
      </div>
    </div>
  );
};
