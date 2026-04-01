"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  Zap, 
  ChevronRight,
  CreditCard,
  GraduationCap,
  CircleDollarSign,
  Contact2,
  FileText,
  Calendar,
  FileDown,
  Ruler,
  Landmark,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeSearch() {
  const [query, setQuery] = useState("");

  const tools = [
    { title: "bKash Calculator", desc: "Calculate cash-out charges", icon: "CreditCard", href: "/tools/bkash-charge-calculator-bd" },
    { title: "Nagad Calculator", desc: "Nagad cash-out charges", icon: "CreditCard", href: "/tools/nagad-charge-calculator" },
    { title: "SSC GPA Calculator", desc: "SSC result to GPA", icon: "GraduationCap", href: "/tools/ssc-gpa-calculator-bd" },
    { title: "HSC GPA Calculator", desc: "HSC result to GPA", icon: "GraduationCap", href: "/tools/hsc-gpa-calculator-bd" },
    { title: "Income Tax Calculator", desc: "FY 2025-26 Tax Assessment", icon: "CircleDollarSign", href: "/tools/bangladesh-income-tax-calculator" },
    { title: "Family Card Checker", desc: "TCB Smart Card Eligibility", icon: "Contact2", href: "/tools/family-card-eligibility-bd" },
    { title: "Number to Word", desc: "Convert numbers to words", icon: "FileText", href: "/tools/number-to-word-converter-bd" },
    { title: "Age Calculator", desc: "Find exact age", icon: "Calendar", href: "/tools/age-calculator-bd" },
    { title: "Compress PDF", desc: "Reduce PDF file size", icon: "FileDown", href: "/tools/compress-pdf" },
    { title: "Land Converter", desc: "Katha, Bigha, Decimal to Sqft", icon: "Ruler", href: "/tools/land-area-converter-bd" },
    { title: "Electricity Calculator", desc: "Calculate monthly electric bill", icon: "Zap", href: "/tools/electricity-bill-calculator-bd" },
    { title: "EMI Calculator", desc: "Calculate monthly loan EMI", icon: "Landmark", href: "/tools/loan-calculator-bd" },
  ];

  const filteredTools = useMemo(() => {
    if (!query.trim()) return [];
    return tools.filter(t => 
      t.title.toLowerCase().includes(query.toLowerCase()) || 
      t.desc.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
  }, [query]);

  const getIcon = (name: string) => {
    const icons: any = {
      CreditCard: <CreditCard className="h-4 w-4" />,
      GraduationCap: <GraduationCap className="h-4 w-4" />,
      CircleDollarSign: <CircleDollarSign className="h-4 w-4" />,
      Contact2: <Contact2 className="h-4 w-4" />,
      FileText: <FileText className="h-4 w-4" />,
      Calendar: <Calendar className="h-4 w-4" />,
      FileDown: <FileDown className="h-4 w-4" />,
      Ruler: <Ruler className="h-4 w-4" />,
      Landmark: <Landmark className="h-4 w-4" />
    };
    return icons[name] || <Zap className="h-4 w-4" />;
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto z-50">
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 rounded-2xl blur opacity-25 group-focus-within:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex items-center bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 transition-all duration-300 focus-within:border-emerald-500/50 shadow-2xl">
          <Search className="h-5 w-5 text-emerald-500/50 mr-4 group-focus-within:text-emerald-500 transition-colors" />
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a tool..." 
            className="flex-1 bg-transparent border-none text-white text-lg font-medium placeholder:text-zinc-600 focus:outline-none"
          />
          {query ? (
            <button 
              onClick={() => setQuery("")}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Zap className="h-4 w-4 fill-current" />
            </button>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
              <Sparkles className="h-3 w-3 text-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">AI Search</span>
            </div>
          )}
        </div>

        {/* Search Results */}
        <AnimatePresence>
          {filteredTools.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="absolute top-full left-0 right-0 mt-4 p-3 rounded-2xl bg-zinc-950/90 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-white/5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Suggested Tools</span>
                <span className="text-[10px] font-bold text-emerald-500/50">{filteredTools.length} found</span>
              </div>
              
              <div className="space-y-1">
                {filteredTools.map((tool) => (
                  <Link 
                    key={tool.href} 
                    href={tool.href}
                    className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-emerald-500/5 hover:border-emerald-500/20 border border-transparent transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 group-hover:text-emerald-500 group-hover:scale-110 transition-all">
                      {getIcon(tool.icon)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{tool.title}</p>
                      <p className="text-[10px] text-zinc-500 font-medium group-hover:text-zinc-400 transition-colors">{tool.desc}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                      <ChevronRight className="h-4 w-4 text-emerald-500" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
