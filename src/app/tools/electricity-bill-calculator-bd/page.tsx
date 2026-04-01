import type { Metadata } from "next";
import ElectricityCalculatorClient from "./ElectricityCalculatorClient";
import { Zap, ShieldCheck, Clock, ShieldAlert, ShoppingCart, Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bangladesh Electricity Bill Calculator | 2025-26 Rates",
  description: "Calculate your DESCO, DPDC, BPDB, NESCO, WZPDCL, or PBS electricity bill in Bangladesh with the latest 2025-2026 tariff rates. Accurate tiered pricing for residential LT-A category.",
  keywords: ["electricity bill calculator bd", "desco bill calculator", "dpdc bill calculator", "nesco bill calculator", "বাংলাদেশ বিদ্যুৎ বিল ক্যালকুলেটর", "2025 electricity rates bd"],
  openGraph: {
    title: "Electricity Bill Calculator (BD) | 2025 Tiered Rates",
    description: "Privacy-first, 100% client-side electricity bill calculator for all regions in Bangladesh.",
    type: "website",
    url: "https://ridoway.agency/tools/electricity-bill-calculator-bd",
  },
};

export default function ElectricityCalculatorPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* ── HERO SECTION ── */}
        <div className="max-w-4xl mx-auto text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/10 bg-emerald-500/5 text-emerald-500 font-black text-[10px] uppercase tracking-widest animate-pulse">
            <Zap className="h-3 w-3 fill-current" />
            2025-26 New Tariff
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tightest mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-[0.9]">
            Electricity Bill <br />
            <span className="text-emerald-500">Calculator (BD)</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-medium leading-relaxed">
            বাংলাদেশের জন্য ২০২৫-২৬ সালের সর্বশেষ রেট অনুযায়ী বিদ্যুৎ বিল ক্যালকুলেটর। DESCO, DPDC, NESCO সহ সকল ডিস্ট্রিবিউটরের রেট সমর্থিত।
          </p>
        </div>

        {/* ── CALCULATOR COMPONENT ── */}
        <ElectricityCalculatorClient />

        {/* ── AFFILIATE PRODUCT SECTION ── */}
        <section className="mt-20">
          <div className="group relative rounded-[2.5rem] border-2 border-emerald-500/10 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-blue-500/[0.03] shadow-2xl transition-all duration-500 hover:border-emerald-500/30 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8 sm:p-12 items-center">
              
              {/* Image */}
              <div className="md:col-span-2 relative aspect-square w-full max-w-[320px] mx-auto group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative h-full w-full bg-zinc-900/50 rounded-3xl border border-white/5 p-8 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://www.startech.com.bd/image/cache/catalog/ups/digital-x/650va/650va-500x500.jpg" 
                    alt="Digital X 650VA Offline UPS"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -top-4 -left-4 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl z-20">
                  Recommended
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tightest text-white leading-tight uppercase group-hover:text-emerald-400 transition-colors">
                    Digital X 650VA <br />
                    <span className="text-zinc-500">Offline UPS</span>
                  </h2>
                </div>

                <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                  Protect your PC from sudden power cuts in Bangladesh. Digital X 650VA maintains safe voltage and provides emergency backup for safe shutdown.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Low voltage input (85V)",
                    "360W Load Capacity",
                    "12V, 7AH Battery",
                    "1 Year Warranty"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-zinc-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="flex items-baseline gap-4 pt-4">
                  <span className="text-4xl font-black text-emerald-500">৳3,350</span>
                  <span className="text-lg text-zinc-700 line-through font-bold">৳3,800</span>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a 
                    href="https://www.startech.com.bd/digital-x-650va-offline-ups?tracking=6919354594711" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-emerald-500 text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-emerald-500/20"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Buy on Star Tech
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SEO CONTENT SECTION ── */}
        <div className="mt-32 max-w-4xl mx-auto space-y-24">
          
          {/* How to calculate section */}
          <section>
            <h2 className="text-3xl md:text-5xl font-black tracking-tightest text-white mb-10 leading-tight">
              How to calculate <br />
              <span className="text-emerald-500 text-2xl md:text-4xl">Electricity Bill?</span>
            </h2>
            <div className="prose prose-invert prose-zinc max-w-none space-y-8">
              <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                To calculate the electricity bill in Bangladesh for Desco and Nesco, you need to follow the formula below:
              </p>
              <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 font-mono text-emerald-500 text-center text-sm md:text-base">
                Unit Price + (Demand charge × Load) + 5% VAT
                <span className="block text-[10px] text-zinc-600 mt-2 font-sans uppercase tracking-widest">(Additional late payment fee could also be applied)</span>
              </div>

              <div className="space-y-6 mt-12 text-zinc-400">
                <p className="font-bold text-white uppercase tracking-widest text-[10px]">Follow these steps:</p>
                <ol className="space-y-4 list-decimal pl-5">
                  <li className="pl-2"><span className="text-white font-bold">Get reading:</span> Get the current meter reading in units.</li>
                  <li className="pl-2"><span className="text-white font-bold">Calculate usage:</span> Subtract current meter reading from previous month&apos;s total reading.</li>
                  <li className="pl-2"><span className="text-white font-bold">Consumer category:</span> Select the consumer type from the dropdown (Example: For home electricity, select Residential LT-A).</li>
                  <li className="pl-2"><span className="text-white font-bold">Input values:</span> Enter the Unit and Load values. Check your bill paper for Load value. More info at <Link href="/docs" className="text-emerald-500 hover:underline">Docs</Link>.</li>
                  <li className="pl-2"><span className="text-white font-bold">Results:</span> Click on <span className="text-emerald-500 font-black italic">Calculate Bill</span>.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Understading Billing */}
          <section>
            <h2 className="text-3xl md:text-5xl font-black tracking-tightest text-white mb-8 leading-tight">
              Understanding Your <br />
              <span className="text-zinc-700">Electricity Bill in Bangladesh</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium mb-12">
              Electricity billing in Bangladesh follows a tiered pricing structure set by the Bangladesh Power Development Board (BPDB). Your bill consists of three main components: the energy charge (based on units consumed), demand charge (based on your sanctioned load), and 5% VAT.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">How Electricity Rates Work</h3>
                <p className="text-zinc-500 leading-relaxed font-medium">
                  For residential consumers (LT-A category), Bangladesh uses a progressive tariff system where the per-unit cost increases with higher consumption. This encourages energy conservation. The &quot;lifeline&quot; rate of ৳4.63/unit applies only to households consuming 50 units or less per month.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-zinc-950 border border-white/5">
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-2">Low Usage</p>
                  <p className="text-2xl font-black text-emerald-500">৳4.63</p>
                  <p className="text-[10px] text-zinc-700 font-bold uppercase mt-1">per unit (0-50 units)</p>
                </div>
                <div className="p-6 rounded-3xl bg-zinc-950 border border-white/5">
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-2">Medium Usage</p>
                  <p className="text-2xl font-black text-white">৳7.20</p>
                  <p className="text-[10px] text-zinc-700 font-bold uppercase mt-1">per unit (76-200 units)</p>
                </div>
                <div className="p-6 rounded-3xl bg-zinc-950 border border-white/5">
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-2">High Usage</p>
                  <p className="text-2xl font-black text-red-500">৳14.61</p>
                  <p className="text-[10px] text-zinc-700 font-bold uppercase mt-1">per unit (600+ units)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Distributors list */}
          <section className="bg-zinc-950 border border-white/10 rounded-[3rem] p-8 md:p-12">
            <h3 className="text-xl font-bold text-white mb-8">Electricity Distribution Companies</h3>
            <p className="text-zinc-500 text-sm mb-10 font-medium">This calculator works for all major electricity distributors in Bangladesh including:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { code: "DESCO", name: "Dhaka Electric Supply Company (North Dhaka)" },
                { code: "DPDC", name: "Dhaka Power Distribution Company (South Dhaka)" },
                { code: "NESCO", name: "Northern Electricity Supply Company" },
                { code: "BPDB", name: "Bangladesh Power Development Board" },
                { code: "WZPDCL", name: "West Zone Power Distribution Company" },
                { code: "PBS", name: "Palli Bidyut Samity (Rural areas)" }
              ].map((co, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-emerald-500/20 transition-all">
                  <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-black group-hover:text-emerald-500 transition-colors">
                    {co.code[0]}
                  </div>
                  <div>
                    <p className="text-xs font-black text-white group-hover:text-emerald-500 transition-colors">{co.code}</p>
                    <p className="text-[10px] text-zinc-600 font-medium">{co.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest mt-12 text-center border-t border-white/5 pt-8">
              Note: Rates are effective from February 2024 as per the Ministry of Power, Energy and Mineral Resources.
            </p>
          </section>

          {/* Pricing Table (Hidden from visual flow, kept for detailed crawlers if needed, or I'll just keep the user content) */}
          {/* I'll omit the previously added table to stick strictly to the user's provided structure for better SEO control */}

          {/* Trust Indicators */}
          <div className="pt-24 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: ShieldCheck, title: "100% Privacy", desc: "We don't collect your data. Everything happens in your browser." },
              { icon: Clock, title: "Real-time Update", desc: "Synced with the 2025-26 electricity tariff standards." },
              { icon: ShieldAlert, title: "Distributor Agnostic", desc: "Works for DESCO, DPDC, NESCO, BPDB, WZPDCL & PBS." },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-6 w-6 text-zinc-600" />
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white">{item.title}</h4>
                <p className="text-[11px] text-zinc-600 font-medium leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Hub */}
          <div className="bg-gradient-to-b from-zinc-900 to-black border border-white/5 rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tightest text-white mb-8">Need more tools?</h2>
            <Link 
              href="/tools"
              className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-zinc-200 transition-all active:scale-95 group"
            >
              All Tools Hub
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
