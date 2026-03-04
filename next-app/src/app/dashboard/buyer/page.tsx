"use client";

import { useAppStore, useAuthStore } from '@/store';
import { Package, ShoppingBag, IndianRupee, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BuyerDashboard() {
    const { user } = useAuthStore();
    const { products, orders } = useAppStore();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !user) return null;

    const myOrders = orders.filter(o => o.buyerId === user.id);
    const activeOrdersCount = myOrders.filter(o => o.status === 'pending' || o.status === 'accepted').length;
    const totalSpent = myOrders.filter(o => o.status === 'completed').reduce((sum, o) => sum + o.totalPrice, 0);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div>
                    <h1 className="text-3xl font-bold font-heading text-stone-900 mb-1">Welcome back, {user.name}</h1>
                    <p className="text-stone-500">Here's your purchasing overview.</p>
                </div>
                <Link
                    href="/products"
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-primary/20 transition-all flex items-center gap-2"
                >
                    <ShoppingBag size={20} /> Browse Market
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <StatCard
                    icon={<ShoppingBag className="text-purple-600" size={24} />}
                    title="Active Orders"
                    value={activeOrdersCount.toString()}
                    trend="Currently in progress"
                    bg="bg-purple-50"
                />
                <StatCard
                    icon={<Package className="text-green-600" size={24} />}
                    title="Total Orders"
                    value={myOrders.length.toString()}
                    trend="Lifetime orders"
                    bg="bg-green-50"
                />
                <StatCard
                    icon={<IndianRupee className="text-blue-600" size={24} />}
                    title="Total Spent"
                    value={`₹${totalSpent.toLocaleString()}`}
                    trend="Lifetime value"
                    bg="bg-blue-50"
                />
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-stone-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold font-heading">Recent Orders</h2>
                </div>

                {myOrders.length === 0 ? (
                    <div className="p-12 text-center text-stone-500">
                        You haven't placed any orders yet. Discover great products from Tamil Nadu farmers!
                        <br />
                        <Link href="/products" className="text-primary font-bold mt-4 inline-block hover:underline">Browse Marketplace</Link>
                    </div>
                ) : (
                    <div className="divide-y divide-stone-100">
                        {myOrders.slice(0, 5).map(order => {
                            const product = products.find(p => p.id === order.productId);
                            return (
                                <div key={order.id} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-stone-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-stone-100 rounded-xl flex-shrink-0 overflow-hidden relative">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={product?.image || 'https://images.unsplash.com/photo-1581453883350-288b2c19bea8?w=150'} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-stone-900">{product?.type || 'Unknown Product'}</h3>
                                            <div className="flex gap-3 text-sm text-stone-500 font-medium leading-tight mt-1">
                                                <span>Order #{order.id}</span>
                                                <span className="w-1 h-1 rounded-full bg-stone-300 self-center"></span>
                                                <span className="flex items-center gap-1"><MapPin size={14} /> {product?.district || 'Unknown'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:items-end w-full sm:w-auto mt-2 sm:mt-0 gap-1 sm:gap-0">
                                        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                                            <span className={`px-2 py-1 text-xs font-bold rounded-lg uppercase tracking-wider ${order.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                                                order.status === 'accepted' ? 'bg-blue-100 text-blue-700' :
                                                    order.status === 'completed' ? 'bg-green-100 text-green-700' :
                                                        'bg-red-100 text-red-700'
                                                }`}>
                                                {order.status}
                                            </span>
                                            <span className="text-2xl font-bold font-heading text-stone-900">₹{order.totalPrice.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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
