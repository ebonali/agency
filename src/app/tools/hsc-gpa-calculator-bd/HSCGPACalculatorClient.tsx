"use client";

import { useState, useEffect } from "react";
import { GraduationCap, BookOpen, Target, Trophy, Award, AlertCircle, Sparkles, LayoutDashboard, Calculator, BookMarked } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COMMON_SUBJECTS = [
  { id: "bangla", name: "Bangla", fullMarks: 200 },
  { id: "english", name: "English", fullMarks: 200 },
  { id: "ict", name: "Information & Comm. Technology (ICT)", fullMarks: 100 },
];

const GROUP_SUBJECTS: Record<string, { id: string; name: string; fullMarks: number }[]> = {
  science: [
    { id: "physics", name: "Physics", fullMarks: 200 },
    { id: "chemistry", name: "Chemistry", fullMarks: 200 },
    { id: "biology_math", name: "Biology / Math", fullMarks: 200 },
  ],
  business: [
    { id: "accounting", name: "Accounting", fullMarks: 200 },
    { id: "business_org", name: "Business Organization & Management", fullMarks: 200 },
    { id: "finance", name: "Finance, Banking & Insurance", fullMarks: 200 },
  ],
  humanities: [
    { id: "civics", name: "Civics & Good Governance", fullMarks: 200 },
    { id: "history", name: "History of Bangladesh & World Civilization", fullMarks: 200 },
    { id: "geography", name: "Geography & Environment", fullMarks: 200 },
  ],
};

const GROUP_OPTIONAL: Record<string, string[]> = {
  science: ["Biology", "Agriculture", "Higher Math", "Computer Science", "Engineering Drawing", "Fine Arts"],
  business: ["Marketing", "Cooperative", "Production Management & Entrepreneurship", "Higher Math", "Computer Science", "Fine Arts"],
  humanities: ["Psychology", "Sociology", "Logic", "Higher Math", "Computer Science", "Fine Arts"]
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

function marksToGPA(avgMark: number): string {
  if (avgMark >= 80) return "5.0";
  if (avgMark >= 70) return "4.0";
  if (avgMark >= 60) return "3.5";
  if (avgMark >= 50) return "3.0";
  if (avgMark >= 40) return "2.0";
  if (avgMark >= 33) return "1.0";
  return "0.0";
}

type GroupType = "science" | "business" | "humanities";

export default function HSCGPACalculatorClient() {
  const [group, setGroup] = useState<GroupType>("science");
  // state holds either grade directly, or calculated from mark
  const [subjectData, setSubjectData] = useState<Record<string, { grade: string, mark: string }>>({});
  const [optionalSubjectId, setOptionalSubjectId] = useState<string>("");

  useEffect(() => {
    setSubjectData({});
    // Default optional subject to the first one in the list for the group
    setOptionalSubjectId(GROUP_OPTIONAL[group][0]);
  }, [group]);

  const handleUpdate = (id: string, field: "grade" | "mark", value: string, fullMarks: number) => {
    setSubjectData(prev => {
      const current = prev[id] || { grade: "", mark: "" };
      let updated = { ...current, [field]: value };
      
      // Auto conversion logic
      if (field === "mark" && value !== "") {
        const markNum = parseFloat(value);
        if (!isNaN(markNum)) {
          const avgMark = fullMarks === 200 ? markNum / 2 : markNum;
          updated.grade = marksToGPA(avgMark);
        } else {
          updated.grade = "";
        }
      } else if (field === "grade" && value !== "") {
        updated.mark = ""; // Clear mark if grade is manually selected
      }

      return { ...prev, [id]: updated };
    });
  };

  const calculateResults = () => {
    const requiredSubjectIds = [
      ...COMMON_SUBJECTS.map(s => s.id), 
      ...GROUP_SUBJECTS[group].map(s => s.id)
    ]; // Fix: HSC consistently evaluates 6 main subjects + 1 separate optional entry in this UI
    
    let totalPoints = 0;
    let hasFGrade = false;
    let missingCount = 0;

    for (const id of requiredSubjectIds) {
      if (!subjectData[id]?.grade) {
        missingCount++;
      } else {
        const val = parseFloat(subjectData[id].grade);
        if (val === 0) hasFGrade = true;
        totalPoints += val;
      }
    }

    // Handled separately because it's a dynamic name
    if (optionalSubjectId && !subjectData["optional"]?.grade) {
      missingCount++;
    }

    if (missingCount > 0) {
      return { status: "incomplete", missingCount };
    }
    
    if (hasFGrade) {
      return { status: "fail", gpa: "0.00", totalPoints: 0, message: "Failed in one or more main subjects" };
    }

    const optVal = parseFloat(subjectData["optional"]?.grade || "0");
    const adjustedOpt = Math.max(0, optVal - 2); 
    
    totalPoints += adjustedOpt;
    const finalGpa = Math.min(5.0, totalPoints / 6); 

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
  const currentGroupSubjects = GROUP_SUBJECTS[group];
  const allCurrentSubjects = [...COMMON_SUBJECTS, ...currentGroupSubjects];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
      {/* Left Column: Inputs */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-8 flex flex-col gap-6"
      >
        <div className="rounded-2xl p-6 md:p-8 bg-black border border-white/5 relative group z-10">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 -z-10"></div>
          
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
                    layoutId="activeHscGroup"
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
              <div className="col-span-5">Subject Info</div>
              <div className="col-span-6 flex gap-2">
                <div className="flex-1">Total Marks</div>
                <div className="flex-1">Grade (Auto/Manual)</div>
              </div>
            </div>

            {/* All Subjects List */}
            <div className="space-y-4">
              {allCurrentSubjects.map((subject, index) => (
                <div key={subject.id} className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center p-4 sm:p-2 rounded-xl transition-colors border bg-zinc-900/30 sm:bg-transparent border-white/5 sm:border-none">
                  <div className="col-span-1 text-xs font-mono text-zinc-600 hidden sm:block">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="col-span-5">
                    <p className="font-semibold text-zinc-200 text-sm">
                      {subject.name}
                    </p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">{subject.fullMarks} Marks Total</p>
                  </div>
                  
                  {/* Mobile Divider */}
                  <div className="col-span-1 sm:hidden h-[1px] w-full bg-white/5 my-2"></div>
                  
                  {/* Inputs */}
                  <div className="col-span-6 flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 relative">
                      <input
                        type="number"
                        placeholder="Score"
                        min="0"
                        max={subject.fullMarks}
                        value={subjectData[subject.id]?.mark || ""}
                        onChange={(e) => handleUpdate(subject.id, "mark", e.target.value, subject.fullMarks)}
                        className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm font-bold focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-zinc-600"
                      />
                    </div>
                    <div className="flex-1 relative">
                      <select
                        value={subjectData[subject.id]?.grade || ""}
                        onChange={(e) => handleUpdate(subject.id, "grade", e.target.value, subject.fullMarks)}
                        className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm font-bold appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white cursor-pointer hover:bg-zinc-900"
                      >
                        <option value="" disabled className="text-zinc-600">Grade</option>
                        {GRADE_OPTIONS.map((g) => (
                          <option key={g.label} value={g.value}>
                            {g.label} ({g.value})
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none pb-0.5 text-zinc-500 text-xs">▼</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Explicit Optional Subject Selection Entry */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center p-4 sm:p-2 rounded-xl border bg-blue-500/5 border-blue-500/20">
                <div className="col-span-1 text-xs font-mono text-blue-400 hidden sm:block">
                  07
                </div>
                <div className="col-span-5">
                  <p className="font-semibold text-blue-400 text-sm flex items-center gap-2">
                    Optional Subject
                    <span className="px-2 py-0.5 rounded text-[8px] uppercase tracking-widest bg-blue-500/20 text-blue-400 border border-blue-500/20">4th Sub</span>
                  </p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">200 Marks Total</p>
                </div>
                
                <div className="col-span-1 sm:hidden h-[1px] w-full bg-white/5 my-2"></div>
                
                <div className="col-span-6 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="number"
                      placeholder="Score"
                      min="0"
                      max={200}
                      value={subjectData["optional"]?.mark || ""}
                      onChange={(e) => handleUpdate("optional", "mark", e.target.value, 200)}
                      className="w-full bg-black border border-blue-400/30 rounded-lg p-3 text-sm font-bold focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-white placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <select
                      value={subjectData["optional"]?.grade || ""}
                      onChange={(e) => handleUpdate("optional", "grade", e.target.value, 200)}
                      className="w-full bg-black border border-blue-400/30 rounded-lg p-3 text-sm font-bold appearance-none focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-white cursor-pointer hover:bg-zinc-900"
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

            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Optional Subject Assignment */}
            <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Sparkles className="h-16 w-16 text-blue-400" />
              </div>
              
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-6">
                <Award className="h-4 w-4" />
                Assign 4th Subject
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="col-span-8">
                  <p className="font-bold text-white text-sm">Which one is your optional?</p>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed max-w-sm">
                    In HSC, you can choose which of your group subjects acts as the 4th subject. Points above 2.0 will be added to your total.
                  </p>
                </div>
                <div className="col-span-4 relative">
                  <select
                    value={optionalSubjectId}
                    onChange={(e) => setOptionalSubjectId(e.target.value)}
                    className="w-full bg-blue-950/30 border border-blue-500/30 rounded-lg p-3 text-sm font-bold appearance-none focus:outline-none focus:border-blue-400 transition-all text-white cursor-pointer hover:bg-blue-900/40"
                  >
                    <option value="" disabled>Select Optional</option>
                    {GROUP_OPTIONAL[group].map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
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
                  <p className="text-zinc-500 text-sm font-medium">Enter your marks or grades to instantly see your HSC GPA.</p>
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
                      <p className="text-lg font-mono font-bold text-zinc-300">{results.purePoints} / 30.0</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-1">+ Optional</p>
                      <p className="text-lg font-mono font-bold text-blue-400">{results.adjustedOpt}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 w-full animate-pulse">
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest text-center">
                      Tip: Optional subject adds up to 3.0 points to your total.
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
              In HSC, the total basic points are calculated out of 6 subjects (Total max 30). Optional subject yields a maximum of 3 bonus points, making the ultimate total 33/6 = 5.5, capped automatically at <strong className="text-blue-300">GPA 5.00</strong>.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-zinc-900 border border-white/5 group hover:border-zinc-700 transition-colors">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
               Related Tool
            </h4>
            <p className="text-xs text-zinc-500 mb-4 font-medium leading-relaxed">
              Calculate your overall SSC result using our SSC GPA Calculator.
            </p>
            <a href="/tools/ssc-gpa-calculator-bd" className="inline-block text-xs font-bold bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors">
              SSC Calculator →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
