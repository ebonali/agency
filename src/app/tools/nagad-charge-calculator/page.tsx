import { Metadata } from "next";
import NagadCalculatorClient from "./NagadCalculatorClient";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, HelpCircle, Table as TableIcon, Info, LayoutDashboard, ArrowRightLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Nagad Charge Calculator 2026 – Cash Out Fee BD",
  description: "Calculate exact Nagad cash out charges in Bangladesh with updated 2026 rates. Accurate, fast, and easy to use calculator.",
  keywords: ["nagad charge calculator", "nagad fee calculator", "nagad cashout charge 2026", "nagad cash out rate bd"],
  alternates: {
    canonical: "/tools/nagad-charge-calculator",
  }
};

export default function NagadChargeCalculatorPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 lg:py-24 selection:bg-orange-500 selection:text-white">
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
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse text-xs" />
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
              Last updated: March 2026 | Version: 1.0
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-[1]">
             Nagad Charge Calculator 2026 <span className="text-zinc-700">(Bangladesh)</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
                এই অনলাইন টুলটির মাধ্যমে আপনি দ্রুত এবং নির্ভুলভাবে নগদের ক্যাশ আউট চার্জ হিসাব করতে পারবেন। App এবং USSD-এর সর্বশেষ অফিসিয়াল রেট অনুযায়ী হিসাব আপডেট করা হয়েছে।
              </p>
              <div className="p-6 rounded-2xl bg-zinc-950/50 border border-white/5 flex flex-col gap-3 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="h-5 w-5 flex-shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Independent Calculator</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed italic">
                  This tool is independently built for informational purposes and is not affiliated with Nagad Ltd.
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
              Nagad Charge Calculator Tool
            </h2>
            <p className="text-sm text-zinc-500 max-w-xl">
               Use this Nagad charge calculator (BD) to estimate your exact fees instantly. Select your transaction method to see the breakdown.
            </p>
          </div>
          <NagadCalculatorClient />
        </div>

        {/* Secondary Info Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-24 border-t border-white/5">
          {/* How it Works Section */}
          <section>
            <div className="flex items-center gap-3 mb-10 text-white font-bold text-[10px] uppercase tracking-[0.3em]">
              <HelpCircle className="h-3 w-3 text-zinc-600" />
              Process Guide
            </div>
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tighter">How it works</h2>
            <div className="space-y-8 text-zinc-400 text-sm md:text-base leading-relaxed">
              <p>
                নগদ থেকে টাকা উত্তোলনের ক্ষেত্রে চার্জ মূলত একটি জিনিসের ওপর নির্ভর করে: পেমেন্ট মেথড (App নাকি USSD)। We developed this <strong className="text-zinc-300">nagad cash out calculator</strong> to help you check <strong className="text-zinc-300">nagad charge bd</strong> instantly without manual math.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "Nagad App", rate: "1.30%", sub: "৳12.99 per 1000 (1.30%)", bg: "bg-white text-black" },
                  { label: "USSD (*167#)", rate: "1.50%", sub: "৳15.00 per 1000 (1.50%)", bg: "bg-zinc-900 text-white" }
                ].map((item) => (
                  <div key={item.label} className={`p-4 rounded-xl border border-white/5 flex justify-between items-center ${item.bg}`}>
                    <div className="flex flex-col">
                      <span className="font-bold uppercase tracking-widest text-[10px]">{item.label}</span>
                      <span className="text-[10px] opacity-70 mt-1">{item.sub}</span>
                    </div>
                    <span className="font-black text-lg">{item.rate}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-bold text-white mb-4">Transaction Limits</h3>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Min Cash-out</span> <span className="text-white">50 BDT</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Max Cash-out (Agent)</span> <span className="text-white">25,000 BDT</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Daily Limit</span> <span className="text-white">250,000 BDT</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Monthly Limit</span> <span className="text-white">1,000,000 BDT</span></li>
              </ul>
            </div>
          </section>

          {/* Reference Table Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tighter text-right flex items-center justify-end gap-3 pb-8">
              <TableIcon className="h-6 w-6 text-zinc-600" />
              Rate Guide
            </h2>
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-950">
              <table className="w-full text-left border-collapse text-[10px] uppercase tracking-wider font-bold">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-900/50 text-zinc-500">
                    <th className="p-5">Amount</th>
                    <th className="p-5 text-white">App (1.30%)</th>
                    <th className="p-5 text-zinc-600 text-right">USSD (1.50%)</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  {[1000, 5000, 10000, 20000, 25000].map((amt) => (
                    <tr key={amt} className="border-b border-white/5 hover:bg-white/5 transition">
                      <td className="p-5 text-white">৳ {amt.toLocaleString()}</td>
                      <td className="p-5 font-mono text-white">৳ {(amt * 0.01299).toFixed(2)}</td>
                      <td className="p-5 font-mono text-zinc-600 text-right">৳ {(amt * 0.015).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[10px] text-zinc-600 italic uppercase tracking-[0.2em] text-right">
              Based on publicly available Nagad pricing information in Bangladesh.
            </p>
          </section>
        </div>

        {/* Comparison Section */}
        <section className="mt-24 pt-24 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tighter flex items-center gap-3">
            <ArrowRightLeft className="h-6 w-6 text-zinc-600" />
            bKash vs Nagad Charge Comparison
          </h2>
          <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed">
            <p>
              When deciding which mobile financial service is more cost-effective, running a <strong className="text-white">nagad fee calculator</strong> head-to-head against bKash is essential. While bKash offers a Priyo agent rate of 1.49%, Nagad provides a standard app rate of just 1.30% (৳12.99 per 1000).
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 mt-6">
              <table className="w-full text-left border-collapse text-[10px] uppercase tracking-wider font-bold">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-900/50 text-zinc-500">
                    <th className="p-5">Service / Method</th>
                    <th className="p-5 text-white">App Rate</th>
                    <th className="p-5 text-zinc-600 text-right">USSD Rate</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-5 text-white font-black">Nagad Charge BD</td>
                    <td className="p-5 font-mono text-white">৳12.99 (1.30%)</td>
                    <td className="p-5 font-mono text-zinc-600 text-right">৳15.00 (1.50%)</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-5 text-zinc-400 font-bold">bKash Charge</td>
                    <td className="p-5 font-mono text-zinc-400">৳14.90 (1.49%)</td>
                    <td className="p-5 font-mono text-zinc-600 text-right">৳18.50 (1.85%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 italic text-xs text-zinc-500">
              Tip: For major transactions, routing your funds through the Nagad App is objectively cheaper than standard bKash cash out.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="mt-48 pt-24 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white tracking-tighter mb-20 flex items-center gap-3">
            <Info className="h-6 w-6 text-zinc-600" />
            FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { q: "nagad cash out charge koto?", a: "নগদ অ্যাপ থেকে ক্যাশ আউট করলে প্রতি হাজারে ১২.৯৯ টাকা (১.৩০%) এবং *167# ডায়াল করে ক্যাশ আউট করলে ১৫ টাকা (১.৫০%) চার্জ কাটে।" },
              { q: "নগদ অ্যাপ আর ডায়াল চার্জের মাঝে পার্থক্য কী?", a: "অ্যাপ ব্যবহারে চার্জ তুলনামূলক কম। অ্যাপে ১ হাজার টাকায় ১২.৯৯ টাকা কাটে, যেখানে ডায়ালে কাটে ১৫ টাকা।" },
              { q: "নগদ হেল্পলাইন নাম্বার কত?", a: "যেকোনো তথ্যের জন্য নগদের অফিসিয়াল কাস্টমার সার্ভিস ১৬১৬৭ (16167) নাম্বারে যোগাযোগ করতে পারেন।" }
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
            Try our <Link href="/tools/bkash-charge-calculator-bd" className="text-white underline hover:text-zinc-300">bKash Charge Calculator</Link> for similar cash out calculations.
          </p>
          <Link 
            href="/tools/bkash-charge-calculator-bd" 
            className="px-6 py-3 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-200 transition-colors"
          >
            Go to bKash Calc
          </Link>
        </div>

        {/* Footer Meta */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-8">
            <Link href="/tools/bkash-charge-calculator-bd" className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-all">bKash calc</Link>
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
              "name": "Nagad Charge Calculator 2026",
              "url": "https://ridoway.agency/tools/nagad-charge-calculator",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
              "description": "Calculate exact Nagad cash out charges in Bangladesh with updated 2026 rates.",
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
                  "name": "nagad cash out charge koto?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "নগদ অ্যাপ থেকে ক্যাশ আউট করলে প্রতি হাজারে ১২.৯৯ টাকা এবং *167# ডায়াল করে ১৫ টাকা চার্জ কাটে।"
                  }
                },
                {
                  "@type": "Question",
                  "name": "নগদ হেল্পলাইন নাম্বার কত?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "যেকোনো তথ্যের জন্য নগদের অফিসিয়াল কাস্টমার সার্ভিস ১৬১৬৭ নাম্বারে যোগাযোগ করতে পারেন।"
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
