import { Gamepad2, MessageSquare, Smartphone, Globe, Star } from "lucide-react";

export const CATEGORIES: Record<string, { label: string; icon: any }> = {
  all: { label: "All Offers", icon: Star },
  games: { label: "Games", icon: Gamepad2 },
  surveys: { label: "Surveys", icon: MessageSquare },
  apps: { label: "Apps", icon: Smartphone },
  offers: { label: "Sign Ups", icon: Globe },
};

export const OFFERS = [
  { id: "o1", name: "Sunshine Island", slug: "sunshine-island", category: "games", description: "Match & earn in this tropical puzzle adventure", minEarnings: "$391.00", rating: 5.0, payoutSpeed: "fast", countries: 50, featured: true, color: "from-amber-400 to-orange-500", icon: Gamepad2 },
  { id: "o2", name: "Match Masters", slug: "match-masters", category: "games", description: "Play duels against real players and earn rewards", minEarnings: "$280.00", rating: 5.0, payoutSpeed: "fast", countries: 45, featured: true, color: "from-purple-500 to-pink-500", icon: Gamepad2 },
  { id: "o3", name: "Board Kings", slug: "board-kings", category: "games", description: "Earn gift cards by building your board empire", minEarnings: "$32.00", rating: 5.0, payoutSpeed: "fast", countries: 60, featured: true, color: "from-blue-500 to-cyan-500", icon: Gamepad2 },
  { id: "o4", name: "Dice Dreams", slug: "dice-dreams", category: "games", description: "Reach Kingdom 5 and earn cash rewards", minEarnings: "$5.00", rating: 4.8, payoutSpeed: "fast", countries: 40, featured: true, color: "from-red-500 to-orange-500", icon: Gamepad2 },
  { id: "o5", name: "SurveyJunkie", slug: "survey-junkie", category: "surveys", description: "Share your opinion and get paid instantly", minEarnings: "$2.50", rating: 4.5, payoutSpeed: "fast", countries: 30, featured: false, color: "from-green-500 to-teal-500", icon: MessageSquare },
  { id: "o6", name: "Prime Opinion", slug: "prime-opinion", category: "surveys", description: "High-paying surveys from top market researchers", minEarnings: "$3.00", rating: 4.6, payoutSpeed: "fast", countries: 35, featured: false, color: "from-indigo-500 to-purple-500", icon: MessageSquare },
  { id: "o7", name: "AppKarma", slug: "app-karma", category: "apps", description: "Test new apps and earn points for rewards", minEarnings: "$1.50", rating: 4.3, payoutSpeed: "normal", countries: 25, featured: false, color: "from-rose-500 to-pink-500", icon: Smartphone },
  { id: "o8", name: "Mistplay", slug: "mistplay", category: "apps", description: "Play mobile games and earn gift cards", minEarnings: "$5.00", rating: 4.7, payoutSpeed: "fast", countries: 20, featured: false, color: "from-violet-500 to-purple-500", icon: Smartphone },
  { id: "o9", name: "FeaturePoints", slug: "feature-points", category: "apps", description: "Try new apps and earn redeemable points", minEarnings: "$1.00", rating: 4.2, payoutSpeed: "fast", countries: 40, featured: false, color: "from-cyan-500 to-blue-500", icon: Smartphone },
  { id: "o10", name: "RewardXP", slug: "reward-xp", category: "offers", description: "Complete offers and level up for bigger rewards", minEarnings: "$2.00", rating: 4.4, payoutSpeed: "fast", countries: 50, featured: false, color: "from-yellow-500 to-amber-500", icon: Globe },
  { id: "o11", name: "ySense", slug: "ysense", category: "surveys", description: "Earn cash for surveys, tasks, and offers", minEarnings: "$1.00", rating: 4.3, payoutSpeed: "normal", countries: 55, featured: false, color: "from-emerald-500 to-green-500", icon: MessageSquare },
  { id: "o12", name: "Testerup", slug: "testerup", category: "apps", description: "Test apps and websites, earn per completed test", minEarnings: "$5.00", rating: 4.5, payoutSpeed: "normal", countries: 30, featured: false, color: "from-orange-500 to-red-500", icon: Smartphone },
];

export const PAYOUT_OPTIONS = ["Bitcoin", "PayPal", "Amazon", "Google Play", "Litecoin", "Ethereum", "Bank Transfer", "Visa"];