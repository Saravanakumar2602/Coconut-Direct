import Link from 'next/link';
import { Sprout, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1 border-b border-stone-800 pb-8 md:pb-0 md:border-none">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center shadow-lg">
                                <Sprout size={24} />
                            </div>
                            <span className="text-2xl font-bold font-heading text-white tracking-tight">
                                Coconut
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            Connecting Tamil Nadu coconut farmers direct to buyers. Transparent, fair, and fast.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-300">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold font-heading text-lg mb-6">Marketplace</h4>
                        <ul className="space-y-4">
                            <li><Link href="/products" className="hover:text-green-500 transition-colors">Browse Coconuts</Link></li>
                            <li><Link href="/pricing" className="hover:text-green-500 transition-colors">Live Prices</Link></li>
                            <li><Link href="/farmers" className="hover:text-green-500 transition-colors">Verified Farmers</Link></li>
                            <li><Link href="/about" className="hover:text-green-500 transition-colors">How it works</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold font-heading text-lg mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/faq" className="hover:text-green-500 transition-colors">Help Center</Link></li>
                            <li><Link href="/trust" className="hover:text-green-500 transition-colors">Trust & Safety</Link></li>
                            <li><Link href="/contact" className="hover:text-green-500 transition-colors">Contact Us</Link></li>
                            <li><Link href="/terms" className="hover:text-green-500 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold font-heading text-lg mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3">
                                <span className="text-stone-500">Email:</span>
                                <a href="mailto:support@coconutdirect.in" className="hover:text-green-500 transition-colors">support@coconutdirect.in</a>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-stone-500">Phone:</span>
                                <a href="tel:+914445556666" className="hover:text-green-500 transition-colors">+91 44 4555 6666</a>
                            </li>
                            <li className="flex gap-3 mt-4">
                                <span className="text-stone-500">HQ:</span>
                                <span>Coimbatore, Tamil Nadu<br />India 641001</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-stone-800 text-center text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Coconut Direct. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
