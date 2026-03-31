import { Metadata } from "next";
import LoanCalculatorClient from "./LoanCalculatorClient";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, HelpCircle, Table as TableIcon, Info, Calculator, FileText, Landmark, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Loan EMI Calculator Bangladesh 2026 | ব্যাংক লোন ক্যালকুলেটর",
  description: "Calculate exact EMI, total interest, and repayment schedules for bank loans in Bangladesh (2026). accurate bank loan payment calculator with reducing balance method.",
  keywords: ["loan calculator bd", "EMI calculator Bangladesh", "ব্যাংক লোন ক্যালকুলেটর", "personal loan interest", "bank loan payment calculator", "repayment schedule calculator", "EBL emi calculator", "City bank loan calculator"],
  alternates: {
    canonical: "/tools/loan-calculator-bd",
  }
};

export default function LoanCalculatorPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 lg:py-24 selection:bg-white selection:text-black font-sans">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Navigation Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-20 border-b border-white/5 pb-10">
          <Link href="/tools" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">
            <div className="p-2 rounded-lg bg-zinc-950 border border-white/5 group-hover:border-white/20 transition-all">
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to Registry
          </Link>
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse text-xs" />
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
              April 2026 • Verified BD Standard
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-32 relative text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="flex flex-col items-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Live EMI Terminal</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 leading-[1.1]">
               Loan EMI Calculator <br/>
               <span className="text-emerald-500 font-black">Bangladesh</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              এই লোন ক্যালকুলেটরের মাধ্যমে আপনি যেকোনো ব্যাংক বা আর্থিক প্রতিষ্ঠানের ঋণের মাসিক কিস্তি (EMI) এবং মোট সুদের পরিমাণ নিখুঁতভাবে হিসাব করতে পারবেন।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-900 border border-white/5">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Verified Calculations</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-900 border border-white/5">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Reducing Balance Model</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Calculator Tool */}
        <div className="relative mb-48 space-y-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-2xl font-bold text-white tracking-tighter flex items-center gap-3">
              <Calculator className="h-5 w-5 text-emerald-500" />
              ব্যক্তিগত ও ব্যবসায়িক লোন ক্যালকুলেটর
            </h2>
            <p className="text-sm text-zinc-500 max-w-xl italic">
               নিচে আপনার ঋণের পরিমাণ, সয়মকাল এবং বাৎসরিক সুদের হার ইনপুট দিন।
            </p>
          </div>
          <LoanCalculatorClient />
        </div>

        {/* SEO Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-24 border-t border-white/5">
          {/* Detailed Info */}
          <section className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase font-bold tracking-widest text-zinc-500">
                 <FileText className="h-3 w-3" /> User Guide
              </div>
              <h2 className="text-3xl font-black text-white mb-8 tracking-tighter italic">What is EMI? (ইএমআই কি?)</h2>
              <div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
                <p>
                  EMI বা Equated Monthly Installment হলো প্রতি মাসে ব্যাংকে প্রদেয় একটি নির্দিষ্ট সমপরিমাণ অর্থ, যার মধ্যে ঋণের আসল টাকা এবং সুদ উভয়ই অন্তর্ভুক্ত থাকে। বাংলাদেশে সাধারণত 'Reducing Balance Method' এ সুদের হিসাব করা হয়।
                </p>
                <div className="p-8 rounded-3xl bg-zinc-950 border border-white/5 space-y-4">
                   <h4 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                     <span className="h-1 w-1 rounded-full bg-emerald-500" />
                     Reducing Balance Method
                   </h4>
                   <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                     এই পদ্ধতিতে প্রতিটি কিস্তি পরিশোধের পর অবশিষ্ট আসল টাকার ওপর পরবর্তী মাসের সুদ হিসাব করা হয়। এর ফলে সময়ের সাথে সাথে সুদের পরিমাণ কমতে থাকে।
                   </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">কিভাবে কিস্তি হিসাব করবেন?</h3>
              <ul className="space-y-4">
                {[
                  "Loan Amount: আপনি যে পরিমাণ টাকা ব্যাংক থেকে লোন নিয়েছেন।",
                  "Number of Months: লোন পরিশোধের জন্য মোট কত মাস সময় নিচ্ছেন।",
                  "Interest Rate: বাৎসরিক সুদের হার (Annual Interest Rate)।"
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm text-zinc-400">
                    <span className="text-emerald-500 font-black">0{i+1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase font-bold tracking-widest text-zinc-500">
                 <Info className="h-3 w-3" /> Frequency Asked Questions
              </div>
              <h2 className="text-3xl font-black text-white mb-10 tracking-tighter">সাধারণ জিজ্ঞাসিত প্রশ্নাবলী</h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "পার্সোনাল লোনের সুদের হার সাধারণত কত হয়?",
                    a: "বর্তমানে বাংলাদেশের বাণিজ্যিক ব্যাংকগুলোতে সুদের হার স্মার্ট (SMART) রেট প্লাস মার্জিন অনুযায়ী নির্ধারিত হয়, যা সাধারণত ৯% থেকে ১৩% এর মধ্যে থাকে।"
                  },
                  {
                    q: "রিডিউসিং ব্যালেন্স ও ফ্ল্যাট রেটের মধ্যে পার্থক্য কি?",
                    a: "ফ্ল্যাট রেটে পুরো মেয়াদে সমপরিমাণ সুদ দিতে হয়, যেখানে রিডিউসিং ব্যালেন্স পদ্ধতিতে আসল টাকা কমার সাথে সাথে সুদের পরিমাণও কমতে থাকে।"
                  },
                  {
                    q: "লোন ক্যালকুলেটর কি ১০০% নির্ভুল?",
                    a: "হ্যাঁ, এটি গাণিতিকভাবে নির্ভুল। তবে ব্যাংকভেদে প্রসেসিং ফি বা অন্যান্য চার্জের কারণে ইএমআই সামান্য কম-বেশি হতে পারে।"
                  }
                ].map((faq, i) => (
                  <div key={i} className="group p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all">
                    <h4 className="text-sm font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{faq.q}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Refernce Table */}
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-950">
              <div className="p-4 bg-zinc-900/50 border-b border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 italic">Sample Repayments (12% Rate)</span>
                <TableIcon className="h-3 w-3 text-zinc-700" />
              </div>
              <table className="w-full text-left border-collapse text-[10px] uppercase tracking-wider font-bold">
                <thead>
                  <tr className="border-b border-white/5 text-zinc-600">
                    <th className="p-5 font-black">Principal</th>
                    <th className="p-5 font-black text-white">Monthly EMI</th>
                    <th className="p-5 font-black text-right">Total Int.</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  {[200000, 500000, 1000000].map((amt) => {
                    const r = (12 / 12) / 100;
                    const emi = (amt * r * Math.pow(1 + r, 12)) / (Math.pow(1 + r, 12) - 1);
                    return (
                      <tr key={amt} className="border-b border-white/5 hover:bg-white/[0.02] transition">
                        <td className="p-5">৳ {amt.toLocaleString()}</td>
                        <td className="p-5 text-white">৳ {emi.toFixed(0)}</td>
                        <td className="p-5 text-right font-mono text-zinc-700">৳ {(emi * 12 - amt).toFixed(0)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Internal Navigation */}
        <div className="mt-40 p-12 rounded-[40px] bg-zinc-950 border border-white/5 text-center flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter relative z-10 italic underline decoration-emerald-500 decoration-4 underline-offset-8">Keep Calculating. Keep Growing.</h3>
          <p className="text-xs text-zinc-500 max-w-md mx-auto mb-10 leading-relaxed relative z-10 font-bold uppercase tracking-widest">
            Check your <strong className="text-zinc-300">Income Tax</strong> for FY 2025-26 or calculate <strong className="text-zinc-300">bKash charges</strong> instantly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Link 
              href="/tools/bangladesh-income-tax-calculator" 
              className="px-6 py-3 rounded-full bg-white text-black font-black uppercase tracking-widest text-[9px] hover:bg-zinc-200 transition-colors"
            >
              Tax Terminal
            </Link>
            <Link 
              href="/tools/bkash-charge-calculator-bd" 
              className="px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-colors"
            >
              bKash Calc
            </Link>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30">
          <div className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Ridoway Agency Ops • Financial Intelligence Tool
          </div>
          <div className="flex items-center gap-8">
             <span className="text-[9px] font-black uppercase tracking-widest text-zinc-800">100% Client-Side Processing</span>
          </div>
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Loan EMI Calculator Bangladesh 2026",
              "url": "https://ridoway.agency/tools/loan-calculator-bd",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
              "description": "Calculate exact monthly EMI and total interest for bank loans in Bangladesh using reducing balance method.",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BDT" }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "কিভাবে কিস্তি হিসাব করবেন?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "আপনার আসল ঋণের পরিমাণ, মেয়াদী মাস এবং সুদের হার ইনপুট দিলে এটি অটোমেটিক মাসিক কিস্তি (EMI) হিসাব করে দিবে।"
                  }
                },
                {
                  "@type": "Question",
                  "name": "রিডিউসিং ব্যালেন্স কি?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "এটি একটি পদ্ধতি যেখানে প্রতিটি কিস্তি পরিশোধের পর কিস্তির টাকার ওপর নয় বরং অবশিষ্ট আসল টাকার ওপর সুদ হিসাব করা হয়।"
                  }
                }
              ]
            })
          }}
        />
      </div>
    </div>
  );
}
