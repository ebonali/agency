"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, 
  Wallet, 
  TrendingUp, 
  ShieldCheck, 
  Info, 
  Users, 
  Baby,
  ArrowRight,
  PieChart,
  CircleDollarSign
} from "lucide-react";

interface IncomeData {
  basicSalary: string;
  houseRent: string;
  conveyance: string;
  medical: string;
  bonuses: string;
  overtime: string;
  otherIncome: string;
  advanceTax: string;
}

interface InvestmentData {
  shanchayPatra: string;
  dps: string;
  mutualFund: string;
  treasuryBond: string;
  stock: string;
  providentFundEmployee: string;
  providentFundEmployer: string;
  providentFundInterest: string;
}

const CATEGORIES = [
  { id: "general", label: "General Man", limit: 350000 },
  { id: "woman", label: "Woman", limit: 400000 },
  { id: "senior", label: "65+ Senior Citizen", limit: 400000 },
  { id: "disabled", label: "Physically Challenged", limit: 475000 },
  { id: "thirdGender", label: "Third Gender", limit: 475000 },
  { id: "freedomFighter", label: "Freedom Fighter", limit: 500000 },
];

export default function IncomeTaxCalculatorClient() {
  const [income, setIncome] = useState<IncomeData>({
    basicSalary: "", houseRent: "", conveyance: "", medical: "", 
    bonuses: "", overtime: "", otherIncome: "", advanceTax: ""
  });

  const [investment, setInvestment] = useState<InvestmentData>({
    shanchayPatra: "", dps: "", mutualFund: "", treasuryBond: "",
    stock: "", providentFundEmployee: "", providentFundEmployer: "", providentFundInterest: ""
  });

  const [category, setCategory] = useState("general");
  const [children, setChildren] = useState(0);

  const calculateTax = () => {
    const parse = (val: string) => parseFloat(val) || 0;
    
    // Total Earnings
    const totalEarnings = parse(income.basicSalary) + parse(income.houseRent) + 
                          parse(income.conveyance) + parse(income.medical) + 
                          parse(income.bonuses) + parse(income.overtime) + 
                          parse(income.otherIncome);

    // Exemptions (1/3 of total or 4.5L whichever is lower)
    const generalExemption = Math.min(totalEarnings / 3, 450000);
    const taxableIncome = Math.max(0, totalEarnings - generalExemption);

    // Category Limit
    const cat = CATEGORIES.find(c => c.id === category);
    let categoryLimit = cat ? cat.limit : 350000;
    categoryLimit += children * 50000;

    // Slabs
    let remainingTaxable = Math.max(0, taxableIncome - categoryLimit);
    const incomeForSlab = remainingTaxable;
    let taxBeforeRebate = 0;

    const slabs = [
      { amt: 100000, rate: 0.05 },
      { amt: 400000, rate: 0.10 },
      { amt: 500000, rate: 0.15 },
      { amt: 500000, rate: 0.20 },
      { amt: 2000000, rate: 0.25 },
      { amt: Infinity, rate: 0.30 },
    ];

    for (const slab of slabs) {
      if (remainingTaxable <= 0) break;
      const taxableInThisSlab = Math.min(remainingTaxable, slab.amt);
      taxBeforeRebate += taxableInThisSlab * slab.rate;
      remainingTaxable -= taxableInThisSlab;
    }

    // Rebate
    const totalInvest = Math.min(parse(investment.shanchayPatra), 500000) + 
                        Math.min(parse(investment.dps), 120000) + 
                        parse(investment.mutualFund) + parse(investment.treasuryBond) + 
                        parse(investment.stock) + parse(investment.providentFundEmployee) + 
                        parse(investment.providentFundEmployer) + parse(investment.providentFundInterest);
    
    // Rebate is 15% of investment, capped at 3% of taxable income or 10L
    const rebate = Math.min(totalInvest * 0.15, taxableIncome * 0.03, 1000000);
    
    let netTax = Math.max(0, taxBeforeRebate - rebate - parse(income.advanceTax));
    
    // Minimum Tax Rule
    if (taxableIncome > categoryLimit) {
      netTax = Math.max(netTax, 3000);
    } else {
      netTax = 0;
    }

    return {
      totalEarnings,
      generalExemption,
      taxableIncome,
      categoryLimit,
      incomeForSlab,
      taxBeforeRebate,
      totalInvest,
      rebate,
      netTax
    };
  };

  const results = calculateTax();

  const handleIncomeChange = (field: keyof IncomeData, value: string) => {
    setIncome(prev => ({ ...prev, [field]: value }));
  };

  const handleInvestChange = (field: keyof InvestmentData, value: string) => {
    setInvestment(prev => ({ ...prev, [field]: value }));
  };

  const InputField = ({ label, value, onChange, placeholder, icon: Icon, color }: any) => (
    <div className="group relative">
      <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-blue-400 transition-colors">
        {label}
      </label>
      <div className="relative">
        <div className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${color || 'text-zinc-600'}`}>
          <Icon className="h-full w-full" />
        </div>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-zinc-950 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-sm font-bold text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-zinc-800"
        />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Inputs */}
      <div className="lg:col-span-8 space-y-8">
        {/* Income Section */}
        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Wallet className="h-4 w-4 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tighter">Income Details</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Basic Salary" value={income.basicSalary} onChange={(v: string) => handleIncomeChange("basicSalary", v)} icon={Calculator} />
            <InputField label="House Rent" value={income.houseRent} onChange={(v: string) => handleIncomeChange("houseRent", v)} icon={Calculator} />
            <InputField label="Conveyance" value={income.conveyance} onChange={(v: string) => handleIncomeChange("conveyance", v)} icon={Calculator} />
            <InputField label="Medical" value={income.medical} onChange={(v: string) => handleIncomeChange("medical", v)} icon={Calculator} />
            <InputField label="Bonuses" value={income.bonuses} onChange={(v: string) => handleIncomeChange("bonuses", v)} icon={TrendingUp} color="text-emerald-400" />
            <InputField label="Overtime" value={income.overtime} onChange={(v: string) => handleIncomeChange("overtime", v)} icon={TrendingUp} />
            <InputField label="Other Income" value={income.otherIncome} onChange={(v: string) => handleIncomeChange("otherIncome", v)} icon={TrendingUp} />
            <InputField label="Paid Advance Tax (AIT)" value={income.advanceTax} onChange={(v: string) => handleIncomeChange("advanceTax", v)} icon={ShieldCheck} color="text-blue-400" />
          </div>
        </div>

        {/* Investment Section */}
        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tighter">Tax Rebate Investments</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Shanchay Patra" value={investment.shanchayPatra} onChange={(v: string) => handleInvestChange("shanchayPatra", v)} icon={ShieldCheck} />
            <InputField label="DPS" value={investment.dps} onChange={(v: string) => handleInvestChange("dps", v)} icon={ShieldCheck} />
            <InputField label="Mutual Fund" value={investment.mutualFund} onChange={(v: string) => handleInvestChange("mutualFund", v)} icon={ShieldCheck} />
            <InputField label="Treasury Bond" value={investment.treasuryBond} onChange={(v: string) => handleInvestChange("treasuryBond", v)} icon={ShieldCheck} />
            <InputField label="Stock Market" value={investment.stock} onChange={(v: string) => handleInvestChange("stock", v)} icon={ShieldCheck} />
            <InputField label="Provident Fund (Emp)" value={investment.providentFundEmployee} onChange={(v: string) => handleInvestChange("providentFundEmployee", v)} icon={ShieldCheck} />
            <InputField label="Provident Fund (Employer)" value={investment.providentFundEmployer} onChange={(v: string) => handleInvestChange("providentFundEmployer", v)} icon={ShieldCheck} />
            <InputField label="PF Net Interest" value={investment.providentFundInterest} onChange={(v: string) => handleInvestChange("providentFundInterest", v)} icon={ShieldCheck} />
          </div>
        </div>

        {/* Category Section */}
        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-4 w-4 text-zinc-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Tax Slayer Category</h3>
              </div>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                      category === cat.id 
                      ? 'bg-blue-500/10 border-blue-500/40 text-blue-400' 
                      : 'bg-zinc-950 border-white/5 text-zinc-500 hover:border-white/10 hover:text-zinc-300'
                    }`}
                  >
                    {cat.label} (Exempt: {cat.limit.toLocaleString()})
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Baby className="h-4 w-4 text-zinc-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Child Support</h3>
              </div>
              <p className="text-[10px] text-zinc-500 mb-4 leading-relaxed">
                Parents of physically/mentally unfit children receive an additional BDT 50,000 exemption per child.
              </p>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="h-12 w-12 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center text-white hover:bg-zinc-900"
                >
                  -
                </button>
                <div className="flex-1 h-12 rounded-xl bg-zinc-950 border border-blue-500/20 flex items-center justify-center font-bold text-white">
                  {children} Children
                </div>
                <button 
                  onClick={() => setChildren(children + 1)}
                  className="h-12 w-12 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center text-white hover:bg-zinc-900"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Results Sticky */}
      <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
        <div className="p-8 rounded-[2rem] bg-zinc-950 border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-red-500/20 transition-all duration-700" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest leading-none pt-1.5">
                Payable Tax
              </span>
              <CircleDollarSign className="h-5 w-5 text-zinc-700" />
            </div>

            <div className="mb-10">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-2">Net Tax Amount</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black tracking-tighter text-white">
                  ৳{results.netTax.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </span>
                <span className="text-zinc-600 text-xs font-bold">/ year</span>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/5">
              <div className="flex justify-between items-center group/item">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover/item:text-zinc-400 transition-colors">Gross Income</span>
                <span className="text-xs font-mono font-bold text-zinc-300">৳{results.totalEarnings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center group/item">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover/item:text-zinc-400 transition-colors">General Exemption</span>
                <span className="text-xs font-mono font-bold text-emerald-500">- ৳{results.generalExemption.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center group/item">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover/item:text-zinc-400 transition-colors">Taxable Income</span>
                <span className="text-xs font-mono font-bold text-zinc-300">৳{results.taxableIncome.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center group/item">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover/item:text-zinc-400 transition-colors">Tax Before Rebate</span>
                <span className="text-xs font-mono font-bold text-zinc-300">৳{results.taxBeforeRebate.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center group/item">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover/item:text-zinc-400 transition-colors">Max Rebate Availed</span>
                <span className="text-xs font-mono font-bold text-blue-400">- ৳{results.rebate.toLocaleString()}</span>
              </div>
              {parseFloat(income.advanceTax) > 0 && (
                <div className="flex justify-between items-center group/item">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover/item:text-zinc-400 transition-colors">Advance Tax Paid</span>
                  <span className="text-xs font-mono font-bold text-emerald-500">- ৳{parseFloat(income.advanceTax).toLocaleString()}</span>
                </div>
              )}
            </div>

            <button className="w-full mt-10 py-4 px-6 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-red-500 hover:text-white transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3 group/btn">
              Download Tax Report
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-zinc-900 border border-white/5 flex items-start gap-4">
          <div className="mt-1">
            <Info className="h-4 w-4 text-blue-400" />
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-2">Notice (FY 2025-26)</h4>
            <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">
              Calculations are based on current fiscal year guidelines. Tax-free slabs and rebate percentages are subject to NBR policy changes. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
