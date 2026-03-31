import { Metadata } from "next";
import NumberToWordConverterClient from "./NumberToWordConverterClient";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, Globe, Calculator, Landmark, TrendingUp, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Number to Words Converter BD | সংখ্যা থেকে কথায় রূপান্তর | BDT Taka",
  description: "Convert numbers into Bangladeshi Taka (BDT) words instantly. Supports Lakh/Crore system, Bangla & English spellings for check writing. ১০০% নির্ভুল সংখ্যা থেকে কথায় রূপান্তর।",
  keywords: [
    "number to word converter bd", "taka to word converter", "lakh crore converter",
    "BDT amount in words", "check writing converter bangladesh", "cheque writing format bd",
    "সংখ্যা থেকে কথায় রূপান্তর", "টাকা থেকে কথায় লিখুন", "কথায় লিখুন অনলাইন",
    "number to words bangla", "number to taka words", "cheque amount in words bd"
  ],
  alternates: {
    canonical: "/tools/number-to-word-converter-bd",
  }
};

export default function NumberToWordPage() {
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
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
              April 2026 • Real-time Engine
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-32 relative text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="flex flex-col items-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 text-[10px] uppercase font-black tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Instant Word Processor
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 leading-[1.1]">
              Number to Words<br />
              <span className="text-emerald-500">Converter BD</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              যেকোনো সংখ্যাকে বাংলা ও ইংরেজি কথায় রূপান্তর করুন। ব্যাংক চেক, চুক্তিপত্র এবং আর্থিক ডকুমেন্টের জন্য সম্পূর্ণ নির্ভুল।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-zinc-900 border border-white/5">
                <Globe className="h-4 w-4 text-emerald-400" />
                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-400">BDT • USD • INR</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-zinc-900 border border-white/5">
                <FileText className="h-4 w-4 text-emerald-400" />
                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-400">Check Ready</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-zinc-900 border border-white/5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-400">Reverse Mode</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Converter */}
        <NumberToWordConverterClient />

        {/* ─── SEO CONTENT SECTIONS ─── */}

        {/* Section 1: Cheque Writing Guide */}
        <section className="pt-32 border-t border-white/5" id="cheque-writing-guide">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-8 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase font-bold tracking-widest text-zinc-500">
              <FileText className="h-3 w-3" /> Cheque Writing Guide
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tighter">
              How to Write Cheque Amount in Words <span className="text-emerald-500">(BD)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { step: "01", title: "Write in ALL CAPS", desc: "Banks in Bangladesh prefer cheque amounts written in uppercase English or clear Bangla script." },
                { step: "02", title: "Always end with 'Only'", desc: "After the amount, write 'Only' (মাত্র) to prevent any unauthorized additions." },
                { step: "03", title: "Use Lakh/Crore System", desc: "Bangladesh follows the Indian number system: Thousand → Lakh → Crore. Never use Million/Billion on local cheques." },
                { step: "04", title: "Include Poisha/Paisa", desc: "For decimal amounts, always mention the fractional part as Poisha (e.g., 'Fifty Poisha')." },
              ].map((item) => (
                <div key={item.step} className="p-8 rounded-3xl bg-zinc-950 border border-white/5 group hover:border-emerald-500/20 transition-all">
                  <span className="text-emerald-500 font-black text-3xl opacity-30 block mb-4">{item.step}</span>
                  <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-zinc-950 border border-emerald-500/10 mb-12">
              <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Example: ৳ 2,50,000.50
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-zinc-300 font-medium">
                  <span className="text-zinc-600 mr-2">English:</span> TWO LAKH FIFTY THOUSAND TAKA AND FIFTY POISHA ONLY
                </p>
                <p className="text-sm text-zinc-300 font-medium">
                  <span className="text-zinc-600 mr-2">বাংলা:</span> দুই লাখ পঞ্চাশ হাজার টাকা এবং পঞ্চাশ পয়সা মাত্র
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Number System Explainer */}
        <section className="pt-24" id="number-system-bd">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-black text-white mb-8 tracking-tighter">
                Bangladeshi Number System (লাখ-কোটি পদ্ধতি)
              </h2>
              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                <p>
                  বাংলাদেশে সংখ্যা হাজার, লাখ ও কোটি পদ্ধতিতে গণনা করা হয়। এটি আন্তর্জাতিক Million/Billion পদ্ধতি থেকে সম্পূর্ণ আলাদা।
                </p>
                <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-950">
                  <table className="w-full text-left text-[10px] uppercase tracking-wider font-bold">
                    <thead>
                      <tr className="border-b border-white/5 text-zinc-600">
                        <th className="p-4">BD System</th>
                        <th className="p-4 text-white">Value</th>
                        <th className="p-4 text-right">Int&apos;l</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      {[
                        { bd: "হাজার", val: "1,000", intl: "Thousand" },
                        { bd: "লাখ", val: "1,00,000", intl: "100K" },
                        { bd: "কোটি", val: "1,00,00,000", intl: "10 Million" },
                      ].map((r, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition">
                          <td className="p-4 text-emerald-400">{r.bd}</td>
                          <td className="p-4 text-white font-mono">{r.val}</td>
                          <td className="p-4 text-right text-zinc-600">{r.intl}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className="inline-flex items-center gap-2 mb-8 text-[9px] uppercase font-black tracking-widest text-zinc-500">
                <HelpCircle className="h-3 w-3" /> FAQ
              </div>
              <div className="space-y-3">
                {[
                  { q: "এই টুল কি ১০০% নির্ভুল?", a: "হ্যাঁ, এটি গাণিতিকভাবে সম্পূর্ণ নির্ভুল এবং বাংলাদেশি লাখ-কোটি পদ্ধতি অনুসরণ করে।" },
                  { q: "সর্বাধিক কত ডিজিট সাপোর্ট করে?", a: "এই টুলটি সর্বাধিক ১৫ ডিজিট (কোটি কোটি পর্যন্ত) এবং ২ দশমিক স্থান পর্যন্ত সাপোর্ট করে।" },
                  { q: "চেক লেখার জন্য কোন ফরম্যাট ব্যবহার করব?", a: "ব্যাংক চেকের জন্য English UPPERCASE ফরম্যাট ব্যবহার করুন এবং শেষে 'Only' যুক্ত করুন।" },
                  { q: "Reverse Mode কি?", a: "এটি একটি বিশেষ ফিচার যেখানে আপনি ইংরেজি কথায় লিখলে (e.g. 'One Lakh') সেটি সংখ্যায় রূপান্তরিত হয়।" },
                ].map((faq, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all group">
                    <h4 className="text-[11px] font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{faq.q}</h4>
                    <p className="text-[10px] text-zinc-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Common Examples Table */}
        <section className="pt-24 max-w-4xl mx-auto" id="bdt-examples">
          <h2 className="text-2xl font-black text-white mb-8 tracking-tighter">Common BDT Amount Examples</h2>
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-950">
            <table className="w-full text-left text-[10px] uppercase tracking-wider font-bold">
              <thead>
                <tr className="border-b border-white/5 text-zinc-600">
                  <th className="p-5 font-black">Amount (৳)</th>
                  <th className="p-5 font-black text-white">English</th>
                  <th className="p-5 font-black text-right">বাংলা</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                {[
                  { d: "1,000", en: "One Thousand Taka Only", bn: "এক হাজার টাকা মাত্র" },
                  { d: "50,000", en: "Fifty Thousand Taka Only", bn: "পঞ্চাশ হাজার টাকা মাত্র" },
                  { d: "1,00,000", en: "One Lakh Taka Only", bn: "এক লাখ টাকা মাত্র" },
                  { d: "25,00,000", en: "Twenty Five Lakh Taka Only", bn: "পঁচিশ লাখ টাকা মাত্র" },
                  { d: "1,00,00,000", en: "One Crore Taka Only", bn: "এক কোটি টাকা মাত্র" },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition">
                    <td className="p-5 font-mono text-zinc-500">৳ {item.d}</td>
                    <td className="p-5 text-white">{item.en}</td>
                    <td className="p-5 text-right text-emerald-400/70">{item.bn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Linking CTA */}
        <div className="mt-40 p-12 rounded-[40px] bg-zinc-950 border border-white/5 text-center flex flex-col items-center relative overflow-hidden group max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter relative z-10 italic underline decoration-emerald-500 decoration-4 underline-offset-8">More Financial Tools</h3>
          <p className="text-xs text-zinc-500 max-w-md mx-auto mb-10 leading-relaxed relative z-10 font-bold uppercase tracking-widest">
            Calculate your <strong className="text-zinc-300">Income Tax</strong>, estimate <strong className="text-zinc-300">Loan EMI</strong>, or check <strong className="text-zinc-300">bKash charges</strong> instantly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
            <Link href="/tools/bangladesh-income-tax-calculator" className="px-6 py-3 rounded-full bg-white text-black font-black uppercase tracking-widest text-[9px] hover:bg-zinc-200 transition-colors flex items-center gap-2">
              <Calculator className="h-3.5 w-3.5" /> Tax Calculator
            </Link>
            <Link href="/tools/loan-calculator-bd" className="px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-colors flex items-center gap-2">
              <Landmark className="h-3.5 w-3.5" /> EMI Calculator
            </Link>
            <Link href="/tools/bkash-charge-calculator-bd" className="px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-colors flex items-center gap-2">
              <TrendingUp className="h-3.5 w-3.5" /> bKash Calc
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30">
          <div className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Ridoway Agency • Num2Word Engine
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-800">100% Client-Side • No Data Stored</span>
        </div>

        {/* JSON-LD: WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "BDT Number to Word Converter",
              "url": "https://ridoway.agency/tools/number-to-word-converter-bd",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
              "description": "Convert numbers into Bangladeshi Taka (BDT) words instantly for check writing and financial documentation.",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BDT" }
            })
          }}
        />
        {/* JSON-LD: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How to write cheque amount in words in Bangladesh?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Write the amount using the Lakh/Crore number system in uppercase English or clear Bangla. Always end with 'Only' (মাত্র) to prevent unauthorized additions. Example: ৳2,50,000 → TWO LAKH FIFTY THOUSAND TAKA ONLY." }
                },
                {
                  "@type": "Question",
                  "name": "Does this tool support decimals for Poisha?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. Use a dot (.) for decimals and the tool converts them into Poisha automatically (e.g., .50 → Fifty Poisha)." }
                },
                {
                  "@type": "Question",
                  "name": "Can I convert words back to numbers?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes! Use the Reverse Mode feature. Type English words like 'One Lakh Twenty Thousand' and the tool instantly outputs the numeric value 1,20,000." }
                },
                {
                  "@type": "Question",
                  "name": "What currencies are supported?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The tool supports BDT (Bangladeshi Taka), USD (US Dollar), and INR (Indian Rupee). Switch currencies with one click." }
                }
              ]
            })
          }}
        />
        {/* JSON-LD: HowTo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Write Cheque Amount in Words (Bangladesh)",
              "description": "Step-by-step guide on writing cheque amounts in words using the Bangladeshi Lakh/Crore number system.",
              "step": [
                { "@type": "HowToStep", "text": "Write in ALL CAPS for clarity and bank acceptance." },
                { "@type": "HowToStep", "text": "Always end with 'Only' (মাত্র) to prevent unauthorized additions." },
                { "@type": "HowToStep", "text": "Use Lakh/Crore system (not Million/Billion) for local cheques." },
                { "@type": "HowToStep", "text": "Include Poisha for decimal amounts (e.g., Fifty Poisha)." }
              ]
            })
          }}
        />
      </div>
    </div>
  );
}
