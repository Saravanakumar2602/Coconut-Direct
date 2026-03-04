"use client";

import { useState } from 'react';
import { useAppStore } from '@/store';
import { Leaf, Search, MapPin, Filter, ShoppingCart, ChevronRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Marketplace() {
    const products = useAppStore(state => state.products);
    const [district, setDistrict] = useState('All');
    const [type, setType] = useState('All');

    const districts = ['All', 'Pollachi', 'Thanjavur', 'Tiruppur', 'Coimbatore', 'Kanyakumari'];
    const types = ['All', 'Hybrid (High Yield)', 'Tall Variety (Desi)', 'Tender Coconut'];

    const filteredProducts = products.filter(p => {
        const matchDistrict = district === 'All' || p.district === district;
        const matchType = type === 'All' || p.type.includes(type);
        return matchDistrict && matchType && p.status === 'active';
    });

    return (
        <div className="pt-24 pb-20 bg-stone-50 min-h-screen">
            <div className="bg-primary py-12 mb-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl flex flex-col items-center mx-auto text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Coconut Marketplace</h1>
                        <p className="text-lg text-primary-light/80 mb-8 max-w-xl">
                            Discover the freshest quality coconuts directly from verified Tamil Nadu farmers at genuine market rates.
                        </p>

                        <div className="w-full flex bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 gap-2">
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-green-200" />
                                </div>
                                <select
                                    value={district}
                                    onChange={e => setDistrict(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/10 text-white rounded-xl outline-none appearance-none border border-transparent focus:bg-white/20 focus:border-white transition-all [&>option]:text-stone-900"
                                >
                                    {districts.map(d => <option key={d} value={d}>{d} Districts</option>)}
                                </select>
                            </div>
                            <div className="relative flex-1 hidden md:block">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Filter className="h-5 w-5 text-green-200" />
                                </div>
                                <select
                                    value={type}
                                    onChange={e => setType(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/10 text-white rounded-xl outline-none appearance-none border border-transparent focus:bg-white/20 focus:border-white transition-all [&>option]:text-stone-900"
                                >
                                    {types.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                                <Search size={20} /> <span className="hidden sm:inline">Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
                    <div className="flex gap-2 text-sm text-stone-600 font-medium items-center">
                        <span>Showing</span>
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">{filteredProducts.length}</span>
                        <span>available lots</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-stone-500 font-semibold">Sort by:</span>
                        <select className="bg-stone-50 border border-stone-200 rounded-lg px-3 py-1.5 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20">
                            <option>Newest Arrivals</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-stone-100">
                        <Leaf size={48} className="mx-auto text-stone-300 mb-4" />
                        <h3 className="text-2xl font-bold text-stone-900 mb-2">No lots found</h3>
                        <p className="text-stone-500">Try adjusting your filters to see more results.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 group flex flex-col h-full">
                                <div className="relative h-48 bg-stone-100 w-full overflow-hidden">
                                    <Image
                                        src={product.image || 'https://images.unsplash.com/photo-1581453883350-288b2c19bea8?w=500'}
                                        alt={product.type}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 px-3 py-1 text-xs font-bold rounded-full shadow-sm">
                                        {product.type}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-heading font-bold text-xl text-stone-900 leading-tight">
                                            {product.quantity} Tonnes <br /> <span className="text-sm font-normal text-stone-500">Available Lot</span>
                                        </h3>
                                    </div>

                                    <div className="flex gap-2 border-b border-stone-100 pb-4 mb-4 mt-auto">
                                        <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-600 text-xs px-2.5 py-1 rounded-md font-medium">
                                            <MapPin size={12} className="text-primary" /> {product.district}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-600 text-xs px-2.5 py-1 rounded-md font-medium">
                                            <Leaf size={12} className="text-primary" /> {product.farmerName}
                                        </span>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div>
                                            <div className="text-xs text-stone-500 font-semibold mb-1 uppercase tracking-wider">Asking Price</div>
                                            <div className="text-2xl font-bold font-heading text-primary">₹{product.pricePerTonne.toLocaleString()}<span className="text-sm font-normal text-stone-500">/T</span></div>
                                        </div>

                                        <Link href={`/login`} className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-primary transition-colors hover:scale-110 active:scale-95 shadow-lg group">
                                            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
