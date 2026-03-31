import { Metadata } from "next";
import IncomeTaxCalculatorClient from "./IncomeTaxCalculatorClient";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, HelpCircle, Table as TableIcon, Info, Calculator, FileText, Landmark, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Income Tax Calculator Bangladesh (FY 2025-26) | Tax Calculation",
  description: "Accurately calculate your income tax for the fiscal year 2025-26 in Bangladesh. Supports salary exemptions, investment rebates, and new tax slabs.",
  keywords: ["income tax calculator BD", "tax calculator Bangladesh 2025", "NBR tax calculator", "tax rebate calculator BD", "salaried person tax BD"],
  alternates: {
    canonical: "/tools/bangladesh-income-tax-calculator",
  }
};

export default function IncomeTaxCalculatorPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 lg:py-24 selection:bg-red-500/30 selection:text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Navigation Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-20 border-b border-white/5 pb-10">
          <Link href="/tools" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">
            <div className="p-2 rounded-lg bg-zinc-950 border border-white/5 group-hover:border-white/20 transition-all">
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to Registry
          </Link>
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse text-xs" />
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
              Financial Year • 2025-26
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-32 relative text-center max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 mb-10 overflow-hidden">
              <div className="p-1 rounded-full bg-red-500">
                <Calculator className="h-3 w-3 text-white" />
              </div>
              <span className="text-[9px] uppercase font-black tracking-widest pr-2">Advanced Tax Engine 2.0</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 mb-8 leading-[1.1]">
              Income Tax Calculator <br /><span className="text-red-500">Bangladesh</span> <span className="text-zinc-800 text-3xl md:text-5xl align-top">(2025-26)</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-500 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
              বাংলাদেশের <strong>২০২৫-২৬ অর্থবছরের</strong> নতুন আয়কর বিধিমালা অনুযায়ী সহজেই আপনার ট্যাক্স ক্যালকুলেট করুন। বিসিআইএস (BCIS) এবং এনবিআর (NBR) গাইডলাইন মেনে নিখুঁত জিপিএ এবং রিবেটসহ হিসাব পাওয়ার সবচেয়ে আধুনিক টুল।
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "1/3 Exemption", icon: ShieldCheck },
                { label: "15% Rebate", icon: TrendingUp },
                { label: "Live Analysis", icon: Info },
                { label: "AIT Deductions", icon: Landmark }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col items-center gap-3">
                  <item.icon className="h-4 w-4 text-zinc-600" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Calculator Tool */}
        <div className="relative mb-40">
          <IncomeTaxCalculatorClient />
        </div>

        {/* Detailed Guide & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-24 border-t border-white/5 mb-32">
          {/* Rules Section */}
          <section>
            <div className="flex items-center gap-3 mb-10 text-white font-bold text-[10px] uppercase tracking-[3px]">
              <FileText className="h-3 w-3 text-red-500" />
              Tax Guidelines 2025
            </div>
            <h2 className="text-3xl font-black text-white mb-10 tracking-tighter">Understanding the Slabs</h2>
            <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed">
              <p>
                As per the latest circular for <strong className="text-white text-sm">Income Tax BD 2024-25 / 2025-26</strong>, several updates have been made to the individual income tax structure.
              </p>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 space-y-3">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">Standard Exemption (1/Third Rule)</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Total income theke total 1/3 ansh (maximum 4.5 Lakh porjonto) kor-mukt (Exempted) thakbe.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 space-y-3">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">Tax Rebate on Investment</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Sanchay Patra, DPS, Stock, and Mutual Funds a investment korle apni rebate paben. Calculation standard: 15% of investment, 3% of taxable income, or 10 Lakh (whichever is lower).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Reference Table Section */}
          <section>
            <h2 className="text-2xl font-black text-white mb-10 tracking-tighter flex items-center gap-4">
              <TableIcon className="h-6 w-6 text-zinc-700" />
              Tax Slabs (General)
            </h2>
            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-950">
              <table className="w-full text-left border-collapse text-[10px] uppercase tracking-widest font-bold">
                <thead>
                  <tr className="border-b border-white/5 bg-white/5 text-zinc-500">
                    <th className="p-6">Income Slab</th>
                    <th className="p-6 text-red-500">Rate</th>
                    <th className="p-6 text-zinc-700 text-right">Applicability</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition group">
                    <td className="p-6 text-zinc-200">First 3.5 Lakh</td>
                    <td className="p-6 font-mono text-emerald-400">0%</td>
                    <td className="p-6 font-mono text-zinc-700 text-right">Tax Free</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-6 text-zinc-200">Next 1.0 Lakh</td>
                    <td className="p-6 font-mono text-white">5%</td>
                    <td className="p-6 font-mono text-zinc-700 text-right">Standard</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-6 text-zinc-200">Next 4.0 Lakh</td>
                    <td className="p-6 font-mono text-white">10%</td>
                    <td className="p-6 font-mono text-zinc-700 text-right">Tier 1</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-6 text-zinc-200">Next 5.0 Lakh</td>
                    <td className="p-6 font-mono text-white">15%</td>
                    <td className="p-6 font-mono text-zinc-700 text-right">Tier 2</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-6 text-zinc-200">Next 5.0 Lakh</td>
                    <td className="p-6 font-mono text-white">20%</td>
                    <td className="p-6 font-mono text-zinc-700 text-right">Tier 3</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-6 text-zinc-200">Rest Income</td>
                    <td className="p-6 font-mono text-red-500">25% - 30%</td>
                    <td className="p-6 font-mono text-zinc-700 text-right">Max Cap</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-[9px] text-zinc-600 font-bold uppercase tracking-[3px] text-center">
              * Minimum Tax of BDT 3,000 applies to specific Dhaka/Ctg city corporations.
            </p>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl font-black text-white tracking-tighter mb-4">Frequently Asked Questions</h2>
            <p className="text-zinc-500 text-sm font-medium">Clear your doubts about Bangladeshi tax laws for 2025.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: "Is 1/3 of total income strictly tax-free?", a: "হ্যাঁ, নতুন অর্থবছর অনুযায়ী মোট বার্ষিক আয়ের এক-তৃতীয়াংশ (বা ৪.৫ লক্ষ টাকা, যেটি কম) সম্পূর্ণভাবে করমুক্ত বা এক্সেম্পটেড থাকবে।" },
              { q: "What is the minimum tax in Dhaka City Corporation?", a: "ঢাকা ও চট্টগ্রাম সিটি কর্পোরেশন এলাকার করদাতার জন্য ন্যূনতম করের পরিমাণ ৫,০০০ টাকা (সাধারণত ৩,০০০/৪,০০০/৫,০০০ টাকা লোকেশন অনুযায়ী)।" },
              { q: "Can I get rebate on DPS investment?", a: "হ্যাঁ, বার্ষিক সর্বোচ্চ ১.২ লক্ষ (বা মাসে ১০ হাজার) টাকা ডিপিএস জমা করলে আপনি তার ওপর কর রেয়াত বা রিবেট পাবেন।" },
              { q: "Is Sanchay Patra profit taxable?", a: "সাধারণত সঞ্চয়পত্রের মুনাফা থেকে ট্যাক্স ডিডাকশন হয়ে যায় (AIT), তবে আপনার টোটাল ইনকাম ক্যালকুলেশনে এটি একটি সোর্স হিসেবে ইনপুট দিতে হয়।" }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-zinc-950 border border-white/5 hover:border-red-500/20 transition-all">
                <h3 className="text-sm font-black text-white mb-6 tracking-wide uppercase">{faq.q}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-20 rounded-[3rem] bg-zinc-950 border border-white/5 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">Need a PDF Tax Planner?</h3>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto mb-10 font-medium">
            Our tool helps you generate a summary that you can use while filing your returns on the official NBR e-Return portal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tools"
              className="px-8 py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-zinc-200 transition-all shadow-xl"
            >
              Explore More Tools
            </Link>
            <a
              href="https://etaxnbr.gov.bd/"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-zinc-900 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:border-white/30 transition-all"
            >
              Visit Official NBR Portal
            </a>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 opacity-50">
          <div className="flex items-center gap-8">
            <Link href="/tools/hsc-gpa-calculator-bd" className="text-[9px] font-black uppercase tracking-[3px] text-zinc-600 hover:text-white transition-all">HSC calc</Link>
            <Link href="/tools/ssc-gpa-calculator-bd" className="text-[9px] font-black uppercase tracking-[3px] text-zinc-600 hover:text-white transition-all">SSC calc</Link>
          </div>
          <div className="text-[9px] text-zinc-800 font-black uppercase tracking-[3px]">
            © {new Date().getFullYear()} Ridoway Agency / Financial Ops.
          </div>
        </div>
      </div>

      {/* Search Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Income Tax Calculator BD 2025-26",
            "url": "https://ridoway.agency/tools/bangladesh-income-tax-calculator",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "description": "Calculate annual income tax in Bangladesh with 1/3 salary exemption and NBR 2025-26 tax slabs.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BDT"
            }
          })
        }}
      />
    </div>
  );
}
