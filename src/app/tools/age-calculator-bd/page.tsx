import { Metadata } from "next";
import AgeCalculatorClient from "./AgeCalculatorClient";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, History, Clock, FileText, Calendar, HelpCircle, Landmark, Calculator, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Age Calculator Online | বয়স ক্যালকুলেটর | Exact Age in Years, Days, Seconds",
  description: "Calculate your exact age in years, months, days, hours, minutes and seconds. Birthday countdown, life milestones, age comparison, and life progress bar. ১০০% নির্ভুল বয়স নির্ণয় করুন।",
  keywords: [
    "age calculator bd", "exact age calculator", "birthday calculator", "days lived calculator",
    "how old am i in days", "age difference calculator", "বয়স ক্যালকুলেটর",
    "বয়স বের করার সহজ উপায়", "age in seconds", "life progress calculator",
    "age calculator online", "date of birth calculator", "how many days old am i"
  ],
  alternates: { canonical: "/tools/age-calculator-bd" }
};

export default function AgeCalculatorPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 lg:py-24 selection:bg-white selection:text-black font-sans">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Nav */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-20 border-b border-white/5 pb-10">
          <Link href="/tools" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">
            <div className="p-2 rounded-lg bg-zinc-950 border border-white/5 group-hover:border-white/20 transition-all"><ArrowLeft className="h-4 w-4" /></div>
            Back to Registry
          </Link>
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">Precision Chronology • v2.0</div>
          </div>
        </div>

        {/* Hero */}
        <div className="mb-32 relative text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="flex flex-col items-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 text-[10px] uppercase font-black tracking-widest">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" /></span>
              Digital Chronology Engine
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 leading-[1.1]">
              Age Calculator<br /><span className="text-emerald-500">Years, Days &amp; Seconds</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              জন্ম তারিখ থেকে নির্ভুল বয়স বের করুন। বছর, মাস, দিন, ঘন্টা, মিনিট এবং সেকেন্ডের হিসাব সহ জীবনের মাইলস্টোন ট্র্যাক করুন।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mx-auto">
              {[
                { icon: Calendar, text: "Milestones" },
                { icon: Clock, text: "Time Units" },
                { icon: History, text: "Life Progress" },
              ].map((f, i) => (
                <div key={i} className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-zinc-900 border border-white/5">
                  <f.icon className="h-4 w-4 text-emerald-400" />
                  <span className="text-[9px] uppercase font-black tracking-widest text-zinc-400">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AgeCalculatorClient />

        {/* SEO Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-32 border-t border-white/5">
          <section>
            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter">How Old Am I in Days?</h2>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>আপনি কি কখনো ভেবেছেন আপনি পৃথিবীতে মোট কত দিন, কত ঘন্টা বা কত সেকেন্ড অতিবাহিত করেছেন? আমাদের এই টুলটি ব্যবহার করে আপনি নিমিষেই জানতে পারবেন।</p>
              <p>Average life span of a Bangladeshi person is approximately 72.3 years. Our <strong className="text-white">Life Progress Bar</strong> shows how much of an average lifespan you have completed — a powerful visual motivator.</p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                { q: "Days Lived", a: "Total number of days from birth to selected date, accounting for leap years." },
                { q: "Seconds Alive", a: "Approximate total seconds calculated from total days × 86,400." },
                { q: "Life Progress", a: "Visual percentage of average BD lifespan (72.3 years) completed." },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-zinc-950 border border-white/5">
                  <h4 className="text-white font-black text-[10px] uppercase tracking-widest mb-1 italic underline decoration-emerald-500/50">{item.q}</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="inline-flex items-center gap-2 mb-8 text-[9px] uppercase font-black tracking-widest text-zinc-500"><HelpCircle className="h-3 w-3" /> FAQ</div>
            <div className="space-y-3">
              {[
                { q: "How is exact age calculated?", a: "The tool subtracts the birth date from the target date using calendar month lengths and leap year rules for precision." },
                { q: "What is the Age Comparison feature?", a: "Enter two birth dates side-by-side to see the exact age difference in years, months, and days." },
                { q: "Does it support Bangladesh timezone?", a: "Yes! Toggle 'BD Time' to calculate based on Bangladesh Standard Time (UTC+6)." },
                { q: "How accurate are the seconds?", a: "Seconds are approximated from total days × 86,400. For exact real-time seconds, use a stopwatch from birth." },
              ].map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all group">
                  <h4 className="text-[11px] font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{faq.q}</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Internal Linking */}
        <div className="mt-40 p-12 rounded-[40px] bg-zinc-950 border border-white/5 text-center flex flex-col items-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter relative z-10 italic underline decoration-emerald-500 decoration-4 underline-offset-8">More Ridoway Tools</h3>
          <p className="text-xs text-zinc-500 max-w-md mx-auto mb-10 leading-relaxed relative z-10 font-bold uppercase tracking-widest">
            Calculate <strong className="text-zinc-300">Loan EMI</strong>, check <strong className="text-zinc-300">Income Tax</strong>, or convert <strong className="text-zinc-300">Numbers to Words</strong>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
            <Link href="/tools/loan-calculator-bd" className="px-6 py-3 rounded-full bg-white text-black font-black uppercase tracking-widest text-[9px] hover:bg-zinc-200 transition-colors flex items-center gap-2"><Landmark className="h-3.5 w-3.5" /> EMI Calc</Link>
            <Link href="/tools/bangladesh-income-tax-calculator" className="px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-colors flex items-center gap-2"><Calculator className="h-3.5 w-3.5" /> Tax Calc</Link>
            <Link href="/tools/number-to-word-converter-bd" className="px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-colors flex items-center gap-2"><FileText className="h-3.5 w-3.5" /> Word Converter</Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30">
          <div className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} Ridoway Agency • Chronology Engine</div>
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-800">100% Client-Side • No Data Stored</span>
        </div>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "WebApplication",
          "name": "Exact Age Calculator BD", "url": "https://ridoway.agency/tools/age-calculator-bd",
          "applicationCategory": "UtilityApplication", "operatingSystem": "All",
          "description": "Calculate exact age in years, months, days, hours, minutes and seconds with life milestones and birthday countdown.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BDT" }
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How to calculate exact age in days?", "acceptedAnswer": { "@type": "Answer", "text": "Enter your date of birth and the tool calculates total days lived, accounting for leap years and varying month lengths." } },
            { "@type": "Question", "name": "Can I compare ages of two people?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Use the Compare mode to enter two birth dates and see the exact age difference in years, months, and days." } },
            { "@type": "Question", "name": "How many seconds have I been alive?", "acceptedAnswer": { "@type": "Answer", "text": "The tool calculates approximate seconds by multiplying total days lived by 86,400 (seconds per day)." } }
          ]
        }) }} />
      </div>
    </div>
  );
}
