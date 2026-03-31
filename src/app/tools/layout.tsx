import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Online Tools for Bangladesh | Ridoway Agency",
  description: "বাংলাদেশের জন্য ফ্রি অনলাইন টুলস — bKash Calculator, GPA Calculator, PDF Converter, Land Measurement, Income Tax Calculator এবং আরও অনেক কিছু। কোনো সাইনআপ নেই, ১০০% প্রাইভেট।",
  keywords: [
    "free online tools bangladesh", "bkash calculator", "gpa calculator bd",
    "pdf converter online", "land area converter bd", "income tax calculator bd",
    "ridoway tools", "bangla tools online", "emi calculator bd",
    "number to word converter bangladesh", "age calculator bangla"
  ],
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Online Tools for Bangladesh | Ridoway Agency",
    description: "11+ free, privacy-first tools for Bangladeshis. Calculators, converters, PDF tools — all in one place.",
    type: "website",
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
