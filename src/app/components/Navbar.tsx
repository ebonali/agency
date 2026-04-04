"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "PDF Tools", href: "/tools/jpg-to-pdf" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`sticky top-0 z-[100] w-full transition-all duration-300 border-b ${
        scrolled 
          ? "bg-black/80 backdrop-blur-xl border-white/10 py-3" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5 group relative z-[110]" aria-label="Ridoway Agency Home">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-lg rounded-full group-hover:bg-emerald-500/40 transition-colors" />
            <svg viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-white group-hover:text-emerald-400 transition-colors">Ridoway</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-500">Agency</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] p-1 rounded-2xl backdrop-blur-md" aria-label="Main navigation">
          {NAV_LINKS.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`relative px-5 py-2 text-[12px] font-bold uppercase tracking-widest transition-all duration-300 rounded-xl group overflow-hidden ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 relative z-[110]">
          <Link href="/tools"
            className="hidden sm:flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-black transition-all hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 shadow-lg shadow-white/5"
          >
            Explore
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] md:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-zinc-950 border-l border-white/10 z-[105] shadow-2xl p-8 pt-24 md:hidden"
            >
              <div className="flex flex-col gap-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">Navigation</p>
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      className={`text-2xl font-black uppercase tracking-tighter hover:text-emerald-400 transition-colors ${
                        pathname === link.href ? "text-emerald-500" : "text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <hr className="border-white/5 my-4" />
                
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                >
                  <Link 
                    href="/tools" 
                    className="flex items-center justify-between w-full p-4 rounded-2xl bg-emerald-500 text-black font-black uppercase tracking-widest text-xs"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                <div className="mt-auto pt-12">
                   <div className="flex items-center gap-2 mb-4">
                     <Sparkles className="h-4 w-4 text-emerald-500" />
                     <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 italic underline decoration-emerald-500/50"> बांग्लादेश টুলস হাব</span>
                   </div>
                   <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">
                     100% Client-Side • No Data Stored
                   </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
