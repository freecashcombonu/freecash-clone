"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Star, ArrowRight, Globe, DollarSign } from "lucide-react";
import { OFFERS, CATEGORIES } from "@/lib/offers";

export default function EarnPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    let list = [...OFFERS];
    if (activeCategory !== "all") list = list.filter(o => o.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(o => o.name.toLowerCase().includes(q) || o.description.toLowerCase().includes(q));
    }
    if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "payout") list.sort((a, b) => b.minEarnings.localeCompare(a.minEarnings));
    else if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-surface-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💰</span>
            <span className="text-xl font-bold">Freecash<span className="text-brand">Clone</span></span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-gray-400">Home</Link>
            <Link href="/login" className="btn-primary text-sm !py-2 !px-5">Sign In</Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <DollarSign size={16} className="text-brand" />
            <span className="text-white font-semibold">$300,000,000+</span> Total earned • <span className="text-white font-semibold">{OFFERS.length}</span> Offers
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Choose an Offer</h1>
          <p className="text-gray-400">Complete offers, play games, answer surveys, and test apps to earn real cash.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input type="text" placeholder="Search offers..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:border-brand/50 outline-none" />
          </div>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm">
            <option value="featured">Featured</option>
            <option value="rating">Highest Rated</option>
            <option value="payout">Highest Payout</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>

        <div className="flex gap-2 overflow-x-auto mb-8">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <button key={key} onClick={() => setActiveCategory(key)}
              className={flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs whitespace-nowrap transition ${
                activeCategory === key ? "bg-brand text-black font-semibold" : "bg-white/5 text-gray-400 hover:text-white"
              }`}>
              <cat.icon size={14} /> {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((offer) => (
            <div key={offer.id} className="glass-card p-5 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center shrink-0`}>
                  <offer.icon size={28} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-white truncate">{offer.name}</h3>
                    {offer.featured && <span className="text-xs bg-brand/20 text-brand px-2 py-0.5 rounded-full shrink-0">Top</span>}
                  </div>
                  <p className="text-gray-400 text-sm mt-1 mb-3 line-clamp-2">{offer.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-white/5">
                      <p className="text-xs text-gray-500">Earnings</p>
                      <p className="text-sm font-semibold text-brand">{offer.minEarnings}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5">
                      <p className="text-xs text-gray-500">Rating</p>
                      <p className="text-sm font-semibold"><Star size={12} className="inline fill-yellow-400 text-yellow-400" /> {offer.rating}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className=s`px-2 py-0.5 rounded-full ${offer.payoutSpeed === "fast" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>
                        {offer.payoutSpeed === "fast" ? "Fast" : "Normal"}
                      </span>
                      <span><Globe size={12} className="inline" /> {offer.countries}+</span>
                    </div>
                    <ArrowRight size={14} className="text-brand opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}