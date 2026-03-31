"use client";

import { useState, useMemo, useCallback } from "react";
import { Copy, RefreshCw, Check, ArrowLeftRight, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── CURRENCY CONFIG ───
const CURRENCIES: Record<string, { symbol: string; main: string; sub: string; mainBn: string; subBn: string }> = {
  BDT: { symbol: "৳", main: "Taka", sub: "Poisha", mainBn: "টাকা", subBn: "পয়সা" },
  USD: { symbol: "$", main: "Dollar", sub: "Cent", mainBn: "ডলার", subBn: "সেন্ট" },
  INR: { symbol: "₹", main: "Rupee", sub: "Paisa", mainBn: "রুপি", subBn: "পয়সা" },
};

// ─── ENGLISH NUMBER TO WORDS (Indian/BD: Lakh-Crore) ───
const EN_ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const EN_TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function enChunk(n: number): string {
  if (n === 0) return '';
  let s = '';
  if (n >= 100) { s += EN_ONES[Math.floor(n / 100)] + ' Hundred '; n %= 100; }
  if (n >= 20) { s += EN_TENS[Math.floor(n / 10)] + ' ' + EN_ONES[n % 10]; }
  else if (n > 0) { s += EN_ONES[n]; }
  return s.trim();
}

function numberToWordsEnglish(numStr: string): string {
  if (!numStr) return '';
  let n = parseInt(numStr, 10);
  if (isNaN(n)) return '';
  if (n === 0) return 'Zero';
  let w = '';
  const crore = Math.floor(n / 10000000); n %= 10000000;
  const lakh = Math.floor(n / 100000); n %= 100000;
  const thousand = Math.floor(n / 1000); n %= 1000;
  if (crore > 0) w += enChunk(crore) + ' Crore ';
  if (lakh > 0) w += enChunk(lakh) + ' Lakh ';
  if (thousand > 0) w += enChunk(thousand) + ' Thousand ';
  if (n > 0) w += enChunk(n);
  return w.trim();
}

// ─── BANGLA NUMBER TO WORDS ───
const BN = ["", "এক", "দুই", "তিন", "চার", "পাঁচ", "ছয়", "সাত", "আট", "নয়", "দশ", "এগারো", "বারো", "তেরো", "চৌদ্দ", "পনেরো", "ষোলো", "সতেরো", "আঠারো", "ঊনিশ", "বিশ", "একুশ", "বাইশ", "তেইশ", "চব্বিশ", "পঁচিশ", "ছাব্বিশ", "সাতাশ", "আটাশ", "ঊনত্রিশ", "ত্রিশ", "একত্রিশ", "বত্রিশ", "তেত্রিশ", "চৌত্রিশ", "পঁয়ত্রিশ", "ছত্রিশ", "সাঁইত্রিশ", "আটত্রিশ", "ঊনচল্লিশ", "চল্লিশ", "একচল্লিশ", "বিয়াল্লিশ", "তেতাল্লিশ", "চুয়াল্লিশ", "পঁয়তাল্লিশ", "ছেচল্লিশ", "সাতচল্লিশ", "আটচল্লিশ", "ঊনপঞ্চাশ", "পঞ্চাশ", "একান্ন", "বায়ান্ন", "তিপ্পান্ন", "চুয়ান্ন", "পঞ্চান্ন", "ছাপ্পান্ন", "সাতান্ন", "আটান্ন", "ঊনষাট", "ষাট", "একষট্টি", "বাষট্টি", "তেষট্টি", "চৌষট্টি", "পঁয়ষট্টি", "ছেষট্টি", "সাতষট্টি", "আটষট্টি", "ঊনসত্তর", "সত্তর", "একাত্তর", "বাহাত্তর", "তিয়াত্তর", "চুয়াত্তর", "পঁচাত্তর", "ছেয়াত্তর", "সাতাত্তর", "আটাত্তর", "ঊনআশি", "আশি", "একাশি", "বিরাশি", "তিরাশি", "চুরাশি", "পঁচাশি", "ছেয়াশি", "সাতাশি", "আটাশি", "ঊননব্বই", "নব্বই", "একানব্বই", "বিরানব্বই", "তিরানব্বই", "চুরানব্বই", "পঁচানব্বই", "ছেয়ানব্বই", "সাতানব্বই", "আটানব্বই", "নিরানব্বই"];

function bnChunk(n: number): string {
  if (n === 0) return '';
  let s = '';
  if (n >= 100) { s += BN[Math.floor(n / 100)] + ' শো '; n %= 100; }
  if (n > 0) s += BN[n];
  return s.trim();
}

function numberToWordsBangla(numStr: string): string {
  if (!numStr) return '';
  let n = parseInt(numStr, 10);
  if (isNaN(n)) return '';
  if (n === 0) return 'শুন্য';
  let w = '';
  const crore = Math.floor(n / 10000000); n %= 10000000;
  const lakh = Math.floor(n / 100000); n %= 100000;
  const thousand = Math.floor(n / 1000); n %= 1000;
  if (crore > 0) w += numberToWordsBangla(crore.toString()) + ' কোটি ';
  if (lakh > 0) w += bnChunk(lakh) + ' লাখ ';
  if (thousand > 0) w += bnChunk(thousand) + ' হাজার ';
  if (n > 0) w += bnChunk(n);
  return w.trim();
}

// ─── REVERSE: Words → Number (English, BD/Indian system) ───
function wordsToNumber(input: string): string {
  if (!input || !input.trim()) return '';
  const text = input.toLowerCase().trim();
  const wordMap: Record<string, number> = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
    ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16,
    seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50,
    sixty: 60, seventy: 70, eighty: 80, ninety: 90,
  };
  const multipliers: Record<string, number> = {
    hundred: 100, thousand: 1000, lakh: 100000, lac: 100000, crore: 10000000, million: 1000000, billion: 1000000000,
  };

  const tokens = text
    .replace(/[^a-z\s]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .filter(t => t !== 'and' && t !== 'only' && t !== 'taka' && t !== 'dollar' && t !== 'rupee' && t !== 'poisha' && t !== 'cent' && t !== 'paisa');

  let total = 0;
  let current = 0;

  for (const token of tokens) {
    if (wordMap[token] !== undefined) {
      current += wordMap[token];
    } else if (token === 'hundred') {
      current *= 100;
    } else if (multipliers[token] && token !== 'hundred') {
      current *= multipliers[token];
      total += current;
      current = 0;
    }
  }
  total += current;

  if (total === 0 && tokens.length > 0 && wordMap[tokens[0]] === undefined) return '';

  // Format in Indian/BD comma system
  const s = total.toString();
  if (s.length <= 3) return s;
  let result = s.slice(-3);
  let remaining = s.slice(0, -3);
  while (remaining.length > 2) {
    result = remaining.slice(-2) + ',' + result;
    remaining = remaining.slice(0, -2);
  }
  if (remaining.length > 0) result = remaining + ',' + result;
  return result;
}

// ─── VALIDATION ───
function validateInput(val: string): string | null {
  if (!val) return null;
  const clean = val.replace(/,/g, '');
  if (clean.split('.').length > 2) return 'Invalid: Multiple decimal points';
  if (!/^\d*\.?\d*$/.test(clean)) return 'Invalid: Only digits and one decimal allowed';
  const parts = clean.split('.');
  if (parts[0] && parts[0].length > 15) return 'Max 15 digits allowed';
  if (parts[1] && parts[1].length > 2) return 'Max 2 decimal places allowed';
  return null;
}

// ─── COMPONENT ───
export default function NumberToWordConverterClient() {
  const [input, setInput] = useState('');
  const [currency, setCurrency] = useState<'BDT' | 'USD' | 'INR'>('BDT');
  const [caseType, setCaseType] = useState<'sentence' | 'title' | 'upper' | 'lower'>('sentence');
  const [copied, setCopied] = useState<string | null>(null);
  const [reverseMode, setReverseMode] = useState(false);
  const [reverseInput, setReverseInput] = useState('');

  const PRESETS = [1000, 10000, 100000, 1000000, 10000000];

  const error = useMemo(() => !reverseMode ? validateInput(input) : null, [input, reverseMode]);

  const results = useMemo(() => {
    if (reverseMode) return null;
    if (!input || error) return null;
    const clean = input.replace(/,/g, '');
    const parts = clean.split('.');
    const intPart = parts[0];
    const decPart = parts[1] || '';
    const cur = CURRENCIES[currency];

    const en = numberToWordsEnglish(intPart);
    const bn = numberToWordsBangla(intPart);
    if (!en && !bn) return null;

    const enCurrency = `${en} ${cur.main}${decPart ? ` and ${numberToWordsEnglish(decPart)} ${cur.sub}` : ''} Only`;
    const bnCurrency = `${bn} ${cur.mainBn}${decPart ? ` এবং ${numberToWordsBangla(decPart)} ${cur.subBn}` : ''} মাত্র`;

    return { english: en, bangla: bn, enCurrency, bnCurrency };
  }, [input, currency, error, reverseMode]);

  const reverseResult = useMemo(() => {
    if (!reverseMode || !reverseInput) return '';
    return wordsToNumber(reverseInput);
  }, [reverseMode, reverseInput]);

  const applyCase = useCallback((text: string) => {
    switch (caseType) {
      case 'upper': return text.toUpperCase();
      case 'lower': return text.toLowerCase();
      case 'title': return text.replace(/\b\w/g, c => c.toUpperCase());
      default: return text.charAt(0).toUpperCase() + text.slice(1);
    }
  }, [caseType]);

  const handleCopy = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  }, []);


  const handleInput = (val: string) => {
    // Allow digits, commas, and one dot
    const filtered = val.replace(/[^0-9.,]/g, '');
    setInput(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 mb-24">

      {/* Mode Toggle */}
      <div className="flex justify-center">
        <button
          onClick={() => { setReverseMode(!reverseMode); setInput(''); setReverseInput(''); }}
          className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
        >
          <ArrowLeftRight className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
          {reverseMode ? 'Switch to Number → Words' : 'Switch to Words → Number'}
        </button>
      </div>

      {/* ─── FORWARD MODE ─── */}
      {!reverseMode && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          {/* Currency Selector */}
          <div className="flex justify-center gap-3">
            {(Object.keys(CURRENCIES) as Array<'BDT' | 'USD' | 'INR'>).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${currency === c ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-white/5 text-zinc-500 hover:border-white/20 hover:text-zinc-300'}`}
              >
                {CURRENCIES[c].symbol} {c}
              </button>
            ))}
          </div>

          {/* Input Card */}
          <div className="bg-zinc-950 p-8 md:p-12 rounded-[32px] border border-white/5 relative overflow-hidden">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-4 block">
              Enter Number or Amount
            </label>
            <div className="flex gap-4 items-center">
              <span className="text-3xl font-black text-emerald-500">{CURRENCIES[currency].symbol}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => handleInput(e.target.value)}
                placeholder="e.g. 9876543.21"
                className="flex-1 bg-transparent border-b-2 border-white/5 py-4 text-3xl md:text-4xl font-black text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-900"
              />
              <button onClick={() => setInput('')} className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all shrink-0">
                <RefreshCw className="h-4 w-4 text-zinc-500" />
              </button>
            </div>

            {/* Error Display */}
            <AnimatePresence>
              {error && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-4 flex items-center gap-2 text-red-400 text-xs font-bold">
                  <AlertTriangle className="h-3.5 w-3.5" /> {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Presets */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest mr-2 self-center">Quick:</span>
              {PRESETS.map((p) => (
                <button
                  key={p}
                  onClick={() => setInput(p.toString())}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-zinc-400 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400 transition-all"
                >
                  {p >= 10000000 ? `${p / 10000000} Cr` : p >= 100000 ? `${p / 100000} L` : p >= 1000 ? `${p / 1000}K` : p}
                </button>
              ))}
            </div>
          </div>

          {/* Case Controls */}
          <AnimatePresence>
            {results && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-wrap gap-2 justify-center">
                {(['sentence', 'title', 'upper', 'lower'] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCaseType(c)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${caseType === c ? 'bg-white text-black border-white' : 'border-white/5 text-zinc-600 hover:border-white/20'}`}
                  >
                    {c}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <AnimatePresence mode="wait">
            {results && (
              <motion.div
                key={input + currency + caseType}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 gap-4"
              >
                <ResultBox id="bn" title="বাংলায়" value={results.bangla} copied={copied} onCopy={handleCopy} />
                <ResultBox id="bn-cur" title={`${CURRENCIES[currency].mainBn} (বাংলা)`} value={results.bnCurrency} copied={copied} onCopy={handleCopy} />
                <ResultBox id="en" title="In English" value={applyCase(results.english)} copied={copied} onCopy={handleCopy} />
                <ResultBox id="en-cur" title={`In ${CURRENCIES[currency].main} (English)`} value={applyCase(results.enCurrency)} copied={copied} onCopy={handleCopy} />

                {/* Quick copy row */}
                <div className="flex flex-wrap gap-3 justify-center mt-2">
                  <CopyButton label="Copy English" text={applyCase(results.enCurrency)} id="quick-en" copied={copied} onCopy={handleCopy} />
                  <CopyButton label="Copy Bangla" text={results.bnCurrency} id="quick-bn" copied={copied} onCopy={handleCopy} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* ─── REVERSE MODE ─── */}
      {reverseMode && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <div className="bg-zinc-950 p-8 md:p-12 rounded-[32px] border border-emerald-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none" />
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-4 block relative z-10">
              Type Words → Get Number
            </label>
            <input
              type="text"
              value={reverseInput}
              onChange={(e) => setReverseInput(e.target.value)}
              placeholder='e.g. "One Lakh Twenty Thousand"'
              className="w-full bg-transparent border-b-2 border-emerald-500/20 py-4 text-2xl md:text-3xl font-bold text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-zinc-800 relative z-10"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest mr-2 self-center">Try:</span>
              {["Five Thousand", "One Lakh", "Ten Crore"].map((ex) => (
                <button key={ex} onClick={() => setReverseInput(ex)} className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 hover:bg-emerald-500/20 transition-all">
                  {ex}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {reverseResult && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-zinc-950 p-8 md:p-12 rounded-[32px] border border-white/5 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-4">Numeric Value</p>
                <p className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 mb-6">
                  {reverseResult}
                </p>
                <button
                  onClick={() => handleCopy(reverseResult, 'reverse')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all"
                >
                  {copied === 'reverse' ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied === 'reverse' ? 'Copied!' : 'Copy Number'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

// ─── SUB COMPONENTS ───
function ResultBox({ id, title, value, copied, onCopy }: { id: string; title: string; value: string; copied: string | null; onCopy: (text: string, id: string) => void }) {
  return (
    <div
      onClick={() => onCopy(value, id)}
      className="bg-zinc-950 px-8 py-6 rounded-2xl border border-white/5 group hover:border-emerald-500/30 transition-all cursor-pointer relative"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-600">{title}</h3>
        <div className="flex gap-1.5">
          <button onClick={(e) => { e.stopPropagation(); onCopy(value, id); }} className="p-1.5 rounded-md bg-white/5 hover:bg-emerald-500 hover:text-black transition-all text-zinc-600">
            {copied === id ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
      <p className="text-lg md:text-xl font-bold text-white leading-relaxed selection:bg-emerald-500/20">
        {value}
      </p>
      <span className="absolute bottom-3 right-4 text-[8px] font-bold uppercase tracking-widest text-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
        Click to copy
      </span>
    </div>
  );
}

function CopyButton({ label, text, id, copied, onCopy }: { label: string; text: string; id: string; copied: string | null; onCopy: (text: string, id: string) => void }) {
  return (
    <button
      onClick={() => onCopy(text, id)}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all ${copied === id ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-white/10 text-zinc-400 hover:bg-white/5 hover:border-white/20'}`}
    >
      {copied === id ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied === id ? 'Copied!' : label}
    </button>
  );
}
