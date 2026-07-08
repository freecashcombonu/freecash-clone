"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: "💰",
      title: "Earn Free Crypto",
      description: "Complete surveys, watch videos, and test apps to earn free Bitcoin, Ethereum, and more.",
      color: "#00d68f",
    },
    {
      icon: "⚐",
      title: "Instant Payouts",
      description: "Withdraw your earnings instantly to your crypto wallet with no minimum thresholds.",
      color: "#3b82f6",
    },
    {
      icon: "🮶",
      title: "Play & Earn",
      description: "Play mobile games and earn rewards. Reach milestones for bonus crypto payouts.",
      color: "#8b5cf6",
    },
    {
      icon: "🔒",
      title: "Secure & Verified",
      description: "KYC verification and secure transactions. Your data is always protected.",
      color: "#f59e0b",
    },
    {
      icon: "📈",
      title: "Track Progress",
      description: "Real-time dashboard to track earnings, completed offers, and withdrawal history.",
      color: "#ec4899",
    },
    {
      icon: "🌍",
      title: "Worldwide Access",
      description: "Available globally. Earn from anywhere in the world with localized offers.",
      color: "#06b6d4",
    },
  ];

  const stats = [
    { value: "$50M+", label: "Paid to Users" },
    { value: "10M+", label: "Active Users" },
    { value: "5000+", label: "Daily Offers" },
    { value: "150+", label: "Countries" },
  ];

  const topOffers = [
    {
      id: 1,
      title: "Coinbase - Sign Up & Trade $100",
      reward: "$45.00",
      time: "~15 min",
      category: "Crypto",
      difficulty: "Easy",
      icon: "₿",
    },
    {
      id: 2,
      title: "eToro - Deposit & Trade",
      reward: "$80.00",
      time: "~20 min",
      category: "Trading",
      difficulty: "Easy",
      icon: "📈",
    },
    {
      id: 3,
      title: "Raid Shadow Legends - Level 40",
      reward: "$55.00",
      time: "~7 days",
      category: "Gaming",
      difficulty: "Medium",
      icon: "⚤️",
    },
    {
      id: 4,
      title: "Surfshark VPN - Subscribe",
      reward: "$30.00",
      time: "~5 min",
      category: "Software",
      difficulty: "Easy",
      icon: "🛡️",
    },
    {
      id: 5,
      title: "Binance - Complete KYC & Trade",
      reward: "$100.00",
      time: "~30 min",
      category: "Crypto",
      difficulty: "Medium",
      icon: "🖶",
    },
    {
      id: 6,
      title: "Crypto.com - Sign Up & Stake",
      reward: "$50.00",
      time: "~20 min",
      category: "Crypto",
      difficulty: "Easy",
      icon: "🚩",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "16px 0",
          background: isScrolled ? "rgba(10, 14, 39, 0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled ? "1px soli