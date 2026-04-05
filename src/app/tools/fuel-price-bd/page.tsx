"use client";

import { useState } from "react";
import { Fuel, TrendingUp, TrendingDown, Clock, ArrowRight, Info, Calculator, Calendar } from "lucide-react";

const FUEL_DATA = [
  { name: "Octane 95", price: 120.00, change: -4.00, status: "down", unit: "Liter", color: "from-emerald-500 to-teal-600" },
  { name: "Petrol", price: 115.00, change: 0.00, status: "stable", unit: "Liter", color: "from-blue-500 to-indigo-600" },
  { name: "Diesel", price: 106.00, change: -2.00, status: "down", unit: "Liter", color: "from-amber-500 to-orange-600" },
  { name: "Kerosene", price: 106.00, change: 0.00, status: "stable", unit: "Liter", color: "from-zinc-500 to-slate-600" },
];

const HISTORY = [
  { date: "30 Mar 2026", octane: 120, petrol: 115, diesel: 106 },
  { date: "15 Mar 2026", octane: 124, petrol: 115, diesel: 108 },
  { date: "01 Mar 2026", octane: 124, petrol: 120, diesel: 108 },
  { date: "15 Feb 2026", octane: 126, petrol: 120, diesel: 110 },
];

export default function FuelPricePage() {
  const [taka, setTaka] = useState<number>(1000);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-emerald-500/[0.05] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6 font-black text-[10px] uppercase tracking-widest">
              <Clock className="h-3 w-3" />
              Last Updated: April 05, 2026
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
               Fuel Price in <span className="text-emerald-500">Bangladesh</span>
            </h1>
            <p className="text-zinc-500 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              বাংলাদেশে আজকের অকটেন, পেট্রোল এবং ডিজেলের দাম। আমাদের তথ্য সরাসরি সরকারি গেজেট ও বিশ্বস্ত সূত্র থেকে সংগৃহীত।
            </p>
          </div>

          {/* Price Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {FUEL_DATA.map((fuel) => (
              <div key={fuel.name} className="group relative p-6 rounded-[2rem] bg-zinc-950 border border-white/5 hover:border-white/15 transition-all overflow-hidden shadow-2xl">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${fuel.color} opacity-[0.03] rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-2">{fuel.name}</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-black text-white">৳{fuel.price.toFixed(1)}</span>
                    <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">/ {fuel.unit}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {fuel.status === "down" ? (
                      <div className="flex items-center gap-1 text-[10px] font-bold text-red-500/80 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                        <TrendingDown className="h-3 w-3" />
                        ৳{Math.abs(fuel.change).toFixed(1)}
                      </div>
                    ) : fuel.status === "stable" ? (
                      <div className="text-[10px] font-bold text-zinc-500 bg-zinc-500/10 px-2 py-0.5 rounded-full border border-zinc-500/10">No Change</div>
                    ) : (
                      <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500/80 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <TrendingUp className="h-3 w-3" />
                        ৳{fuel.change.toFixed(1)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Data Table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            <div className="lg:col-span-2">
              <div className="bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold">Price History (8 Weeks)</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                        <th className="pb-4">Date</th>
                        <th className="pb-4">Octane</th>
                        <th className="pb-4">Petrol</th>
                        <th className="pb-4">Diesel</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-medium">
                      {HISTORY.map((row, i) => (
                        <tr key={i} className="border-b border-white/[0.03] last:border-0">
                          <td className="py-4 text-zinc-400">{row.date}</td>
                          <td className="py-4 font-bold">৳{row.octane}</td>
                          <td className="py-4 font-bold">৳{row.petrol}</td>
                          <td className="py-4 font-bold">৳{row.diesel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-8 text-[10px] text-zinc-700 border-t border-white/5 pt-6 flex items-center gap-2">
                  <Info className="h-3 w-3" />
                  Data source: Bangladesh Petroleum Corporation (BPC) and Ministry of Energy.
                </p>
              </div>
            </div>

            {/* Quick Calculator Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-emerald-950/50 to-zinc-950 border border-emerald-500/10 rounded-[2.5rem] p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-xl bg-emerald-500 text-black">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold">Fuel Estimator</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/70 mb-2 block">Enter Taka Amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">৳</span>
                      <input 
                        type="number" 
                        value={taka || ""} 
                        onChange={(e) => setTaka(parseFloat(e.target.value))} 
                        className="w-full bg-black border border-white/10 rounded-xl py-3 pl-8 pr-4 text-sm font-bold focus:outline-none focus:border-emerald-500 transition-colors" 
                      />
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    {FUEL_DATA.map(f => (
                      <div key={f.name} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                        <span className="text-xs text-zinc-500 font-medium">{f.name}</span>
                        <span className={`text-sm font-black ${f.name.includes("Octane") ? "text-emerald-400" : f.name.includes("Petrol") ? "text-blue-400" : "text-amber-400"}`}>
                          {(taka > 0 ? (taka / f.price).toFixed(2) : "0.00")} Ltr
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section for SEO */}
          <div className="max-w-3xl mx-auto mb-20 text-center">
             <h2 className="text-3xl font-black tracking-tight mb-12">Frequently Asked <span className="text-emerald-500">Questions</span></h2>
             <div className="space-y-4 text-left">
               {[
                 { q: "What is Octane 95 price in Bangladesh today?", a: "As of April 05, 2026, the price of Octane-95 in Bangladesh is BDT 120.00 per liter." },
                 { q: "Is diesel price reduced in BD recently?", a: "Yes, our data shows a reduction of BDT 2.0 per liter in Diesel compared to mid-March 2026." },
                 { q: "What is the difference between Petrol and Octane in BD?", a: "Octane (usually Octane 95) has a higher octane rating used for high-performance engines, while Petrol is standard gasoline. Octane is currently ৳5.0 more expensive than Petrol." },
               ].map((item, i) => (
                 <div key={i} className="p-6 rounded-2xl border border-white/5 bg-zinc-950 hover:bg-zinc-900 transition-colors">
                   <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                     <span className="text-emerald-500 text-lg">?</span> {item.q}
                   </h3>
                   <p className="text-xs text-zinc-500 font-medium leading-relaxed uppercase pr-4">{item.a}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* JSON-LD for Ranking */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Octane 95 price in Bangladesh today?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The price of Octane-95 in Bangladesh is BDT 120.00 per liter as of 2026-04-05."
            }
          },
          {
            "@type": "Question",
            "name": "Petrol price in Bangladesh today?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Petrol price in Bangladesh is BDT 115.00 per liter as of 2026-04-05."
            }
          }
        ]
      }) }} />
    </div>
  );
}
