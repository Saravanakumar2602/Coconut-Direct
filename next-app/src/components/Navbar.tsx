"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sprout, LogIn, UserPlus } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isLightText = pathname === '/' && !scrolled;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center shadow-lg group-hover:bg-green-700 transition-colors">
                        <Sprout size={24} />
                    </div>
                    <span className={`text-xl font-bold font-heading tracking-tight ${isLightText ? 'text-white drop-shadow-md' : 'text-gray-900'}`}>
                        Coconut Direct
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="/" active={pathname === '/'} isLightText={isLightText}>Home</NavLink>
                    <NavLink href="/products" active={pathname === '/products'} isLightText={isLightText}>Marketplace</NavLink>
                    <NavLink href="/pricing" active={pathname === '/pricing'} isLightText={isLightText}>Live Prices</NavLink>

                    <div className="flex items-center gap-4 ml-4">
                        <Link
                            href="/login"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${isLightText
                                ? 'text-white hover:bg-white/20'
                                : 'text-green-700 hover:bg-green-50'
                                }`}
                        >
                            <LogIn size={18} />
                            <span>Login</span>
                        </Link>
                        <Link
                            href="/register"
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            <UserPlus size={18} />
                            <span>Register</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile menu button could go here */}
            </div>
        </nav>
    );
}

function NavLink({ href, children, active, isLightText }: { href: string, children: React.ReactNode, active: boolean, isLightText: boolean }) {
    return (
        <Link href={href} className="relative group px-1">
            <span className={`text-sm font-semibold tracking-wide transition-colors ${active
                ? (isLightText ? 'text-white' : 'text-green-700')
                : (isLightText ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-green-700')
                }`}>
                {children}
            </span>
            {active && (
                <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"
                />
            )}
        </Link>
    );
}
