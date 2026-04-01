"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Search, 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  HelpCircle,
  Info,
  Calendar,
  FileText,
  MousePointer2,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function FamilyCardClient() {
  const [income, setIncome] = useState("");
  const [occupation, setOccupation] = useState("labor");
  const [result, setResult] = useState<null | {
    eligible: boolean;
    probability: "High" | "Medium" | "Low";
    nextSteps: string;
  }>(null);

  const checkEligibility = () => {
    const inc = parseInt(income) || 0;
    let data: any = { eligible: false, probability: "Low", nextSteps: "" };

    if (inc < 15000 && occupation === "labor") {
      data = { 
        eligible: true, 
        probability: "High", 
        nextSteps: "আপনার নিকটস্থ ইউনিয়ন পরিষদ বা কাউন্সিলর অফিসে যোগাযোগ করুন। আপনার এনআইডি এবং ছবি জমা দিন।" 
      };
    } else if (inc < 20000) {
      data = { 
        eligible: true, 
        probability: "Medium", 
        nextSteps: "আপনি টিসিবির ডিলার পয়েন্টে গিয়ে এনআইডি কার্ড দিয়ে আবেদনের চেষ্টা করতে পারেন।" 
      };
    } else {
      data = { 
        eligible: false, 
        probability: "Low", 
        nextSteps: "বর্তমানে আপনার আয়ের ভিত্তিতে এই কার্ডের আওতাভুক্ত হওয়ার সম্ভাবনা কম।" 
      };
    }
    setResult(data);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      {/* ── HERO & SEO TITLE ── */}
      <div className="text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-4"
        >
          <Sparkles className="h-3 w-3" />
          <span>Verified for 2026 Guidelines</span>
        </motion.div>
        
        <h1 className="text-3xl md:text-5xl font-black tracking-tightest mb-4 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          ফ্যামিলি কার্ড পাবেন কিনা ১০ সেকেন্ডে যাচাই করুন (২০২৬)
        </h1>
        <p className="text-zinc-500 font-medium">TCB স্মার্ট ফ্যামিলি কার্ডের জন্য আপনার যোগ্যতা যাচাই করুন মুহূর্তেই।</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ── TOOL SECTION (50%) ── */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-8 rounded-[32px] bg-zinc-950 border border-white/5 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[60px]" />
            
            <div className="space-y-6 relative z-10">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Monthly Income (মাাসিক আয়)</label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 font-bold">৳</span>
                  <input 
                    type="number" 
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="e.g. 15000" 
                    className="w-full bg-black border border-white/5 rounded-2xl py-4 pl-10 pr-6 text-white font-bold focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Occupation (পেশা)</label>
                <select 
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 text-white font-bold focus:outline-none focus:border-emerald-500/50 appearance-none cursor-pointer"
                >
                  <option value="labor">দিনমজুর / শ্রমিক</option>
                  <option value="farmer">কৃষক</option>
                  <option value="service-low">নিম্ন আয়ের চাকুরিজীবী</option>
                  <option value="business">ব্যবসায়ী</option>
                  <option value="other">অন্যান্য</option>
                </select>
              </div>

              <button 
                onClick={checkEligibility}
                className="w-full py-5 rounded-3xl bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-emerald-500 transition-all active:scale-95 flex items-center justify-center gap-2 group"
              >
                যোগ্যতা যাচাই করুন <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Result Box */}
          <AnimatePresence>
            {result && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`p-8 rounded-[32px] border ${result.eligible ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-red-500/20 bg-red-500/5'} relative overflow-hidden`}
              >
                <div className="flex items-start gap-6 relative z-10">
                  <div className={`p-4 rounded-2xl ${result.eligible ? 'bg-emerald-500 text-black' : 'bg-red-500 text-white'}`}>
                    {result.eligible ? <CheckCircle2 className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-black text-white">{result.eligible ? "আপনি যোগ্য হতে পারেন" : "আপনি সম্ভবত যোগ্য নন"}</h3>
                      <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-bold">Probability: {result.probability}</p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                        <span className="text-emerald-500 font-bold">পরবর্তী ধাপ:</span> {result.nextSteps}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Warning Section */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-red-500/20 flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0" />
            <div>
              <p className="text-red-500 text-xs font-black uppercase tracking-widest mb-1">সতর্কবাণী</p>
              <p className="text-zinc-400 text-xs leading-relaxed font-medium">
                ফ্যামিলি কার্ড বা টিসিবি কার্ড করে দেওয়ার নামে কেউ যদি টাকা দাবি করে, তবে সেটি প্রতারণা। কোনো আর্থিক লেনদেন করবেন না।
              </p>
            </div>
          </div>
        </div>

        {/* ── SEO CONTENT SECTION (50%) ── */}
        <div className="lg:col-span-6 space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-xl font-black text-white flex items-center gap-3">
              <Calendar className="h-5 w-5 text-emerald-500" />
              ফ্যামিলি কার্ড করার নিয়ম (Step by Step)
            </h2>
            <ul className="space-y-3 list-none p-0">
              {[
                "প্রথমে প্রয়োজনীয় কাগজপত্র সংগ্রহ করুন।",
                "আপনার স্থানীয় ইউনিয়ন পরিষদ বা কাউন্সিলর অফিসে যোগাযোগ করুন।",
                "অনলাইন পোর্টাল (tcbsheba.com) চালু থাকলে সেখানে নিবন্ধন করুন।",
                "ডকুমেন্ট যাচাই-বাছাই শেষে আপনার কার্ডটি অনুমোদিত হবে।",
                "নির্দিষ্ট ডিলার পয়েন্ট থেকে মাসিক পণ্য সংগ্রহ করুন।"
              ].map((step, i) => (
                <li key={i} className="flex gap-4 text-zinc-400 text-sm font-medium leading-relaxed bg-zinc-900/40 p-3 rounded-xl border border-white/5">
                  <span className="text-emerald-500 font-black">{i + 1}.</span> {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-black text-white flex items-center gap-3">
              <FileText className="h-5 w-5 text-emerald-500" />
              কী কী কাগজপত্র লাগবে
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                "আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি",
                "পরিবারের সকল সদস্যের জন্ম নিবন্ধন বা এনআইডি",
                "স্থায়ী ঠিকানার নাগরিকত্ব সনদপত্র",
                "সদ্য তোলা ১ কপি পাসপোর্ট সাইজ ছবি",
                "একটি সচল মোবাইল নম্বর (নগদ/বিকাশ সহ)"
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-400 text-sm font-medium bg-zinc-900/40 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6">
             <h2 className="text-xl font-black text-white flex items-center gap-3">
              <MousePointer2 className="h-5 w-5 text-emerald-500" />
              অনলাইনে আবেদন করার লিংক
            </h2>
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 group">
              <p className="text-zinc-500 text-sm font-medium mb-4">
                টিসিবি ফ্যামিলি কার্ডের অফিসিয়াল পোর্টাল থেকে আপনি আবেদন এবং স্ট্যাটাস চেক করতে পারেন:
              </p>
              <a 
                href="https://tcbsheba.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-900 border border-white/10 hover:border-emerald-500 transition-all font-bold text-white group"
              >
                <span>tcbsheba.com</span>
                <ExternalLink className="h-4 w-4 text-emerald-500 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Internal Intent Hooks */}
          <div className="pt-8 border-t border-white/5 text-zinc-700 text-[10px] font-black italic">
            Search keywords: family card apply online Bangladesh, family card check bd, tcb card korar niyom, ridoway agency tools.
          </div>

        </div>
      </div>

      {/* ── FAQ SCHEMA (Hidden) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "ফ্যামিলি কার্ড করার জন্য কী কী লাগে?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "জাতীয় পরিচয়পত্র (NID), ছবি, নাগরিকত্ব সনদ এবং একটি সচল মোবাইল নম্বর প্রয়োজন।"
                }
              },
              {
                "@type": "Question",
                "name": "টিসিবি স্মার্ট কার্ড কি অনলাইন থেকে করা যায়?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "হ্যাঁ, tcbsheba.com পোর্টালে সরকার যখন নিবন্ধন ওপেন রাখে তখন আপনি আবেদন করতে পারবেন।"
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}

function Sparkles(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
