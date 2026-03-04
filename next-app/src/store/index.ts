import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserRole = 'farmer' | 'buyer' | 'admin' | null;

interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    phone?: string;
    district?: string;
    verified: boolean;
}

interface Product {
    id: string;
    farmerId: string;
    farmerName: string;
    district: string;
    type: string;
    quantity: number; // in tonnes
    pricePerTonne: number;
    availableFrom: string;
    description: string;
    image?: string;
    status: 'active' | 'sold' | 'draft';
    createdAt: string;
}

interface Order {
    id: string;
    productId: string;
    buyerId: string;
    farmerId: string;
    quantity: number;
    totalPrice: number;
    status: 'pending' | 'accepted' | 'completed' | 'cancelled';
    createdAt: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
    updateUser: (data: Partial<User>) => void;
}

interface StoreState {
    products: Product[];
    orders: Order[];
    addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
    updateProduct: (id: string, product: Partial<Product>) => void;
    deleteProduct: (id: string) => void;
    createOrder: (order: Omit<Order, 'id' | 'createdAt' | 'status'>) => void;
    updateOrderStatus: (id: string, status: Order['status']) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            login: (user) => set({ user, isAuthenticated: true }),
            logout: () => set({ user: null, isAuthenticated: false }),
            updateUser: (data) => set((state) => ({
                user: state.user ? { ...state.user, ...data } : null
            })),
        }),
        { name: 'coconut-auth' }
    )
);

// Pre-fill some data so the marketplace looks alive for a demo/deployment
const INITIAL_PRODUCTS: Product[] = [
    {
        id: 'p1', farmerId: 'f1', farmerName: 'Ramasamy', district: 'Pollachi',
        type: 'Hybrid (High Yield)', quantity: 5, pricePerTonne: 32500,
        availableFrom: '2026-03-10', description: 'Fresh, large coconuts ideal for oil extraction and premium retail.',
        image: 'https://images.unsplash.com/photo-1581453883350-288b2c19bea8?w=500',
        status: 'active', createdAt: new Date().toISOString()
    },
    {
        id: 'p2', farmerId: 'f2', farmerName: 'Murugan', district: 'Thanjavur',
        type: 'Tall Variety (Desi)', quantity: 2, pricePerTonne: 30000,
        availableFrom: '2026-03-05', description: 'Traditional variety, highly sweet water.',
        image: 'https://images.unsplash.com/photo-1560769680-ba2f3767c785?w=500',
        status: 'active', createdAt: new Date().toISOString()
    },
    {
        id: 'p3', farmerId: 'f3', farmerName: 'Velusamy', district: 'Tiruppur',
        type: 'Tender Coconut', quantity: 10, pricePerTonne: 28000,
        availableFrom: '2026-03-15', description: 'Perfect tender coconuts for summer demand.',
        status: 'active', createdAt: new Date().toISOString()
    }
];

export const useAppStore = create<StoreState>()(
    persist(
        (set) => ({
            products: INITIAL_PRODUCTS,
            orders: [],
            addProduct: (product) => set((state) => ({
                products: [{
                    ...product,
                    id: Math.random().toString(36).substring(7),
                    createdAt: new Date().toISOString()
                }, ...state.products]
            })),
            updateProduct: (id, data) => set((state) => ({
                products: state.products.map(p => p.id === id ? { ...p, ...data } : p)
            })),
            deleteProduct: (id) => set((state) => ({
                products: state.products.filter(p => p.id !== id)
            })),
            createOrder: (order) => set((state) => ({
                orders: [{
                    ...order,
                    id: Math.random().toString(36).substring(7),
                    status: 'pending',
                    createdAt: new Date().toISOString()
                }, ...state.orders]
            })),
            updateOrderStatus: (id, status) => set((state) => ({
                orders: state.orders.map(o => o.id === id ? { ...o, status } : o)
            }))
        }),
        { name: 'coconut-data' }
    )
);
