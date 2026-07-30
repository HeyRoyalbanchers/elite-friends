export type RelationshipType = "Friend" | "Best Friend";

export interface Companion {
  id: string;
  name: string;
  relationshipType: RelationshipType;
  avatar: string;
  tagline: string;
  personality: string;
  age: number;
  status: "Online" | "Typing..." | "Offline";
  voiceGreeting?: string;
  icebreakers: string[];
}

export interface Message {
  id: string;
  sender: "user" | "companion";
  content: string;
  timestamp: string;
  status?: "sent" | "delivered" | "read";
}

export interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}
