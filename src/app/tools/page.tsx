"use client";

import { motion } from "framer-motion";
import { Calculator, CreditCard, Search, Zap, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

const TOOLS = [
  {
    title: "bKash Calculator",
    description: "Calculate bKash cash-out, send money, and transaction charges instantly.",
    icon: Calculator,
    href: "/tools/bkash-charge-calculator-bd",
    badge: "Most Popular",
  },
  {
    title: "Nagad Calculator",
    description: "Compare and calculate Nagad charges for app and USSD transactions.",
    icon: CreditCard,
    href: "#",
    badge: "Coming Soon",
  },
  {
    title: "Unit Converter",
    description: "Essential Bangladeshi unit conversions (Katha, Bigha, Decimal to Sqft).",
    icon: Zap,
    href: "#",
    badge: "Beta",
  },
];

export default function ToolsHub() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 font-medium text-sm"
          >
            <svg viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/></svg>
            Ridoway Tools
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-semibold tracking-tighter sm:text-7xl mb-6 text-white"
          >
            Essential Bengali Tools
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            A curated suite of high-performance tools designed specifically for the needs of Bangladeshis. Fast, reliable, and entirely free.
          </motion.p>
        </div>

        {/* Search Bar (Visual only for now) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto mb-20 relative"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search tools (e.g. bKash, GPA...)"
            className="w-full bg-black border border-white/10 rounded-lg py-3 pl-12 pr-6 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-colors text-white placeholder:text-zinc-500"
          />
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group relative"
            >
              <Link href={tool.href} className="block h-full">
                <div className="bg-black h-full rounded-lg p-8 border border-white/10 transition-all hover:border-zinc-400 flex flex-col items-start hover:bg-[#0a0a0a]">
                  <div className="flex justify-between w-full items-start mb-6">
                    <div className="h-12 w-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <tool.icon className="h-5 w-5 text-zinc-300 group-hover:text-black transition-colors" />
                    </div>
                    {tool.badge && (
                      <span className="text-[10px] font-medium uppercase tracking-widest px-2 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-400">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">{tool.title}</h3>
                  <p className="text-zinc-500 leading-relaxed flex-1 text-sm">
                    {tool.description}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-zinc-400 font-medium text-sm group-hover:text-white transition-colors">
                    Access Tool
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <ShieldCheck className="h-6 w-6 text-zinc-400" />
            <h4 className="font-medium text-white">Privacy First</h4>
            <p className="text-sm text-zinc-500">All calculations are processed locally. Your data never leaves your device.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Clock className="h-6 w-6 text-zinc-400" />
            <h4 className="font-medium text-white">Always Up to Date</h4>
            <p className="text-sm text-zinc-500">Rates and policies are updated regularly to match current Bangladeshi standards.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Zap className="h-6 w-6 text-zinc-400" />
            <h4 className="font-medium text-white">Blazing Fast</h4>
            <p className="text-sm text-zinc-500">Built on Next.js 16 for near-instant load times and smooth interactions.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
