"use client";

import { useAuthStore } from '@/store';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut, Loader2, ArrowLeft } from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isAuthenticated, logout } = useAuthStore();
    const router = useRouter();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    if (!mounted || !isAuthenticated || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50 pt-20">
                <Loader2 className="animate-spin text-primary" size={40} />
            </div>
        );
    }

    const navItems = {
        farmer: [
            { href: '/dashboard/farmer', icon: <LayoutDashboard size={20} />, label: 'Overview' },
            { href: '/dashboard/farmer/products', icon: <Package size={20} />, label: 'My Listings' },
        ],
        buyer: [
            { href: '/dashboard/buyer', icon: <LayoutDashboard size={20} />, label: 'Overview' },
            { href: '/dashboard/buyer/orders', icon: <ShoppingCart size={20} />, label: 'My Orders' },
        ],
        admin: [
            { href: '/dashboard/admin', icon: <LayoutDashboard size={20} />, label: 'Overview' },
            { href: '/dashboard/admin/users', icon: <Users size={20} />, label: 'Manage Users' },
        ]
    };

    const links = user.role ? navItems[user.role] : [];

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-stone-100 flex flex-col md:flex-row pt-20">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-white border-r border-stone-200 flex flex-col sticky top-20 h-[calc(100vh-80px)] shrink-0 z-40 hidden md:flex shadow-sm">
                <div className="p-6">
                    <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-white border-2 border-primary/20 rounded-full mb-3 flex items-center justify-center text-xl font-bold font-heading text-primary shadow-sm shadow-primary/10">
                            {user.name.charAt(0)}
                        </div>
                        <h3 className="font-bold font-heading text-stone-900 leading-tight">{user.name}</h3>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">{user.role}</p>
                    </div>
                </div>

                <div className="flex-1 px-4 space-y-2 overflow-y-auto">
                    {links.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${active
                                        ? 'bg-primary text-white shadow-md shadow-primary/20 scale-100'
                                        : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                                    }`}
                            >
                                {link.icon}
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <div className="p-4 border-t border-stone-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-xl font-medium text-red-600 hover:bg-red-50 transition-colors"
                    >
                        <LogOut size={20} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-x-hidden p-4 md:p-8">
                {/* Mobile quick navigation could go here */}
                <div className="md:hidden flex flex-wrap gap-2 mb-6 w-full">
                    {links.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex-1 min-w-[120px] text-center px-4 py-3 rounded-xl font-medium text-sm transition-all ${active
                                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                                        : 'bg-white text-stone-600 border border-stone-200'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {children}
            </main>
        </div>
    );
}
