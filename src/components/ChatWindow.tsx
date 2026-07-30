import React, { useState, useEffect, useRef } from "react";
import { Companion, Message, Language } from "../types";
import { LANGUAGES } from "../data";
import {
  Send,
  Paperclip,
  Smile,
  Mic,
  Video,
  Phone,
  MoreVertical,
  Globe,
  ArrowLeft,
  X,
  Sparkles,
  CreditCard,
  MessageSquare
} from "lucide-react";

interface ChatWindowProps {
  companion: Companion;
  messages: Message[];
  onSendMessage: (text: string, language: string) => void;
  isSending: boolean;
  onBackClick?: () => void;
}

export default function ChatWindow({
  companion,
  messages,
  onSendMessage,
  isSending,
  onBackClick,
}: ChatWindowProps) {
  const [inputText, setInputText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showPremiumAlert, setShowPremiumAlert] = useState(false);
  const [alertReason, setAlertReason] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isSending) return;

    onSendMessage(inputText, selectedLanguage.name);
    setInputText("");
  };

  const handleMicClick = () => {
    setAlertReason("High-Quality Voice Memos & Custom Audio Messages");
    setShowPremiumAlert(true);
  };

  const handleCallClick = (type: "video" | "voice") => {
    setAlertReason(type === "video" ? "Premium Video Greeting Clips" : "Direct Companion Audio Calling");
    setShowPremiumAlert(true);
  };

  const handleIcebreakerClick = (text: string) => {
    if (isSending) return;
    onSendMessage(text, selectedLanguage.name);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative rounded-3xl overflow-hidden border border-slate-100">
      {/* WhatsApp Light Header */}
      <div className="bg-[#f0f2f5] px-4 py-3 border-b border-slate-200 flex items-center justify-between shadow-sm shrink-0">
        <div className="flex items-center space-x-3 min-w-0">
          {onBackClick && (
            <button onClick={onBackClick} className="md:hidden text-slate-600 p-1 hover:bg-slate-200 rounded-full transition cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          {/* Profile Picture */}
          <div className="relative">
            <img
              src={companion.avatar}
              alt={companion.name}
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
          </div>

          {/* Title & Status */}
          <div className="min-w-0">
            <div className="flex items-center space-x-1.5">
              <h3 className="font-bold text-slate-800 text-sm truncate">{companion.name}</h3>
              <span className="text-[10px] text-emerald-700 bg-emerald-100 border border-emerald-200 px-1.5 py-0.5 rounded font-bold scale-95">
                {companion.relationshipType}
              </span>
            </div>
            <p className="text-[11px] text-emerald-600 font-bold">
              {isSending ? "typing..." : "Online"}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3 text-slate-600">
          <button
            onClick={() => handleCallClick("video")}
            className="p-1.5 hover:bg-slate-200 rounded-full transition cursor-pointer"
            title="Video Greeting"
          >
            <Video className="w-4.5 h-4.5 text-emerald-600" />
          </button>
          <button
            onClick={() => handleCallClick("voice")}
            className="p-1.5 hover:bg-slate-200 rounded-full transition cursor-pointer"
            title="Voice Memo"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
          </button>

          {/* Language Switcher Button */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              id="language-picker-header-btn"
              className="flex items-center space-x-1.5 bg-white hover:bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full text-xs text-slate-700 font-medium transition cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>{selectedLanguage.flag} {selectedLanguage.name}</span>
            </button>

            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden max-h-64 overflow-y-auto">
                <div className="p-2 border-b border-slate-100 text-[10px] text-slate-400 uppercase font-bold">
                  Tongue Languages
                </div>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setShowLanguageDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs transition hover:bg-slate-50 flex items-center justify-between ${
                      selectedLanguage.code === lang.code ? "text-emerald-600 font-bold bg-emerald-50/50" : "text-slate-700"
                    }`}
                  >
                    <span>{lang.flag} {lang.name}</span>
                    <span className="text-[9px] text-slate-400">{lang.nativeName}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* WhatsApp Beige Wallpaper/Background Container */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-3.5 relative"
        style={{
          backgroundImage: "radial-gradient(#e1e4e7 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
          backgroundColor: "#efeae2" // Standard WhatsApp light wallpaper background
        }}
      >
        {/* Sticky Encryption Notice */}
        <div className="flex justify-center my-1.5">
          <span className="bg-[#ffe596]/30 border border-amber-300/40 text-amber-900 text-[11px] py-1 px-3.5 rounded-lg shadow-sm max-w-sm text-center leading-relaxed font-sans font-medium">
            🔐 Messages are private & secure. Upgrade to Elite Premium (₹299/mo) to unlock endless premium features.
          </span>
        </div>

        {/* Character Bio Card (Only shown if very few messages exist) */}
        {messages.length <= 1 && (
          <div className="bg-white/80 border border-slate-200/50 rounded-2xl p-4 max-w-sm mx-auto text-center space-y-2 backdrop-blur-sm shadow-sm">
            <img
              src={companion.avatar}
              alt={companion.name}
              referrerPolicy="no-referrer"
              className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-emerald-500/20 shadow-sm"
            />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Chatting with {companion.name}</h4>
              <p className="text-xs text-slate-500 italic">"{companion.tagline}"</p>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Traits: {companion.personality}
            </p>
            <div className="text-[10px] text-emerald-700 bg-emerald-50 inline-block px-2.5 py-1 rounded-full border border-emerald-200/50 font-bold">
              💬 Default Language: {selectedLanguage.name}
            </div>
          </div>
        )}

        {/* Message Thread */}
        {messages.map((msg) => {
          const isUser = msg.sender === "user";
          return (
            <div key={msg.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[78%] rounded-xl px-3.5 py-2 relative shadow-sm ${
                  isUser
                    ? "bg-[#d9fdd3] text-slate-800 rounded-tr-none border border-[#e1f7de]" // Real light green WhatsApp bubble
                    : "bg-white text-slate-800 rounded-tl-none border border-slate-100" // Real white WhatsApp bubble
                }`}
              >
                <p className="text-sm whitespace-pre-line leading-relaxed pb-2.5">{msg.content}</p>
                
                {/* Meta details */}
                <div className="flex items-center justify-end space-x-1 text-[9px] text-slate-400 absolute bottom-1 right-2.5 select-none font-sans">
                  <span>{msg.timestamp}</span>
                  {isUser && (
                    <span className="text-sky-500 font-bold">✓✓</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator bubble */}
        {isSending && (
          <div className="flex justify-start">
            <div className="bg-white text-slate-700 rounded-xl rounded-tl-none px-4 py-2.5 border border-slate-100 flex items-center space-x-2 shadow-sm">
              <span className="text-xs italic text-slate-400">{companion.name} is writing</span>
              <div className="flex space-x-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        {/* Ref Anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Icebreakers (Only if chat is quiet) */}
      {messages.length <= 1 && !isSending && (
        <div className="bg-[#efeae2] px-4 py-1.5 flex overflow-x-auto gap-2 scrollbar-none shrink-0">
          {companion.icebreakers.map((breaker, idx) => (
            <button
              key={idx}
              onClick={() => handleIcebreakerClick(breaker)}
              className="whitespace-nowrap bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-700 text-xs px-3.5 py-1.5 rounded-full transition cursor-pointer font-medium shadow-sm"
            >
              {breaker.length > 35 ? breaker.substring(0, 35) + "..." : breaker}
            </button>
          ))}
        </div>
      )}

      {/* WhatsApp Input Bar */}
      <form
        onSubmit={handleSend}
        className="bg-[#f0f2f5] px-3.5 py-3 border-t border-slate-200 flex items-center space-x-2.5 shrink-0"
      >
        <button
          type="button"
          onClick={() => {
            setAlertReason("Intimate Image Sharing & Custom Galleries");
            setShowPremiumAlert(true);
          }}
          className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-full transition cursor-pointer"
        >
          <Paperclip className="w-5 h-5 text-emerald-600" />
        </button>

        <button
          type="button"
          onClick={() => {
            setAlertReason("Expressive Emojis & Custom Animated Stickers");
            setShowPremiumAlert(true);
          }}
          className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-full transition cursor-pointer"
        >
          <Smile className="w-5 h-5 text-emerald-600" />
        </button>

        {/* Main Text Input */}
        <input
          type="text"
          id="whatsapp-chat-input-field"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={`Type a message in ${selectedLanguage.name}...`}
          disabled={isSending}
          className="flex-1 bg-white border border-slate-200 outline-none text-slate-800 placeholder-slate-400 rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-emerald-500/30"
        />

        {/* Send or Mic Dynamic button */}
        {inputText.trim() ? (
          <button
            type="submit"
            id="whatsapp-send-btn"
            className="bg-[#00a884] hover:bg-[#008f72] text-white p-2.5 rounded-full transition shadow-sm cursor-pointer shrink-0"
          >
            <Send className="w-4 h-4 fill-white" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleMicClick}
            className="bg-white hover:bg-slate-100 text-slate-500 p-2.5 rounded-full border border-slate-200 transition cursor-pointer shrink-0"
          >
            <Mic className="w-4 h-4 text-emerald-600" />
          </button>
        )}
      </form>

      {/* Wholesome Premium Alert Modal */}
      {showPremiumAlert && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-[100] animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-sm p-6 space-y-4 shadow-xl relative text-center text-slate-800">
            <button
              onClick={() => setShowPremiumAlert(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
              <Sparkles className="w-6 h-6 text-emerald-600 fill-emerald-500/10" />
            </div>

            <div className="space-y-1.5">
              <h4 className="font-extrabold text-slate-800 text-base tracking-tight">
                Unlock {alertReason}! ✨
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Unlock premium high-speed chatting, unlimited direct mobile messages, and audio capabilities for just **₹299 per month**.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://t.me/HEYAI_GIRLFRIEND"
                target="_blank"
                rel="noopener noreferrer"
                id="redirect-telegram-btn-modal"
                className="flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition cursor-pointer"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Subscribe for ₹299/mo</span>
              </a>

              <a
                href="https://t.me/HEYAI_GIRLFRIEND"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2 px-4 rounded-xl transition cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Free on Telegram</span>
              </a>
              
              <button
                type="button"
                onClick={() => setShowPremiumAlert(false)}
                className="text-[11px] text-slate-400 hover:text-slate-600 transition py-1 cursor-pointer font-medium"
              >
                Continue flirty chat on web
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
