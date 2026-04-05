"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowRight, CornerDownLeft, Info } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[90vh] bg-black text-white selection:bg-emerald-500 selection:text-black overflow-hidden flex flex-col items-center justify-center px-4">
      {/* ─── BACKGROUND DECOR ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[128px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-700/[0.03] rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
      </div>

      <div className="container max-w-2xl relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated 404 Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <h1 className="text-[10rem] md:text-[14rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-900 leading-none select-none">
              404
            </h1>
          </motion.div>

          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full rounded-[2.5rem] border border-white/5 bg-zinc-950/50 backdrop-blur-3xl p-10 md:p-16 shadow-2xl relative"
          >
            {/* Glossy top edge */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-8 mx-auto">
              <Info className="h-4 w-4" />
              <span className="text-[10px] uppercase font-black tracking-widest leading-none">End of Registry</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-6">
               Lost in the <span className="text-emerald-500">System?</span>
            </h2>
            <p className="text-zinc-500 font-medium leading-relaxed mb-12 max-w-md mx-auto">
              দুঃখিত, আপনি যে পাতাটি খুঁজছেন তা আমাদের ডেটাবেসে পাওয়া যায়নি। হয়তো কোনো লিঙ্কে ভুল ছিল অথবা পাতাটি সরিয়ে ফেলা হয়েছে।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/" className="flex items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 transition-all">
                <Home className="h-4 w-4" />
                Return Home
              </Link>
              <Link href="/tools" className="flex items-center justify-center gap-3 bg-zinc-900 border border-white/5 text-zinc-400 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:text-white hover:border-white/20 transition-all">
                <Search className="h-4 w-4" />
                Explore Tools
              </Link>
            </div>
          </motion.div>

          {/* Footer Assistance */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col items-center gap-6"
          >
            <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-[0.4em]">Popular Terminal Routes</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "bKash Calc", href: "/tools/bkash-charge-calculator-bd" },
                { label: "Nagad Calc", href: "/tools/nagad-charge-calculator" },
                { label: "GPA Hub", href: "/tools/hsc-gpa-calculator-bd" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-emerald-500 transition-colors">
                  <CornerDownLeft className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
