"use client";

import { useState, useMemo } from "react";
import { InfoIcon, Calendar, Banknote, Clock, Percent, ShieldCheck, Zap, Receipt, Calculator, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoanCalculatorClient() {
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [disbursementDate, setDisbursementDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [months, setMonths] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);

  const results = useMemo(() => {
    const P = parseFloat(loanAmount.replace(/,/g, '')) || 0;
    const annualRate = parseFloat(interestRate) || 0;
    const n = parseInt(months) || 0;
    
    if (P === 0 || n === 0 || annualRate === 0) {
      return null;
    }

    // Standard Bank EMI formula (Reducing Balance)
    const r = (annualRate / 12) / 100;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    const formattedDate = new Date(disbursementDate).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).replace(/ /g, '-');

    return {
      emi: emi.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      disDate: formattedDate,
      amount: P.toLocaleString(),
      schedules: n,
      rate: annualRate.toFixed(2)
    };
  }, [loanAmount, disbursementDate, months, interestRate]);

  const handleReset = () => {
    setLoanAmount("");
    setMonths("");
    setInterestRate("");
    setDisbursementDate(new Date().toISOString().split('T')[0]);
    setShowResult(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Input Form - EBL Style */}
        <div className="bg-zinc-950/50 p-8 rounded-[40px] border border-white/5 backdrop-blur-xl shadow-2xl">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Date */}
              <div>
                <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-3 block">
                  Disbursement Date <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="date"
                  value={disbursementDate}
                  onChange={(e) => setDisbursementDate(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-sm font-bold text-white focus:outline-none focus:border-white transition-all invert-calendar"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-3 block">
                  Loan Amount <span className="text-emerald-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="Enter Loan Amount"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 pl-12 text-sm font-bold text-white focus:outline-none focus:border-white transition-all"
                  />
                  <Banknote className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Months */}
                <div>
                  <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-3 block">
                    Number of Month <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    placeholder="Duration"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-sm font-bold text-white focus:outline-none focus:border-white transition-all"
                  />
                </div>

                {/* Rate */}
                <div>
                  <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-3 block">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="00.00"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-sm font-bold text-white focus:outline-none focus:border-white transition-all"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => setShowResult(true)}
                  className="flex-1 bg-white text-black h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 group"
                >
                  <Calculator className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  Calculate
                </button>
                <button 
                  onClick={handleReset}
                  className="px-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <RotateCcw className="h-4 w-4 text-zinc-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Result Table - EBL Style */}
        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {showResult && results ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl rounded-full" />
                <div className="relative bg-zinc-950 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
                  <div className="p-8 bg-zinc-900/50 border-b border-white/5">
                     <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Repayment Summary</h3>
                  </div>
                  
                  <div className="p-0">
                    <table className="w-full border-collapse">
                      <tbody className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                        <tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                          <td className="p-6 text-zinc-500 border-r border-white/5 w-1/2">Disbursement Date</td>
                          <td className="p-6 text-white text-right">{results.disDate}</td>
                        </tr>
                        <tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                          <td className="p-6 text-zinc-500 border-r border-white/5">Loan Amount:</td>
                          <td className="p-6 text-white text-right">৳ {results.amount}</td>
                        </tr>
                        <tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                          <td className="p-6 text-zinc-500 border-r border-white/5">Number of shedule:</td>
                          <td className="p-6 text-white text-right">{results.schedules}</td>
                        </tr>
                        <tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                          <td className="p-6 text-zinc-500 border-r border-white/5">Interest Rate:</td>
                          <td className="p-6 text-white text-right font-mono">{results.rate} %</td>
                        </tr>
                        <tr className="bg-white group transition-all">
                          <td className="p-8 text-black font-black text-xs border-r border-black/5">Emi Amount:</td>
                          <td className="p-8 text-black text-right font-black text-2xl font-mono">
                            ৳ {results.emi}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-12 text-center rounded-[40px] border border-dashed border-white/10">
                <div className="p-4 rounded-full bg-white/5 mb-6">
                  <Receipt className="h-8 w-8 text-zinc-800" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Enter loan details and click calculate to view schedule</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-20 pt-10 border-t border-white/5">
        <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest leading-relaxed max-w-2xl">
          <strong className="text-zinc-400">Disclaimer:</strong> "EMI Amount calculated here may vary marginally from the actual EMI from loan disbursement depending on different EMI dates"
        </p>
      </div>
    </div>
  );
}
