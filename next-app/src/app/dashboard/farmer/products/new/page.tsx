"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore, useAuthStore } from '@/store';
import { Package, Upload, IndianRupee, MapPin, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CreateProduct() {
    const router = useRouter();
    const { user } = useAuthStore();
    const addProduct = useAppStore(state => state.addProduct);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        type: 'Hybrid (High Yield)',
        quantity: '',
        pricePerTonne: '',
        availableFrom: new Date().toISOString().split('T')[0],
        description: '',
        district: user?.district || 'Coimbatore'
    });

    if (!user || user.role !== 'farmer') {
        return null;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            addProduct({
                farmerId: user.id,
                farmerName: user.name,
                district: formData.district,
                type: formData.type,
                quantity: Number(formData.quantity),
                pricePerTonne: Number(formData.pricePerTonne),
                availableFrom: formData.availableFrom,
                description: formData.description,
                status: 'active'
            });

            router.push('/dashboard/farmer');
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <Link href="/dashboard/farmer" className="inline-flex items-center gap-2 text-stone-500 hover:text-primary transition-colors font-medium">
                <ArrowLeft size={18} /> Back to Dashboard
            </Link>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <Package size={24} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold font-heading text-stone-900">Create New Listing</h1>
                        <p className="text-stone-500">Add a new lot of coconuts to the marketplace.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                <form onSubmit={handleSubmit} className="p-8 space-y-8">

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Coconut Variety</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none"
                                >
                                    <option>Hybrid (High Yield)</option>
                                    <option>Tall Variety (Desi)</option>
                                    <option>Tender Coconut</option>
                                    <option>Copra (Dried)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Available Quantity (Tonnes)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                        <span className="text-stone-500 font-medium">T</span>
                                    </div>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        required
                                        min="1"
                                        className="w-full pl-4 pr-12 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                        placeholder="E.g. 5"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Price per Tonne</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <IndianRupee className="text-stone-400" size={18} />
                                    </div>
                                    <input
                                        type="number"
                                        name="pricePerTonne"
                                        value={formData.pricePerTonne}
                                        onChange={handleChange}
                                        required
                                        min="1000"
                                        className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                        placeholder="E.g. 32000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Available From</label>
                                <input
                                    type="date"
                                    name="availableFrom"
                                    value={formData.availableFrom}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Farm District</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <MapPin className="text-stone-400" size={18} />
                                    </div>
                                    <select
                                        name="district"
                                        value={formData.district}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none"
                                    >
                                        <option>Pollachi</option>
                                        <option>Thanjavur</option>
                                        <option>Tiruppur</option>
                                        <option>Coimbatore</option>
                                        <option>Kanyakumari</option>
                                        <option>Madurai</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Product Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                                    placeholder="Describe the quality, size, condition..."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-2">Farm/Product Images</label>
                                <div className="border-2 border-dashed border-stone-300 rounded-2xl bg-stone-50 p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-stone-100 hover:border-primary/50 transition-colors">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                                        <Upload className="text-primary" size={24} />
                                    </div>
                                    <p className="font-semibold text-stone-900 mb-1">Click to upload or drag & drop</p>
                                    <p className="text-sm text-stone-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                    <div className="mt-4 px-4 py-1.5 bg-white text-stone-600 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm">Optional for Demo</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-stone-100 flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-8 py-3 rounded-xl font-bold text-stone-600 hover:bg-stone-100 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Publish Listing'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
