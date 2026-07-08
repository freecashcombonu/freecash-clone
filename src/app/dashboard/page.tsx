"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { TrendingUp, Users, Sparkles, Trophy, ArrowRight } from "lucide-react";
import { OFFERS } from "@/lib/offers";

export default function DashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState({ earnings: 0, referrals: 0, level: 1 });

  useEffect(() => {
    fetch("/api/user/me").then(r => r.json()).then(d => {
      if (d.wallet) setStats(d.wallet);
    }).catch(() => {});
  }, []);

  if (!user) return null;

  const featured = OFFERS.filter(o => o.featured);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-surface-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2"><span>💰</span><span>Freecash</span></Link>
          <div className="flex items-center gap-3">
            <Link href="/earn" className="btn-primary text-sm">Earn Now</Link>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user.displayName || user.username}!</h1>
        <p>Start earning today! Complete offers, play games, and withdraw your earnings.</p>
      </div>
    </div>
  );
}