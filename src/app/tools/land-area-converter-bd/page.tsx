import { Metadata } from "next";
import LandConverterClient from "./LandConverterClient";
import Link from "next/link";
import { ArrowLeft, Shield, Zap, Ruler, HelpCircle, Calculator, FileText, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Land Area Converter BD | জমি পরিমাপ ক্যালকুলেটর | Katha Bigha Decimal",
  description: "Convert land area units instantly — Katha, Bigha, Decimal, Acre, Shotangsho, Chotak, Gonda, Square Feet & more. 27+ Bangladeshi units. ১০০% নির্ভুল জমি পরিমাপ রূপান্তর।",
  keywords: [
    "land area converter bd", "জমি পরিমাপ ক্যালকুলেটর", "katha to square feet",
    "bigha to katha", "decimal to square feet", "shotangsho converter",
    "land measurement bangladesh", "জমির মাপ বের করা", "কাঠা থেকে বর্গফুট",
    "bigha to acre", "hectare to bigha", "land unit converter online",
    "chotak to katha", "gonda converter", "জমি রূপান্তর ক্যালকুলেটর"
  ],
  alternates: { canonical: "/tools/land-area-converter-bd" }
};

export default function LandConverterPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 lg:py-24 selection:bg-white selection:text-black font-sans">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Nav */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-20 border-b border-white/5 pb-10">
          <Link href="/tools" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">
            <div className="p-2 rounded-lg bg-zinc-950 border border-white/5 group-hover:border-white/20 transition-all"><ArrowLeft className="h-4 w-4" /></div>
            Back to Registry
          </Link>
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">27+ Units • Real-Time Engine</div>
          </div>
        </div>

        {/* Hero */}
        <div className="mb-32 relative text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="flex flex-col items-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 text-[10px] uppercase font-black tracking-widest">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" /></span>
              BD Land Measurement
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 leading-[1.1]">
              Land Area<br /><span className="text-emerald-500">Unit Converter</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              কাঠা, বিঘা, শতাংশ, একর, হেক্টর, ছটাক, গণ্ডা সহ ২৭টি এককে জমির পরিমাপ তাৎক্ষণিকভাবে রূপান্তর করুন। বাংলাদেশের সকল ঐতিহ্যবাহী ও আধুনিক একক সমর্থিত।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mx-auto">
              {[
                { icon: Ruler, text: "27+ BD Units" },
                { icon: Zap, text: "Instant Convert" },
                { icon: Shield, text: "100% Accurate" },
              ].map((f, i) => (
                <div key={i} className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-zinc-900 border border-white/5">
                  <f.icon className="h-4 w-4 text-emerald-400" />
                  <span className="text-[9px] uppercase font-black tracking-widest text-zinc-400">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <LandConverterClient />

        {/* Conversion Reference */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <h2 className="text-3xl font-black text-white mb-12 tracking-tighter text-center">Common Land Conversions in Bangladesh</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "1 Katha", result: "720 Sq Ft", bn: "১ কাঠা = ৭২০ বর্গ ফুট" },
              { title: "1 Bigha", result: "20 Katha", bn: "১ বিঘা = ২০ কাঠা" },
              { title: "1 Decimal", result: "435.6 Sq Ft", bn: "১ শতাংশ = ৪৩৫.৬ বর্গ ফুট" },
              { title: "1 Acre", result: "3 Bigha 2 Katha", bn: "১ একর = ৩ বিঘা ২ কাঠা (প্রায়)" },
              { title: "1 Hectare", result: "2.47 Acre", bn: "১ হেক্টর = ২.৪৭ একর" },
              { title: "1 Katha", result: "16 Chotak", bn: "১ কাঠা = ১৬ ছটাক" },
              { title: "1 Gonda", result: "1.2 Katha", bn: "১ গণ্ডা = ১.২ কাঠা" },
              { title: "1 Kani", result: "24 Katha", bn: "১ কানি = ২৪ কাঠা" },
              { title: "1 Sq Meter", result: "10.76 Sq Ft", bn: "১ বর্গ মিটার = ১০.৭৬ বর্গ ফুট" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-zinc-950 border border-white/5 hover:border-emerald-500/20 transition-all group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-white">{item.title}</span>
                  <span className="text-xs font-black text-emerald-400">{item.result}</span>
                </div>
                <p className="text-[9px] text-zinc-600 font-bold">{item.bn}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Content + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-32 border-t border-white/5 mt-20">
          <section>
            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter">জমি পরিমাপ রূপান্তর গাইড</h2>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>বাংলাদেশে জমি পরিমাপে অনেক ধরনের একক ব্যবহৃত হয়। কাঠা, বিঘা, শতাংশ, একর — এগুলো সবচেয়ে প্রচলিত। তবে অঞ্চলভেদে ছটাক, গণ্ডা, কানি, তিল, ধুল, রেণু ইত্যাদি এককও ব্যবহার করা হয়।</p>
              <p>আমাদের এই টুলটি ব্যবহার করে আপনি যেকোনো একক থেকে অন্য যেকোনো এককে তাৎক্ষণিকভাবে রূপান্তর করতে পারবেন। রেজিস্ট্রি অফিসের কাজ, জমি কেনাবেচা, বা দলিল যাচাইয়ের জন্য এটি অত্যন্ত কার্যকর।</p>
              <h3 className="text-white font-bold text-base mt-6 mb-2">Katha to Square Feet</h3>
              <p>বাংলাদেশে সবচেয়ে বেশি জিজ্ঞাসিত রূপান্তর হলো কাঠা থেকে বর্গ ফুট। <strong className="text-white">১ কাঠা = ৭২০ বর্গ ফুট</strong>। আমাদের টুলে &quot;Katha → Square Feet&quot; প্রিসেট ক্লিক করলেই ফলাফল পেয়ে যাবেন।</p>
              <h3 className="text-white font-bold text-base mt-6 mb-2">Bigha to Katha</h3>
              <p><strong className="text-white">১ বিঘা = ২০ কাঠা</strong>। এটি বাংলাদেশের স্ট্যান্ডার্ড পরিমাপ। তবে ভারতে বিঘার মান ভিন্ন হতে পারে।</p>
            </div>
          </section>
          <section>
            <div className="inline-flex items-center gap-2 mb-8 text-[9px] uppercase font-black tracking-widest text-zinc-500"><HelpCircle className="h-3 w-3" /> FAQ</div>
            <div className="space-y-3">
              {[
                { q: "How many Square Feet in 1 Katha?", a: "1 Katha equals 720 Square Feet in the Bangladesh standard measurement system." },
                { q: "What is the difference between Decimal and Shotangsho?", a: "They are the same unit. Decimal is the English term and Shotangsho (শতাংশ) is the Bengali term. Both equal 435.6 Sq Ft." },
                { q: "How many Katha in 1 Bigha?", a: "1 Bigha = 20 Katha in Bangladesh. This is the standard across all districts." },
                { q: "Is this tool accurate for land registration?", a: "Yes. The conversion factors are based on the Bangladesh standard measurement system used by government land offices." },
                { q: "Does this tool work offline?", a: "Yes. All calculations happen in your browser. No internet is needed after the page loads." },
              ].map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all group">
                  <h4 className="text-[11px] font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{faq.q}</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Internal Linking */}
        <div className="mt-40 p-12 rounded-[40px] bg-zinc-950 border border-white/5 text-center flex flex-col items-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter relative z-10 italic underline decoration-emerald-500 decoration-4 underline-offset-8">More Ridoway Tools</h3>
          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10 mt-6">
            <Link href="/tools/loan-calculator-bd" className="px-6 py-3 rounded-full bg-white text-black font-black uppercase tracking-widest text-[9px] hover:bg-zinc-200 transition-colors flex items-center gap-2"><Landmark className="h-3.5 w-3.5" /> EMI Calc</Link>
            <Link href="/tools/number-to-word-converter-bd" className="px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-colors flex items-center gap-2"><FileText className="h-3.5 w-3.5" /> Word Converter</Link>
            <Link href="/tools/bkash-charge-calculator-bd" className="px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-colors flex items-center gap-2"><Calculator className="h-3.5 w-3.5" /> bKash Calc</Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30">
          <div className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} Ridoway Agency • Land Measurement Engine</div>
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-800">100% Client-Side • BD Standard</span>
        </div>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "WebApplication",
          "name": "Land Area Converter BD", "url": "https://ridoway.agency/tools/land-area-converter-bd",
          "applicationCategory": "UtilityApplication", "operatingSystem": "All",
          "description": "Convert land area units — Katha, Bigha, Decimal, Acre, Shotangsho, Chotak, Gonda, Square Feet and 20+ more Bangladeshi units.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BDT" }
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "How many Square Feet in 1 Katha?", "acceptedAnswer": { "@type": "Answer", "text": "1 Katha equals 720 Square Feet in Bangladesh standard measurement." } },
            { "@type": "Question", "name": "How many Katha in 1 Bigha?", "acceptedAnswer": { "@type": "Answer", "text": "1 Bigha equals 20 Katha in Bangladesh." } },
            { "@type": "Question", "name": "What is 1 Decimal in Square Feet?", "acceptedAnswer": { "@type": "Answer", "text": "1 Decimal (Shotangsho) equals 435.6 Square Feet." } }
          ]
        }) }} />
      </div>
    </div>
  );
}
