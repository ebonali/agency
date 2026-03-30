import { Metadata } from "next";
import BkashCalculatorClient from "./BkashCalculatorClient";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, HelpCircle, Table as TableIcon, Info, LayoutDashboard } from "lucide-react";

export const metadata: Metadata = {
  title: "bKash Charge Calculator 2026 – Cash Out Fee BD officially",
  description: "Calculate exact bKash cash out charges in Bangladesh with updated 2026 rates. Accurate, fast, and easy to use calculator.",
  keywords: ["bkash charge calculator", "bkash fee calculator", "bkash cashout charge 2026", "bKash cash out rate"],
  alternates: {
    canonical: "/tools/bkash-charge-calculator-bd",
  }
};

export default function BkashChargeCalculatorPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 lg:py-24 selection:bg-white selection:text-black">
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
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse text-xs" />
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
              March 2026 • Verified
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-[1]">
             bKash Charge Calculator 2026 <span className="text-zinc-700">(Bangladesh)</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
                এই অনলাইন টুলটির মাধ্যমে আপনি দ্রুত এবং নির্ভুলভাবে বিকাশের ক্যাশ আউট চার্জ হিসাব করতে পারবেন। App এবং USSD-এর সর্বশেষ অফিসিয়াল রেট অনুযায়ী হিসাব আপডেট করা হয়েছে।
              </p>
              <div className="p-6 rounded-2xl bg-zinc-950/50 border border-white/5 flex flex-col gap-3 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="h-5 w-5 flex-shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Independent Calculator</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed italic">
                  bKash charge calculator (BD) follows publicly available pricing information in Bangladesh and is built for informational use. We are independent and not affiliated with bKash Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Calculator Tool */}
        <div className="relative mb-32 space-y-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white tracking-tighter flex items-center gap-3">
              <LayoutDashboard className="h-5 w-5 text-zinc-600" />
              bKash Charge Calculator Tool
            </h2>
            <p className="text-sm text-zinc-500 max-w-xl">
               Use this bKash charge calculator (BD) to estimate your cash out fee instantly. Select your transaction method and agent type to see the breakdown.
            </p>
          </div>
          <BkashCalculatorClient />
        </div>

        {/* Secondary Info Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-24 border-t border-white/5">
          {/* How it Works Section */}
          <section>
            <div className="flex items-center gap-3 mb-10 text-white font-bold text-[10px] uppercase tracking-[0.3em]">
              <HelpCircle className="h-3 w-3 text-zinc-600" />
              Process Guide
            </div>
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tighter">How the bKash Charge Calculator Works</h2>
            <div className="space-y-8 text-zinc-400 text-sm md:text-base leading-relaxed">
              <p>
                বিকাশ থেকে টাকা উত্তোলনের ক্ষেত্রে চার্জ মূলত তিনটি প্যারামিটারের ওপর নির্ভর করে: পেমেন্ট মেথড (App/USSD), এজেন্টের ধরন (Standard/Priyo), এবং ট্রানজেকশন লিমিট। 
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "App (Priyo)", rate: "1.49%", bg: "bg-white text-black" },
                  { label: "App (Standard)", rate: "1.85%", bg: "bg-zinc-900 text-white" },
                  { label: "USSD (*247#)", rate: "1.85%", bg: "bg-zinc-900/50 text-zinc-400" },
                ].map((item) => (
                  <div key={item.label} className={`p-4 rounded-xl border border-white/5 flex justify-between items-center ${item.bg}`}>
                    <span className="font-bold uppercase tracking-widest text-[10px]">{item.label}</span>
                    <span className="font-black text-lg">{item.rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reference Table Section */}
          <section>
            <div className="flex items-center gap-3 mb-10 text-white font-bold text-[10px] uppercase tracking-[0.3em]">
              <TableIcon className="h-3 w-3 text-zinc-600" />
              Rate Guide
            </div>
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tighter text-right">bKash Cash Out Rate Table (2026).</h2>
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-950">
              <table className="w-full text-left border-collapse text-[10px] uppercase tracking-wider font-bold">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-900/50 text-zinc-500">
                    <th className="p-5">Amount</th>
                    <th className="p-5 text-white">Priyo (1.49%)</th>
                    <th className="p-5 text-zinc-600 text-right">Standard (1.85%)</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  {[1000, 5000, 10000, 20000, 50000].map((amt) => (
                    <tr key={amt} className="border-b border-white/5 hover:bg-white/5 transition">
                      <td className="p-5 text-white">৳ {amt.toLocaleString()}</td>
                      <td className="p-5 font-mono text-white">৳ {(amt * 0.0149).toFixed(2)}</td>
                      <td className="p-5 font-mono text-zinc-600 text-right">৳ {(amt * 0.0185).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[10px] text-zinc-600 italic uppercase tracking-[0.2em] text-right">
              Rate updated for fiscal year 2026.
            </p>
          </section>
        </div>

        {/* FAQ Section */}
        <div className="mt-48 pt-24 border-t border-white/5">
          <div className="flex items-center gap-3 mb-20 text-white font-bold text-[10px] uppercase tracking-[0.3em]">
            <Info className="h-3 w-3 text-zinc-600" />
            Support & FAQ
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { q: "bkash app cash out charge koto?", a: "বর্তমানে বিকাশ অ্যাপ থেকে প্রিয় এজেন্টে হাজারে ১৪.৯০ টাকা এবং সাধারণ এজেন্টে ১৮.৫০ টাকা চার্জ কাটে।" },
              { q: "Priyo Agent কিভাবে সেট করবেন?", a: "বিকাশ অ্যাপের 'Cash Out' অপশনে গিয়ে 'Priyo Agent' সিলেক্ট করুন। প্রতি মাসে ২ টি নাম্বার প্রিয় হিসেবে সেট করা যায়।" },
              { q: "বিকাশ হেল্পলাইন নাম্বার কত?", a: "যেকোনো তথ্যের জন্য বিকাশের অফিসিয়াল হেল্পলাইন ১৬২৪৭ নাম্বারে যোগাযোগ করতে পারেন।" }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider leading-relaxed">{faq.q}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Engagement CTA */}
        <div className="mt-32 p-8 md:p-12 rounded-3xl bg-zinc-950 border border-white/5 text-center flex flex-col items-center justify-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tighter">Need more calculations?</h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
            Try our <strong className="text-white">Nagad Charge Calculator</strong> and other tools for faster calculations.
          </p>
          <Link 
            href="/tools/nagad-charge-calculator" 
            className="px-6 py-3 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-200 transition-colors"
          >
            Go to Nagad Calc
          </Link>
        </div>

        {/* Footer Meta */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-8">
            <Link href="/tools/nagad-charge-calculator" className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-all">Nagad calc</Link>
            <Link href="/tools/gpa-calculator-bd" className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-all">GPA calc</Link>
          </div>
          <div className="text-[10px] text-zinc-800 font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Ridoway Agency Ops.
          </div>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "bKash Charge Calculator 2026",
              "url": "https://ridoway.agency/tools/bkash-charge-calculator-bd",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
              "description": "Calculate exact bKash cash out charges in Bangladesh with updated 2026 rates.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "BDT"
              }
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
                  "name": "bkash app cash out charge koto?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "বিকাশ অ্যাপ থেকে প্রিয় এজেন্টে ক্যাশ আউট চার্জ ১.৪৯% এবং সাধারণ এজেন্টে ১.৮৫%।"
                  }
                },
                {
                  "@type": "Question",
                  "name": "Priyo Agent কিভাবে সেট করবেন?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "বিকাশ অ্যাপের 'Cash Out' অপশনে গিয়ে 'Priyo Agent' সিলেক্ট করুন। প্রতি মাসে ২ টি নাম্বার প্রিয় হিসেবে সেট করা যায়।"
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
