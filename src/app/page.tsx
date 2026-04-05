import { ArrowRight, ShieldCheck, Zap, Clock, Lock, Globe, Server, CreditCard, GraduationCap, Ruler, FileImage, Calculator, Landmark, FileDown, Calendar, FileText, Contact2, CircleDollarSign } from "lucide-react";
import HomeSearch from "./components/HomeSearch";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ridoway Agency | বাংলাদেশের জন্য সেরা অনলাইন টুলস হাব",
  description: "বিকাশ চার্জ ক্যালকুলেটর, জিপিএ ক্যালকুলেটর, আয়কর নির্ণয়, এবং পিডিএফ টুলস সহ প্রয়োজনীয় সব অনলাইন টুলস এখন এক জায়গায়। ১০০% নিরাপদ এবং দ্রুত।",
  alternates: {
    canonical: "https://ridoway.agency",
  }
};


const FEATURED_TOOLS = [
  { title: "bKash Calculator", desc: "ক্যাশ আউট চার্জ হিসাব করুন", icon: CreditCard, href: "/tools/bkash-charge-calculator-bd", color: "from-pink-500 to-rose-600" },
  { title: "GPA Calculator", desc: "SSC/HSC GPA নির্ণয় করুন", icon: GraduationCap, href: "/tools/hsc-gpa-calculator-bd", color: "from-blue-500 to-indigo-600" },
  { title: "Land Converter", desc: "কাঠা, বিঘা, শতাংশ রূপান্তর", icon: Ruler, href: "/tools/land-area-converter-bd", color: "from-amber-500 to-orange-600" },
  { title: "Image to PDF", desc: "ছবি থেকে PDF তৈরি করুন", icon: FileImage, href: "/tools/jpg-to-pdf", color: "from-violet-500 to-purple-600" },
  { title: "EMI Calculator", desc: "মাসিক লোন কিস্তি হিসাব", icon: Landmark, href: "/tools/loan-calculator-bd", color: "from-emerald-500 to-teal-600" },
  { title: "Tax Calculator", desc: "আয়কর নির্ণয় ২০২৫-২৬", icon: CircleDollarSign, href: "/tools/bangladesh-income-tax-calculator", color: "from-cyan-500 to-blue-600" },
];

const ALL_TOOLS = [
  { title: "Nagad Calculator", icon: CreditCard, href: "/tools/nagad-charge-calculator" },
  { title: "Compress PDF", icon: FileDown, href: "/tools/compress-pdf" },
  { title: "Age Calculator", icon: Calendar, href: "/tools/age-calculator-bd" },
  { title: "Number to Words", icon: FileText, href: "/tools/number-to-word-converter-bd" },
  { title: "Family Card", icon: Contact2, href: "/tools/family-card-eligibility-bd" },
  { title: "Electricity Bill", icon: Zap, href: "/tools/electricity-bill-calculator-bd" },
];

/**
 * Ridoway Agency - Home Page
 * Premium, privacy-first tools hub for Bangladesh.
 */
export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen bg-black overflow-hidden">

      {/* ══════════════════════════════════════════════════════
          ██ HERO SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-emerald-500/[0.07] rounded-full blur-[128px]" />
          <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-blue-500/[0.05] rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[40%] w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[120px]" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-400">Privacy-First Tools</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white mb-6 leading-[1.05]">
            বাংলাদেশের জন্য{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              সেরা অনলাইন টুলস
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-base md:text-lg text-zinc-400 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            ক্যালকুলেটর, কনভার্টার, PDF টুলস — সবকিছু একসাথে।
            <span className="text-zinc-500"> ১০০% নিরাপদ এবং আপনার গোপনীয়তা আমাদের কাছে অগ্রাধিকার।</span>
          </p>

          {/* Search */}
          <HomeSearch />

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { icon: ShieldCheck, label: "১০০% প্রাইভেট", sublabel: "No Data Stored" },
              { icon: Zap, label: "ইনস্ট্যান্ট রেজাল্ট", sublabel: "Client-Side" },
              { icon: Clock, label: "প্রতিদিন আপডেট", sublabel: "Always Current" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-emerald-500/30 group-hover:bg-emerald-500/[0.05] transition-all duration-300">
                  <feature.icon className="h-4 w-4 text-emerald-500/70 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors">{feature.label}</p>
                  <p className="text-[10px] text-zinc-600 font-medium">{feature.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ██ FEATURED TOOLS GRID
          ══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-500/70 mb-3">জনপ্রিয় টুলস</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
              সবচেয়ে বেশি ব্যবহৃত টুলস
            </h2>
            <p className="text-zinc-500 font-medium max-w-lg mx-auto text-sm">
              প্রতিদিন হাজারো মানুষ এই টুলস ব্যবহার করছে। আপনিও শুরু করুন!
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURED_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${tool.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tool.color} mb-4 shadow-lg`}>
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors duration-300">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                    {tool.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-zinc-600 group-hover:text-emerald-500 transition-colors duration-300">
                    <span>ব্যবহার করুন</span>
                    <ArrowRight className="h-3.5 w-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More Tools Row */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ALL_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col items-center gap-2.5 py-5 px-3 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-300"
              >
                <tool.icon className="h-4.5 w-4.5 text-zinc-600 group-hover:text-emerald-400 transition-colors duration-300" />
                <span className="text-[11px] font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors text-center leading-tight">
                  {tool.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ██ STATS & PRIVACY SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28">
        {/* Subtle divider gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Privacy Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 mb-6">
                <Lock className="h-3 w-3 text-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">Privacy First</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-5 leading-tight">
                আপনার ডাটা,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  শুধুই আপনার।
                </span>
              </h2>
              <p className="text-zinc-400 font-medium leading-relaxed mb-8">
                আমাদের সকল টুলস সম্পূর্ণভাবে আপনার ব্রাউজারে কাজ করে। কোনো তথ্য আমাদের দ্বারা সংগ্রহ করা হয় না এবং কোনো অ্যাকাউন্টের প্রয়োজন নেই।
              </p>

              {/* Privacy Features */}
              <div className="space-y-4">
                {[
                  { icon: Globe, title: "ব্রাউজার-ভিত্তিক", desc: "সবকিছু আপনার ডিভাইসেই চলে" },
                  { icon: Server, title: "সার্ভারে কোনো ডাটা নেই", desc: "আমরা কিছুই সংরক্ষণ করি না" },
                  { icon: ShieldCheck, title: "১০০% সুরক্ষিত", desc: "তৃতীয় পক্ষের সাথে শেয়ার হয় না" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-emerald-500/10 hover:bg-emerald-500/[0.02] transition-all duration-300 group">
                    <div className="p-2 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20 mt-0.5">
                      <item.icon className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-0.5">{item.title}</p>
                      <p className="text-xs text-zinc-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10k+", label: "মাসিক ব্যবহারকারী", sublabel: "Monthly Active Users", accent: "from-emerald-500 to-teal-500" },
                { value: "100%", label: "নিরাপত্তা রেকর্ড", sublabel: "Safety Record", accent: "from-blue-500 to-cyan-500" },
                { value: "99.9%", label: "আপটাইম", sublabel: "Server Uptime", accent: "from-violet-500 to-purple-500" },
                { value: "12+", label: "টুলস অ্যাক্টিভ", sublabel: "Tools Available", accent: "from-amber-500 to-orange-500" }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 text-center hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                  <p className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b ${stat.accent} mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-sm font-bold text-zinc-300 mb-0.5">{stat.label}</p>
                  <p className="text-[10px] text-zinc-600 font-medium uppercase tracking-wider">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ██ CTA SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden">
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-zinc-900/80 to-black" />
            <div className="absolute inset-0 border border-emerald-500/10 rounded-[2rem] md:rounded-[3rem]" />

            {/* Mesh */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[80px]" />

            <div className="relative p-10 md:p-20 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Zap className="h-3 w-3 text-emerald-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">Free Forever</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5 leading-tight">
                এখনই শুরু করুন,{" "}
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  একদম ফ্রি!
                </span>
              </h2>

              <p className="text-zinc-400 font-medium max-w-lg mx-auto mb-10 text-sm md:text-base">
                কোনো সাইন-আপ লাগবে না, কোনো হিডেন চার্জ নেই। শুধু ক্লিক করুন আর ব্যবহার শুরু করুন।
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-black px-8 py-4 rounded-xl font-bold text-sm hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 active:scale-95 shadow-lg shadow-emerald-500/20 group"
                >
                  সব টুলস দেখুন
                  <ArrowRight className="h-4 w-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/tools/bkash-charge-calculator-bd"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-zinc-300 font-bold text-sm hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
                >
                  জনপ্রিয়: bKash Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
