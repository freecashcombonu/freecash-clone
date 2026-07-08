"use client";
import Link from "next/link";
import { Trophy, Medal, Crown } from "lucide-react";

const TopEarners = [
  { rank: 1, name: "CryptoKing", earned: "$5,230.00", icon: Crown, color: "text-yellow-400" },
  { rank: 2, name: "GameMaster99", earned: "$4,870.00", icon: Medal, color: "text-gray-300" },
  { rank: 3, name: "SurveyChamp", earned: "$4,120.00", icon: Medal, color: "text-amber-600" },
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-surface-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/"><span>💰</span><span>Freecash</span></Link>
          <div><Link href="/login" className="btn-primary text-sm">Sign In</Link></div>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <Trophy className="text-yellow-400 mx-auto mb-4" size={48} />
        <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
        <p className="text-gray-400 mb-10">Top earners this month</p>
        <div className="space-y-3">
          {TopEarners.map(earner => (
            <div key={earner.rank} className="glass-card p-5 flex items-center gap-4">
              <span className={`text-2xl font-bold w-10 ${earner.color}`}>#{earner.rank}</span>
              <earner.icon className={earner.color} />
              <div className="flex-1 text-left"><p>{earner.name}</p></div>
              <p className="text-brand font-bold text-lg">{earner.earned}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}