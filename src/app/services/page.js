"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, Users, Star, CheckCircle2, Zap, ArrowRight, Radio,
  Gauge, Banknote, Infinity, ShieldCheck, Building2, Headphones, Cpu, Youtube, MapPin,
  Mail, PhoneCall, Facebook, Instagram, Twitter, Linkedin, MessageCircle
} from 'lucide-react';

const plans = [
  {
    id: 'wfh',
    title: 'WFH Plan',
    speed: '40 Mbps',
    icon: <Home className="w-8 h-8" />,
    monthly: 500,
    quarterly: 1501,
    color: 'from-cyan-500 to-blue-600',
    features: ['Zero Installation Charges', 'No Security Deposit', '3, 6, 12 Month Options'],
  },
  {
    id: 'family',
    title: 'Family Plan',
    speed: '75 Mbps',
    icon: <Users className="w-8 h-8" />,
    monthly: 649,
    quarterly: 1947,
    color: 'from-purple-500 to-indigo-600',
    features: ['Free 5GHz Dual Band Router', 'OTT Combo Plans Available', '11+1 Month Free Offer', 'Zero Security Deposit'],
    popular: true
  },
  {
    id: 'premium',
    title: 'Premium Plan',
    speed: '150 Mbps',
    icon: <Star className="w-8 h-8" />,
    monthly: 708,
    quarterly: 2124,
    color: 'from-amber-400 to-orange-600',
    features: ['High-Speed 5GHz Router', 'Exclusive OTT Bundle', 'Priority Support', '11+1 Month Free Offer'],
  }
];

const reasons = [
  { title: "High-Speed Internet", desc: "Ultra-fast fiber speeds catering to 4K streaming and pro gaming.", icon: <Gauge />, color: "text-blue-400" },
  { title: "Affordable Plans", desc: "Competitive pricing with a range of plans suited to every budget.", icon: <Banknote />, color: "text-green-400" },
  { title: "Unlimited Data", desc: "Truly unlimited data options without worrying about daily caps.", icon: <Infinity />, color: "text-red-400" },
  { title: "Reliability", desc: "Known for stable connections with minimal downtime for work.", icon: <ShieldCheck />, color: "text-orange-400" },
  { title: "Business Plans", desc: "Customized dedicated bandwidth solutions for corporate needs.", icon: <Building2 />, color: "text-purple-400" },
  { title: "Customer Support", desc: "Prompt 24/7 technical assistance to keep you online always.", icon: <Headphones />, color: "text-pink-400" },
  { title: "Fiber-Optic Tech", desc: "Future-proof fiber technology for superior signal strength.", icon: <Cpu />, color: "text-cyan-400" },
  { title: "Streaming Benefits", desc: "Bundled subscriptions for top OTT platforms like Netflix & Prime.", icon: <Youtube />, color: "text-rose-500" },
  { title: "Wide Coverage", desc: "Largest network footprint across Indore's every corner.", icon: <MapPin />, color: "text-amber-500" },
];

export default function ServicesPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[70vh] flex items-center justify-center px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium">
              Indore's Fastest Network
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Next-Gen <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Fiber Internet
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md">Seamless connectivity for gaming, streaming, and work.</p>
            <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-2 transition-transform hover:scale-105">
                Book Connection <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="hidden md:flex justify-center relative">
            <div className="w-80 h-80 bg-gradient-to-tr from-gray-900 to-black border border-white/10 rounded-[4rem] rotate-45 flex items-center justify-center shadow-2xl">
               <Radio size={100} className="text-blue-500 -rotate-45 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. PRICING SECTION --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Plans That Suit You</h2>
            <div className="flex items-center justify-center gap-4">
              <span className={!isAnnual ? "text-white" : "text-gray-500"}>Monthly</span>
              <button onClick={() => setIsAnnual(!isAnnual)} className="w-14 h-7 bg-white/10 rounded-full p-1 relative border border-white/20">
                <motion.div animate={{ x: isAnnual ? 28 : 0 }} className="w-5 h-5 bg-blue-500 rounded-full" />
              </button>
              <span className={isAnnual ? "text-white" : "text-gray-500"}>Quarterly</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div key={plan.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="relative group">
                <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col hover:border-blue-500/30 transition-all shadow-2xl">
                  {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Popular</div>}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-8 shadow-lg`}>{plan.icon}</div>
                  <h3 className="text-2xl font-bold mb-8">{plan.title}</h3>
                  <div className="mb-10"><span className="text-5xl font-black">₹{isAnnual ? plan.quarterly : plan.monthly}</span><span className="text-gray-500">/mo</span></div>
                  <div className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((f, i) => <div key={i} className="flex items-center gap-3 text-sm text-gray-400"><CheckCircle2 size={16} className="text-blue-500" />{f}</div>)}
                  </div>
                  <button className={`w-full py-4 rounded-2xl font-bold bg-gradient-to-r ${plan.color} hover:shadow-xl transition-all shadow-lg`}>Select Plan</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. WHY CHOOSE US SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h4 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm">Why Indore Loves Us</h4>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                Top Reasons to Love <br />
                <span className="text-white/40 italic">Hathway Service</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className={`w-12 h-12 mb-6 ${item.color}`}>{React.cloneElement(item.icon, { size: 32, strokeWidth: 1.5 })}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                <div className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. ULTRA-PREMIUM FOOTER SECTION --- */}
      <footer className="relative mt-20 pt-20 pb-10 px-6 overflow-hidden">
        {/* Abstract Background Glows for Footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-6">
              <div className="text-3xl font-black tracking-tighter italic">
                hathw<span className="text-blue-500 leading-none">@</span>y
                <span className="block text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 not-italic">Connecting Indore</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Indore's most trusted fiber network. Bringing world-class speed, entertainment, and reliability to your doorstep since 2005.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <motion.a 
                    key={i} href="#" 
                    whileHover={{ y: -5, color: '#3b82f6' }}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-white/50 border-l-2 border-blue-500 pl-3">Explore</h4>
              <ul className="space-y-3">
                {['Fiber Plans', 'New Connection', 'Speed Test', 'OTT Bundles', 'Business Net'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors flex items-center group">
                      <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-white/50 border-l-2 border-purple-500 pl-3">Support</h4>
              <ul className="space-y-3">
                {['Help Center', 'Pay Bill Online', 'Privacy Policy', 'Terms of Service', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us (Indore Specific) */}
            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-white/50 border-l-2 border-pink-500 pl-3">Contact Us</h4>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><MapPin size={16}/></div>
                  <p className="text-gray-500 text-xs leading-relaxed">chhauwani , Railway station Main Rd, Indore, MP 452001</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0"><PhoneCall size={16}/></div>
                  <p className="text-gray-500 text-sm font-bold">+91 8225033135</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 shrink-0"><Mail size={16}/></div>
                  <p className="text-gray-500 text-sm">info@hathwayindore.in</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-xs font-medium uppercase tracking-[0.2em]">
              © 2025 Hathway Indore. <span className="text-gray-800">All rights reserved.</span>
            </p>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Built with <Zap size={10} className="text-yellow-500 fill-yellow-500 mx-1" /> for Indore
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}