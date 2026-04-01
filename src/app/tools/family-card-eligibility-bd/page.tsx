import { Metadata } from "next";
import FamilyCardClient from "./FamilyCardClient";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Info, Globe, Users, FileText, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "ফ্যামিলি কার্ড যোগ্যতা যাচাই ২০২৬ – Family Card Eligibility Check BD",
  description: "ফ্যামিলি কার্ড আবেদনের যোগ্যতা যাচাই করুন, প্রয়োজনীয় কাগজপত্রের তালিকা দেখুন এবং আবেদনের ধাপগুলো জানুন। TCB Smart Family Card Bangladesh 2026।",
  keywords: [
    "ফ্যামিলি কার্ড",
    "family card bd",
    "family card eligibility",
    "family card apply online bangladesh",
    "family card korar niyom",
    "family card আবেদন",
    "tcb family card",
    "ফ্যামিলি কার্ড আবেদন",
    "family card 2026",
    "family card documents",
    "family card check",
    "ফ্যামিলি কার্ড যোগ্যতা",
    "smart family card bangladesh",
  ],
  alternates: {
    canonical: "/tools/family-card-eligibility-bd",
  },
  openGraph: {
    title: "ফ্যামিলি কার্ড যোগ্যতা যাচাই ২০২৬ | Ridoway Agency",
    description: "আপনি ফ্যামিলি কার্ড পাবেন কিনা — এখনই যাচাই করুন। প্রয়োজনীয় কাগজপত্র ও আবেদন প্রক্রিয়া জানুন।",
    type: "website",
  },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ফ্যামিলি কার্ড কী?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ফ্যামিলি কার্ড হলো বাংলাদেশ সরকারের একটি সামাজিক নিরাপত্তা কর্মসূচি, যার মাধ্যমে দরিদ্র পরিবারগুলো সরাসরি আর্থিক সহায়তা বা ভর্তুকি মূল্যে পণ্য পেতে পারে।"
      }
    },
    {
      "@type": "Question",
      "name": "ফ্যামিলি কার্ড আবেদনে কত খরচ হয়?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ফ্যামিলি কার্ডের জন্য আবেদন সম্পূর্ণ বিনামূল্যে। কোনো ব্যক্তি বা দালালকে টাকা দেওয়ার প্রয়োজন নেই।"
      }
    },
    {
      "@type": "Question",
      "name": "ফ্যামিলি কার্ড আবেদনে কী কী কাগজপত্র লাগবে?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "জাতীয় পরিচয়পত্র (NID), পাসপোর্ট সাইজ রঙিন ছবি ২ কপি, সচল মোবাইল নম্বর, মোবাইল ব্যাংকিং অ্যাকাউন্ট (বিকাশ/নগদ/রকেট) এবং পরিবারের সদস্যদের NID/জন্ম নিবন্ধন।"
      }
    },
    {
      "@type": "Question",
      "name": "প্রতি পরিবারে কয়টি ফ্যামিলি কার্ড পাওয়া যাবে?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "প্রতি পরিবারে শুধুমাত্র একটি ফ্যামিলি কার্ড বরাদ্দ করা হবে। পরিবারের প্রধান ব্যক্তির নামে কার্ড ইস্যু করা হয়।"
      }
    },
    {
      "@type": "Question",
      "name": "ফ্যামিলি কার্ড কবে সারা দেশে চালু হবে?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "পাইলট প্রকল্প হিসেবে ২০২৬ সালে বগুড়া ও দিনাজপুরের ৮টি উপজেলায় শুরু হয়েছে। পর্যায়ক্রমে জুন ২০২৬ এর মধ্যে ৪০,০০০ পরিবার এবং পরবর্তীতে ২ কোটি পরিবারকে অন্তর্ভুক্ত করার পরিকল্পনা রয়েছে।"
      }
    }
  ]
};

export default function FamilyCardEligibilityPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 lg:py-24 selection:bg-white selection:text-black">
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
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse text-xs" />
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
              April 2026 • সর্বশেষ আপডেট
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Informational Tool Only</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 leading-[1.15]">
              ফ্যামিলি কার্ড যোগ্যতা যাচাই <br /><span className="text-teal-500">Bangladesh</span> <span className="text-zinc-700 text-2xl md:text-3xl lg:text-4xl align-top">(2026)</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              আপনি বা আপনার পরিবার ফ্যামিলি কার্ড পাওয়ার যোগ্য কিনা — এখানে যাচাই করুন। প্রয়োজনীয় কাগজপত্রের তালিকা, আবেদন প্রক্রিয়া এবং ধাপে ধাপে গাইড সবকিছু এক জায়গায়।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-900 border border-white/5">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span className="text-xs font-bold text-zinc-300">100% ফ্রি</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-900 border border-white/5">
                <Info className="h-5 w-5 text-blue-400" />
                <span className="text-xs font-bold text-zinc-300">তথ্যভিত্তিক টুল</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-900 border border-white/5">
                <Globe className="h-5 w-5 text-teal-400" />
                <span className="text-xs font-bold text-zinc-300">সর্বশেষ আপডেট</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-12 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-4 max-w-3xl mx-auto">
          <HelpCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">গুরুত্বপূর্ণ তথ্য</p>
            <p className="text-xs text-zinc-400 font-medium leading-relaxed">
              এই টুলটি শুধুমাত্র তথ্যমূলক উদ্দেশ্যে তৈরি। এটি সরকারি কোনো ওয়েবসাইট বা আবেদন পোর্টাল নয়। চূড়ান্ত যোগ্যতা নির্ধারণ করবে সরকারের PMT (Proxy Means Test) যাচাই প্রক্রিয়া। সঠিক তথ্যের জন্য <a href="https://familycard.gov.bd" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">familycard.gov.bd</a> ভিজিট করুন।
            </p>
          </div>
        </div>

        {/* Client Component */}
        <FamilyCardClient />

        {/* ── SEO Content Block ── */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-white text-center mb-8">ফ্যামিলি কার্ড সম্পর্কে বিস্তারিত</h2>

          <div className="space-y-8 text-sm text-zinc-400 font-medium leading-relaxed">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">ফ্যামিলি কার্ড কী এবং কেন প্রয়োজন?</h3>
              <p>
                ফ্যামিলি কার্ড হলো বাংলাদেশ সরকারের একটি উদ্ভাবনী সামাজিক নিরাপত্তা কর্মসূচি। Trading Corporation of Bangladesh (TCB) এই কার্ড পরিচালনা করে। এর মাধ্যমে দরিদ্র ও নিম্ন আয়ের পরিবারগুলো ভর্তুকি মূল্যে চাল, ডাল, তেলসহ নিত্যপ্রয়োজনীয় পণ্য ক্রয় করতে পারবে এবং সরাসরি মোবাইল ব্যাংকিংয়ের মাধ্যমে আর্থিক সহায়তা পাবে।
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">কারা ফ্যামিলি কার্ড পাবেন?</h3>
              <p>
                প্রধানত দরিদ্র ও অতিদরিদ্র পরিবার, দিনমজুর, কৃষক, জেলে, রিকশাচালক, গৃহকর্মী, বিধবা, প্রতিবন্ধী ব্যক্তিসহ সমাজের অসহায় শ্রেণির মানুষরা এই কার্ডের জন্য যোগ্য। গ্রামাঞ্চলে মাসিক আয় ১২,০০০ টাকা এবং শহরে ১৫,০০০ টাকার নিচে হলে অগ্রাধিকার পাওয়া যায়।
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">কীভাবে আবেদন করবেন?</h3>
              <p>
                অফলাইনে নিকটস্থ ইউনিয়ন পরিষদ, পৌরসভা বা সিটি কর্পোরেশন কার্যালয় থেকে আবেদন ফরম সংগ্রহ করে জমা দেওয়া যায়। অনলাইনে tcbsheba.com বা familycard.gov.bd পোর্টালের মাধ্যমে NID ব্যবহার করে আবেদন করা সম্ভব। আবেদন সম্পূর্ণ বিনামূল্যে — কাউকে টাকা দেওয়ার প্রয়োজন নেই।
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-lg font-black text-white text-center mb-6">সম্পর্কিত টুলস</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/tools/bkash-charge-calculator-bd" className="p-5 rounded-2xl bg-zinc-950 border border-white/5 hover:border-emerald-500/20 transition-all group text-center">
              <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">bKash Calculator</p>
              <p className="text-[11px] text-zinc-500 font-medium mt-1">ক্যাশ আউট চার্জ</p>
            </Link>
            <Link href="/tools/bangladesh-income-tax-calculator" className="p-5 rounded-2xl bg-zinc-950 border border-white/5 hover:border-emerald-500/20 transition-all group text-center">
              <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Income Tax Calc</p>
              <p className="text-[11px] text-zinc-500 font-medium mt-1">আয়কর হিসাব</p>
            </Link>
            <Link href="/tools/loan-calculator-bd" className="p-5 rounded-2xl bg-zinc-950 border border-white/5 hover:border-emerald-500/20 transition-all group text-center">
              <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">EMI Calculator</p>
              <p className="text-[11px] text-zinc-500 font-medium mt-1">লোন EMI</p>
            </Link>
          </div>
        </div>

      </div>

      {/* JSON-LD: FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
    </div>
  );
}
