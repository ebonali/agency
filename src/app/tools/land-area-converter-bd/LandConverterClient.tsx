"use client";

import { useState, useMemo, useCallback } from "react";
import { ArrowUpDown, Copy, Check, RefreshCw, Ruler } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// All units with their value in Square Feet
const UNITS: { name: string; nameBn: string; sqft: number }[] = [
  { name: "Square Feet", nameBn: "বর্গ ফুট", sqft: 1 },
  { name: "Square Meter", nameBn: "বর্গ মিটার", sqft: 10.7639 },
  { name: "Square Yard", nameBn: "বর্গ গজ", sqft: 9 },
  { name: "Square Inch", nameBn: "বর্গ ইঞ্চি", sqft: 0.00694444 },
  { name: "Katha", nameBn: "কাঠা", sqft: 720 },
  { name: "Bigha", nameBn: "বিঘা", sqft: 14400 },
  { name: "Decimal", nameBn: "শতাংশ", sqft: 435.6 },
  { name: "Acre", nameBn: "একর", sqft: 43560 },
  { name: "Hectare", nameBn: "হেক্টর", sqft: 107639 },
  { name: "Shotangsho", nameBn: "শতাংশ", sqft: 435.6 },
  { name: "Chotak", nameBn: "ছটাক", sqft: 45 },
  { name: "Gonda", nameBn: "গণ্ডা", sqft: 864 },
  { name: "Kani", nameBn: "কানি", sqft: 17280 },
  { name: "Kora", nameBn: "কড়া", sqft: 216 },
  { name: "Til", nameBn: "তিল", sqft: 3.63 },
  { name: "Dhul", nameBn: "ধুল", sqft: 1.71428571429 },
  { name: "Renu", nameBn: "রেণু", sqft: 0.05714285714 },
  { name: "Kontho", nameBn: "কন্ঠ", sqft: 72 },
  { name: "Kak", nameBn: "কাক", sqft: 54 },
  { name: "Dondho", nameBn: "দণ্ড", sqft: 12 },
  { name: "Kranti", nameBn: "ক্রান্তি", sqft: 72.6 },
  { name: "Ojutangsho", nameBn: "অযুতাংশ", sqft: 4.356 },
  { name: "Square Link", nameBn: "বর্গ লিংক", sqft: 0.4356 },
  { name: "Square Chain", nameBn: "বর্গ চেইন", sqft: 4356 },
  { name: "Square Hat", nameBn: "বর্গ হাত", sqft: 2.25 },
  { name: "Ayer", nameBn: "আয়ের", sqft: 1076.39 },
  { name: "Satak", nameBn: "শতক", sqft: 435.6 },
];

const POPULAR_PRESETS = [
  { from: "Katha", to: "Square Feet" },
  { from: "Bigha", to: "Katha" },
  { from: "Decimal", to: "Square Feet" },
  { from: "Acre", to: "Bigha" },
  { from: "Hectare", to: "Acre" },
  { from: "Square Meter", to: "Square Feet" },
];

export default function LandConverterClient() {
  const [fromUnit, setFromUnit] = useState("Katha");
  const [toUnit, setToUnit] = useState("Square Feet");
  const [inputValue, setInputValue] = useState("1");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const val = parseFloat(inputValue);
    if (isNaN(val) || val < 0) return null;
    const fromSqft = UNITS.find(u => u.name === fromUnit)?.sqft ?? 1;
    const toSqft = UNITS.find(u => u.name === toUnit)?.sqft ?? 1;
    return (val * fromSqft) / toSqft;
  }, [inputValue, fromUnit, toUnit]);

  const allConversions = useMemo(() => {
    const val = parseFloat(inputValue);
    if (isNaN(val) || val < 0) return [];
    const fromSqft = UNITS.find(u => u.name === fromUnit)?.sqft ?? 1;
    const totalSqft = val * fromSqft;
    return UNITS.filter(u => u.name !== fromUnit).map(u => ({
      name: u.name,
      nameBn: u.nameBn,
      value: totalSqft / u.sqft,
    }));
  }, [inputValue, fromUnit]);

  const switchUnits = useCallback(() => {
    const oldFrom = fromUnit;
    setFromUnit(toUnit);
    setToUnit(oldFrom);
  }, [fromUnit, toUnit]);

  const handleCopy = () => {
    if (result === null) return;
    const fromBn = UNITS.find(u => u.name === fromUnit)?.nameBn ?? fromUnit;
    const toBn = UNITS.find(u => u.name === toUnit)?.nameBn ?? toUnit;
    const text = `${inputValue} ${fromUnit} (${fromBn}) = ${formatNum(result)} ${toUnit} (${toBn})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatNum = (n: number) => {
    if (Number.isInteger(n)) return n.toLocaleString();
    if (Math.abs(n) < 0.0001) return n.toExponential(4);
    return parseFloat(n.toFixed(6)).toLocaleString(undefined, { maximumFractionDigits: 6 });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 mb-32">
      {/* Main Converter */}
      <div className="bg-zinc-950 p-8 md:p-12 rounded-[32px] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Quick Presets */}
        <div className="flex flex-wrap gap-2 mb-10 relative z-10">
          {POPULAR_PRESETS.map((p, i) => (
            <button key={i} onClick={() => { setFromUnit(p.from); setToUnit(p.to); setInputValue("1"); }}
              className={`px-3 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all border ${fromUnit === p.from && toUnit === p.to ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'border-white/5 text-zinc-600 hover:border-white/20 hover:text-zinc-400'}`}>
              {p.from} → {p.to}
            </button>
          ))}
        </div>

        <div className="relative z-10 space-y-6">
          {/* From */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/60">From</label>
            <div className="flex gap-4">
              <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} min="0" step="any"
                className="flex-1 bg-transparent border-b-2 border-white/10 py-4 text-3xl md:text-4xl font-black text-white focus:outline-none focus:border-emerald-500 transition-all" />
              <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}
                className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold text-white focus:outline-none focus:border-emerald-500 transition-all min-w-[140px] [color-scheme:dark]">
                {UNITS.map(u => <option key={u.name} value={u.name}>{u.name} ({u.nameBn})</option>)}
              </select>
            </div>
          </div>

          {/* Switch */}
          <div className="flex justify-center">
            <button onClick={switchUnits}
              className="p-3 rounded-2xl bg-white/5 hover:bg-emerald-500/20 border border-white/5 hover:border-emerald-500/30 text-zinc-500 hover:text-emerald-400 transition-all">
              <ArrowUpDown className="h-5 w-5" />
            </button>
          </div>

          {/* To */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/60">To</label>
            <div className="flex gap-4">
              <div className="flex-1 border-b-2 border-emerald-500/30 py-4">
                <div className="text-3xl md:text-4xl font-black text-emerald-400">
                  {result !== null ? formatNum(result) : "—"}
                </div>
              </div>
              <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}
                className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold text-white focus:outline-none focus:border-emerald-500 transition-all min-w-[140px] [color-scheme:dark]">
                {UNITS.map(u => <option key={u.name} value={u.name}>{u.name} ({u.nameBn})</option>)}
              </select>
            </div>
          </div>

          {/* Formula */}
          {result !== null && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 text-center">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                1 {fromUnit} = {formatNum((UNITS.find(u => u.name === fromUnit)?.sqft ?? 1) / (UNITS.find(u => u.name === toUnit)?.sqft ?? 1))} {toUnit}
              </p>
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <button onClick={handleCopy}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-black font-black uppercase tracking-widest text-[9px] hover:bg-emerald-400 transition-all">
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied!" : "Copy Result"}
            </button>
            <button onClick={() => { setInputValue("1"); setFromUnit("Katha"); setToUnit("Square Feet"); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-all">
              <RefreshCw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>
        </div>
      </div>

      {/* All Conversions Table */}
      <AnimatePresence>
        {allConversions.length > 0 && parseFloat(inputValue) > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-zinc-950 rounded-[32px] border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
                <Ruler className="h-3.5 w-3.5 text-emerald-500/50" />
                {inputValue} {fromUnit} in All Units
              </h3>
            </div>
            <div className="divide-y divide-white/5 max-h-[500px] overflow-y-auto">
              {allConversions.map((c, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-3 hover:bg-white/[0.02] transition-colors group">
                  <div>
                    <span className="text-xs font-bold text-white">{c.name}</span>
                    <span className="text-[9px] text-zinc-600 ml-2 font-bold">({c.nameBn})</span>
                  </div>
                  <span className="text-sm font-black text-emerald-400/80 group-hover:text-emerald-400 transition-colors tabular-nums">
                    {formatNum(c.value)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
