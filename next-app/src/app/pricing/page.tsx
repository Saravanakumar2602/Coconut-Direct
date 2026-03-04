"use client";

import { TrendingUp, TrendingDown, Minus, IndianRupee } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const MOCK_DATA = [
    { district: 'Coimbatore', price: 32500, previous: 32100, trend: 'up', volume: '145T' },
    { district: 'Tiruppur', price: 31800, previous: 31900, trend: 'down', volume: '88T' },
    { district: 'Thanjavur', price: 29500, previous: 29500, trend: 'stable', volume: '210T' },
    { district: 'Pollachi', price: 33500, previous: 33000, trend: 'up', volume: '412T' },
    { district: 'Kanyakumari', price: 34000, previous: 33800, trend: 'up', volume: '75T' },
    { district: 'Madurai', price: 30000, previous: 30500, trend: 'down', volume: '62T' },
    { district: 'Erode', price: 31500, previous: 31500, trend: 'stable', volume: '110T' },
    { district: 'Salem', price: 31000, previous: 30800, trend: 'up', volume: '85T' }
];

export default function PricingPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = MOCK_DATA.filter(d => d.district.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b) => b.price - a.price);

    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-stone-900 mb-4">Live Market Prices</h1>
                    <p className="text-lg text-stone-500 max-w-2xl mx-auto">
                        Real-time average wholesale prices for coconut (per Tonne) across various districts in Tamil Nadu.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-stone-200 mb-8 gap-4">
                    <input
                        type="text"
                        placeholder="Search district..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:w-64 px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <div className="text-sm font-semibold text-stone-500 flex items-center gap-2">
                        Last Updated: <span className="text-stone-900 bg-stone-100 px-2 py-1 rounded-lg">Today, 06:00 AM IST</span>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-stone-50/80 border-b border-stone-100 uppercase text-xs font-bold text-stone-500 tracking-wider">
                                    <th className="p-6">District</th>
                                    <th className="p-6">Current Price (per T)</th>
                                    <th className="p-6">Change</th>
                                    <th className="p-6">Est. Daily Volume</th>
                                    <th className="p-6 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {filteredData.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                                        <td className="p-6 font-bold text-stone-900 text-lg">{row.district}</td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-1 font-heading text-xl font-bold text-stone-900">
                                                <IndianRupee size={18} className="text-stone-400" />
                                                {row.price.toLocaleString()}
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <div className={`flex items-center gap-1.5 font-bold ${row.trend === 'up' ? 'text-green-600' :
                                                    row.trend === 'down' ? 'text-red-500' : 'text-stone-500'
                                                }`}>
                                                {row.trend === 'up' && <TrendingUp size={18} />}
                                                {row.trend === 'down' && <TrendingDown size={18} />}
                                                {row.trend === 'stable' && <Minus size={18} />}
                                                {Math.abs(row.price - row.previous)} ({((Math.abs(row.price - row.previous) / row.previous) * 100).toFixed(1)}%)
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className="font-semibold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg">{row.volume}</span>
                                        </td>
                                        <td className="p-6 text-right">
                                            <Link
                                                href="/products"
                                                className="text-primary font-bold hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors inline-block"
                                            >
                                                Find Sellers
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {filteredData.length === 0 && (
                        <div className="p-12 text-center text-stone-500 font-medium">
                            No districts found matching your search.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
