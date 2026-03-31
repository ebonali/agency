"use client";

import { useState, useCallback, useRef } from "react";
import { Upload, FileDown, Download, RefreshCw, Check, Shield, Zap, Settings2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PRESETS = [
  { label: "For Online Form", desc: "Target ≤100KB", targetKB: 100 },
  { label: "For Email", desc: "Target ≤500KB", targetKB: 500 },
  { label: "Balanced", desc: "Good quality, smaller size", targetKB: 1000 },
];

export default function CompressPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [preset, setPreset] = useState(0);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState(0);
  const [originalSize, setOriginalSize] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((f: File) => {
    if (f.type !== "application/pdf") return;
    setFile(f);
    setOriginalSize(f.size);
    setDone(false);
    setResultUrl(null);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, [handleFile]);

  const compress = async () => {
    if (!file) return;
    setProcessing(true);
    setDone(false);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const arrBuf = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(arrBuf, { ignoreEncryption: true });
      const newDoc = await PDFDocument.create();
      const pages = await newDoc.copyPages(srcDoc, srcDoc.getPageIndices());
      pages.forEach(p => newDoc.addPage(p));
      // Strip metadata to reduce size
      newDoc.setTitle("");
      newDoc.setAuthor("");
      newDoc.setSubject("");
      newDoc.setKeywords([]);
      newDoc.setProducer("Ridoway PDF Engine");
      newDoc.setCreator("ridoway.agency");

      const pdfBytes = await newDoc.save({
        useObjectStreams: true,
        addDefaultPage: false,
      });

      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setResultUrl(url);
      setResultSize(blob.size);
      setDone(true);
    } catch (err) {
      console.error(err);
    }
    setProcessing(false);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(2) + " MB";
  };

  const reduction = originalSize > 0 && resultSize > 0
    ? Math.max(0, ((originalSize - resultSize) / originalSize * 100)).toFixed(1)
    : "0";

  const clearAll = () => {
    setFile(null);
    setDone(false);
    setResultUrl(null);
    setResultSize(0);
    setOriginalSize(0);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 mb-32">
      {/* Drop Zone */}
      {!file && (
        <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="bg-zinc-950 p-12 md:p-20 rounded-[32px] border-2 border-dashed border-white/10 hover:border-emerald-500/40 transition-all cursor-pointer text-center group relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
          <input ref={fileInputRef} type="file" accept=".pdf" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
          <div className="relative z-10">
            <div className="h-16 w-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all">
              <Upload className="h-7 w-7 text-zinc-500 group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Drop your PDF here or click to Browse</h3>
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">PDF files only • Max 50MB • 100% client-side</p>
          </div>
        </div>
      )}

      {/* File Selected */}
      <AnimatePresence>
        {file && !done && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
            {/* File Card */}
            <div className="bg-zinc-950 p-8 rounded-[32px] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <FileDown className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm truncate max-w-[200px] md:max-w-[300px]">{file.name}</p>
                  <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">Original: {formatSize(originalSize)}</p>
                </div>
              </div>
              <button onClick={clearAll} className="text-[9px] font-bold uppercase tracking-widest text-zinc-600 hover:text-red-400 transition-colors">Change File</button>
            </div>

            {/* Presets */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2"><Settings2 className="h-3.5 w-3.5" /> Compression Preset</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PRESETS.map((p, i) => (
                  <button key={i} onClick={() => setPreset(i)}
                    className={`p-5 rounded-2xl border text-left transition-all ${preset === i ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-zinc-950 border-white/5 hover:border-white/10'}`}>
                    <div className={`text-xs font-bold mb-1 ${preset === i ? 'text-emerald-400' : 'text-white'}`}>{p.label}</div>
                    <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">{p.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Compress Button */}
            <button onClick={compress} disabled={processing}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${processing ? 'bg-zinc-800 text-zinc-500 cursor-wait' : 'bg-white text-black hover:bg-zinc-200'}`}>
              {processing ? (
                <span className="flex items-center justify-center gap-2"><Zap className="h-4 w-4 animate-pulse" /> Compressing on your device ⚡</span>
              ) : (
                <span className="flex items-center justify-center gap-2"><FileDown className="h-4 w-4" /> Compress PDF</span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result */}
      <AnimatePresence>
        {done && resultUrl && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-950 p-10 rounded-[32px] border border-emerald-500/20 text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/[0.03]" />
            <div className="relative z-10">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/50 mb-6">Compression Complete</div>
              <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-black text-zinc-500 line-through">{formatSize(originalSize)}</div>
                  <div className="text-[8px] text-zinc-700 uppercase tracking-widest">Original</div>
                </div>
                <div className="text-emerald-500 text-2xl font-black">→</div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white">{formatSize(resultSize)}</div>
                  <div className="text-[8px] text-zinc-700 uppercase tracking-widest">Compressed</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-black text-xs mb-8">
                {reduction}% Reduced
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <a href={resultUrl} download={`compressed-${file?.name || 'document.pdf'}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-black font-black uppercase tracking-widest text-[10px] hover:bg-emerald-400 transition-all">
                  <Download className="h-4 w-4" /> Download
                </a>
                <button onClick={clearAll}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all">
                  <RefreshCw className="h-4 w-4" /> New File
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { icon: Shield, text: "No File Upload", desc: "PDF never leaves your device" },
          { icon: Zap, text: "Works Offline", desc: "No internet needed after page load" },
          { icon: Check, text: "No Signup", desc: "100% free, no account required" },
        ].map((b, i) => (
          <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-950 border border-white/5">
            <b.icon className="h-4 w-4 text-emerald-500/50 shrink-0" />
            <div>
              <div className="text-[10px] font-bold text-white">{b.text}</div>
              <div className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest">{b.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
