"use client";

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Leaf, UserPlus, Phone, MapPin, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function RegisterForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialRole = searchParams.get('role') || 'farmer';

    const [role, setRole] = useState(initialRole);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            // In a real app we would create the user. Here we just redirect to login
            router.push('/login');
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-stone-50 relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xl px-4 relative z-10"
            >
                <div className="text-center mb-10">
                    <Link href="/" className="inline-flex w-16 h-16 rounded-2xl bg-primary text-white items-center justify-center mb-6 shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                        <UserPlus size={32} />
                    </Link>
                    <h1 className="text-3xl font-bold font-heading text-stone-900 mb-2">Create an Account</h1>
                    <p className="text-stone-500">Join the premier coconut marketplace in Tamil Nadu</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100">

                    <div className="flex bg-stone-100 p-1.5 rounded-2xl mb-8">
                        <button
                            onClick={() => setRole('farmer')}
                            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${role === 'farmer' ? 'bg-white text-primary shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
                        >
                            I am a Farmer
                        </button>
                        <button
                            onClick={() => setRole('buyer')}
                            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${role === 'buyer' ? 'bg-white text-primary shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
                        >
                            I am a Buyer
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">First Name</label>
                                <input type="text" required className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Last Name</label>
                                <input type="text" required className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-stone-700 mb-2">Phone Number</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="text-stone-500 font-semibold">+91</span>
                                </div>
                                <input type="tel" required className="w-full pl-14 pr-4 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="98765 43210" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-stone-700 mb-2">District</label>
                            <select required className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none">
                                <option value="" disabled selected>Select your district</option>
                                <option>Pollachi</option>
                                <option>Thanjavur</option>
                                <option>Tiruppur</option>
                                <option>Coimbatore</option>
                                <option>Kanyakumari</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-stone-700 mb-2">Email Address</label>
                            <input type="email" required className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="john@example.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-stone-700 mb-2">Password</label>
                            <input type="password" required className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="••••••••" />
                        </div>

                        {role === 'farmer' && (
                            <div className="bg-green-50/50 p-4 rounded-xl border border-green-100 flex gap-4 items-start">
                                <Leaf className="text-green-600 mt-0.5 shrink-0" size={20} />
                                <p className="text-sm text-green-900 leading-relaxed">
                                    As a farmer, you'll need to verify your identity and farm ownership by providing Aadhaar and Patta documents after registration. This ensures a trusted marketplace.
                                </p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-4"
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : (
                                <>Complete Registration <ArrowRight size={18} /></>
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-stone-600">
                        Already have an account?{' '}
                        <Link href="/login" className="font-semibold text-primary hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default function RegisterPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-stone-50">
                <Loader2 className="animate-spin text-primary" size={48} />
            </div>
        }>
            <RegisterForm />
        </Suspense>
    );
}
