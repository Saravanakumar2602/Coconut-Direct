"use client";

import { useAppStore, useAuthStore } from '@/store';
import { Package, TrendingUp, IndianRupee, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FarmerDashboard() {
    const { user } = useAuthStore();
    const { products, orders } = useAppStore();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !user) return null;

    const myProducts = products.filter(p => p.farmerId === user.id);
    const totalVolume = myProducts.reduce((sum, p) => sum + p.quantity, 0);
    const activeListings = myProducts.filter(p => p.status === 'active').length;

    // Fake stats for demo
    const revenue = myProducts.reduce((sum, p) => sum + (p.pricePerTonne * p.quantity * 0.4), 0); // Assuming 40% sold

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div>
                    <h1 className="text-3xl font-bold font-heading text-stone-900 mb-1">Welcome back, {user.name}</h1>
                    <p className="text-stone-500">Here's your farm's performance overview.</p>
                </div>
                <Link
                    href="/dashboard/farmer/products/new"
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-primary/20 transition-all flex items-center gap-2"
                >
                    <Package size={20} /> New Listing
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <StatCard
                    icon={<Package className="text-green-600" size={24} />}
                    title="Active Listings"
                    value={activeListings.toString()}
                    trend="+2 this week"
                    bg="bg-green-50"
                />
                <StatCard
                    icon={<IndianRupee className="text-blue-600" size={24} />}
                    title="Estimated Value"
                    value={`₹${revenue.toLocaleString()}`}
                    trend="Based on current stock"
                    bg="bg-blue-50"
                />
                <StatCard
                    icon={<TrendingUp className="text-purple-600" size={24} />}
                    title="Total Volume"
                    value={`${totalVolume} Tonnes`}
                    trend="Available"
                    bg="bg-purple-50"
                />
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-stone-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold font-heading">Recent Listings</h2>
                    <Link href="/dashboard/farmer/products" className="text-primary font-semibold text-sm hover:underline">View All</Link>
                </div>

                {myProducts.length === 0 ? (
                    <div className="p-12 text-center text-stone-500">
                        You haven't added any products yet.
                    </div>
                ) : (
                    <div className="divide-y divide-stone-100">
                        {myProducts.slice(0, 5).map(product => (
                            <div key={product.id} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-stone-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-stone-100 rounded-xl flex-shrink-0 overflow-hidden relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={product.image || 'https://images.unsplash.com/photo-1581453883350-288b2c19bea8?w=150'} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-stone-900">{product.type}</h3>
                                        <div className="flex gap-3 text-sm text-stone-500 font-medium">
                                            <span>{product.quantity} Tonnes</span>
                                            <span className="w-1 h-1 rounded-full bg-stone-300 self-center"></span>
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {product.district}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:items-end w-full sm:w-auto mt-2 sm:mt-0">
                                    <span className="text-2xl font-bold font-heading text-primary bg-primary/10 px-3 py-1 rounded-lg">₹{product.pricePerTonne.toLocaleString()}</span>
                                    <span className="text-xs text-stone-400 font-medium mt-1 uppercase">per Tonne</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function StatCard({ icon, title, value, trend, bg }: { icon: React.ReactNode, title: string, value: string, trend: string, bg: string }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg}`}>
                    {icon}
                </div>
            </div>
            <div>
                <h3 className="text-stone-500 font-medium text-sm mb-1">{title}</h3>
                <div className="text-3xl font-bold font-heading text-stone-900 mb-2">{value}</div>
                <div className="text-sm font-semibold text-stone-400">{trend}</div>
            </div>
        </div>
    );
}
