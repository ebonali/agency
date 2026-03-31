"use client";

import { useState, useCallback, useRef } from "react";
import { Upload, FileImage, Download, RefreshCw, Check, Trash2, GripVertical, Shield, Zap, Settings2 } from "lucide-react";
import { motion, AnimatePresence, Reorder } from "framer-motion";

interface ImageFile {
  id: string;
  file: File;
  preview: string;
  name: string;
  size: number;
}

const PRESETS = [
  { label: "For Online Form", desc: "A4 • Compressed • ≤100KB", quality: 0.5, maxWidth: 595 },
  { label: "For Email", desc: "A4 • Medium • ≤300KB", quality: 0.7, maxWidth: 595 },
  { label: "High Quality Print", desc: "A4 • Full Quality", quality: 1.0, maxWidth: 2480 },
];

export default function ImageToPdfClient() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [preset, setPreset] = useState(1);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback((files: FileList | File[]) => {
    const newImages: ImageFile[] = Array.from(files)
      .filter(f => f.type.startsWith("image/"))
      .map(f => ({
        id: crypto.randomUUID(),
        file: f,
        preview: URL.createObjectURL(f),
        name: f.name,
        size: f.size,
      }));
    setImages(prev => [...prev, ...newImages]);
    setDone(false);
    setResultUrl(null);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const removeImage = (id: string) => {
    setImages(prev => {
      const img = prev.find(i => i.id === id);
      if (img) URL.revokeObjectURL(img.preview);
      return prev.filter(i => i.id !== id);
    });
    setDone(false);
    setResultUrl(null);
  };

  const clearAll = () => {
    images.forEach(i => URL.revokeObjectURL(i.preview));
    setImages([]);
    setDone(false);
    setResultUrl(null);
  };

  const convertToPdf = async () => {
    if (images.length === 0) return;
    setProcessing(true);
    setDone(false);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const imageCompression = (await import("browser-image-compression")).default;
      const pdfDoc = await PDFDocument.create();
      const A4_W = 595.28;
      const A4_H = 841.89;
      const p = PRESETS[preset];

      for (const img of images) {
        let blob: Blob = img.file;
        // Compress if not max quality
        if (p.quality < 1) {
          const compressed = await imageCompression(img.file, {
            maxSizeMB: p.quality < 0.6 ? 0.08 : 0.3,
            maxWidthOrHeight: p.maxWidth,
            useWebWorker: true,
          });
          blob = compressed;
        }
        const arrBuf = await blob.arrayBuffer();
        let embeddedImg;
        if (img.file.type === "image/png") {
          embeddedImg = await pdfDoc.embedPng(arrBuf);
        } else {
          embeddedImg = await pdfDoc.embedJpg(arrBuf);
        }
        const imgAspect = embeddedImg.width / embeddedImg.height;
        const pageAspect = A4_W / A4_H;
        let drawW: number, drawH: number;
        if (imgAspect > pageAspect) {
          drawW = A4_W;
          drawH = A4_W / imgAspect;
        } else {
          drawH = A4_H;
          drawW = A4_H * imgAspect;
        }
        const page = pdfDoc.addPage([A4_W, A4_H]);
        const x = (A4_W - drawW) / 2;
        const y = (A4_H - drawH) / 2;
        page.drawImage(embeddedImg, { x, y, width: drawW, height: drawH });
      }

      const pdfBytes = await pdfDoc.save();
      const pdfBlob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(pdfBlob);
      setResultUrl(url);
      setResultSize(pdfBlob.size);
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

  return (
    <div className="max-w-4xl mx-auto space-y-8 mb-32">
      {/* Drop Zone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className="bg-zinc-950 p-12 md:p-20 rounded-[32px] border-2 border-dashed border-white/10 hover:border-emerald-500/40 transition-all cursor-pointer text-center group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
        <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => e.target.files && handleFiles(e.target.files)} />
        <div className="relative z-10">
          <div className="h-16 w-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all">
            <Upload className="h-7 w-7 text-zinc-500 group-hover:text-black transition-colors" />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Drop images here or click to Browse</h3>
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">JPG, PNG, WebP • Multiple files supported • Auto A4 resize</p>
        </div>
      </div>

      {/* Preset Selector */}
      {images.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
            <Settings2 className="h-3.5 w-3.5" /> Quick Presets
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PRESETS.map((p, i) => (
              <button key={i} onClick={() => { setPreset(i); setDone(false); setResultUrl(null); }}
                className={`p-5 rounded-2xl border text-left transition-all ${preset === i ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-zinc-950 border-white/5 hover:border-white/10'}`}>
                <div className={`text-xs font-bold mb-1 ${preset === i ? 'text-emerald-400' : 'text-white'}`}>{p.label}</div>
                <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">{p.desc}</div>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Image Preview Grid */}
      <AnimatePresence>
        {images.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                {images.length} Image{images.length > 1 ? 's' : ''} Selected
              </h3>
              <button onClick={clearAll} className="text-[9px] font-bold uppercase tracking-widest text-red-400/60 hover:text-red-400 transition-colors flex items-center gap-1">
                <Trash2 className="h-3 w-3" /> Clear All
              </button>
            </div>

            <Reorder.Group axis="y" values={images} onReorder={setImages} className="space-y-2">
              {images.map((img) => (
                <Reorder.Item key={img.id} value={img} className="flex items-center gap-4 bg-zinc-950 p-4 rounded-2xl border border-white/5 cursor-grab active:cursor-grabbing">
                  <GripVertical className="h-4 w-4 text-zinc-700 shrink-0" />
                  <img src={img.preview} alt={img.name} className="h-14 w-14 object-cover rounded-xl border border-white/10" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white font-bold truncate">{img.name}</p>
                    <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">{formatSize(img.size)}</p>
                  </div>
                  <button onClick={() => removeImage(img.id)} className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-zinc-600 hover:text-red-400 transition-all shrink-0">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </Reorder.Item>
              ))}
            </Reorder.Group>

            {/* Convert Button */}
            <button onClick={convertToPdf} disabled={processing}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${processing ? 'bg-zinc-800 text-zinc-500 cursor-wait' : done ? 'bg-emerald-500 text-black' : 'bg-white text-black hover:bg-zinc-200'}`}>
              {processing ? (
                <span className="flex items-center justify-center gap-2"><Zap className="h-4 w-4 animate-pulse" /> Processing locally on your device ⚡</span>
              ) : done ? (
                <span className="flex items-center justify-center gap-2"><Check className="h-4 w-4" /> PDF Ready — Download Below</span>
              ) : (
                <span className="flex items-center justify-center gap-2"><FileImage className="h-4 w-4" /> Convert to PDF</span>
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
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/50 mb-2">PDF Generated</div>
              <div className="text-4xl font-black text-white mb-2">{formatSize(resultSize)}</div>
              <div className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest mb-8">{images.length} page{images.length > 1 ? 's' : ''} • A4 Format • {PRESETS[preset].label}</div>
              <a href={resultUrl} download="ridoway-converted.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-black font-black uppercase tracking-widest text-[10px] hover:bg-emerald-400 transition-all">
                <Download className="h-4 w-4" /> Download PDF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { icon: Shield, text: "No File Upload", desc: "Your images never leave your device" },
          { icon: Zap, text: "Instant Processing", desc: "Works offline, no server needed" },
          { icon: FileImage, text: "Auto A4 Resize", desc: "Perfect fit for documents & forms" },
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
