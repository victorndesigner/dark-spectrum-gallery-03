import game1 from "@/assets/game1.jpg";
import game2 from "@/assets/game2.jpg";
import game3 from "@/assets/game3.jpg";
import game4 from "@/assets/game4.jpg";
import game5 from "@/assets/game5.jpg";
import game6 from "@/assets/game6.jpg";

export interface Game {
  id: number;
  name: string;
  version: string;
  thumbnail: string;
  steamLink: string;
  mobileLink: string;
}

export const games: Game[] = [
  {
    id: 1,
    name: "Neon Velocity",
    version: "2.1.4",
    thumbnail: game1,
    steamLink: "https://store.steampowered.com/app/neon-velocity",
    mobileLink: "https://play.google.com/store/apps/neon-velocity",
  },
  {
    id: 2,
    name: "Dragon's Oath",
    version: "1.8.2",
    thumbnail: game2,
    steamLink: "https://store.steampowered.com/app/dragons-oath",
    mobileLink: "https://play.google.com/store/apps/dragons-oath",
  },
  {
    id: 3,
    name: "Stellar Odyssey",
    version: "3.0.1",
    thumbnail: game3,
    steamLink: "https://store.steampowered.com/app/stellar-odyssey",
    mobileLink: "https://play.google.com/store/apps/stellar-odyssey",
  },
  {
    id: 4,
    name: "Shadow Manor",
    version: "1.5.7",
    thumbnail: game4,
    steamLink: "https://store.steampowered.com/app/shadow-manor",
    mobileLink: "https://play.google.com/store/apps/shadow-manor",
  },
  {
    id: 5,
    name: "Battle Grounds X",
    version: "4.2.0",
    thumbnail: game5,
    steamLink: "https://store.steampowered.com/app/battlegrounds-x",
    mobileLink: "https://play.google.com/store/apps/battlegrounds-x",
  },
  {
    id: 6,
    name: "Crystal Void",
    version: "2.3.1",
    thumbnail: game6,
    steamLink: "https://store.steampowered.com/app/crystal-void",
    mobileLink: "https://play.google.com/store/apps/crystal-void",
  },
  {
    id: 7,
    name: "Cyber Protocol",
    version: "1.9.3",
    thumbnail: game1,
    steamLink: "https://store.steampowered.com/app/cyber-protocol",
    mobileLink: "https://play.google.com/store/apps/cyber-protocol",
  },
  {
    id: 8,
    name: "Mystic Realms",
    version: "2.7.4",
    thumbnail: game2,
    steamLink: "https://store.steampowered.com/app/mystic-realms",
    mobileLink: "https://play.google.com/store/apps/mystic-realms",
  },
  {
    id: 9,
    name: "Void Explorer",
    version: "1.4.2",
    thumbnail: game3,
    steamLink: "https://store.steampowered.com/app/void-explorer",
    mobileLink: "https://play.google.com/store/apps/void-explorer",
  },
  {
    id: 10,
    name: "Dark Whispers",
    version: "3.1.0",
    thumbnail: game4,
    steamLink: "https://store.steampowered.com/app/dark-whispers",
    mobileLink: "https://play.google.com/store/apps/dark-whispers",
  },
  {
    id: 11,
    name: "Arena Masters",
    version: "2.5.8",
    thumbnail: game5,
    steamLink: "https://store.steampowered.com/app/arena-masters",
    mobileLink: "https://play.google.com/store/apps/arena-masters",
  },
  {
    id: 12,
    name: "Quantum Shift",
    version: "1.7.1",
    thumbnail: game6,
    steamLink: "https://store.steampowered.com/app/quantum-shift",
    mobileLink: "https://play.google.com/store/apps/quantum-shift",
  },
  {
    id: 13,
    name: "Neon Runner 2",
    version: "3.2.6",
    thumbnail: game1,
    steamLink: "https://store.steampowered.com/app/neon-runner-2",
    mobileLink: "https://play.google.com/store/apps/neon-runner-2",
  },
  {
    id: 14,
    name: "Legend's End",
    version: "2.0.9",
    thumbnail: game2,
    steamLink: "https://store.steampowered.com/app/legends-end",
    mobileLink: "https://play.google.com/store/apps/legends-end",
  },
  {
    id: 15,
    name: "Cosmic Journey",
    version: "1.8.5",
    thumbnail: game3,
    steamLink: "https://store.steampowered.com/app/cosmic-journey",
    mobileLink: "https://play.google.com/store/apps/cosmic-journey",
  },
  {
    id: 16,
    name: "Phantom Estate",
    version: "2.4.3",
    thumbnail: game4,
    steamLink: "https://store.steampowered.com/app/phantom-estate",
    mobileLink: "https://play.google.com/store/apps/phantom-estate",
  },
  {
    id: 17,
    name: "War Zone Elite",
    version: "4.1.7",
    thumbnail: game5,
    steamLink: "https://store.steampowered.com/app/warzone-elite",
    mobileLink: "https://play.google.com/store/apps/warzone-elite",
  },
  {
    id: 18,
    name: "Prism Escape",
    version: "1.6.4",
    thumbnail: game6,
    steamLink: "https://store.steampowered.com/app/prism-escape",
    mobileLink: "https://play.google.com/store/apps/prism-escape",
  },
];