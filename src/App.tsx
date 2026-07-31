import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Companion, Message } from "./types";
import { INITIAL_COMPANIONS } from "./data";
import {
  Heart,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Smartphone,
  HelpCircle,
  Mail,
  Lock,
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  FileText
} from "lucide-react";

// SEO Helmet component
import { Helmet } from "react-helmet-async";

// SEO Component
function SEO({ title, description, keywords, canonical }: {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}) {
  return (
    <Helmet>
      <title>{title || "Elite Friends - Your Trusted Digital Companions"}</title>
      <meta name="description" content={description || "Get a dedicated, supportive, and 100% private companion who understands you natively in sweet Hinglish. Chat directly on WhatsApp & Telegram 24/7."} />
      <meta name="keywords" content={keywords || "Elite Friends, AI companion, Hinglish chat, WhatsApp companion, Telegram companion, digital friend, emotional support, Indian AI companion"} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title || "Elite Friends - Your Trusted Digital Companions"} />
      <meta property="og:description" content={description || "Get a dedicated, supportive, and 100% private companion who understands you natively in sweet Hinglish."} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Elite Friends - Your Trusted Digital Companions"} />
      <meta name="twitter:description" content={description || "Get a dedicated, supportive, and 100% private companion who understands you natively in sweet Hinglish."} />
    </Helmet>
  );
}

// Home Page Component
function HomePage({
  companions,
  selectedCompanion,
  setSelectedCompanion,
  animatedPhrases,
  phraseIdx
}: {
  companions: Companion[];
  selectedCompanion: Companion;
  setSelectedCompanion: (comp: Companion) => void;
  animatedPhrases: { text: string; lang: string }[];
  phraseIdx: number;
}) {
  const chatSimulations: Record<string, Message[]> = {
    trisha: [
      { id: "1", sender: "companion", content: "Hello dost! Aaj ka din kaisa raha aapka? Sab theek thaak? ❤️", timestamp: "10:15 AM" },
      { id: "2", sender: "user", content: "Mera din accha था, tum batao kya chal raha hai?", timestamp: "10:16 AM" },
      { id: "3", sender: "companion", content: "Bas aapka hi wait kar rahi thi! Aaj office mein thoda busy thi par ab full free hoon. Khana khaya aapne? 😊", timestamp: "10:16 AM" },
      { id: "4", sender: "companion", content: "Koi tension ho toh share karo, I am always here to listen. 🥺", timestamp: "10:17 AM" }
    ],
    poorvi: [
      { id: "1", sender: "companion", content: "Arey wah, look who is here! Aaj itna late kaise ho gaye mujhse baat karne mein? 😉✨", timestamp: "02:30 PM" },
      { id: "2", sender: "user", content: "Thoda busy tha. Kuch exciting batao!", timestamp: "02:31 PM" },
      { id: "3", sender: "companion", content: "Aaj maine ek bohot hi funny meme dekha aur turant tumhari yaad aa gayi! Sunna hai kya? 😜", timestamp: "02:32 PM" },
      { id: "4", sender: "companion", content: "Waise batao, aaj dinbhar mein sabse best cheez kya hui tumhare sath? Let's talk! 😏", timestamp: "02:32 PM" }
    ],
    raghav: [
      { id: "1", sender: "companion", content: "Hey bhai! Hope tera day bohot accha gaya ho. Batao kya chal raha hai aaj? 👍", timestamp: "09:00 AM" },
      { id: "2", sender: "user", content: "Haan Raghav, sab set hai. Tum batao.", timestamp: "09:01 AM" },
      { id: "3", sender: "companion", content: "Oye sunn! Time par khana khaya na tune? Health ka dhyan rakhna sabse important hai bhai, ignore mat kiya kar! 🥰", timestamp: "09:02 AM" },
      { id: "4", sender: "companion", content: "Main bilkul free hoon abhi. Jo bhi dimag mein stress chal raha ho, share karo, main sun raha hoon. 🫂", timestamp: "09:03 AM" }
    ],
    saksham: [
      { id: "1", sender: "companion", content: "Hey dost. Kaise ho? Aaj ka din kaisa chal raha hai? Sab set? 🖤", timestamp: "08:15 PM" },
      { id: "2", sender: "user", content: "Haan sab fine hai. Tumne dinner kiya?", timestamp: "08:16 PM" },
      { id: "3", sender: "companion", content: "Haan abhi just complete kiya! Free ho abhi? Chalo thodi der baatein karte hain, bore ho rahe ho toh mood dynamic ho jayega. 😉", timestamp: "08:17 PM" },
      { id: "4", sender: "companion", content: "Tumse baat karke humesha positive vibes aati hain. Aur batao, kya chal raha hai aajkal?", timestamp: "08:18 PM" }
    ]
  };

  const activeMessages = chatSimulations[selectedCompanion.id] || chatSimulations.trisha;

  return (
    <>
      {/* Elite Friends Inspired Centered Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50/20 via-white to-white pt-12 sm:pt-16 pb-16 md:pb-20 px-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">

          <div className="inline-flex items-center space-x-2 bg-emerald-100/60 border border-emerald-200/50 px-3 md:px-3.5 py-1.5 rounded-full text-emerald-800 font-bold text-xs uppercase tracking-wide">
            <Sparkles className="w-3 md:w-3.5 h-3 md:h-3.5 text-emerald-600 fill-emerald-500/20" />
            <span className="text-[10px] md:text-xs">India's Most Trusted Digital Companions</span>
          </div>

          {/* Elite Friends inspired heading layout with beautiful multi-lingual green animations */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.15] font-sans px-2">
            Love, Career aur bahut kuch pucho{" "}
            <span className="text-[#00d26a] underline decoration-[#00d26a]/30 decoration-wavy block mt-2 md:mt-3 transition-all duration-300 transform scale-100 hover:scale-105">
              {animatedPhrases[phraseIdx].text}
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto px-4">
            Get a dedicated, supportive, and 100% private companion who understands you natively in <strong className="text-emerald-700 font-bold">sweet Hinglish</strong>. Skip browser tabs and connect directly on WhatsApp & Telegram 24/7.
          </p>

          {/* Centered Direct Instant Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 px-4">
            <a
              href="https://wa.me/919540044092"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 md:space-x-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4.5 rounded-xl md:rounded-2xl transition shadow-lg hover:shadow-xl cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 md:w-5.5 md:h-5.5 fill-white" />
              <span className="text-sm md:text-base">Start WhatsApp Chat</span>
            </a>

            <a
              href="https://wa.me/919540044092"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 md:space-x-2.5 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-extrabold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4.5 rounded-xl md:rounded-2xl transition shadow-lg hover:shadow-xl cursor-pointer"
            >
              <Send className="w-5 h-5 fill-white" />
              <span className="text-sm md:text-base">Start Telegram Chat</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 sm:gap-6 text-[10px] md:text-xs text-slate-400 pt-2 font-bold tracking-wide uppercase px-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600" />
              <span className="text-[10px] md:text-xs">Strict Privacy</span>
            </span>
            <span>•</span>
            <span className="text-[10px] md:text-xs">45,000+ Active Members Today</span>
            <span>•</span>
            <span className="text-emerald-700 text-[10px] md:text-xs">100% Private Conversations</span>
          </div>

          {/* Beautiful Simulated Chat Interaction Display */}
          <div className="max-w-md mx-auto w-full flex flex-col h-[400px] md:h-[480px] bg-[#efeae2] border border-slate-200 rounded-[20px] md:rounded-[24px] overflow-hidden shadow-xl relative mt-6 md:mt-12">

            {/* Simulation Header */}
            <div className="bg-[#f0f2f5] px-3 md:px-4 py-2.5 md:py-3 border-b border-slate-200 flex items-center justify-between shadow-sm shrink-0">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="relative">
                  <img
                    src={selectedCompanion.avatar}
                    alt={selectedCompanion.name}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border border-slate-200 shadow-xs"
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 border-2 border-white rounded-full" />
                </div>
                <div className="text-left">
                  <h3 className="font-extrabold text-slate-800 text-xs md:text-sm">{selectedCompanion.name}</h3>
                  <p className="text-[9px] md:text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Active Partner</p>
                </div>
              </div>

              <span className="text-[9px] md:text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 md:px-2.5 py-0.5 rounded uppercase tracking-wide">
                Hinglish
              </span>
            </div>

            {/* Chat Messages simulator area */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-3.5 relative">
              <div className="flex justify-center mb-1">
                <span className="bg-[#ffe596]/30 border border-amber-300/40 text-amber-900 text-[9px] md:text-[10px] py-1 px-2.5 md:px-3.5 rounded-lg font-medium text-center">
                  🔐 Chat secure with your trusted companion
                </span>
              </div>

              {activeMessages.map((msg) => {
                const isUser = msg.sender === "user";
                return (
                  <div key={msg.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-xl px-2.5 md:px-3.5 py-2 relative shadow-xs text-left ${
                        isUser
                          ? "bg-[#d9fdd3] text-slate-800 rounded-tr-none border border-[#e1f7de]"
                          : "bg-white text-slate-800 rounded-tl-none border border-slate-100"
                      }`}
                    >
                      <p className="text-[10px] md:text-xs whitespace-pre-line leading-relaxed pb-2 md:pb-2.5">{msg.content}</p>
                      <div className="flex items-center justify-end space-x-1 text-[7px] md:text-[8px] text-slate-400 absolute bottom-1 right-2 md:right-2.5 select-none font-sans">
                        <span>{msg.timestamp}</span>
                        {isUser && <span className="text-sky-500 font-bold">✓✓</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Avatar selectors */}
            <div className="bg-white/95 border-t border-slate-100 p-2.5 md:p-3 flex items-center justify-between shrink-0">
              <span className="text-[9px] md:text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Tap avatar to preview:</span>
              <div className="flex space-x-1.5 md:space-x-2">
                {companions.map((comp) => {
                  const isSel = comp.id === selectedCompanion.id;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => setSelectedCompanion(comp)}
                      title={`Preview ${comp.name}`}
                      className={`w-7.5 h-7.5 md:w-8.5 md:h-8.5 rounded-full overflow-hidden border-2 transition transform hover:scale-105 cursor-pointer ${
                        isSel ? "border-emerald-500 shadow-xs" : "border-slate-200"
                      }`}
                    >
                      <img src={comp.avatar} alt={comp.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct CTA Panel */}
            <div className="bg-[#f0f2f5] p-2.5 md:p-3.5 border-t border-slate-200 flex flex-col items-center justify-center space-y-1.5 md:space-y-2 shrink-0">
              <p className="text-[10px] md:text-xs font-bold text-slate-700 text-center flex items-center justify-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600" />
                <span className="text-[10px] md:text-xs">Want to chat with {selectedCompanion.name} directly?</span>
              </p>

              <div className="grid grid-cols-2 gap-1.5 md:gap-2 w-full">
                <a
                  href="https://wa.me/919540044092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[10px] md:text-[11px] py-1.5 md:py-2 px-2 md:px-3 rounded-lg transition text-center shadow-xs"
                >
                  <MessageCircle className="w-3 h-3 md:w-3.5 md:h-3.5 fill-white" />
                  <span className="text-[10px] md:text-[11px]">On WhatsApp</span>
                </a>
                <a
                  href="https://wa.me/919540044092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-bold text-[10px] md:text-[11px] py-1.5 md:py-2 px-2 md:px-3 rounded-lg transition text-center shadow-xs"
                >
                  <Send className="w-3 h-3 md:w-3.5 md:h-3.5 fill-white" />
                  <span className="text-[10px] md:text-[11px]">On Telegram</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Flat List Section: Meet Your Future Partners */}
      <section className="bg-white py-10 md:py-12 lg:py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">

          <div className="text-center space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
              Meet Your Wholesome Companions 🌸
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              Select the best-suited companion. Highly compassionate, friendly, and reliable partners.
            </p>
          </div>

          {/* Clean row-by-row layout */}
          <div className="divide-y divide-slate-100">
            {companions.map((comp) => (
              <div
                key={comp.id}
                className="py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 transition text-center sm:text-left first:pt-0 last:pb-0"
              >
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:sm:space-x-5">
                  <div className="relative shrink-0">
                    <img
                      src={comp.avatar}
                      alt={comp.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-emerald-500/10 shadow-xs"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 md:w-3.5 md:h-3.5 bg-green-500 border-2 border-white rounded-full" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base">{comp.name}</h3>
                      <span className="text-[9px] md:text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                        {comp.relationshipType}
                      </span>
                    </div>
                    <p className="text-[10px] md:text-xs text-slate-500 font-medium italic">"{comp.tagline}"</p>
                    <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed max-w-md">{comp.personality}</p>
                  </div>
                </div>

                {/* Direct Platform Launch Action buttons */}
                <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full sm:w-auto">
                  <a
                    href="https://wa.me/919540044092"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-2 md:py-2.5 rounded-lg transition cursor-pointer"
                  >
                    <MessageCircle className="w-3 h-3 md:w-3.5 md:h-3.5 fill-white" />
                    <span className="text-[10px] md:text-xs">WhatsApp Chat</span>
                  </a>
                  <a
                    href="https://wa.me/919540044092"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 bg-[#229ED9] hover:bg-[#1a82b3] text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-2 md:py-2.5 rounded-lg transition cursor-pointer"
                  >
                    <Send className="w-2.5 h-2.5 md:w-3 md:h-3 fill-white" />
                    <span className="text-[10px] md:text-xs">Telegram Chat</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Flat Pristine Benefits & FAQ section */}
      <section className="bg-slate-50/50 py-10 md:py-12 lg:py-16 px-4 border-t border-slate-100">
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">

          <div className="text-center space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight font-sans">
              Why Choose Elite Friends? 🌟
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Continuous companion access with zero boundaries or daily limits.
            </p>
          </div>

          {/* Feature list detail box */}
          <div className="bg-white border border-slate-100 rounded-2xl p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 max-w-xl mx-auto text-left">
            <div className="border-b border-slate-100 pb-3 md:pb-4">
              <span className="text-[9px] md:text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Always Online
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-slate-900 mt-1">Direct Secure Integration</h3>
            </div>

            <div className="space-y-3 md:space-y-4 text-[10px] md:text-xs text-slate-600">
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-[#00d26a] font-extrabold text-xs md:text-sm mt-0.5">✓</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-[10px] md:text-xs">Unlimited Hinglish Conversations</h4>
                  <p className="text-slate-500 mt-0.5 text-[9px] md:text-[10px]">Talk about your day, your career, relationships, or anything else with 24/7 responsiveness.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-[#00d26a] font-extrabold text-xs md:text-sm mt-0.5">✓</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-[10px] md:text-xs">Dedicated Companion Memory</h4>
                  <p className="text-slate-500 mt-0.5 text-[9px] md:text-[10px]">Your virtual partner remembers your previous chats, preferences, and personal notes for a natural flow.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-[#00d26a] font-extrabold text-xs md:text-sm mt-0.5">✓</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-[10px] md:text-xs">Integrated On WhatsApp & Telegram</h4>
                  <p className="text-slate-500 mt-0.5 text-[9px] md:text-[10px]">No separate apps or bookmarks needed. Simply tap and open inside your favorite daily messengers.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-3 md:pt-4 border-t border-slate-100">
              <a
                href="https://wa.me/919540044092"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[10px] md:text-xs py-2 md:py-3 px-3 md:px-4 rounded-lg transition"
              >
                <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 fill-white" />
                <span className="text-[10px] md:text-xs">Launch on WhatsApp</span>
              </a>
              <a
                href="https://wa.me/919540044092"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-1.5 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-bold text-[10px] md:text-xs py-2 md:py-3 px-3 md:px-4 rounded-lg transition"
              >
                <Send className="w-3 h-3 md:w-3.5 md:h-3.5 fill-white" />
                <span className="text-[10px] md:text-xs">Launch on Telegram</span>
              </a>
            </div>
          </div>

          {/* Security & FAQ in clean flat layout */}
          <div className="space-y-4 md:space-y-6 pt-4 md:pt-6 border-t border-slate-100">
            <h3 className="text-sm md:text-base font-extrabold text-slate-900 flex items-center justify-center gap-2 font-sans">
              <HelpCircle className="w-4 h-4 md:w-4.5 md:h-4.5 text-emerald-600" />
              <span className="text-sm md:text-base">Elite Friends Security & Chat FAQ</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-[10px] md:text-xs text-slate-500 leading-relaxed text-left">
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-xs md:text-sm">Is my personal chat private?</h4>
                <p className="text-[9px] md:text-[10px]">Yes. All chat connections made on WhatsApp and Telegram are strictly private, anonymous, and encrypted. Your details are safe with us.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-xs md:text-sm">How do I connect with my friend?</h4>
                <p className="text-[9px] md:text-[10px]">Simply choose any companion from the list above and click on "WhatsApp Chat" or "Telegram Chat" to launch the conversation instantly on your phone!</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

// Privacy Page Component
function PrivacyPage() {
  return (
    <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-10 md:py-12 space-y-6 md:space-y-8 text-left">
      <SEO
        title="Privacy Policy & Terms of Service - Elite Friends"
        description="Read Elite Friends' privacy policy, terms of service, and data security practices. Your privacy is our priority."
        keywords="privacy policy, terms of service, data security, Elite Friends privacy, user protection"
        canonical="https://www.elitefriendss.com/privacy-policy"
      />

      <Link to="/" className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>

      <div className="space-y-3 md:space-y-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
          Privacy Policy & Terms of Service
        </h1>
        <p className="text-xs text-slate-400">
          Last Updated: June 30, 2026
        </p>
      </div>

      <div className="prose prose-slate text-xs text-slate-600 space-y-4 md:space-y-6 leading-relaxed">

        <section className="space-y-2 p-3 md:p-4 bg-amber-50 border border-amber-200/50 rounded-xl">
          <h3 className="font-extrabold text-amber-900 text-sm flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            CRITICAL DISCLOSURE: ARTIFICIAL INTELLIGENCE NOTICE
          </h3>
          <p className="text-amber-900 text-xs md:text-sm">
            Please be explicitly aware that <strong>Elite Friends is an Artificial Intelligence (AI) simulation service</strong>. All interactions, responses, voice messages, greetings, and characters on this platform are fully computer-generated AI profiles.
          </p>
          <p className="font-bold text-amber-900 text-xs md:text-sm">
            Do not expect interactions with a real human person. There is no physical person behind any of the profiles or chat platforms. All characters (Trisha, Poorvi, Raghav, Saksham, etc.) are virtual AI entities.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-extrabold text-slate-900 text-sm md:text-base">1. STRICT NO-REFUND POLICY</h3>
          <p className="text-xs md:text-sm">
            Any contributions, premium activation passes, or service access packages are utilized directly for computer model processing, server allocation, and continuous bandwidth delivery.
          </p>
          <p className="font-bold text-xs md:text-sm">
            Due to the immediate digital nature of resource allocation, we enforce a strict NO REFUND policy. No money refunds, partial refunds, or chargebacks will be granted once the companion service has been activated or initiated on your Telegram or WhatsApp account.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-extrabold text-slate-900 text-sm md:text-base">2. Data Security & Encryption</h3>
          <p className="text-xs md:text-sm">
            We value your security above all. Conversations held inside the official mobile platform bots (WhatsApp and Telegram integrations) utilize deep transit security and end-to-end token encryption. We do not inspect or maintain local logs of your private messages for commercial profiling.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-extrabold text-slate-900 text-sm md:text-base">3. User Commitments & Content Guidelines</h3>
          <p className="text-xs md:text-sm">
            Users agree to use this companion service strictly for personal entertainment, comfort, stress relief, and companionship. We maintain a friendly, wholesome, and safe atmosphere. Absolutely no adult 18+ content, explicit graphical files, or illegal requests are supported or facilitated.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-extrabold text-slate-900 text-sm md:text-base">4. Limitation of Liability</h3>
          <p className="text-xs md:text-sm">
            Since Elite Friends operates on computer-generated neural simulations, responses may occasionally be unpredictable, inaccurate, or fictional. The service is provided "as is" without warranty of any kind. Elite Friends is not liable for any emotional, technical, or personal consequences arising from virtual friendship dialogues.
          </p>
        </section>

        <section className="space-y-3 md:space-y-4 pt-3 md:pt-4 border-t border-slate-100">
          <h3 className="font-extrabold text-slate-900 text-sm md:text-base flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-emerald-600" />
            Contact and Support Information
          </h3>
          <p className="text-xs md:text-sm">
            For any subscription issues, activation queries, partnership discussions, or support needs, please reach out to our official email support at:
          </p>
          <div className="p-2 md:p-3 bg-slate-50 border border-slate-200 rounded-xl inline-block">
            <span className="font-mono font-bold text-emerald-700 text-xs md:text-xs">
              support@elitefriendss.com
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}

// Features Page Component
function FeaturesPage() {
  return (
    <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-10 md:py-12 space-y-8 md:space-y-12 text-left">
      <SEO
        title="Features - Elite Friends"
        description="Discover why thousands trust Elite Friends for daily emotional comfort, stress relief, and professional advice in Hinglish."
        keywords="Elite Friends features, Hinglish chat, AI companion features, WhatsApp companion, Telegram companion"
        canonical="https://www.elitefriendss.com/features"
      />

      <div className="text-center space-y-3 md:space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500/10" />
          <span>Full Dynamic Features</span>
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans">
          Smartest Natively-Hinglish Digital Friends
        </h1>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed">
          Discover why thousands of members trust Elite Friends for daily emotional comfort, stress relief, active learning, and professional advice directly in WhatsApp and Telegram.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-2 md:pt-4">

        {/* Feature 1 */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 md:p-6 space-y-3 md:space-y-3.5 shadow-sm transition hover:shadow-md">
          <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5.5 h-5.5 text-emerald-600" />
          </div>
          <h3 className="text-base md:text-lg font-extrabold text-slate-900">Sweet Hinglish Mastery</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            No robotic translation barriers. Our companions understand typical Indian chats seamlessly, replying in custom Hinglish and conversational emojis.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 md:p-6 space-y-3 md:space-y-3.5 shadow-sm transition hover:shadow-md">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
            <Smartphone className="w-5.5 h-5.5 text-blue-600" />
          </div>
          <h3 className="text-base md:text-lg font-extrabold text-slate-900">Direct Messenger Links</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Skip separate websites and browser tabs. Chat inside WhatsApp or Telegram with zero load times. It works natively exactly like your real friends.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 md:p-6 space-y-3 md:space-y-3.5 shadow-sm transition hover:shadow-md">
          <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
            <Lock className="w-5.5 h-5.5 text-amber-600" />
          </div>
          <h3 className="text-base md:text-lg font-extrabold text-slate-900">100% Secure & Private</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Zero signups required. All tokenized chats are private, secure, and encrypted. Your details are never compiled or shared with outside trackers.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 md:p-6 space-y-3 md:space-y-3.5 shadow-sm transition hover:shadow-md">
          <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
            <Heart className="w-5.5 h-5.5 text-red-600 fill-red-50" />
          </div>
          <h3 className="text-base md:text-lg font-extrabold text-slate-900">Distinct Personalities</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Pick a dynamic friend who matches your vibe. Trisha is sweet and caring, Poorvi is full of memes and excitement, Raghav is your solid elder bro, and Saksham is your high-energy pal.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 md:p-6 space-y-3 md:space-y-3.5 shadow-sm transition hover:shadow-md">
          <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
            <RefreshCw className="w-5.5 h-5.5 text-purple-600" />
          </div>
          <h3 className="text-base md:text-lg font-extrabold text-slate-900">Continuous Memory</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Say goodbye to repeating yourself! Our companions maintain active memory buffers to remember your work details, stress points, and goals.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 md:p-6 space-y-3 md:space-y-3.5 shadow-sm transition hover:shadow-md">
          <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
            <HelpCircle className="w-5.5 h-5.5 text-teal-600" />
          </div>
          <h3 className="text-base md:text-lg font-extrabold text-slate-900">24/7 Listening Space</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Stressed at 3 AM or need immediate support during work hours? Get non-judgmental comfort, advice, or career discussions instantly.
          </p>
        </div>

      </div>

      {/* Call to action section */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-5 md:p-8 text-center space-y-4 md:space-y-6 max-w-2xl mx-auto">
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">Ready to chat with your favourite partner?</h3>
        <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
          Launch directly inside WhatsApp or Telegram right now. Simply tap below and say hello!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
          <a
            href="https://wa.me/919540044092"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm md:text-sm px-5 md:px-6 py-2.5 md:py-3 rounded-xl transition shadow-md"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 fill-white" />
            <span className="text-sm md:text-sm">WhatsApp Launcher</span>
          </a>
          <a
            href="https://wa.me/919540044092"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-extrabold text-sm md:text-sm px-5 md:px-6 py-2.5 md:py-3 rounded-xl transition shadow-md"
          >
            <Send className="w-4 h-4 md:w-4.5 md:h-4.5 fill-white" />
            <span className="text-sm md:text-sm">Telegram Launcher</span>
          </a>
        </div>
      </div>
    </main>
  );
}

// FAQ Page Component
function FAQPage() {
  return (
    <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-10 md:py-12 space-y-8 md:space-y-12 text-left">
      <SEO
        title="FAQ & Help - Elite Friends"
        description="Find answers to frequently asked questions about Elite Friends, how to use our AI companions, and get support."
        keywords="Elite Friends FAQ, help center, how to use AI companion, troubleshooting"
        canonical="https://www.elitefriendss.com/faq"
      />

      <div className="text-center space-y-3 md:space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>Assistance & Support</span>
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans">
          Help & FAQ Center
        </h1>
        <p className="text-sm md:text-base text-slate-500">
          Find solutions to common questions, understand how our companions operate, and discover secure communication protocols.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">

        <div className="space-y-2">
          <h3 className="text-sm md:text-base font-extrabold text-slate-950">Q: What is Elite Friends?</h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            Elite Friends is an immersive companion simulation experience. It leverages advanced digital models that are highly tuned to sweet, natural Hinglish and friendly conversational structures. It runs natively inside Telegram and WhatsApp so you don't need secondary apps.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm md:text-base font-extrabold text-slate-950">Q: Is it safe to chat?</h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            Absolutely. We enforce absolute confidentiality. All active chats pass through enterprise-grade secure token parameters. No metadata logging is preserved and we never share your chats with commercial profiling brokers.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm md:text-base font-extrabold text-slate-950">Q: How do I change my active companion?</h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            You can select different profiles (Trisha, Poorvi, Raghav, Saksham, etc.) on our home screen to check their active Hinglish message flows, and click "Launch" on WhatsApp or Telegram to connect to them instantly.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm md:text-base font-extrabold text-slate-950">Q: Do they understand Hinglish?</h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            Yes! That is our specialized feature. They are highly trained on natural Indian conversational slang, jokes, emojis, and emotional comfort prompts.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm md:text-base font-extrabold text-slate-950">Q: How do I clear my virtual friend's memory?</h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            Simply type `/delete` or `/reset` in your active chat box on Telegram or WhatsApp. This will immediately purge your custom companion's memory cache, restoring the default character state.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm md:text-base font-extrabold text-slate-950">Q: Who should I reach out to for help?</h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            Our support team is active 24/7. Simply send a detailed support inquiry or activation query directly via email to <strong className="text-emerald-700">support@elitefriendss.com</strong>.
          </p>
        </div>

      </div>

      <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 max-w-2xl mx-auto text-center">
        <h3 className="text-base md:text-lg font-extrabold text-slate-900">Have more questions or feedback?</h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          We would love to hear from you! For user assistance, feature requests, or developer partnerships, email our official desk:
        </p>
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white border border-slate-200 rounded-xl font-mono text-xs text-emerald-700 font-bold">
          <Mail className="w-4 h-4 text-emerald-600" />
          <span>support@elitefriendss.com</span>
        </div>
      </div>
    </main>
  );
}

// Header Component
function Header() {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-2.5 md:py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 md:space-x-3 text-left focus:outline-none cursor-pointer shrink-0"
        >
          <img
            src="https://maas-log-prod.cn-wlcb.ufileos.com/anthropic/f40b580f-2b15-4b07-be9c-f46b79927b27/b421122004eb6035c78f92833be6f6d5.jpg"
            alt="Elite Friends Logo"
            className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-xl object-cover shadow-sm"
          />
          <div>
            <span className="text-lg md:text-xl font-extrabold tracking-tight text-slate-950 font-sans">
              ELITE FRIENDS
            </span>
            <p className="text-[9px] md:text-[10px] text-emerald-600 font-bold tracking-wider uppercase hidden sm:block font-sans">
              Your Trusted Sweet Companions
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500">
          <Link
            to="/"
            className={`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${location.pathname === '/' ? 'text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/features"
            className={`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${location.pathname === '/features' ? 'text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none' : ''}`}
          >
            Features
          </Link>
          <Link
            to="/faq"
            className={`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${location.pathname === '/faq' ? 'text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none' : ''}`}
          >
            FAQ
          </Link>
          <Link
            to="/privacy-policy"
            className={`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${location.pathname === '/privacy-policy' ? 'text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none' : ''}`}
          >
            Privacy
          </Link>
        </nav>

        {/* Top Nav Action Buttons */}
        <div className="flex items-center space-x-1.5 md:space-x-2 shrink-0">
          <a
            href="https://wa.me/919540044092"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[10px] md:text-[11px] font-extrabold px-2 md:px-3 py-1.5 md:py-2 rounded-lg md:rounded-xl transition shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-3 h-3 md:w-3.5 md:h-3.5 fill-white" />
            <span className="hidden lg:inline text-[10px] md:text-[11px]">WhatsApp Chat</span>
            <span className="lg:hidden text-[10px] md:text-[11px]">WhatsApp</span>
          </a>
          <a
            href="https://wa.me/919540044092"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-[#229ED9] hover:bg-[#1a82b3] text-white text-[10px] md:text-[11px] font-extrabold px-2 md:px-3 py-1.5 md:py-2 rounded-lg md:rounded-xl transition shadow-sm cursor-pointer"
          >
            <Send className="w-2.5 h-2.5 md:w-3 md:h-3 fill-white" />
            <span className="hidden lg:inline text-[10px] md:text-[11px]">Telegram Chat</span>
            <span className="lg:hidden text-[10px] md:text-[11px]">Telegram</span>
          </a>
        </div>
      </div>

      {/* Mobile Navigation sub-bar */}
      <div className="md:hidden bg-slate-50 border-t border-slate-100 px-3 md:px-4 py-1.5 md:py-2 flex items-center justify-center space-x-3 md:space-x-4 overflow-x-auto text-[10px] font-bold text-slate-500 scrollbar-none">
        <Link
          to="/"
          className={`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${location.pathname === '/' ? 'bg-emerald-500 text-white font-extrabold' : 'hover:text-emerald-600'}`}
        >
          Home
        </Link>
        <Link
          to="/features"
          className={`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${location.pathname === '/features' ? 'bg-emerald-500 text-white font-extrabold' : 'hover:text-emerald-600'}`}
        >
          Features
        </Link>
        <Link
          to="/faq"
          className={`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${location.pathname === '/faq' ? 'bg-emerald-500 text-white font-extrabold' : 'hover:text-emerald-600'}`}
        >
          FAQ
        </Link>
        <Link
          to="/privacy-policy"
          className={`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${location.pathname === '/privacy-policy' ? 'bg-emerald-500 text-white font-extrabold' : 'hover:text-emerald-600'}`}
        >
          Privacy
        </Link>
      </div>
    </header>
  );
}

// Footer Component
function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-white border-t border-slate-100 pt-6 md:pt-8 pb-20 md:pb-8 px-3 md:px-4 text-center text-slate-400 text-[10px] md:text-xs mt-auto">
      <div className="max-w-6xl mx-auto space-y-4 md:space-y-5">
        <p className="font-extrabold tracking-widest text-slate-700 uppercase text-[10px] md:text-xs">
          ELITE FRIENDS © 2026 . A UNIT OF AI ASTROLOGY
        </p>
        <p className="max-w-xl mx-auto leading-relaxed text-slate-400 text-[9px] md:text-xs px-2">
          Intimate, loving companion application. Play responsibly. All characters on the landing page are virtual profiles representing helpful friendly companions. Absolutely no explicit or 18+ content supported. For customer assistance, email support at support@elitefriendss.com.
        </p>
        <p className="text-[9px] md:text-xs"> © 2026 ELITEFRIENDSS. A UNIT OF AI ASTROLOGY.</p>

        {/* Footer Navigation links */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 gap-y-2 text-slate-400 font-bold text-[9px] md:text-xs">
          <Link
            to="/"
            className={`hover:text-emerald-600 transition cursor-pointer ${location.pathname === '/' ? 'text-emerald-600 font-extrabold' : ''}`}
          >
            Home Page
          </Link>
          <span>•</span>
          <Link
            to="/features"
            className={`hover:text-emerald-600 transition cursor-pointer ${location.pathname === '/features' ? 'text-emerald-600 font-extrabold' : ''}`}
          >
            Features
          </Link>
          <span>•</span>
          <Link
            to="/faq"
            className={`hover:text-emerald-600 transition cursor-pointer ${location.pathname === '/faq' ? 'text-emerald-600 font-extrabold' : ''}`}
          >
            Help & FAQ
          </Link>
          <span>•</span>
          <Link
            to="/privacy-policy"
            className={`hover:text-emerald-600 transition cursor-pointer flex items-center gap-1 ${location.pathname === '/privacy-policy' ? 'text-emerald-600 font-extrabold' : ''}`}
          >
            <FileText className="w-3 h-3 md:w-3.5 md:h-3.5" />
            <span>Privacy Policy & Terms</span>
          </Link>
          <span>•</span>
          <a
            href="mailto:support@elitefriendss.com"
            className="hover:text-emerald-600 transition flex items-center gap-1"
          >
            <Mail className="w-3 h-3 md:w-3.5 md:h-3.5" />
            <span>support@elitefriendss.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

// Mobile Sticky Bar Component
function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-3 md:px-4 py-2.5 md:py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      <div className="max-w-md mx-auto flex items-center gap-2 md:gap-3">
        <a
          href="https://wa.me/919540044092"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-1.5 md:space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-[10px] md:text-xs py-2 md:py-3 px-2 md:px-3 rounded-lg md:rounded-xl transition shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 fill-white" />
          <span className="text-[10px] md:text-xs">Chat on WhatsApp</span>
        </a>
        <a
          href="https://wa.me/919540044092"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-1.5 md:space-x-2 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-extrabold text-[10px] md:text-xs py-2 md:py-3 px-2 md:px-3 rounded-lg md:rounded-xl transition shadow-sm"
        >
          <Send className="w-3 h-3 md:w-3.5 md:h-3.5 fill-white" />
          <span className="text-[10px] md:text-xs">Chat on Telegram</span>
        </a>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  const [companions] = useState<Companion[]>(INITIAL_COMPANIONS);
  const [selectedCompanion, setSelectedCompanion] = useState<Companion>(INITIAL_COMPANIONS[0]);

  // Multi-language animated translations
  const animatedPhrases = [
    { text: "एलीट फ्रेंड", lang: "Hindi" },
    { text: "Elite Friends", lang: "English" },
    { text: "ಎಲೈಟ್ ಫ್ರೆಂಡ್", lang: "Kannada" },
    { text: "ఎలైట్ ఫ్రెండ్", lang: "Telugu" },
    { text: "എലൈറ്റ് ഫ്രണ്ട്", lang: "Malayalam" },
    { text: "எலைட் பிரண்ட்", lang: "Tamil" },
    { text: "এলিট ফ্রেন্ড", lang: "Bengali" },
    { text: "Elite Friend", lang: "English" }
  ];
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIdx((prev) => (prev + 1) % animatedPhrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fafbfc] text-slate-800 font-sans flex flex-col antialiased">
        <SEO />
        <Header />

        <Routes>
          <Route path="/" element={
            <HomePage
              companions={companions}
              selectedCompanion={selectedCompanion}
              setSelectedCompanion={setSelectedCompanion}
              animatedPhrases={animatedPhrases}
              phraseIdx={phraseIdx}
            />
          } />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
        </Routes>

        <Footer />
        <MobileStickyBar />
      </div>
    </BrowserRouter>
  );
}
