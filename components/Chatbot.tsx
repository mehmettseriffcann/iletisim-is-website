"use client";

import { useChat } from "ai/react";
import { MessageCircle, X, Send, MinusCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Otomatik kaydırma
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Penceresi */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 transition-all duration-300">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-xs">AI</div>
              <div>
                <h3 className="font-bold text-sm leading-tight">İletişim İş Destek</h3>
                <p className="text-[10px] text-slate-300 opacity-80">Size nasıl yardımcı olabilirim?</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Kapat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.length === 0 ? (
              <div className="text-center text-slate-400 text-xs mt-10 space-y-2">
                <MessageCircle size={32} className="mx-auto opacity-20" />
                <p>Sendika ile ilgili sorularınızı bana sorabilirsiniz.</p>
                <p className="opacity-60 text-[10px]">Örn: Aidat ne kadar? Nasıl üye olurum?</p>
              </div>
            ) : (
              messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                      m.role === "user"
                        ? "bg-red-600 text-white rounded-tr-sm"
                        : "bg-slate-200 text-slate-800 rounded-tl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-200 text-slate-500 rounded-2xl rounded-tl-sm p-3 text-sm flex gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce delay-100">.</span>
                  <span className="animate-bounce delay-200">.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
              <input
                value={input || ""}
                onChange={handleInputChange}
                placeholder="Mesajınızı yazın..."
                className="flex-1 bg-slate-100 text-slate-800 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-red-600 hover:bg-red-700 disabled:bg-slate-300 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0"
              >
                <Send size={16} className="ml-1" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button ve İpucu */}
      <div className="relative">
        {!isOpen && (
          <div className="absolute -top-14 right-0 bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-2xl rounded-br-sm shadow-xl border border-slate-100 whitespace-nowrap animate-bounce">
            Bize Sorun!
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 ${
            isOpen ? "bg-slate-800 text-white" : "bg-red-600 text-white"
          }`}
          aria-label="Canlı Destek"
        >
          {isOpen ? <MinusCircle size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </div>
  );
}
