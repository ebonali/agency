import { Metadata } from "next";
import HSCGPACalculatorClient from "./HSCGPACalculatorClient";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, HelpCircle, Table as TableIcon, Info, LayoutDashboard } from "lucide-react";

export const metadata: Metadata = {
  title: "HSC GPA Calculator Bangladesh (2026) | Marks to GPA",
  description: "Easily calculate your HSC GPA using marks or grades. Accurate, fast, and follows Bangladesh Education Board guidelines.",
  keywords: ["HSC GPA calculator", "BD GPA calculator", "HSC result tools", "GPA from marks", "GPA from grade", "GPA BD", "HSC result calculator 2026"],
  alternates: {
    canonical: "/tools/hsc-gpa-calculator-bd",
  }
};

export default function HSCGPACalculatorPage() {
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
              HSC GPA Calculator <br /><span className="text-blue-500">Bangladesh</span> <span className="text-zinc-700 text-2xl md:text-3xl lg:text-4xl align-top">(2026)</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              এই অনলাইন <strong>HSC GPA calculator</strong>-এর মাধ্যমে আপনি সরাসরি নম্বর (Marks) অথবা গ্রেড দিয়ে খুব সহজেই আপনার এইচএসসি পরীক্ষার জিপিএ হিসাব করতে পারবেন। বিজ্ঞান, মানবিক, এবং ব্যবসায় শিক্ষা শাখার ৪র্থ বিষয়ের সঠিক নিয়ম অনুযায়ী আধুনিক এই ক্যালকুলেটরটি তৈরি করা হয়েছে।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-900 border border-white/5">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span className="text-xs font-bold text-zinc-300">Marks to GPA auto-convert</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-900 border border-white/5">
                <LayoutDashboard className="h-5 w-5 text-blue-400" />
                <span className="text-xs font-bold text-zinc-300">Accurate 4th Subject Rules</span>
              </div>
            </div>

            <p className="mt-6 text-[10px] uppercase tracking-widest font-bold text-zinc-600">
            </p>
          </div>
        </div>

        {/* Main Calculator Tool */}
        <div className="relative mb-32 space-y-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white tracking-tighter flex items-center gap-3">
              <LayoutDashboard className="h-5 w-5 text-zinc-600" />
              HSC Tool
            </h2>
            <p className="text-sm text-zinc-500 max-w-xl leading-relaxed">
              Select your group and enter your obtained marks (e.g. out of 200 for 2 papers combined) or directly select your estimated grade. The <strong className="text-zinc-300">BD GPA Calculator</strong> will automatically compute your final result.
            </p>
          </div>
          <HSCGPACalculatorClient />
        </div>

        {/* Info Architecture Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-24 border-t border-white/5">
          {/* Rules Section */}
          <section>
            <div className="flex items-center gap-3 mb-10 text-white font-bold text-[10px] uppercase tracking-[0.3em]">
              <HelpCircle className="h-3 w-3 text-zinc-600" />
              Bonus Point Guide
            </div>
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tighter">How the 4th Subject Works in HSC</h2>
            <div className="space-y-8 text-zinc-400 text-sm md:text-base leading-relaxed">
              <p>
                As per the Bangladesh Education Board's <strong className="text-white">gpa calculate korar niyom</strong>, your overall HSC GPA revolves around 6 main subjects and 1 optional (4th) subject. Here are the principles:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900 border border-white/5">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-400 flex flex-shrink-0 items-center justify-center text-xs font-bold mt-0.5">1</div>
                  <p>In your 6 compulsory subjects, if you score a GPA of 0 (Fail) in any subject, your total result will be considered Failed.</p>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900 border border-white/5">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-400 flex flex-shrink-0 items-center justify-center text-xs font-bold mt-0.5">2</div>
                  <p>In your Optional Subject, any grade point <strong>above 2.0</strong> is automatically added to your total grade points.</p>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900 border border-white/5">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-400 flex flex-shrink-0 items-center justify-center text-xs font-bold mt-0.5">3</div>
                  <p>The total accumulated points are then strictly divided by 6 (the number of main subjects). The maximum cap is 5.00.</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Reference Table Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tighter text-right flex items-center justify-end gap-3 pb-8">
              <TableIcon className="h-6 w-6 text-zinc-600" />
              Grading Chart (200 Marks)
            </h2>
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-950">
              <table className="w-full text-left border-collapse text-[10px] uppercase tracking-wider font-bold">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-900/50 text-zinc-500">
                    <th className="p-5">Grade</th>
                    <th className="p-5 text-white">Points</th>
                    <th className="p-5 text-zinc-600 text-right">Marks (Total 200)</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-5 text-emerald-400">A+</td>
                    <td className="p-5 font-mono text-white">5.0</td>
                    <td className="p-5 font-mono text-zinc-600 text-right">160 - 200</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-5 text-green-400">A</td>
                    <td className="p-5 font-mono text-white">4.0</td>
                    <td className="p-5 font-mono text-zinc-600 text-right">140 - 159</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-5 text-lime-400">A-</td>
                    <td className="p-5 font-mono text-white">3.5</td>
                    <td className="p-5 font-mono text-zinc-600 text-right">120 - 139</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-5 text-yellow-400">B</td>
                    <td className="p-5 font-mono text-white">3.0</td>
                    <td className="p-5 font-mono text-zinc-600 text-right">100 - 119</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-5 text-orange-400">C</td>
                    <td className="p-5 font-mono text-white">2.0</td>
                    <td className="p-5 font-mono text-zinc-600 text-right">80 - 99</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-5 text-rose-400">D</td>
                    <td className="p-5 font-mono text-white">1.0</td>
                    <td className="p-5 font-mono text-zinc-600 text-right">66 - 79</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition">
                    <td className="p-5 text-red-500">F</td>
                    <td className="p-5 font-mono text-white">0.0</td>
                    <td className="p-5 font-mono text-zinc-600 text-right">0 - 65</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[10px] text-zinc-600 italic uppercase tracking-[0.2em] text-right">
              * ICT is out of 100 marks. The boundary scales down accordingly.
            </p>
          </section>
        </div>

        {/* Example Section */}
        <section className="mt-24 pt-24 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tighter">Calculation Example</h2>
          <div className="p-8 rounded-3xl bg-zinc-950 border border-white/5">
            <p className="text-zinc-400 font-medium mb-6 leading-relaxed">
              If a student receives standard numbers in 6 main subjects with the following points: <span className="text-white">5.00, 4.00, 5.00, 4.00, 5.00, 5.00</span>.
              <br />
              Total base points = <strong className="text-white">28.0</strong>
            </p>
            <p className="text-zinc-400 font-medium mb-6 leading-relaxed">
              If they obtain an A+ (5.00) in their 4th Subject (Optional):
              <br />
              Bonus point = <strong className="text-blue-400">5.0 - 2.0 = 3.0</strong>
            </p>
            <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-between text-sm sm:text-base">
              <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Total GPA</span>
              <span className="font-mono font-bold text-white">(28.0 + 3.0) ÷ 6 = 5.16 → <span className="text-amber-400">5.00</span></span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="mt-48 pt-24 border-t border-white/5">
          <div className="flex items-center gap-3 mb-20 text-white font-bold text-[10px] uppercase tracking-[0.3em]">
            <Info className="h-3 w-3 text-zinc-600" />
            Support FAQs
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { q: "How does the optional subject affect my HSC result?", a: "আপনার অপশনাল বিষয়ের গ্রেড পয়েন্ট থেকে ২ বিয়োগ করা হয় এবং বাকি পয়েন্ট আপনার মেইন রেজাল্টের সাথে যোগ করা হয় (যেমন ৫ পয়েন্ট পেলে ৩ পয়েন্ট বোনাস পাবেন)।" },
              { q: "What if I get an F grade in an Optional Subject?", a: "এইচএসসিতে অপশনাল বা ৪র্থ বিষয়ে ফেল (F) করলে, এর কোনো নেতিবাচক প্রভাব মূল জিপিএ তে পড়ে না এবং আপনি পরীক্ষায় পাশ বলে বিবেচিত হবেন।" },
              { q: "Why is the total GPA divided by 6 instead of 7?", a: "এইচএসসিতে অপশনাল বিষয়টিকে অতিরিক্ত ক্রেডিট হিসেবে ধরা হয়। তাই সর্বমোট পয়েন্ট ৬ দিয়ে ভাগ করা হয়, ৭ দিয়ে নয়।" }
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

        {/* CTA */}
        <div className="mt-32 p-8 md:p-12 rounded-3xl bg-zinc-950 border border-white/5 text-center flex flex-col items-center justify-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tighter">Finished exploring HSC?</h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
            Try our dedicated <strong>SSC GPA Calculator</strong> to estimate your high school grades.
          </p>
          <Link
            href="/tools/ssc-gpa-calculator-bd"
            className="px-6 py-3 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-200 transition-colors"
          >
            Go to SSC Calc
          </Link>
        </div>

        {/* Footer Meta */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-8">
            <Link href="/tools/bkash-charge-calculator-bd" className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-all">bKash calc</Link>
            <Link href="/tools/ssc-gpa-calculator-bd" className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-all">SSC calc</Link>
          </div>
          <div className="text-[10px] text-zinc-800 font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Ridoway Agency Ops.
          </div>
        </div>

        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "HSC GPA Calculator 2026",
              "url": "https://ridoway.agency/tools/hsc-gpa-calculator-bd",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "All",
              "description": "Calculate exact HSC GPA results from marks or grades based on Bangladesh Education Board's 4th subject rules.",
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
                  "name": "How does the optional subject affect my HSC result?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "আপনার অপশনাল বিষয়ের গ্রেড পয়েন্ট থেকে ২ বিয়োগ করা হয় এবং বাকি পয়েন্ট আপনার মেইন রেজাল্টের সাথে যোগ করা হয়।"
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if I get an F grade in an Optional Subject?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "এইচএসসিতে অপশনাল বা ৪র্থ বিষয়ে ফেল (F) করলে, এর কোনো নেতিবাচক প্রভাব মূল জিপিএ তে পড়ে না এবং আপনি পরীক্ষায় পাশ বলে বিবেচিত হবেন।"
                  }
                }
              ]
            })
          }}
        />
      </div>
    </div>
  );
}
