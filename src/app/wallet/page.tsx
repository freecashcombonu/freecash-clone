"use client";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { ArrowLeft, DollarSign, Clock, TrendingUp, Bitcoin } from "lucide-react";

export default function WalletPage() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-surface-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/dashboard" className="flex items-center gap-2 text-gray-400"><ArrowLeft size={20} /> Dashboard</Link>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Wallet</h1>
        <div className="glass p-8 text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4"><DollarSign size={40} className="text-brand" /></div>
          <h2 className="text-4xl font-bold mb-2">$0.00</h2>
          <p className="text-gray-400">Available Balance</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="glass-card p-5 text-center"><Clock className="text-yellow-400 mx-auto mb-2" /><p>Pending</p><p className="text-xl font-bold">$0.00</p></div>
          <div className="glass-card p-5 text-center"><TrendingUp className="text-green-400 mx-auto mb-2" /><p>Total Earned</p><p className="text-xl font-bold">$0.00</p></div>
          <div className="glass-card p-5 text-center"><Bitcoin className="text-orange-400 mx-auto mb-2" /><p>Cashout</p><p className="text-xl font-bold">$0.00</p></div>
        </div>
        <button disabled className="btn-primary w-full text-lg opacity-50 cursor-not-allowed">Cashout (coming soon)</button>
      </div>
    </div>
  );
}