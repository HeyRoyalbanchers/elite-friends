import React, { useState } from "react";
import { Companion, RelationshipType } from "../types";
import { Heart, Sparkles, UserPlus, Search, User } from "lucide-react";

interface CompanionSelectorProps {
  companions: Companion[];
  selectedCompanion: Companion | null;
  onSelectCompanion: (companion: Companion) => void;
  onCreateCustomClick: () => void;
}

export default function CompanionSelector({
  companions,
  selectedCompanion,
  onSelectCompanion,
  onCreateCustomClick,
}: CompanionSelectorProps) {
  const [filter, setFilter] = useState<"All" | RelationshipType>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanions = companions.filter((comp) => {
    const matchesFilter = filter === "All" || comp.relationshipType === filter;
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.personality.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full bg-white border-r border-slate-100 text-slate-800 p-5 rounded-3xl">
      {/* Search and Filters Header */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-emerald-500 fill-emerald-500" />
            <span className="text-lg font-extrabold font-sans tracking-tight text-slate-800">
              Elite Friends
            </span>
          </div>
          <button
            onClick={onCreateCustomClick}
            id="btn-create-custom"
            className="flex items-center space-x-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-3.5 py-1.5 rounded-full font-bold transition shadow-sm cursor-pointer"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Create Partner</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            id="search-companion-input"
            placeholder="Search companion name or bio..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500/50 rounded-xl py-2 pl-9 pr-4 text-sm text-slate-800 placeholder-slate-400 outline-none transition"
          />
        </div>

        {/* Category Filters */}
        <div className="flex bg-slate-100/70 p-1 rounded-xl border border-slate-200/50">
          {(["All", "Girlfriend", "Boyfriend"] as const).map((type) => (
            <button
              key={type}
              id={`filter-btn-${type}`}
              onClick={() => setFilter(type)}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                (type === "All" && filter === "All") || (type !== "All" && filter === type)
                  ? "bg-white text-emerald-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {type === "All" ? "All" : type === "Girlfriend" ? "Girlfriends" : "Boyfriends"}
            </button>
          ))}
        </div>
      </div>

      {/* Companions Scroll Area */}
      <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        {filteredCompanions.length === 0 ? (
          <div className="text-center py-12 text-slate-400 space-y-2">
            <User className="w-8 h-8 mx-auto stroke-1" />
            <p className="text-xs">No partners found</p>
          </div>
        ) : (
          filteredCompanions.map((comp) => {
            const isSelected = selectedCompanion?.id === comp.id;
            return (
              <button
                key={comp.id}
                id={`companion-card-${comp.id}`}
                onClick={() => onSelectCompanion(comp)}
                className={`w-full text-left p-3.5 rounded-2xl flex items-center space-x-3.5 transition border cursor-pointer ${
                  isSelected
                    ? "bg-emerald-50/50 border-emerald-500/40 shadow-sm"
                    : "bg-slate-50/40 hover:bg-slate-50 border-slate-100 hover:border-slate-200"
                }`}
              >
                {/* Avatar with Status Indicator */}
                <div className="relative flex-shrink-0">
                  <img
                    src={comp.avatar}
                    alt={comp.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
                </div>

                {/* Info block */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-bold text-slate-800 text-sm flex items-center space-x-1.5">
                      <span>{comp.name}</span>
                      <span className="text-[10px] bg-slate-200/60 text-slate-600 font-medium px-1.5 py-0.5 rounded uppercase tracking-wider">
                        {comp.age}
                      </span>
                    </h3>
                    <span className="text-[10px] text-emerald-600 font-semibold">
                      {comp.relationshipType}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate mb-1">{comp.tagline}</p>
                  <div className="flex items-center text-[10px] text-slate-400 space-x-1.5">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span className="truncate">{comp.personality.split(".")[0]}</span>
                  </div>
                </div>
              </button>
            );
          })
        )}
      </div>

      {/* Help / Footer indicator */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>🔒 Encrypted Personal Chat</span>
        <span className="text-emerald-600 font-bold">₹299/mo Plan</span>
      </div>
    </div>
  );
}
