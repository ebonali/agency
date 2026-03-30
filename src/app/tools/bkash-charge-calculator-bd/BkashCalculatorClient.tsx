"use client";

import { useState } from "react";
import { InfoIcon, Smartphone, Building2, UserCircle2, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BkashCalculatorClient() {
  const [amount, setAmount] = useState<string>("");
  const [method, setMethod] = useState<"app" | "ussd">("app");
  const [partner, setPartner] = useState<"standard" | "priyo">("standard");

  const rates = {
    cashout: {
      app: { standard: 0.0185, priyo: 0.0149 },
      ussd: { standard: 0.0185, priyo: 0.0185 },
    }
  };

  const calculateResults = () => {
    const numAmount = parseFloat(amount) || 0;
    
    if (numAmount === 0 || isNaN(numAmount)) {
      return { charge: "0.00", total: "0.00", receive: "0.00" };
    }

    const rate = rates.cashout[method][partner];
    const charge = numAmount * rate;
    return {
      charge: charge.toFixed(2),
      total: (numAmount + charge).toFixed(2),
      receive: (numAmount - charge).toFixed(2),
    };
  };

  const results = calculateResults();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
      {/* Calculator Card */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-12 xl:col-span-7 relative group"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative rounded-2xl p-6 md:p-10 bg-black border border-white/5 h-full flex flex-col justify-between">
          <div className="space-y-10">
            {/* Amount Input */}
            <div className="relative">
              <label 
                htmlFor="bkash-amount" 
                className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500 mb-4 block"
              >
                Transaction Amount
              </label>
              <div className="relative group/input">
                <input
                  id="bkash-amount"
                  type="number"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-zinc-950/50 border-b-2 border-white/5 rounded-t-xl p-8 pr-16 text-5xl md:text-6xl font-bold text-white focus:outline-none focus:border-white transition-all placeholder:text-zinc-900"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-6 text-2xl font-medium text-zinc-700 pointer-events-none group-focus-within/input:text-white transition-colors">
                  ৳
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Method Selection */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="h-3 w-3 text-zinc-500" />
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500 block">
                    Method
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-zinc-950/50 border border-white/5 shadow-inner">
                  {(["app", "ussd"] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMethod(m)}
                      className={`relative px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
                        method === m
                          ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                          : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      {m === "ussd" ? "*247#" : m}
                      {method === m && (
                        <motion.div 
                          layoutId="activeMethod"
                          className="absolute inset-0 bg-white rounded-lg -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Partner Selection */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <UserCircle2 className="h-3 w-3 text-zinc-500" />
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500 block">
                    Agent Type
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-zinc-950/50 border border-white/5 shadow-inner">
                  {(["standard", "priyo"] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPartner(p)}
                      className={`relative px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
                        partner === p
                          ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                          : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      {p === "priyo" ? "Priyo" : "Standard"}
                      {partner === p && (
                        <motion.div 
                          layoutId="activePartner"
                          className="absolute inset-0 bg-white rounded-lg -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </motion.div>

      {/* Result Card */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6"
      >
        <div className="rounded-2xl p-8 bg-zinc-950 border border-white/5 relative overflow-hidden h-full flex flex-col">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Building2 className="h-32 w-32 text-white" />
          </div>
          
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-10 pb-4 border-b border-white/5">
            Calculation Results
          </h3>
          
          <div className="flex-1 space-y-10">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Charge Amount</span>
                <p className="text-xs text-zinc-700 italic">Fee for this transaction</p>
              </div>
              <motion.div 
                key={results.charge}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-3xl font-bold font-mono text-white"
              >
                ৳ {results.charge}
              </motion.div>
            </div>
            
            <div className="relative py-10 px-6 -mx-6 bg-white shadow-[0_20px_50px_rgba(255,255,255,0.05)]">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <span className="text-black text-[10px] uppercase font-bold tracking-widest">Total Needed</span>
                  <p className="text-[10px] text-zinc-500 font-medium">Original + Service Charge</p>
                </div>
                <motion.div 
                  key={results.total}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-4xl font-black font-mono text-black"
                >
                  ৳ {results.total}
                </motion.div>
              </div>
              <div className="absolute top-2 right-4">
                <Zap className="h-4 w-4 text-zinc-200" />
              </div>
            </div>
            
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Will Receive</span>
                <p className="text-[10px] text-zinc-600">If charge is deducted from amount</p>
              </div>
              <motion.div 
                key={results.receive}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold font-mono text-zinc-400"
              >
                ৳ {results.receive}
              </motion.div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 justify-end text-[10px] font-bold uppercase tracking-widest">
              <span className="text-zinc-500">Effective rate:</span>
              <span className="text-white px-2 py-1 bg-zinc-900 rounded border border-white/5">
                {((parseFloat(results.charge) / (parseFloat(amount) || 1)) * 100).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="rounded-2xl p-6 border border-white/10 bg-black relative group"
        >
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
          <h4 className="font-bold text-[10px] uppercase tracking-widest text-white mb-4 flex items-center gap-2">
            <Zap className="h-3 w-3 text-white" />
            Savings Guide
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-medium">
            Use the <strong className="text-white">bKash App</strong> and set a <strong className="text-white">Priyo Agent</strong> to unlock the lowest <strong className="text-white">1.49%</strong> fee.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
