import { Code2, ArrowRight, Zap, ShieldCheck, Clock } from "lucide-react";
import HomeSearch from "./components/HomeSearch";
import Link from "next/link";

/**
 * Ridoway Agency - Home Page
 * A premium landing page for the tools hub.
 */
export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen bg-black">
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Privacy-First Online Tools
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tightest text-white mb-8 leading-[0.9]">
            The Ultimate Hub <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-600">for Bangladesh.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            বাংলাদেশের জন্য তৈরি সব প্রয়োজনীয় অনলাইন টুলস — ক্যালকুলেটর, কনভার্টার এবং PDF টুলস। আপনার ডাটা আমাদের কাছে ১% ও স্টোর হয় না।
          </p>

          <HomeSearch />

          <div className="mt-16 flex flex-wrap justify-center gap-10">
            {[
              { icon: ShieldCheck, label: "Private" },
              { icon: Zap, label: "Fast" },
              { icon: Clock, label: "Updated" }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5 text-zinc-700 font-black text-[10px] uppercase tracking-widest">
                <feature.icon className="h-4 w-4" />
                {feature.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROWTH INDICATOR ── */}
      <section className="py-24 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex p-5 rounded-3xl bg-zinc-900 border border-white/10 text-emerald-500 mb-10 shadow-2xl">
            <Code2 className="h-10 w-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tightest text-white mb-10">We prioritize Your Privacy.</h2>
          <p className="text-xl text-zinc-600 font-medium mb-12 leading-relaxed">
            কোনো ডাটা আমাদের সার্ভারে জমা থাকে না। আপনার সকল তথ্য শুধুমাত্র <br className="hidden md:block" /> 
            আপনার ব্রাউজারেই প্রসেস করা হয়। ১০০% নিরাপদ এবং প্রাইভেট।
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "10k+", desc: "Monthly Users" },
              { label: "100%", desc: "Safety Record" },
              { label: "99.9%", desc: "Uptime" },
              { label: "12+", desc: "Core Tools" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-3 group">
                <p className="text-3xl font-black text-white group-hover:text-emerald-500 transition-colors uppercase">{stat.label}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="bg-gradient-to-b from-zinc-900 to-black border border-white/5 rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tightest text-white mb-8">Ready to explore?</h2>
            <Link 
              href="/tools"
              className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-zinc-200 transition-all active:scale-95 group"
            >
              All Tools Hub
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
