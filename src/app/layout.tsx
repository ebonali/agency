import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siliguri = Hind_Siliguri({
  variable: "--font-bangla",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ridoway.agency"),
  title: {
    default: "Ridoway Agency | Free Online Tools for Bangladesh",
    template: "%s | Ridoway Agency",
  },
  description: "বাংলাদেশের জন্য তৈরি বিনামূল্যের অনলাইন টুলস — bKash Calculator, GPA Calculator, PDF Tools, Land Converter, EMI Calculator এবং আরও অনেক কিছু।",
  keywords: ["ridoway agency", "online tools bd", "বাংলাদেশ টুলস", "free calculator bd", "bkash calculator", "gpa calculator bd"],
  openGraph: {
    title: "Ridoway Agency | Free Online Tools for Bangladesh",
    description: "A curated suite of high-performance, privacy-first online tools designed for Bangladeshis.",
    type: "website",
    locale: "en_US",
    url: "https://ridoway.agency",
    siteName: "Ridoway Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridoway Agency",
    description: "Free Online Tools for Bangladesh — Fast, Private, Accurate.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ridoway.agency" },
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "PDF Tools", href: "/tools/jpg-to-pdf" },
];

const FOOTER_TOOLS = [
  { label: "bKash Calculator", href: "/tools/bkash-charge-calculator-bd" },
  { label: "GPA Calculator", href: "/tools/hsc-gpa-calculator-bd" },
  { label: "Image to PDF", href: "/tools/jpg-to-pdf" },
  { label: "Land Converter", href: "/tools/land-area-converter-bd" },
  { label: "EMI Calculator", href: "/tools/loan-calculator-bd" },
  { label: "Tax Calculator", href: "/tools/bangladesh-income-tax-calculator" },
];

const FOOTER_COMPANY = [
  { label: "All Tools", href: "/tools" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${siliguri.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager - GTM-5ZPX9K96 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5ZPX9K96');`,
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M91L4NQHFT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M91L4NQHFT');
            `,
          }}
        />
        {/* Microsoft Clarity - w4mevgb8e3 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w4mevgb8e3");`,
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZPX9K96"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <div className="relative flex min-h-screen flex-col">

          {/* ─── NAVBAR ─── */}
          <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl">
            <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-6xl">
              <Link href="/" className="flex items-center gap-2.5 group" aria-label="Ridoway Agency Home">
                <svg viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-emerald-400 transition-colors"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/></svg>
                <span className="text-sm font-black uppercase tracking-widest">Ridoway</span>
              </Link>
              <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                {NAV_LINKS.map(link => (
                  <Link key={link.href} href={link.href}
                    className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link href="/tools"
                className="rounded-lg bg-white px-5 py-2 text-[11px] font-black uppercase tracking-widest text-black transition-all hover:bg-zinc-200 active:scale-95">
                Explore Tools
              </Link>
            </div>
          </header>

          {/* ─── MAIN ─── */}
          <main className="flex-1">{children}</main>

          {/* ─── FOOTER ─── */}
          <footer className="border-t border-white/5 bg-black pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="md:col-span-1">
                  <Link href="/" className="flex items-center gap-2 mb-4">
                    <svg viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/></svg>
                    <span className="text-sm font-black uppercase tracking-widest">Ridoway</span>
                  </Link>
                  <p className="text-[11px] text-zinc-600 leading-relaxed font-medium max-w-[240px]">
                    Free, privacy-first online tools built for Bangladesh. No signup, no data stored.
                  </p>
                </div>

                {/* Popular Tools */}
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-5">Popular Tools</h4>
                  <ul className="space-y-2.5">
                    {FOOTER_TOOLS.map(link => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-xs text-zinc-600 hover:text-white transition-colors font-medium">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-5">Company</h4>
                  <ul className="space-y-2.5">
                    {FOOTER_COMPANY.map(link => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-xs text-zinc-600 hover:text-white transition-colors font-medium">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status */}
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-5">Status</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-zinc-400 font-bold">All Systems Operational</span>
                  </div>
                  <p className="text-[10px] text-zinc-700 font-medium">11 tools live • Updated daily</p>
                </div>
              </div>

              {/* Bottom */}
              <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">
                  © {new Date().getFullYear()} Ridoway Agency. All rights reserved.
                </p>
                <p className="text-[10px] text-zinc-800 font-bold uppercase tracking-widest">
                  100% Client-Side • No Data Stored • Made in Bangladesh 🇧🇩
                </p>
              </div>
            </div>
          </footer>
        </div>

        {/* JSON-LD: Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ridoway Agency",
          "url": "https://ridoway.agency",
          "logo": "https://ridoway.agency/favicon.ico",
          "description": "Free online tools for Bangladesh — calculators, converters, PDF tools.",
          "sameAs": []
        }) }} />
      </body>
    </html>
  );
}
