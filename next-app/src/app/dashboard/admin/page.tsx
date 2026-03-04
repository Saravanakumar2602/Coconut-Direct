"use client";

import { useAppStore, useAuthStore } from '@/store';
import { Package, Users, IndianRupee, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
    const { user } = useAuthStore();
    const { products, orders } = useAppStore();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !user) return null;

    const totalSales = orders.filter(o => o.status === 'completed').reduce((sum, o) => sum + o.totalPrice, 0);
    const activeProducts = products.filter(p => p.status === 'active').length;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <h1 className="text-3xl font-bold font-heading text-stone-900 mb-1">Admin Control Center</h1>
                <p className="text-stone-500">System overview and marketplace metrics.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                <StatCard
                    icon={<IndianRupee className="text-green-600" size={24} />}
                    title="Total GMV"
                    value={`₹${totalSales.toLocaleString()}`}
                    trend="Lifetime sales"
                    bg="bg-green-50"
                />
                <StatCard
                    icon={<Package className="text-blue-600" size={24} />}
                    title="Active Listings"
                    value={activeProducts.toString()}
                    trend="Marketplace health"
                    bg="bg-blue-50"
                />
                <StatCard
                    icon={<Users className="text-purple-600" size={24} />}
                    title="Total Users"
                    value="1,248"
                    trend="Farmers & Buyers"
                    bg="bg-purple-50"
                />
                <StatCard
                    icon={<ShieldCheck className="text-orange-600" size={24} />}
                    title="Verifications"
                    value="24"
                    trend="Pending approval"
                    bg="bg-orange-50"
                />
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
                    <h2 className="text-xl font-bold font-heading text-stone-900">Recent Platform Activity</h2>
                </div>

                <div className="p-12 text-center text-stone-500 font-medium">
                    Detailed metrics and user management tools are available in the respective admin sections.
                </div>
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
                <div className="text-2xl font-bold font-heading text-stone-900 mb-2">{value}</div>
                <div className="text-xs font-semibold text-stone-400">{trend}</div>
            </div>
        </div>
    );
}
