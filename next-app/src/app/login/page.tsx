"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/store';
import { Leaf, Mail, Lock, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
    const router = useRouter();
    const login = useAuthStore(state => state.login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            // Mock validation
            if (email === 'farmer@test.com') {
                login({ id: 'f1', email, name: 'Farmer Dan', role: 'farmer', verified: true });
                router.push('/dashboard/farmer');
            } else if (email === 'buyer@test.com') {
                login({ id: 'b1', email, name: 'Fresh Retail Hub', role: 'buyer', verified: true });
                router.push('/dashboard/buyer');
            } else if (email === 'admin@test.com') {
                login({ id: 'a1', email, name: 'Admin', role: 'admin', verified: true });
                router.push('/dashboard/admin');
            } else {
                setError('Invalid credentials. Use farmer@test.com, buyer@test.com, or admin@test.com with any password for demo.');
                setLoading(false);
            }
        }, 1200);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-stone-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md px-4 relative z-10"
            >
                <div className="text-center mb-10">
                    <Link href="/" className="inline-flex w-16 h-16 rounded-2xl bg-primary text-white items-center justify-center mb-6 shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                        <Leaf size={32} />
                    </Link>
                    <h1 className="text-3xl font-bold font-heading text-stone-900 mb-2">Welcome Back</h1>
                    <p className="text-stone-500">Sign in to manage your marketplace activities</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium mb-6">
                            {error}
                        </div>
                    )}

                    <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm mb-6 flex flex-col gap-1 border border-blue-100">
                        <span className="font-semibold mb-1">Demo Accounts:</span>
                        <span>Farmer: <code className="bg-white/60 px-1 rounded">farmer@test.com</code></span>
                        <span>Buyer: <code className="bg-white/60 px-1 rounded">buyer@test.com</code></span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-stone-700 mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-stone-400" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-stone-700 mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-stone-400" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary/20 border-stone-300" />
                                <span className="ml-2 text-sm text-stone-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm font-medium text-primary hover:underline">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-4"
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : (
                                <>Sign In <ArrowRight size={18} /></>
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-stone-600">
                        Don't have an account?{' '}
                        <Link href="/register" className="font-semibold text-primary hover:underline">
                            Create an account
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
