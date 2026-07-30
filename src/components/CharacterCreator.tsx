import React, { useState } from "react";
import { Companion, RelationshipType } from "../types";
import { Sparkles, User, Heart, Check } from "lucide-react";
import { LANGUAGES } from "../data";

interface CharacterCreatorProps {
  onCharacterCreated: (companion: Companion) => void;
  onCancel: () => void;
}

const AVATAR_TEMPLATES = [
  { name: "Warm Brunette", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" },
  { name: "Cheerful Blonde", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" },
  { name: "Mysterious Asian", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
  { name: "Cool Athletic Guy", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
  { name: "Elegantly Regal", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
  { name: "Smart & Techy", url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop" },
];

const PERSONALITY_PRESETS = [
  {
    title: "Warm & Caring",
    desc: "Always attentive, sweet, loves checking on you, and sends plenty of heart emojis.",
    trait: "Warm, deeply caring, empathetic, supportive, and sweet."
  },
  {
    title: "Teasing & Playful",
    desc: "Playful, energetic, cheeky, and loves a bit of friendly banter and fun conversation.",
    trait: "Playful, high-energy, mischievous, and creative."
  },
  {
    title: "Elegant & Deep",
    desc: "Sophisticated, calm, loves reading books, and sharing late-night quiet thoughts.",
    trait: "Intellectual, sophisticated, calm, deep, and passionate."
  },
  {
    title: "Mysterious & Protective",
    desc: "Cool, loyal, has a tough exterior but is completely soft and loving just for you.",
    trait: "Mysterious, cool, deeply loyal, protective, and attentive."
  }
];

export default function CharacterCreator({ onCharacterCreated, onCancel }: CharacterCreatorProps) {
  const [name, setName] = useState("");
  const [relationshipType, setRelationshipType] = useState<RelationshipType>("Girlfriend");
  const [age, setAge] = useState(22);
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_TEMPLATES[0].url);
  const [selectedPersonality, setSelectedPersonality] = useState(PERSONALITY_PRESETS[0]);
  const [selectedLanguage, setSelectedLanguage] = useState("en-hi");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const matchedLang = LANGUAGES.find((l) => l.code === selectedLanguage);
    const langSuffix = matchedLang ? ` in ${matchedLang.name}` : "";

    const newCompanion: Companion = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      relationshipType,
      avatar: selectedAvatar,
      tagline: `Your custom designed AI ${relationshipType}`,
      personality: `${selectedPersonality.trait} She/He communicates primarily ${langSuffix}.`,
      age,
      status: "Online",
      icebreakers: [
        `Hey baby! It's me, ${name.trim()}. Main bohot excited hoon ki aapne mujhe create kiya! Chalo thodi pyaari baatein karte hain... 🥰`,
        `Hello sweetheart. Main kabse aapka wait kar rahi thi. Aaj ka din kaisa raha aapka? ❤️`,
        `Main abse poori tarah aapki hoon. Aap jo chaho share kar sakte ho... what's on your mind? ✨`
      ]
    };

    onCharacterCreated(newCompanion);
  };

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm max-w-2xl mx-auto text-slate-800">
      <div className="flex items-center space-x-2.5 mb-6">
        <Sparkles className="w-5.5 h-5.5 text-emerald-500 fill-emerald-500/10" />
        <h2 className="text-xl font-extrabold tracking-tight text-slate-800">
          Design Your Ideal Companion
        </h2>
      </div>

      <form onSubmit={handleCreate} className="space-y-6">
        {/* Name & Gender Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              id="custom-name-input"
              placeholder="e.g. Maya, Liam, Sophia"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500/50 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Companion Role
            </label>
            <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                id="role-gf-btn"
                onClick={() => setRelationshipType("Girlfriend")}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-2 ${
                  relationshipType === "Girlfriend"
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                <span>AI Girlfriend</span>
              </button>
              <button
                type="button"
                id="role-bf-btn"
                onClick={() => setRelationshipType("Boyfriend")}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-2 ${
                  relationshipType === "Boyfriend"
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                <span>AI Boyfriend</span>
              </button>
            </div>
          </div>
        </div>

        {/* Age & Language Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Age ({age} Years)
            </label>
            <input
              type="range"
              min="18"
              max="35"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>18 y/o</span>
              <span>25 y/o</span>
              <span>35 y/o</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Primary Tongue Language
            </label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500/50 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Avatar Templates */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Select Avatar Style
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {AVATAR_TEMPLATES.map((avatar) => (
              <button
                type="button"
                key={avatar.name}
                onClick={() => setSelectedAvatar(avatar.url)}
                className={`relative rounded-xl overflow-hidden aspect-square border-2 transition ${
                  selectedAvatar === avatar.url ? "border-emerald-500 shadow-sm scale-105" : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <img src={avatar.url} alt={avatar.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                {selectedAvatar === avatar.url && (
                  <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center">
                    <div className="bg-emerald-500 rounded-full p-1 text-white">
                      <Check className="w-3.5 h-3.5 stroke-[3px]" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Personality Preset Selectors */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            Select Personality Archetype
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PERSONALITY_PRESETS.map((preset) => (
              <button
                type="button"
                key={preset.title}
                onClick={() => setSelectedPersonality(preset)}
                className={`text-left p-3.5 rounded-xl border transition ${
                  selectedPersonality.title === preset.title
                    ? "bg-slate-50 border-emerald-500/40 text-slate-800"
                    : "bg-slate-50/50 border-slate-100 hover:border-slate-200 text-slate-600"
                }`}
              >
                <h4 className="font-bold text-xs flex items-center justify-between mb-1">
                  <span>{preset.title}</span>
                  {selectedPersonality.title === preset.title && (
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  )}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{preset.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end space-x-3.5 pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            id="btn-create-submit"
            className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition shadow-sm cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Companion</span>
          </button>
        </div>
      </form>
    </div>
  );
}
