"use client";

import { useState, useEffect } from "react";
import { GraduationCap, BookOpen, Target, Trophy, Award, AlertCircle, Sparkles, LayoutDashboard, Calculator, BookMarked } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COMMON_SUBJECTS = [
  { id: "bangla", name: "Bangla" },
  { id: "english", name: "English" },
  { id: "math", name: "Mathematics" },
  { id: "religion", name: "Religion & Moral Education" },
  { id: "ict", name: "Info & Comm Technology" },
  { id: "bgs", name: "General Science / BGS" },
];

const GROUP_SUBJECTS: Record<string, { id: string; name: string }[]> = {
  science: [
    { id: "physics", name: "Physics" },
    { id: "chemistry", name: "Chemistry" },
    { id: "biology", name: "Biology / Higher Math" },
  ],
  business: [
    { id: "accounting", name: "Accounting" },
    { id: "finance", name: "Finance & Banking" },
    { id: "business_ent", name: "Business Entrepreneurship" },
  ],
  humanities: [
    { id: "geography", name: "Geography & Environment" },
    { id: "history", name: "History of Bangladesh" },
    { id: "civics", name: "Civics & Citizenship" },
  ],
};

const GRADE_OPTIONS = [
  { label: "A+", value: "5.0", color: "text-emerald-400" },
  { label: "A", value: "4.0", color: "text-green-400" },
  { label: "A-", value: "3.5", color: "text-lime-400" },
  { label: "B", value: "3.0", color: "text-yellow-400" },
  { label: "C", value: "2.0", color: "text-orange-400" },
  { label: "D", value: "1.0", color: "text-rose-400" },
  { label: "F", value: "0.0", color: "text-red-500" },
];

type GroupType = "science" | "business" | "humanities";

export default function SSCGPACalculatorClient() {
  const [group, setGroup] = useState<GroupType>("science");
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [optionalGrade, setOptionalGrade] = useState<string>("");

  // Clear inputs when group changes
  useEffect(() => {
    setGrades({});
    setOptionalGrade("");
  }, [group]);

  const handleGradeChange = (id: string, value: string) => {
    setGrades(prev => ({ ...prev, [id]: value }));
  };

  const calculateResults = () => {
    const requiredSubjectIds = [...COMMON_SUBJECTS.map(s => s.id), ...GROUP_SUBJECTS[group].map(s => s.id)];
    
    let totalPoints = 0;
    let hasFGrade = false;
    let missingCount = 0;

    for (const id of requiredSubjectIds) {
      if (!grades[id]) {
        missingCount++;
      } else {
        const val = parseFloat(grades[id]);
        if (val === 0) hasFGrade = true;
        totalPoints += val;
      }
    }

    if (!optionalGrade) missingCount++;

    if (missingCount > 0) {
      return { status: "incomplete", missingCount };
    }
    
    if (hasFGrade) {
      return { status: "fail", gpa: "0.00", totalPoints: 0, message: "Failed in one or more subjects" };
    }

    const optVal = parseFloat(optionalGrade);
    const adjustedOpt = Math.max(0, optVal - 2);
    
    totalPoints += adjustedOpt;
    const finalGpa = Math.min(5.0, totalPoints / 9);

    let message = "";
    if (finalGpa === 5.0) message = "Outstanding! You got a Golden A+";
    else if (finalGpa >= 4.0) message = "Excellent performance!";
    else if (finalGpa >= 3.5) message = "Very good result!";
    else if (finalGpa >= 3.0) message = "Good effort!";
    else message = "You have passed.";

    return { 
      status: "success", 
      gpa: finalGpa.toFixed(2), 
      totalPoints: totalPoints.toFixed(2),
      message,
      purePoints: (totalPoints - adjustedOpt).toFixed(2),
      adjustedOpt: adjustedOpt.toFixed(2)
    };
  };

  const results = calculateResults();
  const currentSubjects = [...COMMON_SUBJECTS, ...GROUP_SUBJECTS[group]];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
      {/* Left Column: Inputs */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-8 flex flex-col gap-6"
      >
        <div className="rounded-2xl p-6 md:p-8 bg-black border border-white/5 relative group z-10">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 -z-10"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <LayoutDashboard className="h-5 w-5 text-blue-400" />
              Select Group
            </h3>
          </div>
          
          {/* Group Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1 rounded-xl bg-zinc-950 border border-white/5 mb-10">
            {(["science", "business", "humanities"] as const).map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={`relative px-4 py-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
                  group === g
                    ? "bg-white text-black shadow-lg"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                }`}
              >
                {g}
                {group === g && (
                  <motion.div 
                    layoutId="activeGroupGpa"
                    className="absolute inset-0 bg-white rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {/* Table Header */}
            <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              <div className="col-span-1">No.</div>
              <div className="col-span-7">Subject Info</div>
              <div className="col-span-4 text-right pr-2">Target Grade</div>
            </div>

            {/* Main Subjects */}
            <div className="space-y-4">
              {currentSubjects.map((subject, index) => (
                <div key={subject.id} className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center p-4 sm:p-2 rounded-xl bg-zinc-900/30 sm:bg-transparent border border-white/5 sm:border-none">
                  <div className="col-span-1 text-xs font-mono text-zinc-600 hidden sm:block">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="col-span-7">
                    <p className="font-semibold text-zinc-200 text-sm">{subject.name}</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1 sm:hidden">Compulsory Subject</p>
                  </div>
                  <div className="col-span-1 sm:hidden h-[1px] w-full bg-white/5 my-2"></div>
                  <div className="col-span-4 relative">
                    <select
                      value={grades[subject.id] || ""}
                      onChange={(e) => handleGradeChange(subject.id, e.target.value)}
                      className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm font-bold appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white cursor-pointer hover:bg-zinc-900"
                    >
                      <option value="" disabled className="text-zinc-600">Select Grade</option>
                      {GRADE_OPTIONS.map((g) => (
                        <option key={g.label} value={g.value}>
                          {g.label} ({g.value})
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none pb-0.5 text-zinc-500 text-xs">▼</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Optional Subject */}
            <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Sparkles className="h-16 w-16 text-blue-400" />
              </div>
              
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-6">
                <Award className="h-4 w-4" />
                Optional Subject (4th)
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="col-span-8">
                  <p className="font-bold text-white text-sm">Select Optional Subject Grade</p>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed max-w-sm">
                    Points above 2.0 will be added to your total. Grades below C do not affect GPA.
                  </p>
                </div>
                <div className="col-span-4 relative">
                  <select
                    value={optionalGrade || ""}
                    onChange={(e) => setOptionalGrade(e.target.value)}
                    className="w-full bg-blue-950/30 border border-blue-500/30 rounded-lg p-3 text-sm font-bold appearance-none focus:outline-none focus:border-blue-400 transition-all text-white cursor-pointer hover:bg-blue-900/40"
                  >
                    <option value="" disabled className="text-zinc-600">Grade</option>
                    {GRADE_OPTIONS.map((g) => (
                      <option key={g.label} value={g.value}>
                        {g.label} ({g.value})
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none pb-0.5 text-blue-400 text-xs">▼</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Sticky Results */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-4"
      >
        <div className="sticky top-24 space-y-6">
          <div className="rounded-2xl p-8 bg-zinc-950 border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden h-[400px]">
            {/* Background embellishments */}
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <Target className="h-32 w-32 text-white" />
            </div>

            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8 w-full border-b border-white/5 pb-4">
              Result Overview
            </h3>

            <AnimatePresence mode="wait">
              {results.status === "incomplete" ? (
                <motion.div
                  key="incomplete"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center flex-1 w-full"
                >
                  <div className="h-24 w-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                    <Calculator className="h-10 w-10 text-zinc-600" />
                  </div>
                  <p className="text-zinc-500 text-sm font-medium">Enter your grades to instantly see your SSC GPA result.</p>
                </motion.div>
              ) : results.status === "fail" ? (
                <motion.div
                  key="fail"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center flex-1 w-full"
                >
                  <div className="h-32 w-32 rounded-full border-4 border-red-500/20 flex flex-col items-center justify-center mb-6 relative">
                    <AlertCircle className="h-10 w-10 text-red-500 mb-2" />
                    <span className="text-2xl font-black text-white">0.00</span>
                  </div>
                  <h4 className="text-lg font-bold text-red-400 mb-2">Unsuccessful</h4>
                  <p className="text-zinc-500 text-sm">{results.message}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center flex-1 w-full"
                >
                  <div className={`
                    h-40 w-40 rounded-full border-[6px] flex flex-col items-center justify-center mb-6 relative
                    ${results.gpa === "5.00" ? "border-amber-400/80 bg-amber-400/5 shadow-[0_0_50px_rgba(251,191,36,0.2)]" : "border-blue-500/50 bg-blue-500/5"}
                  `}>
                    {results.gpa === "5.00" && (
                      <div className="absolute -top-4 -right-2">
                        <Trophy className="h-10 w-10 text-amber-400 drop-shadow-lg" />
                      </div>
                    )}
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest mb-1">Your GPA</span>
                    <span className={`text-5xl font-black font-mono tracking-tighter ${results.gpa === "5.00" ? "text-amber-400" : "text-white"}`}>
                      {results.gpa}
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-white mb-4 text-lg">{results.message}</h4>
                  
                  <div className="flex gap-4 w-full bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex-1 border-r border-white/10">
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Main Pts</p>
                      <p className="text-lg font-mono font-bold text-zinc-300">{results.purePoints}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-1">+ Optional</p>
                      <p className="text-lg font-mono font-bold text-blue-400">{results.adjustedOpt}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 w-full animate-pulse">
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest text-center">
                      Tip: Score A+ in your optional subject to maximize your final GPA.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="rounded-2xl p-6 bg-blue-500/10 border border-blue-500/20">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
              <BookMarked className="h-3 w-3" />
              Did You Know?
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Your 4th (optional) subject provides bonus points. Only points above 2.0 are added to your total, meaning a good optional grade drastically increases your chances of a <strong className="text-blue-300">GPA 5.00</strong>.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-zinc-900 border border-white/5 group hover:border-zinc-700 transition-colors">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
               Next Step
            </h4>
            <p className="text-xs text-zinc-500 mb-4 font-medium leading-relaxed">
              Try our HSC GPA Calculator to estimate your higher secondary result.
            </p>
            <a href="/tools/hsc-gpa-calculator-bd" className="inline-block text-xs font-bold bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors">
              HSC Calculator →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
