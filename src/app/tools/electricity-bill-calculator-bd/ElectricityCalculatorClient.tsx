"use client";

import { useState, useMemo } from "react";
import { 
  Zap, 
  Calculator, 
  Info, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Receipt,
  Lightbulb,
  Plus
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Bangladesh Electricity Bill Calculator - 2025-26 Rates
 * Supports LT-A (Residential) with tiered pricing.
 */

const TARIFF_2025 = {
  RESIDENTIAL: [
    { min: 0, max: 50, rate: 4.63, label: "Lifeline (0-50)" },
    { min: 0, max: 75, rate: 5.26, label: "Tier 1 (0-75)" },
    { min: 76, max: 200, rate: 7.20, label: "Tier 2 (76-200)" },
    { min: 201, max: 300, rate: 7.59, label: "Tier 3 (201-300)" },
    { min: 301, max: 400, rate: 8.02, label: "Tier 4 (301-400)" },
    { min: 401, max: 600, rate: 12.67, label: "Tier 5 (401-600)" },
    { min: 601, max: Infinity, rate: 14.61, label: "Tier 6 (601+)" },
  ],
  DEMAND_CHARGE: 42, // Residential
  VAT_RATE: 0.05, // 5%
};

const CONSUMER_TYPES = [
  { id: "lt-a", label: "Residential (LT-A)", category: "lt" },
  { id: "lt-b", label: "Agricultural (LT-B)", category: "lt" },
  { id: "lt-c", label: "Small Industrial (LT-C)", category: "lt" },
  { id: "lt-d", label: "Non-Residential (LT-D)", category: "lt" },
  { id: "lt-e", label: "Commercial (LT-E)", category: "lt" },
];

const TENSIONS = [
  { id: "lt", label: "Low Tension (LT) - 230/400V" },
  { id: "mt", label: "Medium Tension (MT) - 11kV" },
  { id: "ht", label: "High Tension (HT) - 33kV" },
  { id: "eht", label: "Extra High Tension (EHT) - 132/230kV" },
];

export default function ElectricityCalculatorClient() {
  const [units, setUnits] = useState<string>("");
  const [load, setLoad] = useState<string>("1");
  const [tension, setTension] = useState<string>("lt");
  const [consumerType, setConsumerType] = useState<string>("lt-a");

  const calculation = useMemo(() => {
    const u = parseFloat(units);
    const l = parseFloat(load);
    if (isNaN(u) || u < 0) return null;

    let energyCost = 0;
    const breakdown: { tier: string; units: number; rate: number; cost: number }[] = [];

    // Progressive Tariff Calculation for Residential
    const tiers = TARIFF_2025.RESIDENTIAL;
    
    // Exception: Lifeline rate applies only if total units <= 50
    if (u <= 50) {
      energyCost = u * 4.63;
      breakdown.push({ tier: "Lifeline (0-50)", units: u, rate: 4.63, cost: u * 4.63 });
    } else {
      // Standard tiered calculation
      let remaining = u;
      
      // Tier 1: 0-75
      const t1 = Math.min(remaining, 75);
      energyCost += t1 * 5.26;
      breakdown.push({ tier: "Tier 1 (0-75)", units: t1, rate: 5.26, cost: t1 * 5.26 });
      remaining -= t1;

      if (remaining > 0) {
        // Tier 2: 76-200 (125 units)
        const t2 = Math.min(remaining, 125);
        energyCost += t2 * 7.20;
        breakdown.push({ tier: "Tier 2 (76-200)", units: t2, rate: 7.20, cost: t2 * 7.20 });
        remaining -= t2;
      }

      if (remaining > 0) {
        // Tier 3: 201-300 (100 units)
        const t3 = Math.min(remaining, 100);
        energyCost += t3 * 7.59;
        breakdown.push({ tier: "Tier 3 (201-300)", units: t3, rate: 7.59, cost: t3 * 7.59 });
        remaining -= t3;
      }

      if (remaining > 0) {
        // Tier 4: 301-400 (100 units)
        const t4 = Math.min(remaining, 100);
        energyCost += t4 * 8.02;
        breakdown.push({ tier: "Tier 4 (301-400)", units: t4, rate: 8.02, cost: t4 * 8.02 });
        remaining -= t4;
      }

      if (remaining > 0) {
        // Tier 5: 401-600 (200 units)
        const t5 = Math.min(remaining, 200);
        energyCost += t5 * 12.67;
        breakdown.push({ tier: "Tier 5 (401-600)", units: t5, rate: 12.67, cost: t5 * 12.67 });
        remaining -= t5;
      }

      if (remaining > 0) {
        // Tier 6: 601+
        energyCost += remaining * 14.61;
        breakdown.push({ tier: "Tier 6 (601+)", units: remaining, rate: 14.61, cost: remaining * 14.61 });
      }
    }

    const demandCharge = (isNaN(l) ? 0 : l) * TARIFF_2025.DEMAND_CHARGE;
    const vat = (energyCost + demandCharge) * TARIFF_2025.VAT_RATE;
    const total = energyCost + demandCharge + vat;

    return {
      energyCost,
      demandCharge,
      vat,
      total,
      breakdown
    };
  }, [units, load]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* ── LEFT: INPUT CARD ── */}
      <div className="lg:col-span-7 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Zap className="h-32 w-32 text-emerald-500" />
          </div>

          <div className="relative z-10">
            <h2 className="text-xl font-black text-white uppercase tracking-widest mb-8 flex items-center gap-3">
              <Calculator className="h-5 w-5 text-emerald-500" />
              Bill Parameters
            </h2>

            <div className="space-y-6">
              {/* Tension Selector */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
                  Voltage Level (Tension)
                </label>
                <div className="relative group">
                  <select
                    value={tension}
                    onChange={(e) => setTension(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm font-bold focus:outline-none focus:border-emerald-500/50 transition-all appearance-none cursor-pointer"
                  >
                    {TENSIONS.map(t => (
                      <option key={t.id} value={t.id}>{t.label}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </div>
                </div>
              </div>

              {/* Consumer Type Selector */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
                  Select Consumer Type
                </label>
                <div className="relative group">
                  <select
                    value={consumerType}
                    onChange={(e) => setConsumerType(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm font-bold focus:outline-none focus:border-emerald-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Consumer Type</option>
                    {CONSUMER_TYPES.filter(ct => ct.category === tension).map(ct => (
                      <option key={ct.id} value={ct.id}>{ct.label}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Units Input */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
                    Consumption (Units)
                  </label>
                  <div className="relative group">
                    <input
                      type="number"
                      value={units}
                      onChange={(e) => setUnits(e.target.value)}
                      placeholder="0"
                      className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 text-white text-lg font-bold focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Load Input */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
                    Load (kW)
                  </label>
                  <div className="relative group">
                    <input
                      type="number"
                      value={load}
                      onChange={(e) => setLoad(e.target.value)}
                      placeholder="1"
                      className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 text-white text-lg font-bold focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <button 
                onClick={() => { setUnits(""); setLoad("1"); }}
                className="w-full py-4 rounded-2xl border border-white/5 bg-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:bg-white/10 hover:text-white transition-all active:scale-[0.98]"
              >
                Clear All Inputs
              </button>
            </div>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex gap-4">
            <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-1">Privacy First</h4>
              <p className="text-[10px] text-zinc-500 font-medium leading-relaxed"> Calculations are processed in your browser. No data is sent to any server. </p>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex gap-4">
            <Info className="h-5 w-5 text-blue-500 shrink-0" />
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-1">2025-26 Rates</h4>
              <p className="text-[10px] text-zinc-500 font-medium leading-relaxed"> Updated with the latest government tariff notification for all BD distributors. </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT: RESULT CARD ── */}
      <div className="lg:col-span-5 space-y-6 sticky top-24">
        <AnimatePresence mode="wait">
          {!calculation ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900/50 border border-dashed border-white/10 rounded-3xl p-12 text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Receipt className="h-8 w-8 text-zinc-700" />
              </div>
              <p className="text-sm font-bold text-zinc-600 uppercase tracking-widest mb-2">Ready to Calculate</p>
              <p className="text-[10px] text-zinc-700 font-medium max-w-[200px] mx-auto uppercase tracking-tighter">
                Enter your units to generate a detailed bill breakdown.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              key="result"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Main Bill Card */}
              <div className="bg-white rounded-3xl p-8 text-black shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <TrendingUp className="h-20 w-20" />
                </div>
                
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">Estimated Monthly Bill</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black tracking-tightest">৳{Math.round(calculation.total).toLocaleString()}</span>
                  <span className="text-xs font-black uppercase text-zinc-500">BDT</span>
                </div>

                <div className="space-y-4 pt-6 border-t border-black/5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Energy Charge</span>
                    <span className="text-sm font-bold">৳{calculation.energyCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Demand Charge</span>
                    <span className="text-sm font-bold">৳{calculation.demandCharge.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-600">
                    <span className="text-[10px] font-black uppercase tracking-widest">VAT (5%)</span>
                    <span className="text-sm font-bold">৳{calculation.vat.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown Accordion */}
              <div className="bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5 bg-white/5">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white">Tariff Slab Breakdown</h4>
                </div>
                <div className="p-6 space-y-3">
                  {calculation.breakdown.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5">
                      <div>
                        <p className="text-[10px] font-black text-white uppercase">{item.tier}</p>
                        <p className="text-[9px] text-zinc-500 font-medium">{item.units} Units × ৳{item.rate.toFixed(2)}</p>
                      </div>
                      <span className="text-xs font-bold text-zinc-300">৳{item.cost.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tip Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/5 flex gap-5">
                <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-white mb-1">Cost-Saving Tip</h5>
                  <p className="text-[10px] text-zinc-500 font-medium leading-relaxed">
                    Lifeline rate (৳4.63) applies only if your total usage is below 50 units. Once you cross 50 units, the Tier-1 rate increases to ৳5.26. Try to stay under 50 units!
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
