"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, CreditCard, FileImage, FileDown, BookOpen, 
  CircleDollarSign, GraduationCap, FileText, Calendar, 
  Landmark, Ruler, ArrowRight, ShieldCheck, Zap, Globe, 
  Search, Smartphone, ServerOff, Users, CheckCircle2
} from "lucide-react";

export const FEATURED_TOOLS = [
  { 
    title: "bKash Calculator", 
    desc: "Cash-out & send money charges", 
    icon: Calculator, 
    href: "/tools/bkash-charge-calculator-bd", 
    color: "from-pink-500/20 to-pink-500/5",
    badge: "🔥 Most Used",
    badgeStyles: "bg-red-500/10 text-red-500 border-red-500/20",
    related: [
      { name: "Nagad Calc", href: "/tools/nagad-charge-calculator" }
    ]
  },
  { 
    title: "Income Tax Calc", 
    desc: "FY 2025-26 BD tax slabs", 
    icon: CircleDollarSign, 
    href: "/tools/bangladesh-income-tax-calculator", 
    color: "from-emerald-500/20 to-emerald-500/5",
    badge: "💰 Save Tax",
    badgeStyles: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    related: [
      { name: "EMI Calc", href: "/tools/loan-calculator-bd" }
    ]
  },
  { 
    title: "EMI Calculator", 
    desc: "Loan EMI & interest", 
    icon: Landmark, 
    href: "/tools/loan-calculator-bd", 
    color: "from-violet-500/20 to-violet-500/5",
    badge: "📊 Plan Loan",
    badgeStyles: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    related: [
      { name: "Tax Calc", href: "/tools/bangladesh-income-tax-calculator" }
    ]
  },
  { 
    title: "HSC GPA Calc", 
    desc: "Marks → GPA with 4th subject", 
    icon: BookOpen, 
    href: "/tools/hsc-gpa-calculator-bd", 
    color: "from-cyan-500/20 to-cyan-500/5",
    badge: "⚡ Instant",
    badgeStyles: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    related: [
      { name: "SSC GPA", href: "/tools/ssc-gpa-calculator-bd" }
    ]
  },
  { 
    title: "Land Converter", 
    desc: "Katha, Bigha, Decimal & more", 
    icon: Ruler, 
    href: "/tools/land-area-converter-bd", 
    color: "from-amber-500/20 to-amber-500/5",
    badge: "🎯 100% Accurate",
    badgeStyles: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    related: [
      { name: "Age Calc", href: "/tools/age-calculator-bd" }
    ]
  },
  { 
    title: "Image to PDF", 
    desc: "JPG/PNG → PDF, auto A4", 
    icon: FileImage, 
    href: "/tools/jpg-to-pdf", 
    color: "from-blue-500/20 to-blue-500/5",
    badge: "🔒 Private",
    badgeStyles: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    related: [
      { name: "Compress PDF", href: "/tools/compress-pdf" }
    ]
  },
];

const ALL_TOOLS_FLAT = [
  ...FEATURED_TOOLS,
  { title: "Nagad Calculator", desc: "Nagad cash-out charges", icon: CreditCard, href: "/tools/nagad-charge-calculator" },
  { title: "SSC GPA Calculator", desc: "SSC result to GPA", icon: GraduationCap, href: "/tools/ssc-gpa-calculator-bd" },
  { title: "Number to Word", desc: "Convert numbers to words", icon: FileText, href: "/tools/number-to-word-converter-bd" },
  { title: "Age Calculator", desc: "Find exact age", icon: Calendar, href: "/tools/age-calculator-bd" },
  { title: "Compress PDF", desc: "Reduce PDF file size", icon: FileDown, href: "/tools/compress-pdf" },
];

const PROBLEMS = [
  { problem: "Money transfer cost?", tool: "bKash / Nagad", href: "/tools/bkash-charge-calculator-bd", icon: CreditCard },
  { problem: "Exam result?", tool: "SSC / HSC GPA", href: "/tools/hsc-gpa-calculator-bd", icon: GraduationCap },
  { problem: "Plan your loan?", tool: "EMI Calculator", href: "/tools/loan-calculator-bd", icon: Landmark },
  { problem: "Calculate tax?", tool: "Income Tax", href: "/tools/bangladesh-income-tax-calculator", icon: CircleDollarSign },
  { problem: "Land measurement?", tool: "Land Converter", href: "/tools/land-area-converter-bd", icon: Ruler },
];

const CATEGORIES = [
  { 
    name: "Financial Tools", 
    icon: CircleDollarSign,
    links: [
      { name: "EMI", href: "/tools/loan-calculator-bd" },
      { name: "Tax", href: "/tools/bangladesh-income-tax-calculator" },
      { name: "bKash", href: "/tools/bkash-charge-calculator-bd" }
    ]
  },
  { 
    name: "Education Tools", 
    icon: BookOpen,
    links: [
      { name: "GPA", href: "/tools/hsc-gpa-calculator-bd" },
      { name: "SSC", href: "/tools/ssc-gpa-calculator-bd" }
    ]
  },
  { 
    name: "Utility Tools", 
    icon: Zap,
    links: [
      { name: "PDF", href: "/tools/jpg-to-pdf" }
    ]
  },
  { 
    name: "Converter Tools", 
    icon: ArrowRight,
    links: [
      { name: "Land", href: "/tools/land-area-converter-bd" }
    ]
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const searchResults = search 
    ? ALL_TOOLS_FLAT.filter(t => 
        t.title.toLowerCase().includes(search.toLowerCase()) || 
        t.desc.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen font-sans">

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
          <div className="flex flex-col items-center text-center">
            
            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                <Users className="h-3 w-3" /> Used by 10,000+ users monthly
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                <CheckCircle2 className="h-3 w-3" /> Accurate as per BD official rules
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.15] mb-6">
              বাংলাদেশের জন্য তৈরি অল-ইন-ওয়ান <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-teal-600 relative inline-block">
                টুলস প্ল্যাটফর্ম
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-10 max-w-2xl mx-auto">
              <div className="hidden md:block h-[2px] w-12 bg-gradient-to-r from-transparent to-emerald-500/50 rounded-full"></div>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 font-bold tracking-tight">
                দ্রুত, নির্ভুল এবং নিরাপদ ডিজিটাল সমাধান।
              </p>
              <div className="hidden md:block h-[2px] w-12 bg-gradient-to-l from-transparent to-emerald-500/50 rounded-full"></div>
            </div>

            {/* LIVE SEARCH BAR */}
            <div className="relative w-full max-w-2xl mx-auto z-40">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl">
                  <Search className="absolute left-5 h-6 w-6 text-zinc-400" />
                  <input 
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search tools by name..."
                    className="w-full bg-transparent py-5 pl-14 pr-6 text-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-2xl transition-all"
                  />
                </div>
              </div>

              {/* SEARCH RESULTS DROPDOWN */}
              <AnimatePresence>
                {search && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-3 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 max-h-[400px] overflow-y-auto"
                  >
                    {searchResults.length > 0 ? (
                      <div className="p-2 space-y-1">
                        {searchResults.map((tool, i) => (
                          <Link key={i} href={tool.href} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-lg bg-zinc-950 border border-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                                <tool.icon className="h-5 w-5 text-zinc-400 group-hover:text-emerald-400" />
                              </div>
                              <div className="text-left">
                                <h4 className="text-sm font-bold text-white mb-0.5">{tool.title}</h4>
                                <p className="text-xs text-zinc-500">{tool.desc}</p>
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-zinc-600 group-hover:text-white transition-colors" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 text-center text-zinc-500 text-sm font-medium">
                        No tools found for "{search}"
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Autocomplete Tags */}
              {!search && (
                <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                  <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest mr-1">Popular Tools:</span>
                  {["bKash", "GPA", "Tax", "Land"].map(tag => (
                    <button 
                      key={tag} 
                      onClick={() => setSearch(tag)} 
                      className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/5 text-xs text-zinc-300 transition-all font-medium"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ─── PROBLEM -> TOOL SECTION ─── */}
      <section className="py-16 border-t border-white/5 bg-zinc-950/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3">What do you want to do?</h2>
            <p className="text-sm text-zinc-500 font-medium">তোমার প্রয়োজন অনুযায়ী টুল খুঁজে নাও — এক ক্লিকে শুরু করো।</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {PROBLEMS.map((item, i) => (
              <Link key={i} href={item.href} 
                className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-zinc-900/80 w-[45%] md:w-auto flex-1 min-w-[160px]">
                <item.icon className="h-6 w-6 text-emerald-500/70 group-hover:text-emerald-400 transition-colors" />
                <div className="text-center">
                  <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider mb-1">{item.problem}</p>
                  <p className="text-sm font-black text-white group-hover:text-emerald-400 transition-colors">{item.tool}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MOST USED TOOLS ─── */}
      <section className="py-20 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3">Popular Tools & Calculators</h2>
              <p className="text-sm text-zinc-500 font-medium">Our most used tools. <strong className="text-emerald-400">New tools added regularly.</strong></p>
            </div>
            <Link href="/tools" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-zinc-200 transition-all group">
              সব টুল দেখুন <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_TOOLS.map((tool) => (
              <div key={tool.href} className="group flex flex-col justify-between p-6 rounded-2xl border border-white/5 hover:border-white/15 bg-zinc-950 transition-all hover:bg-zinc-900/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  {tool.badge && (
                    <span className={`text-[9px] font-black uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border ${tool.badgeStyles}`}>
                      {tool.badge}
                    </span>
                  )}
                </div>
                
                <div>
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${tool.color} border border-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-sm text-zinc-500 font-medium mb-6">{tool.desc}</p>
                </div>

                <div>
                  <Link href={tool.href} className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-emerald-500 text-white hover:text-black text-xs font-black uppercase tracking-widest transition-all mb-4">
                    Use Tool <ArrowRight className="h-3 w-3" />
                  </Link>

                  {/* Internal Linking */}
                  {tool.related && tool.related.length > 0 && (
                    <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Related:</span>
                      {tool.related.map(rel => (
                         <Link key={rel.name} href={rel.href} className="text-xs font-medium text-zinc-400 hover:text-emerald-400 underline decoration-white/10 hover:decoration-emerald-500/50 transition-all">
                           {rel.name}
                         </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="py-20 border-t border-white/5 bg-zinc-950/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-emerald-500/20 transition-all flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/5">
                    <cat.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{cat.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.links.map((link, j) => (
                    <Link key={j} href={link.href} className="text-[11px] font-bold text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/10 bg-white/5 px-3 py-1.5 rounded-md transition-colors uppercase tracking-widest">
                      {link.name} <ArrowRight className="inline-block h-3 w-3 ml-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERFORMANCE EDGE ─── */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="p-10 md:p-14 rounded-[32px] bg-emerald-950/20 border border-emerald-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="flex flex-col gap-3">
                <Zap className="h-6 w-6 text-amber-400" />
                <h3 className="text-base font-bold text-white">⚡ Works on Slow Internet</h3>
                <p className="text-sm text-zinc-400 font-medium">Highly optimized assets ensure tools load instantly, even on 3G networks in rural BD.</p>
              </div>
              <div className="flex flex-col gap-3">
                <ServerOff className="h-6 w-6 text-emerald-400" />
                <h3 className="text-base font-bold text-white">🔒 No Data Sent to Server</h3>
                <p className="text-sm text-zinc-400 font-medium">Calculate taxes, salaries, and sensitive data securely. Everything is computed right on your device.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Smartphone className="h-6 w-6 text-blue-400" />
                <h3 className="text-base font-bold text-white">📱 Mobile Optimized</h3>
                <p className="text-sm text-zinc-400 font-medium">A pristine mobile experience designed specifically for Bangladeshi smartphone users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEO BLOCK ─── */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="text-xl font-bold text-white mb-6">Popular Calculators in Bangladesh</h2>
          <div className="text-sm text-zinc-500 leading-relaxed font-medium">
            <p>
              বাংলাদেশে সবচেয়ে বেশি ব্যবহৃত টুলগুলো—bKash charge, GPA, EMI, Tax এবং Land converter—এক জায়গায় পাওয়া যায়। Ridoway Agency সম্পূর্ণ client-side টেকনোলজিতে তৈরি, তাই আপনার ডাটা নিরাপদ এবং দ্রুত কাজ করে।
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
