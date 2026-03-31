import { Metadata } from "next";
import SSCGPACalculatorClient from "./SSCGPACalculatorClient";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, HelpCircle, Table as TableIcon, Info, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "SSC GPA Calculator 2026 – Education Board Bangladesh",
  description: "Calculate exact SSC exam GPA with our advanced and fast calculator. Understand the GPA system, 4th subject rules, and grading scale in Bangladesh.",
  keywords: ["SSC GPA calculator", "education board bangladesh", "ssc result 2026", "how to calculate ssc gpa", "4th subject gpa rule"],
  alternates: {
    canonical: "/tools/ssc-gpa-calculator-bd",
  }
};

export default function SSCGPACalculatorPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 lg:py-24 selection:bg-blue-500/30 selection:text-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Navigation Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-20 border-b border-white/5 pb-10">
          <Link href="/tools" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">
            <div className="p-2 rounded-lg bg-zinc-950 border border-white/5 group-hover:border-white/20 transition-all">
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to Registry
          </Link>
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse text-xs" />
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
              Updated rules • 2026
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Based on Bangladesh Education Board grading guidelines</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 leading-[1.15]">
               SSC GPA Calculator <br/><span className="text-blue-500">Bangladesh</span> <span className="text-zinc-700 text-2xl md:text-3xl lg:text-4xl align-top">(2026)</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              এই অনলাইন <strong>ssc result calculator</strong>-এর মাধ্যমে আপনি খুব সহজেই আপনার এসএসসি পরীক্ষার জিপিএ হিসাব করতে পারবেন। বিজ্ঞান, মানবিক, এবং ব্যবসায় শিক্ষা শাখার ৪র্থ বিষয়ের সঠিক নিয়ম অনুযায়ী আধুনিক এই <strong>ssc gpa calculator bd</strong> তৈরি করা হয়েছে। যারা <strong>gpa calculate korar niyom</strong> খুঁজছেন, তাদের জন্য এটি ব্যবহার করা অত্যন্ত সহজ।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-900 border border-white/5">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span className="text-xs font-bold text-zinc-300">100% Secure & Local</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-900 border border-white/5">
                <GraduationCap className="h-5 w-5 text-blue-400" />
                <span className="text-xs font-bold text-zinc-300">Accurate Optional Rules</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Calculator Tool */}
        <div className="relative mb-32 space-y-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white tracking-tighter flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-blue-500" />
              SSC GPA Tool
            </h2>
            <p className="text-sm text-zinc-500 max-w-xl">
               Select your subjects and expected grades to instantly estimate your final Grade Point Average.
            </p>
          </div>
          <SSCGPACalculatorClient />
        </div>

        {/* Secondary Info Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-24 border-t border-white/5">
          {/* How it Works Section */}
          <section>
            <div className="flex items-center gap-3 mb-10 text-white font-bold text-[10px] uppercase tracking-[0.3em]">
              <HelpCircle className="h-3 w-3 text-zinc-600" />
              Process Guide
            </div>
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tighter">How Your SSC GPA is Calculated</h2>
            <div className="space-y-8 text-zinc-400 text-sm md:text-base leading-relaxed">
              <p>
                এসএসসি পরীক্ষার জিপিএ বের করার জন্য আপনার মোট গ্রেড পয়েন্টগুলোকে বিষয় সংখ্যা (৯টি আবশ্যিক ও গ্রুপ বিষয়) দিয়ে ভাগ করা হয়। এর মাঝে অপশনাল বা ৪র্থ বিষয় সবচেয়ে বড় ভূমিকা রাখে।
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Main Subjects", desc: "৬টি আবশ্যিক এবং ৩টি গ্রুপ বিষয় মিলিয়ে মোট ৯টি বিষয়ের পয়েন্ট যোগ করা হয়।" },
                  { title: "4th Subject Rule", desc: "অপশনাল বিষয়ের মূল পয়েন্ট থেকে ২.০ বাদ দেওয়া হয়। বাকি অংশ মোট পয়েন্টের সাথে যুক্ত হয়।" },
                  { title: "F Grade Penalty", desc: "যেকোনো একটি বিষয়ে 'F' গ্রেড বা 0.00 থাকলে আপনার সম্পূর্ণ জিপিএ হবে 0.00।" },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-2xl bg-zinc-900 border border-white/5 flex flex-col gap-2">
                    <span className="font-bold text-white text-sm">{item.title}</span>
                    <span className="text-zinc-500 text-xs leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reference Table Section */}
          <section>
            <div className="flex items-center gap-3 mb-10 text-white font-bold text-[10px] uppercase tracking-[0.3em]">
              <TableIcon className="h-3 w-3 text-zinc-600" />
              Grading Scale
            </div>
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tighter text-right">Bangladesh Education Board Scale.</h2>
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-950">
              <table className="w-full text-left border-collapse text-[10px] uppercase tracking-wider font-bold">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-900/50 text-zinc-500">
                    <th className="p-5">Marks Range</th>
                    <th className="p-5 text-white">Letter Grade</th>
                    <th className="p-5 text-zinc-600 text-right">Grade Point</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  {[
                    { marks: "80 - 100", letter: "A+", points: "5.0", color: "text-amber-400" },
                    { marks: "70 - 79", letter: "A", points: "4.0", color: "text-emerald-400" },
                    { marks: "60 - 69", letter: "A-", points: "3.5", color: "text-green-400" },
                    { marks: "50 - 59", letter: "B", points: "3.0", color: "text-lime-400" },
                    { marks: "40 - 49", letter: "C", points: "2.0", color: "text-orange-400" },
                    { marks: "33 - 39", letter: "D", points: "1.0", color: "text-rose-400" },
                    { marks: "00 - 32", letter: "F", points: "0.0", color: "text-red-500" }
                  ].map((row) => (
                    <tr key={row.marks} className="border-b border-white/5 hover:bg-white/5 transition">
                      <td className="p-5 text-zinc-400 font-mono tracking-tighter text-sm">{row.marks}%</td>
                      <td className={`p-5 font-bold ${row.color} text-base`}>{row.letter}</td>
                      <td className="p-5 font-mono text-zinc-500 text-right">{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[10px] text-zinc-600 italic uppercase tracking-[0.2em] text-right">
              Standard Ministry of Education Rules.
            </p>
          </section>
        </div>

        {/* Example Calculation Section */}
        <div className="mt-24 pt-24 border-t border-white/5">
          <div className="flex items-center gap-3 mb-10 text-white font-bold text-[10px] uppercase tracking-[0.3em]">
             <GraduationCap className="h-3 w-3 text-blue-500" />
             Calculation Example
          </div>
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tighter">Example: How an A+ in Optional Subject Boosts Your GPA</h2>
          
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <GraduationCap className="h-40 w-40 text-blue-500" />
            </div>
            <p className="text-zinc-400 mb-8 max-w-2xl leading-relaxed">
               ধরা যাক, আপনি ৯টি মূল বিষয়ের মধ্যে ৭টিতে A+ (5.0) এবং ২টিতে A (4.0) পেয়েছেন। 
               আর আপনার ৪র্থ (Optional) বিষয়ে পেয়েছেন A+ (5.0)।
            </p>
            <ul className="space-y-4 text-sm text-zinc-300 mb-8 list-none relative z-10">
              <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs">1</span> মূল বিষয়ের পয়েন্ট: <span className="font-mono bg-white/5 px-2 py-1 rounded">(7 × 5.0) + (2 × 4.0) = 43.0</span></li>
              <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs">2</span> ৪র্থ বিষয়ের পয়েন্ট (A+): <span className="font-mono bg-white/5 px-2 py-1 rounded">5.0 - 2.0 = 3.0</span></li>
              <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs">3</span> মোট পয়েন্ট: <span className="font-mono bg-white/5 px-2 py-1 rounded">43.0 + 3.0 = 46.0</span></li>
              <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs">4</span> চূড়ান্ত GPA: <span className="font-mono bg-white/5 px-2 py-1 rounded">46.0 ÷ 9 = 5.11</span> → <strong className="text-white bg-blue-500 px-2 py-0.5 rounded ml-1">Final GPA = 5.00</strong></li>
            </ul>
            <p className="text-xs text-blue-400/80 italic border-l-2 border-blue-500 pl-4 relative z-10">
               Notice how the 3.0 bonus points from the optional subject safely covered the point gap from the two "A" grades, securing a Golden A+!
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-48 pt-24 border-t border-white/5">
          <div className="flex items-center gap-3 mb-20 text-white font-bold text-[10px] uppercase tracking-[0.3em]">
            <Info className="h-3 w-3 text-zinc-600" />
            Support & FAQ
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { q: "৪র্থ বিষয়ের জিপিএ কীভাবে যোগ হয়?", a: "৪র্থ বা অপশনাল বিষয়ে আপনার পাওয়া জিপিএ পয়েন্ট থেকে ২ পয়েন্ট বাদ দেওয়া হয়। এরপর বাকি পয়েন্টটুকু আপনার মোট জিপিএর সাথে যোগ করা হয়।" },
              { q: "৪র্থ বিষয়ে জিপিএ ২ এর নিচে পেলে কী হবে?", a: "৪র্থ বিষয়ে ২ পয়েন্টের নিচে পেলে বা 'C' গ্রেড পেলে তা আপনার মোট জিপিএতে কোনো প্রভাব ফেলবে না। কারণ ২ পয়েন্ট স্বয়ংক্রিয়ভাবে বাদ দেওয়া হয়।" },
              { q: "যেকোনো একটি বিষয়ে ফেইল (F) করলে কী হবে?", a: "এসএসসি পরীক্ষায় যেকোনো একটি বিষয়ে 'F' গ্রেড বা 0.00 পেলে আপনার সম্পূর্ণ রেজাল্ট ফেইল (F) আসবে। তখন আর কোনো জিপিএ কাউন্ট করা হয় না।" }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider leading-relaxed">{faq.q}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Engagement CTA */}
        <div className="mt-32 p-8 md:p-12 rounded-3xl bg-blue-500/5 border border-blue-500/20 text-center flex flex-col items-center justify-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tighter">Mobile Banking User?</h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
            Sending money for your education? Calculate cash out fees with our <strong className="text-white">bKash Charge Calculator</strong>.
          </p>
          <Link 
            href="/tools/bkash-charge-calculator-bd" 
            className="px-6 py-3 rounded-xl bg-blue-500 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-colors"
          >
            Open bKash Calc
          </Link>
        </div>

        {/* Footer Meta */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left text-[10px] uppercase font-bold tracking-widest text-zinc-500">
             <span>Try our</span>
             <Link href="/tools/bkash-charge-calculator-bd" className="text-zinc-400 hover:text-white transition-all border-b border-transparent hover:border-white">bKash Charge Calculator</Link>
             <span>or</span>
             <Link href="/tools/nagad-charge-calculator" className="text-zinc-400 hover:text-white transition-all border-b border-transparent hover:border-white">Nagad Charge Calculator</Link>
             <span>for mobile banking fees.</span>
          </div>
          <div className="text-[10px] text-zinc-800 font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Ridoway Agency Ops.
          </div>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "SSC GPA Calculator - Education Board Bangladesh",
              "url": "https://ridoway.agency/tools/ssc-gpa-calculator-bd",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "All",
              "description": "Calculate exact SSC exam GPA with our advanced and fast calculator. Supports Science, Business, and Humanities with 4th subject rules.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "BDT"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "৪র্থ বিষয়ের জিপিএ কীভাবে যোগ হয়?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "৪র্থ বা অপশনাল বিষয়ে আপনার পাওয়া জিপিএ পয়েন্ট থেকে ২ পয়েন্ট বাদ দেওয়া হয়। এরপর বাকি পয়েন্টটুকু আপনার মোট জিপিএর সাথে যোগ করা হয়।"
                  }
                },
                {
                  "@type": "Question",
                  "name": "যেকোনো একটি বিষয়ে ফেইল (F) করলে কী হবে?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "এসএসসি পরীক্ষায় যেকোনো একটি বিষয়ে 'F' গ্রেড বা 0.00 পেলে আপনার সম্পূর্ণ রেজাল্ট ফেইল (F) আসবে। তখন আর কোনো জিপিএ কাউন্ট করা হয় না।"
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to calculate SSC GPA",
              "description": "Learn exactly how to calculate your SSC Grade Point Average including the 4th subject rules in Bangladesh.",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Select Group",
                  "text": "Choose your study group: Science, Business Studies, or Humanities."
                },
                {
                  "@type": "HowToStep",
                  "name": "Input Grades",
                  "text": "Select your expected or received letter grades for all 9 main subjects."
                },
                {
                  "@type": "HowToStep",
                  "name": "Add 4th Subject",
                  "text": "Enter your optional subject grade. Grades above C will grant you bonus points."
                },
                {
                  "@type": "HowToStep",
                  "name": "Check Result",
                  "text": "The calculator will automatically subtract 2 points from your optional subject, add to your total, divide by 9, and show your final GPA instantly."
                }
              ]
            })
          }}
        />
      </div>
    </div>
  );
}
