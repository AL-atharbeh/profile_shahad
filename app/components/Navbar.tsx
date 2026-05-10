"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const t = {
    home: { ar: "الرئيسية", en: "Home" },
    howItWorks: { ar: "كيف يعمل", en: "How It Works" },
    business: { ar: "للأعمال", en: "For Business" },
    businessLogin: { ar: "تسجيل الدخول للأعمال", en: "Business Login" },
    downloadApp: { ar: "حمل التطبيق", en: "Download App" },
    about: { ar: "عن شِهد", en: "About" },
  };

  const navLinks = [
    { label: t.home[lang], href: "/" },
    { label: t.about[lang], href: "/about" },
    { label: t.howItWorks[lang], href: "/how-it-works" },
    { label: t.business[lang], href: "/business" },
  ];

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(10,31,16,0.06)] border-b border-emerald-100/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo_shahadd.png"
              alt="شِهد"
              width={120}
              height={40}
              className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="relative px-5 py-2.5 rounded-xl text-[#0a1f10] hover:text-emerald-700 font-semibold text-[15px] transition-all duration-300 group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Business Login */}
            <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a1f10] text-white text-sm font-semibold hover:bg-emerald-800 hover:shadow-lg transition-all duration-300 cursor-pointer">
              {t.businessLogin[lang]}
            </button>

            {/* Download App */}
            <Link
              href="/download"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-emerald-700 text-emerald-800 text-sm font-semibold hover:bg-emerald-700 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {t.downloadApp[lang]}
            </Link>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 text-sm font-medium text-emerald-800 cursor-pointer"
            >
              <span className="text-xs">{lang === "ar" ? "EN" : "ع"}</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 z-[101] cursor-pointer"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="flex flex-col gap-1.5 items-center justify-center w-5">
                <span
                  className={`block h-[2px] bg-emerald-800 rounded-full transition-all duration-300 ${
                    isMenuOpen ? "w-5 rotate-45 translate-y-[5px]" : "w-5"
                  }`}
                />
                <span
                  className={`block h-[2px] bg-emerald-800 rounded-full transition-all duration-300 ${
                    isMenuOpen ? "w-0 opacity-0" : "w-3.5"
                  }`}
                />
                <span
                  className={`block h-[2px] bg-emerald-800 rounded-full transition-all duration-300 ${
                    isMenuOpen ? "w-5 -rotate-45 -translate-y-[5px]" : "w-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE MENU ═══ */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] bg-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-60" />

        <div className="flex flex-col h-full pt-24 pb-10 px-8 overflow-y-auto relative z-10">
          <nav className="flex flex-col gap-4 mb-10">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-[#0a1f10] hover:text-emerald-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <button className="w-full py-4 rounded-2xl bg-[#0a1f10] text-white font-bold text-lg shadow-lg">
              {t.businessLogin[lang]}
            </button>
            <Link
              href="/download"
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-4 rounded-2xl border-2 border-emerald-700 text-emerald-800 font-bold text-lg text-center"
            >
              {t.downloadApp[lang]}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
