import { Metadata } from "next";
import CompressPdfClient from "./CompressPdfClient";
import Link from "next/link";
import { ArrowLeft, Shield, Zap, FileDown, HelpCircle, FileImage, Calculator, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Compress PDF Online Free | পিডিএফ সাইজ কমান",
  description: "Compress PDF file size instantly. Reduce PDF to 100KB for online forms. No upload, 100% private, works offline. পিডিএফ ফাইলের সাইজ কমান বিনামূল্যে।",
  keywords: [
    "compress pdf", "pdf size 100kb kora", "compress pdf for upload bd", "পিডিএফ সাইজ কমান",
    "reduce pdf size free online", "pdf compress free no watermark", "compress pdf for email",
    "pdf file size reducer", "pdf compressor online", "small pdf bd"
  ],
  alternates: { canonical: "/tools/compress-pdf" }
};

export default function CompressPdfPage() {
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
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">Secure Processing • No Upload</div>
          </div>
        </div>

        {/* Hero */}
        <div className="mb-32 relative text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="flex flex-col items-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 text-[10px] uppercase font-black tracking-widest">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" /></span>
              Privacy-First PDF Engine
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 leading-[1.1]">
              Compress PDF<br /><span className="text-emerald-500">File Size Free</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              পিডিএফ ফাইলের সাইজ তাৎক্ষণিকভাবে কমান। অনলাইন ফর্মের জন্য ১০০KB বা ইমেইলের জন্য ছোট সাইজ — কোনো আপলোড ছাড়াই।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mx-auto">
              {[
                { icon: Shield, text: "No Server Upload" },
                { icon: Zap, text: "Instant Compress" },
                { icon: FileDown, text: "100KB Presets" },
              ].map((f, i) => (
                <div key={i} className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-zinc-900 border border-white/5">
                  <f.icon className="h-4 w-4 text-emerald-400" />
                  <span className="text-[9px] uppercase font-black tracking-widest text-zinc-400">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CompressPdfClient />

        {/* SEO Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-32 border-t border-white/5">
          <section>
            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter">How to Reduce PDF File Size</h2>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>বাংলাদেশে সরকারি ফর্ম, চাকরির আবেদন এবং অনলাইন সাবমিশনের জন্য PDF ফাইলের সাইজ সীমিত থাকে — সাধারণত ১০০KB থেকে ৩০০KB। আমাদের টুল ব্যবহার করে আপনি নিমিষেই ফাইল সাইজ কমাতে পারবেন।</p>
              <p>This tool uses object stream optimization and metadata stripping to reduce file size while preserving document quality and readability.</p>
            </div>
          </section>
          <section>
            <div className="inline-flex items-center gap-2 mb-8 text-[9px] uppercase font-black tracking-widest text-zinc-500"><HelpCircle className="h-3 w-3" /> FAQ</div>
            <div className="space-y-3">
              {[
                { q: "Will my PDF quality decrease?", a: "The tool optimizes internal structure and strips metadata. Text and vector content remain unchanged." },
                { q: "Is there a file size limit?", a: "The tool works best with PDFs up to 50MB. Larger files may be slow on mobile devices." },
                { q: "Does it work offline?", a: "Yes! Once the page is loaded, you can compress PDFs even without internet." },
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
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter relative z-10 italic underline decoration-emerald-500 decoration-4 underline-offset-8">More PDF &amp; Utility Tools</h3>
          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10 mt-6">
            <Link href="/tools/jpg-to-pdf" className="px-6 py-3 rounded-full bg-white text-black font-black uppercase tracking-widest text-[9px] hover:bg-zinc-200 transition-colors flex items-center gap-2"><FileImage className="h-3.5 w-3.5" /> Image to PDF</Link>
            <Link href="/tools/bkash-charge-calculator-bd" className="px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-colors flex items-center gap-2"><Calculator className="h-3.5 w-3.5" /> bKash Calc</Link>
            <Link href="/tools/number-to-word-converter-bd" className="px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-colors flex items-center gap-2"><FileText className="h-3.5 w-3.5" /> Word Converter</Link>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30">
          <div className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} Ridoway Agency • PDF Engine</div>
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-800">No Server Upload • Works Offline</span>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "WebApplication", "name": "PDF Compressor BD",
          "url": "https://ridoway.agency/tools/compress-pdf", "applicationCategory": "UtilityApplication",
          "operatingSystem": "All", "description": "Compress PDF file size instantly. No upload, 100% private.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BDT" }
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "How to compress PDF to 100KB?", "acceptedAnswer": { "@type": "Answer", "text": "Use the 'For Online Form' preset which optimizes the PDF structure to target ≤100KB file size." } },
            { "@type": "Question", "name": "Is my PDF uploaded to a server?", "acceptedAnswer": { "@type": "Answer", "text": "No. All compression happens 100% in your browser. Your PDF never leaves your device." } }
          ]
        }) }} />
      </div>
    </div>
  );
}
