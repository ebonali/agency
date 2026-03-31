"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calculator, CreditCard, Search, ArrowRight, ShieldCheck, Clock, Zap,
  GraduationCap, BookOpen, CircleDollarSign, Landmark, FileText, Calendar,
  FileImage, FileDown, Ruler, Filter,
} from "lucide-react";
import Link from "next/link";

type Category = "all" | "finance" | "education" | "pdf" | "converter";

interface Tool {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge: string;
  category: Category;
}

const TOOLS: Tool[] = [
  {
    title: "bKash Calculator",
    description: "Calculate bKash cash-out, send money, and transaction charges instantly.",
    icon: Calculator, href: "/tools/bkash-charge-calculator-bd", badge: "Popular", category: "finance",
  },
  {
    title: "Image to PDF",
    description: "Convert JPG, PNG images to PDF instantly. Auto A4 resize, no upload, 100% private.",
    icon: FileImage, href: "/tools/jpg-to-pdf", badge: "New", category: "pdf",
  },
  {
    title: "Compress PDF",
    description: "Reduce PDF file size for online forms & email. No server upload required.",
    icon: FileDown, href: "/tools/compress-pdf", badge: "New", category: "pdf",
  },
  {
    title: "Nagad Calculator",
    description: "Compare and calculate Nagad charges for app and USSD transactions.",
    icon: CreditCard, href: "/tools/nagad-charge-calculator", badge: "Updated", category: "finance",
  },
  {
    title: "Income Tax Calculator",
    description: "Calculate your BD income tax with FY 2025-26 slabs and investment rebates.",
    icon: CircleDollarSign, href: "/tools/bangladesh-income-tax-calculator", badge: "Updated", category: "finance",
  },
  {
    title: "HSC GPA Calculator",
    description: "Convert marks to HSC GPA with interactive 4th subject rule algorithms.",
    icon: BookOpen, href: "/tools/hsc-gpa-calculator-bd", badge: "Popular", category: "education",
  },
  {
    title: "SSC GPA Calculator",
    description: "Calculate SSC total GPA out of 5.0 with optional 4th subject rule.",
    icon: GraduationCap, href: "/tools/ssc-gpa-calculator-bd", badge: "Popular", category: "education",
  },
  {
    title: "Loan / EMI Calculator",
    description: "Calculate monthly EMI and total interest for loans in Bangladesh.",
    icon: Landmark, href: "/tools/loan-calculator-bd", badge: "New", category: "finance",
  },
  {
    title: "Number to Word",
    description: "Convert BDT amounts and digits into English and Bangla words.",
    icon: FileText, href: "/tools/number-to-word-converter-bd", badge: "New", category: "converter",
  },
  {
    title: "Land Area Converter",
    description: "Convert Katha, Bigha, Decimal, Acre & 27+ BD land units instantly.",
    icon: Ruler, href: "/tools/land-area-converter-bd", badge: "New", category: "converter",
  },
  {
    title: "Age Calculator",
    description: "Calculate your exact age in years, months, and days with birthday countdown.",
    icon: Calendar, href: "/tools/age-calculator-bd", badge: "New", category: "converter",
  },
];

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "All Tools" },
  { key: "finance", label: "Finance" },
  { key: "education", label: "Education" },
  { key: "pdf", label: "PDF" },
  { key: "converter", label: "Converters" },
];

const BADGE_STYLES: Record<string, string> = {
  New: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  Popular: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  Updated: "bg-amber-500/10 border-amber-500/20 text-amber-400",
};

export default function ToolsHub() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("all");

  const filtered = useMemo(() => {
    return TOOLS.filter(t => {
      const matchCat = category === "all" || t.category === category;
      const matchSearch = search === "" ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">

        {/* Hero */}
        <div className="mb-20 relative pt-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 font-black text-[10px] uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {TOOLS.length} Tools Live
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 leading-[1.1]">
              Tools Registry
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-zinc-500 max-w-xl mx-auto font-medium leading-relaxed">
              বাংলাদেশের জন্য তৈরি সকল টুলস — ক্যালকুলেটর, কনভার্টার, PDF টুলস। সব ফ্রি, সব প্রাইভেট।
            </motion.p>
          </div>
        </div>

        {/* Search + Filters */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mb-12 space-y-4">
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools... (bKash, GPA, PDF, Land...)"
              className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-11 pr-6 focus:outline-none focus:border-zinc-500 transition-colors text-sm text-white placeholder:text-zinc-600 font-medium" />
          </div>
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Filter className="h-3.5 w-3.5 text-zinc-700 mr-1" />
            {CATEGORIES.map(cat => (
              <button key={cat.key} onClick={() => setCategory(cat.key)}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-all ${category === cat.key
                  ? "bg-white text-black border-white"
                  : "border-white/5 text-zinc-600 hover:border-white/20 hover:text-zinc-400"}`}>
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <div className="mb-6 text-center">
          <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">
            {filtered.length} {filtered.length === 1 ? "tool" : "tools"} found
          </span>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool, index) => (
            <motion.div key={tool.title}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className="group relative">
              <Link href={tool.href} className="block h-full">
                <div className="bg-zinc-950 h-full rounded-2xl p-7 border border-white/5 transition-all hover:border-white/15 hover:bg-zinc-900/50 flex flex-col items-start">
                  <div className="flex justify-between w-full items-start mb-5">
                    <div className="h-11 w-11 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <tool.icon className="h-5 w-5 text-zinc-400 group-hover:text-black transition-colors" />
                    </div>
                    <span className={`text-[8px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border ${BADGE_STYLES[tool.badge] ?? "bg-zinc-900 border-white/10 text-zinc-500"}`}>
                      {tool.badge}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold mb-2 text-white">{tool.title}</h3>
                  <p className="text-zinc-600 leading-relaxed flex-1 text-xs font-medium">{tool.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-zinc-500 font-bold text-[10px] uppercase tracking-widest group-hover:text-emerald-400 transition-colors">
                    Open Tool
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-zinc-600 font-medium text-sm">No tools match your search.</p>
            <button onClick={() => { setSearch(""); setCategory("all"); }}
              className="mt-4 text-xs text-zinc-500 hover:text-white underline transition-colors font-bold">
              Clear filters
            </button>
          </div>
        )}

        {/* Trust */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: ShieldCheck, title: "Privacy First", desc: "All calculations processed locally. Your data never leaves your device." },
            { icon: Clock, title: "Always Updated", desc: "Rates and policies updated regularly to match current BD standards." },
            { icon: Zap, title: "Blazing Fast", desc: "Built on Next.js for near-instant load times and smooth interactions." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/5 bg-zinc-950">
              <item.icon className="h-5 w-5 text-zinc-600" />
              <h4 className="text-xs font-bold text-white">{item.title}</h4>
              <p className="text-[10px] text-zinc-600 font-medium max-w-[200px]">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
