"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState("");
  const [error, setError] = useState(""); const [loading, setLoading] = useState(false);
  const { login } = useAuth(); const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError(""); setLoading(true);
    const ok = await login(email, password);
    setLoading(false);
    if (ok) router.push("/dashboard"); else setError("Invalid email or password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8"><ArrowLeft size={16} /> Back</Link>
        <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
        <p className="text-gray-400 mb-8">Sign in to your account</p>
        {error && <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-xl mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><label className="text-sm text-gray-400">Email</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="input-field" /></div>
          <div><label className="text-sm text-gray-400">Password</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="input-field" /></div>
          <button type="submit" disabled={loading} className="btn-primary w-full text-lg">{loading ? "Signing in..." : "Sign In"}</button>
        </form>
        <p className="text-gray-500 text-sm mt-6 text-center">Don't have an account? <Link href="/register" className="text-brand">Create one</Link></p>
      </div>
    </div>
  );
}