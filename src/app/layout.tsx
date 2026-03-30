import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
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
  title: "Ridoway Agency | Premium Digital Solutions & Moving Experts",
  description: "Ridoway Agency provides top-tier digital services and expert interstate moving solutions. Experience reliability, safety, and excellence with our premium offerings.",
  keywords: ["Ridoway Agency", "Digital Solutions", "Interstate Moving", "Moving Expert", "Web Development", "Branding"],
  openGraph: {
    title: "Ridoway Agency",
    description: "Premium Digital Solutions & Moving Experts",
    type: "website",
    locale: "en_US",
    url: "https://ridoway.agency",
    siteName: "Ridoway Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridoway Agency",
    description: "Premium Digital Solutions & Moving Experts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${siliguri.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/></svg>
                <span className="text-xl font-semibold tracking-tight ml-2">Ridoway Agency</span>
              </div>
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                <a href="/" className="transition-colors hover:text-white">Home</a>
                <a href="/tools" className="transition-colors hover:text-white">Tools</a>
                <a href="/tools/bkash-charge-calculator-bd" className="transition-colors text-white">bKash Calc</a>
              </nav>
              <button className="rounded-md bg-white px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200">
                Contact
              </button>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-white/10 bg-black py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">Ridoway</span>
                </div>
                <p className="text-sm text-zinc-500">
                  © {new Date().getFullYear()} Ridoway Agency.
                </p>
                <div className="flex items-center gap-6 text-sm text-zinc-500">
                  <a href="#" className="hover:text-white">Privacy</a>
                  <a href="#" className="hover:text-white">Terms</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

