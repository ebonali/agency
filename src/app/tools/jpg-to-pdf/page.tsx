import { Metadata } from "next";
import ImageToPdfClient from "./ImageToPdfClient";
import Link from "next/link";
import { ArrowLeft, Shield, Zap, FileImage, HelpCircle, Calculator, Landmark, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "JPG to PDF Converter Online Free | ছবি থেকে PDF বানান",
  description: "Convert JPG, PNG images to PDF instantly. Auto A4 resize, compress for forms, no upload needed. 100% private, works offline. ছবি থেকে পিডিএফ বানান বিনামূল্যে।",
  keywords: [
    "jpg to pdf", "image to pdf bd", "photo to pdf for exam", "ছবি থেকে pdf",
    "jpg to pdf converter online free", "image to pdf a4", "convert photo to pdf bangladesh",
    "pdf size 100kb kora", "camera photo to pdf", "image to pdf free no watermark"
  ],
  alternates: { canonical: "/tools/jpg-to-pdf" }
};

export default function JpgToPdfPage() {
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
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">Client-Side Only • No Upload</div>
          </div>
        </div>

        {/* Hero */}
        <div className="mb-32 relative text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="flex flex-col items-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 text-[10px] uppercase font-black tracking-widest">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" /></span>
              Fastest PDF Engine
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 leading-[1.1]">
              Image to PDF<br /><span className="text-emerald-500">Instant &amp; Private</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              ছবিকে PDF এ রূপান্তর করুন — এক সেকেন্ডে। কোনো আপলোড নেই, কোনো সার্ভার নেই। আপনার ডিভাইসেই সব প্রসেস হয়।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mx-auto">
              {[
                { icon: Shield, text: "100% Private" },
                { icon: Zap, text: "Instant Convert" },
                { icon: FileImage, text: "Auto A4 Fit" },
              ].map((f, i) => (
                <div key={i} className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-zinc-900 border border-white/5">
                  <f.icon className="h-4 w-4 text-emerald-400" />
                  <span className="text-[9px] uppercase font-black tracking-widest text-zinc-400">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ImageToPdfClient />

        {/* SEO Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-32 border-t border-white/5">
          <section>
            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter">How to Convert Image to PDF</h2>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>আমাদের টুলটি ব্যবহার করে আপনি JPG, PNG বা WebP ছবিকে এক ক্লিকে PDF ফরম্যাটে রূপান্তর করতে পারবেন। এটি বিশেষভাবে বাংলাদেশে পরীক্ষার ফর্ম, চাকরির আবেদন এবং সরকারি ডকুমেন্ট জমা দেওয়ার জন্য তৈরি।</p>
              <div className="space-y-3">
                {[
                  { step: "01", title: "Drop or Browse", desc: "Drag images or click to select from your device. Supports JPG, PNG, WebP." },
                  { step: "02", title: "Choose Preset", desc: "Select 'For Online Form' (≤100KB), 'For Email' (≤300KB), or 'High Quality Print'." },
                  { step: "03", title: "Download PDF", desc: "Click Convert — your PDF is generated instantly on your device. No waiting." },
                ].map((s) => (
                  <div key={s.step} className="p-5 rounded-2xl bg-zinc-950 border border-white/5 flex gap-4">
                    <span className="text-emerald-500 font-black text-2xl opacity-30">{s.step}</span>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">{s.title}</h4>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section>
            <div className="inline-flex items-center gap-2 mb-8 text-[9px] uppercase font-black tracking-widest text-zinc-500"><HelpCircle className="h-3 w-3" /> FAQ</div>
            <div className="space-y-3">
              {[
                { q: "Is my image uploaded to any server?", a: "No. All processing happens 100% on your device using JavaScript. Your files never leave your browser." },
                { q: "Can I convert multiple images at once?", a: "Yes! Drop multiple images and they will be merged into a single multi-page PDF. You can drag to reorder pages." },
                { q: "Does it work on mobile?", a: "Yes, it works on all devices — Android, iPhone, tablet, and desktop browsers." },
                { q: "How do I reduce the PDF file size?", a: "Use the 'For Online Form' preset which compresses images to ≤100KB before generating the PDF." },
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
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter relative z-10 italic underline decoration-emerald-500 decoration-4 underline-offset-8">More PDF &amp; Financial Tools</h3>
          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10 mt-6">
            <Link href="/tools/compress-pdf" className="px-6 py-3 rounded-full bg-white text-black font-black uppercase tracking-widest text-[9px] hover:bg-zinc-200 transition-colors flex items-center gap-2"><Zap className="h-3.5 w-3.5" /> Compress PDF</Link>
            <Link href="/tools/bkash-charge-calculator-bd" className="px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-colors flex items-center gap-2"><Calculator className="h-3.5 w-3.5" /> bKash Calc</Link>
            <Link href="/tools/number-to-word-converter-bd" className="px-6 py-3 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-colors flex items-center gap-2"><FileText className="h-3.5 w-3.5" /> Word Converter</Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30">
          <div className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} Ridoway Agency • PDF Engine</div>
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-800">No Server Upload • Works Offline</span>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "WebApplication", "name": "Image to PDF Converter BD",
          "url": "https://ridoway.agency/tools/jpg-to-pdf", "applicationCategory": "UtilityApplication",
          "operatingSystem": "All", "description": "Convert JPG, PNG images to PDF instantly. Auto A4 resize, no upload, 100% private.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BDT" }
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "How to convert image to PDF free?", "acceptedAnswer": { "@type": "Answer", "text": "Drop your images into the converter, select a quality preset, and click Convert. The PDF is generated instantly on your device with no signup required." } },
            { "@type": "Question", "name": "Is my file safe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All processing happens in your browser. No file is ever uploaded to any server." } }
          ]
        }) }} />
      </div>
    </div>
  );
}
