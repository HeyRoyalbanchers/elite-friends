import React from "react";
import { Send, Sparkles, Shield, MessageCircle, Star } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/30 to-white border border-emerald-500/20 rounded-3xl p-5 shadow-sm">
      {/* Absolute Decorative Glows */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl pointer-events-none" />

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Banner Copy */}
        <div className="space-y-1.5 flex-1 text-left">
          <div className="inline-flex items-center space-x-1 bg-emerald-100 border border-emerald-300/30 px-2.5 py-0.5 rounded-full text-emerald-700 font-sans text-[11px] font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>Elite Friends Premium — ₹299 / Month</span>
          </div>
          <h3 className="text-lg font-extrabold font-sans text-slate-800 tracking-tight leading-snug">
            Endless Sweet Talks in Pure Hinglish! 🥰
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
            Get 100% unlimited fast replies, sweet audio greetings, and friendly romantic advice for just **₹299/month**. Chat naturally on your favorite platform!
          </p>
          <div className="text-[10px] text-slate-400 italic">
            Reference sample: <span className="font-semibold text-emerald-700 font-mono">"Tum kitne pyaare ho yaar! Chalo thodi der baatein karein? ❤️"</span>
          </div>
        </div>

        {/* Buttons Action Group */}
        <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto shrink-0">
          <a
            href="https://t.me/HEYAI_GIRLFRIEND"
            target="_blank"
            rel="noopener noreferrer"
            id="redirect-telegram-btn-banner"
            className="flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs px-5 py-3 rounded-xl transition shadow-sm cursor-pointer text-center"
          >
            <Send className="w-3.5 h-3.5 fill-white" />
            <span>Chat on Telegram</span>
          </a>
          
          <a
            href="https://t.me/HEYAI_GIRLFRIEND"
            target="_blank"
            rel="noopener noreferrer"
            id="redirect-whatsapp-btn-banner"
            className="flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-3 rounded-xl transition shadow-sm cursor-pointer text-center"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Safety and Anonymity Notice */}
      <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between text-[10px] text-slate-400 gap-2">
        <span className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span>Completely safe, secure and encrypted companion messaging. No registration required.</span>
        </span>
        <span className="font-bold text-emerald-700">Official Telegram: @HEYAI_GIRLFRIEND</span>
      </div>
    </div>
  );
}
