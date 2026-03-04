"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, TrendingUp, MapPin, ChevronRight, ShieldCheck, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-stone-900/40 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1581453883350-288b2c19bea8?q=80&w=2000&auto=format&fit=crop"
            alt="Coconut Farm"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-medium text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live Market Prices Updated
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6">
                Direct from <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  Tamil Nadu Farms
                </span>
              </h1>
              <p className="text-xl text-stone-300 mb-10 leading-relaxed max-w-2xl font-light">
                The premier digital marketplace connecting authentic coconut farmers directly with buyers. Transparent pricing, fair trade, zero middlemen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-500 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-green-900/50"
                >
                  Start Trading
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/products"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center"
                >
                  Browse Marketplace
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-green-700 py-8 text-white relative z-20 -mt-8 mx-4 md:mx-auto md:w-[90%] lg:w-[80%] rounded-2xl shadow-xl shadow-stone-200/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-green-500/30">
            <div className="text-center px-4">
              <div className="text-3xl font-bold font-heading mb-1">5,000+</div>
              <div className="text-green-100 text-sm font-medium">Verified Farmers</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-bold font-heading mb-1">₹4.2 Cr</div>
              <div className="text-green-100 text-sm font-medium">Monthly Trade Value</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-bold font-heading mb-1">32</div>
              <div className="text-green-100 text-sm font-medium">Districts Covered</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-bold font-heading mb-1">0%</div>
              <div className="text-green-100 text-sm font-medium">Middleman Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-stone-900 mb-6">Revolutionizing Coconut Trade</h2>
            <p className="text-stone-600 text-lg">We're bringing transparency and efficiency to one of Tamil Nadu's most vital agricultural sectors.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Leaf className="w-8 h-8 text-green-600" />}
              title="Direct Connection"
              desc="Connect farmers directly with wholesalers and retailers, eliminating unnecessary intermediaries and ensuring fair margins for all parties."
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-green-600" />}
              title="Transparent Pricing"
              desc="Access real-time, district-wise market prices updated daily. Make informed purchasing or selling decisions based on actual market data."
            />
            <FeatureCard
              icon={<MapPin className="w-8 h-8 text-green-600" />}
              title="District-Based Sourcing"
              desc="Easily find local suppliers or buyers in your specific district for efficient logistics and fresher products."
            />
          </div>
        </div>
      </section>

      {/* Market Preview */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold font-heading text-stone-900 mb-4">Today's Market Rates</h2>
              <p className="text-stone-600">Average wholesale prices across Tamil Nadu (per Tonne)</p>
            </div>
            <Link href="/pricing" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700">
              View All Districts <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { district: 'Coimbatore', price: '₹32,500', trend: '+1.2%', up: true, type: 'Pollachi Hybrid' },
              { district: 'Tiruppur', price: '₹31,800', trend: '+0.8%', up: true, type: 'Kangayam Medium' },
              { district: 'Thanjavur', price: '₹29,500', trend: '-0.5%', up: false, type: 'Delta Special' },
              { district: 'Kanyakumari', price: '₹34,000', trend: '+2.1%', up: true, type: 'Coastal Grade A' }
            ].map((item, i) => (
              <div key={i} className="bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-stone-900 text-lg">{item.district}</h3>
                  <span className={`inline-flex items-center text-sm font-semibold ${item.up ? 'text-green-600' : 'text-red-500'}`}>
                    {item.trend}
                  </span>
                </div>
                <div className="text-3xl font-heading font-bold text-stone-900 mb-2">{item.price}</div>
                <div className="text-sm text-stone-500 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-green-500" />
                  {item.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-heading mb-6 leading-tight">Secure, Verified & Risk-Free Trade</h2>
              <p className="text-stone-300 text-lg mb-8 leading-relaxed">
                Every farmer and buyer on our platform undergoes a strict verification process. We ensure payments are secured and logistics are tracked.
              </p>

              <ul className="space-y-6">
                {[
                  { title: "Escrow Payments", desc: "Funds are held securely until delivery is confirmed." },
                  { title: "Quality Assurance", desc: "Dispute resolution team ready if standards aren't met." },
                  { title: "Verified Profiles", desc: "Aadhaar and farm ownership verification mandatory." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-stone-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1000&auto=format&fit=crop"
                  alt="Farmer showing coconuts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs text-stone-900">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold">Fast Settlement</div>
                    <div className="text-sm text-stone-500">Payments in 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-green-100 mb-10 leading-relaxed font-light">
            Join thousands of modern farmers and smart buyers maximizing their profits on Coconut Direct today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register?role=farmer"
              className="bg-white text-green-800 px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              I am a Farmer
            </Link>
            <Link
              href="/register?role=buyer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all shadow-xl"
            >
              I am a Buyer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold font-heading text-stone-900 mb-4">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{desc}</p>
    </div>
  );
}
