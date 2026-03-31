"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { Calendar, RefreshCw, Clock, CalendarDays, Timer, Check, Copy, Users, ChevronDown, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Animated number counter
function AnimatedNumber({ value, duration = 800 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    const start = display;
    const diff = value - start;
    if (diff === 0) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) ref.current = requestAnimationFrame(step);
    };
    ref.current = requestAnimationFrame(step);
    return () => { if (ref.current) cancelAnimationFrame(ref.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);
  return <>{display.toLocaleString()}</>;
}

const AVG_LIFESPAN = 72.3; // Bangladesh avg

export default function AgeCalculatorClient() {
  const [dob, setDob] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [compareDate, setCompareDate] = useState("");
  const [showCompare, setShowCompare] = useState(false);
  const [copied, setCopied] = useState(false);
  const [useBDTime, setUseBDTime] = useState(false);
  const resultCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const now = new Date();
    setTargetDate(now.toISOString().split("T")[0]);
  }, []);

  const results = useMemo(() => {
    if (!dob || !targetDate) return null;
    let start = new Date(dob);
    let end = new Date(targetDate);
    if (useBDTime) {
      const bdOffset = 6 * 60;
      const localOffset = end.getTimezoneOffset();
      end = new Date(end.getTime() + (bdOffset + localOffset) * 60000);
    }
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return null;
    if (start > end) return { error: "Date of birth cannot be after target date." } as const;

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    if (days < 0) { months -= 1; days += new Date(end.getFullYear(), end.getMonth(), 0).getDate(); }
    if (months < 0) { years -= 1; months += 12; }

    const diffMs = Math.abs(end.getTime() - start.getTime());
    const totalDays = Math.floor(diffMs / 86400000);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    const lifePercent = Math.min(((years + months / 12) / AVG_LIFESPAN) * 100, 100);

    // Next birthday
    const nextBday = new Date(start);
    nextBday.setFullYear(end.getFullYear());
    if (nextBday <= end) nextBday.setFullYear(end.getFullYear() + 1);
    const daysToBday = Math.ceil((nextBday.getTime() - end.getTime()) / 86400000);

    // Milestones
    const milestones: { label: string; reached: boolean; detail: string }[] = [];
    const ageYears = years;
    const checkMs = [
      { label: "10,000 Days", target: 10000, unit: "days" },
      { label: "20,000 Days", target: 20000, unit: "days" },
      { label: "1 Billion Seconds", target: 1000000000, unit: "seconds" },
    ];
    checkMs.forEach(m => {
      const reached = m.unit === "days" ? totalDays >= m.target : totalSeconds >= m.target;
      const dateReached = m.unit === "days"
        ? new Date(start.getTime() + m.target * 86400000)
        : new Date(start.getTime() + m.target * 1000);
      milestones.push({
        label: m.label,
        reached,
        detail: reached
          ? `Reached on ${dateReached.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`
          : `On ${dateReached.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`
      });
    });
    const decades = [18, 25, 30, 40, 50, 60, 70];
    decades.forEach(d => {
      if (d > ageYears && d <= ageYears + 10) {
        const bday = new Date(start);
        bday.setFullYear(start.getFullYear() + d);
        milestones.push({ label: `${d}th Birthday`, reached: false, detail: bday.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) });
      }
    });

    return { years, months, days, totalDays, totalWeeks, totalMonths, totalHours, totalMinutes, totalSeconds, lifePercent, daysToBday, nextBday: nextBday.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }), milestones };
  }, [dob, targetDate, useBDTime]);

  const compareResults = useMemo(() => {
    if (!dob || !compareDate || !targetDate) return null;
    const d1 = new Date(dob);
    const d2 = new Date(compareDate);
    const end = new Date(targetDate);
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return null;
    const diffMs = Math.abs(d1.getTime() - d2.getTime());
    const diffDays = Math.floor(diffMs / 86400000);
    let yrs = 0, mos = 0, dys = 0;
    const older = d1 < d2 ? d1 : d2;
    const younger = d1 < d2 ? d2 : d1;
    yrs = younger.getFullYear() - older.getFullYear();
    mos = younger.getMonth() - older.getMonth();
    dys = younger.getDate() - older.getDate();
    if (dys < 0) { mos--; dys += new Date(younger.getFullYear(), younger.getMonth(), 0).getDate(); }
    if (mos < 0) { yrs--; mos += 12; }
    return { years: yrs, months: mos, days: dys, totalDays: diffDays, youAreOlder: d1 < d2 };
  }, [dob, compareDate, targetDate]);

  const handleCopy = () => {
    if (!results || 'error' in results) return;
    const text = `Age: ${results.years}y ${results.months}m ${results.days}d | Total Days: ${results.totalDays.toLocaleString()} | Seconds Lived: ${results.totalSeconds.toLocaleString()} | Next Birthday: ${results.nextBday}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hasResults = results && !('error' in results);

  return (
    <div className="max-w-4xl mx-auto space-y-8 mb-32">
      {/* Input Card */}
      <div className="bg-zinc-950 p-8 md:p-12 rounded-[32px] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              <Calendar className="h-3.5 w-3.5 text-emerald-500" /> Date of Birth
            </label>
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white/5 py-4 text-2xl font-black text-white focus:outline-none focus:border-emerald-500 transition-all [color-scheme:dark]" />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              <Clock className="h-3.5 w-3.5 text-emerald-500" /> Age on Date
            </label>
            <input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white/5 py-4 text-2xl font-black text-white focus:outline-none focus:border-emerald-500 transition-all [color-scheme:dark]" />
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-between items-center gap-4 relative z-10">
          <div className="flex gap-3">
            <button onClick={() => setUseBDTime(!useBDTime)}
              className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${useBDTime ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-white/5 text-zinc-600 hover:border-white/20'}`}>
              🇧🇩 BD Time
            </button>
            <button onClick={() => setShowCompare(!showCompare)}
              className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border flex items-center gap-1.5 ${showCompare ? 'bg-white border-white text-black' : 'border-white/5 text-zinc-600 hover:border-white/20'}`}>
              <Users className="h-3 w-3" /> Compare
            </button>
          </div>
          <button onClick={() => { setDob(""); setTargetDate(new Date().toISOString().split("T")[0]); setCompareDate(""); }}
            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-zinc-500"><RefreshCw className="h-4 w-4" /></button>
        </div>
      </div>

      {/* Compare Input */}
      <AnimatePresence>
        {showCompare && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="bg-zinc-950 p-8 rounded-3xl border border-white/5 overflow-hidden">
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-3">
              <Users className="h-3.5 w-3.5 text-emerald-500" /> Other Person&apos;s Date of Birth
            </label>
            <input type="date" value={compareDate} onChange={(e) => setCompareDate(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white/5 py-3 text-xl font-bold text-white focus:outline-none focus:border-emerald-500 transition-all [color-scheme:dark]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error */}
      {results && 'error' in results && (
        <div className="p-6 rounded-3xl bg-red-500/5 border border-red-500/20 text-red-400 text-center text-xs font-bold uppercase tracking-widest">{results.error}</div>
      )}

      {/* Results */}
      <AnimatePresence mode="wait">
        {hasResults && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-6">
            {/* Primary Age Card */}
            <div ref={resultCardRef} className="bg-zinc-950 p-10 md:p-16 rounded-[40px] border border-emerald-500/20 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500/50 mb-8">Your Exact Age</h3>
              <div className="flex flex-wrap justify-center items-end gap-x-8 gap-y-6 mb-8">
                {[
                  { val: results.years, lbl: "Years" },
                  { val: results.months, lbl: "Months" },
                  { val: results.days, lbl: "Days" },
                ].map((u) => (
                  <div key={u.lbl} className="text-center">
                    <div className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-2"><AnimatedNumber value={u.val} /></div>
                    <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{u.lbl}</div>
                  </div>
                ))}
              </div>

              {/* Life Progress */}
              <div className="max-w-md mx-auto mt-10">
                <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-2">
                  <span>Life Progress (avg {AVG_LIFESPAN}y)</span>
                  <span className="text-emerald-500">{results.lifePercent.toFixed(1)}%</span>
                </div>
                <div className="h-3 rounded-full bg-zinc-900 overflow-hidden border border-white/5">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${results.lifePercent}%` }} transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-3">
                <button onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-black font-black uppercase tracking-widest text-[9px] hover:bg-emerald-400 transition-all">
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied!" : "Copy Results"}
                </button>
              </div>
            </div>

            {/* Time Detail Expansion */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Total Days", value: results.totalDays, icon: CalendarDays },
                { label: "Total Weeks", value: results.totalWeeks, icon: Calendar },
                { label: "Total Months", value: results.totalMonths, icon: Timer },
                { label: "Total Hours", value: results.totalHours, icon: Clock },
                { label: "Total Minutes", value: results.totalMinutes, icon: Clock },
                { label: "Total Seconds", value: results.totalSeconds, icon: Timer },
              ].map((s, i) => (
                <div key={i} className="bg-zinc-950 p-6 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all">
                  <s.icon className="h-4 w-4 text-emerald-500/40 mb-3" />
                  <div className="text-xl md:text-2xl font-black text-white mb-1"><AnimatedNumber value={s.value} duration={1000} /></div>
                  <div className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Wow Statement */}
            <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/5 text-center">
              <p className="text-xs text-zinc-400 italic">
                You have lived approximately <strong className="text-white">{results.totalSeconds.toLocaleString()}</strong> seconds and counting…
              </p>
            </div>

            {/* Birthday Countdown */}
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                  <Calendar className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Next Birthday</h4>
                  <p className="text-xs text-zinc-500">{results.nextBday}</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-2xl font-black text-emerald-500 italic">
                  {results.daysToBday === 0 ? "🎂 Happy Birthday!" : `${results.daysToBday} Days to go`}
                </div>
              </div>
            </div>

            {/* Milestones */}
            {results.milestones.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
                  <ChevronDown className="h-3.5 w-3.5" /> Life Milestones
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {results.milestones.map((m, i) => (
                    <div key={i} className={`p-5 rounded-2xl border transition-all flex items-center gap-4 ${m.reached ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-zinc-950 border-white/5'}`}>
                      <div className={`h-8 w-8 rounded-xl flex items-center justify-center text-sm shrink-0 ${m.reached ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-zinc-600'}`}>
                        {m.reached ? "✓" : "→"}
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${m.reached ? 'text-emerald-400' : 'text-white'}`}>{m.label}</div>
                        <div className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">{m.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Compare Results */}
            {compareResults && showCompare && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="p-8 rounded-3xl bg-zinc-950 border border-white/5 text-center space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Age Difference</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { val: compareResults.years, lbl: "Years" },
                    { val: compareResults.months, lbl: "Months" },
                    { val: compareResults.days, lbl: "Days" },
                  ].map(u => (
                    <div key={u.lbl} className="text-center">
                      <div className="text-4xl font-black text-white"><AnimatedNumber value={u.val} /></div>
                      <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">{u.lbl}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-zinc-500 italic font-bold uppercase tracking-widest">
                  {compareResults.youAreOlder ? "You are older" : "The other person is older"} by {compareResults.totalDays.toLocaleString()} days
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
