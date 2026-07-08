"use client";
import { CreateContext, useContext, useState, useEffect, ReactNode } from "react";

type User = { id: string; email: string; username: string; displayName?: string; role: string };

const AuthContext = CreateContext<{
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, username: string, password: string) => Promise<boolean>;
  logout: () => void;
}>({ user: null, login: async () => false, register: async () => false, logout: () => {} });

export function useAuth() { return useContext(AuthContext); }

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/auth/me").then(r => r.ok ? r.json().then(setUser) : null);
  }, []);

  const login = async (email: string, password: string) => {
    const r = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }), });
    if (r.ok) { const u = await r.json(); setUser(u); return true; }
    return false;
  };

  const register = async (email: string, username: string, password: string) => {
    const r = await fetch("/api/auth/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, username, password }), });
    if (r.ok) { const u = await r.json(); setUser(u); return true; }
    return false;
  };

  const logout = () => { fetch("/api/auth/logout").then(() => setUser(null)); };

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
}