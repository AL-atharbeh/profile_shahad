"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

// ─── Intersection Observer Hook ───
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// ─── Counter Animation Hook ───
function useCountUp(target: number, duration: number = 2000, trigger: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [sliderAmount, setSliderAmount] = useState(200);

  // Section reveal refs
  const heroReveal = useReveal(0.1);
  const hiwReveal = useReveal(0.1);
  const calcReveal = useReveal(0.1);
  const cardReveal = useReveal(0.15);
  const shoppingReveal = useReveal(0.1);
  const featuresReveal = useReveal(0.1);
  const merchantsReveal = useReveal(0.1);
  const statsReveal = useReveal(0.15);

  // Animated counters
  const merchantCount = useCountUp(500, 2000, statsReveal.isVisible);
  const userCount = useCountUp(100, 2000, statsReveal.isVisible);
  const satisfactionCount = useCountUp(99, 2000, statsReveal.isVisible);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setNavScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowButton(true);
      } else if (currentScrollY < lastScrollY) {
        setShowButton(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const t = {
    title: {
      ar: "قسّطها على رواق — مع شِهد",
      en: "Installment on Ease — With Shahd"
    },
    subtitle: {
      ar: "بتقدر تقسّم مشترياتك لأقساط مريحة بدون فوائد ولا رسوم تأخير. وكلّه بطريقة سهلة، سريعة، ومتوافقة مع أحكام الشريعة.",
      en: "Split your purchases into comfortable installments without interest or late fees. All in an easy, fast, and Sharia-compliant way."
    },
    start: { ar: "ابدأ الآن", en: "Start Now" },
    merchant: { ar: "انضم كتاجر", en: "Join as Merchant" },
    hiw: { ar: "كيف تعمل شِهد؟", en: "How Shahd Works?" },
    step1: { ar: "اختر الخدمة أو المنتج", en: "Choose a product or service" },
    step1Desc: { ar: "تصفّح المتاجر المتاحة واختر ما تحتاجه من منتجات أو خدمات.", en: "Browse available stores and select the products or services you need." },
    step2: { ar: "قدّم طلب التمويل خلال دقيقة", en: "Apply for financing in 1 minute" },
    step2Desc: { ar: "املأ بياناتك الأساسية وانتظر الموافقة الفورية على طلبك.", en: "Fill in your basic information and wait for instant approval." },
    step3: { ar: "ادفع لاحقًا عبر أقساط سهلة", en: "Pay later in flexible installments" },
    step3Desc: { ar: "قسّط مشترياتك على دفعات مريحة تناسب ميزانيتك.", en: "Split your purchases into comfortable installments that fit your budget." },
    features: { ar: "مميزات شِهد", en: "Shahd Features" },
    feature1: { ar: "موافقة فورية", en: "Instant Approval" },
    feature1Desc: { ar: "احصل على الموافقة خلال دقائق بدون تعقيدات.", en: "Get approved within minutes without complications." },
    feature2: { ar: "أقساط مرنة", en: "Flexible Installments" },
    feature2Desc: { ar: "اختر خطة الدفع التي تناسبك من خيارات متعددة.", en: "Choose the payment plan that suits you from multiple options." },
    feature3: { ar: "آمن ومضمون", en: "Secure & Guaranteed" },
    feature3Desc: { ar: "معاملات آمنة ومحمية بأحدث تقنيات الأمان.", en: "Secure transactions protected by the latest security technologies." },
    feature4: { ar: "بدون رسوم خفية", en: "No Hidden Fees" },
    feature4Desc: { ar: "شفافية كاملة في التكاليف والرسوم.", en: "Full transparency in costs and fees." },
    merchantsTitle: { ar: "حل شامل لأصحاب المتاجر", en: "A Complete Solution for Merchants" },
    merchantsDesc: { ar: "زد مبيعاتك حتى 60% عبر توفير خيار التقسيط الآمن لعملائك. انضم إلى شبكة من التجار الناجحين واستفد من نظام دفع مرن وآمن يساعدك على زيادة مبيعاتك.", en: "Boost your sales up to 60% by offering secure pay-later options. Join a network of successful merchants." },
    merchantsFeature1: { ar: "زيادة المبيعات", en: "Increase Sales" },
    merchantsFeature2: { ar: "دفع فوري", en: "Instant Payment" },
    merchantsFeature3: { ar: "إدارة سهلة", en: "Easy Management" },
    joinNow: { ar: "انضم الآن", en: "Join Now" },
    cardTitle: { ar: "بطاقة شِهد", en: "Shahd Card" },
    cardHeadline: { ar: "قسم مشترياتك على 4 دفعات", en: "Split your purchases into 4 payments" },
    cardHeadline2: { ar: "في أي مكان", en: "Anywhere" },
    cardDescription: { ar: "بطاقة شِهد تمكنك من تقسيم مشترياتك اليومية على 4 دفعات، في أي مكان يقبل VISA بدون فوائد أو رسوم.", en: "The Shahd card enables you to split your daily purchases into 4 payments, anywhere Visa is accepted, without interest or fees." },
    learnMore: { ar: "اعرف أكثر", en: "Learn more" },
    businessLogin: { ar: "تسجيل الدخول للأعمال", en: "Business Login" },
    downloadApp: { ar: "حمل التطبيق", en: "Download App" }
  };

  // Feature icons as SVG
  const featureIcons = [
    // Instant approval — lightning bolt
    <svg key="f1" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
    // Flexible installments — sliders
    <svg key="f2" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>,
    // Secure — shield check
    <svg key="f3" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    // No hidden fees — eye
    <svg key="f4" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  ];

  return (
    <main className="bg-white text-[#0a1f10] min-h-screen relative" dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* ═══ NAVBAR ═══ */}
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(10,31,16,0.06)] border-b border-emerald-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center max-w-7xl">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo_shahadd.png"
              alt="شِهد"
              width={120}
              height={40}
              className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
              priority
              quality={100}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 font-ibm-plex-arabic">
            {[
              { label: lang === "ar" ? "الرئيسية" : "Home", href: "/" },
              { label: lang === "ar" ? "كيف يعمل" : "How It Works", href: "/how-it-works" },
              { label: lang === "ar" ? "للأعمال" : "For Business", href: "/business" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`relative px-5 py-2.5 rounded-xl text-[#0a1f10] hover:text-emerald-700 font-semibold text-[15px] transition-all duration-300 group cursor-pointer animate-fade-in-down`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Business Login */}
            <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a1f10] text-white font-ibm-plex-arabic text-sm font-semibold hover:bg-emerald-800 hover:shadow-lg transition-all duration-300 cursor-pointer">
              {t.businessLogin[lang]}
            </button>

            {/* Download App */}
            <Link href="/download" className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-emerald-700 text-emerald-800 font-ibm-plex-arabic text-sm font-semibold hover:bg-emerald-700 hover:text-white transition-all duration-300 cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              {t.downloadApp[lang]}
            </Link>

            {/* Language */}
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 text-sm font-medium text-emerald-800 cursor-pointer"
            >
              <span className="text-xs">{lang === "ar" ? "EN" : "ع"}</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 z-[101] cursor-pointer"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="flex flex-col gap-1.5 items-center justify-center w-5">
                <span className={`block h-[2px] bg-emerald-800 rounded-full transition-all duration-300 ${isMenuOpen ? 'w-5 rotate-45 translate-y-[5px]' : 'w-5'}`} />
                <span className={`block h-[2px] bg-emerald-800 rounded-full transition-all duration-300 ${isMenuOpen ? 'w-0 opacity-0' : 'w-3.5'}`} />
                <span className={`block h-[2px] bg-emerald-800 rounded-full transition-all duration-300 ${isMenuOpen ? 'w-5 -rotate-45 -translate-y-[5px]' : 'w-5'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE MENU ═══ */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] bg-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-60" />

        <div className="flex flex-col h-full pt-24 pb-10 px-8 overflow-y-auto relative z-10">
          <nav className="flex flex-col gap-2 font-ibm-plex-arabic mb-10">
            {[
              { label: lang === "ar" ? "الرئيسية" : "Home", href: "/" },
              { label: lang === "ar" ? "كيف يعمل" : "How It Works", href: "/how-it-works" },
              { label: lang === "ar" ? "للأعمال" : "For Business", href: "/business" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl font-bold text-[#0a1f10] py-4 border-b border-emerald-50 active:text-emerald-600 transition-all duration-300 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${150 + i * 80}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 mt-auto">
            <button className="w-full py-4 rounded-2xl bg-[#0a1f10] text-white font-ibm-plex-arabic text-lg font-bold shadow-xl active:scale-[0.98] transition-all cursor-pointer">
              {t.businessLogin[lang]}
            </button>
            <Link href="/download" onClick={() => setIsMenuOpen(false)} className="w-full py-4 rounded-2xl border-2 border-emerald-700 text-emerald-800 font-ibm-plex-arabic text-lg font-bold text-center active:scale-[0.98] transition-all cursor-pointer">
              {t.downloadApp[lang]}
            </Link>
            <button
              onClick={() => { setLang(lang === "ar" ? "en" : "ar"); setIsMenuOpen(false); }}
              className="flex items-center justify-between w-full px-6 py-4 rounded-2xl bg-emerald-50 font-ibm-plex-arabic font-bold text-emerald-800 active:scale-[0.98] transition-all mt-2 cursor-pointer"
            >
              <span className="text-lg">{lang === "ar" ? "English Version" : "النسخة العربية"}</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative w-full pt-20 sm:pt-24 pb-12 px-4 sm:px-6 overflow-hidden" ref={heroReveal.ref}>
        {/* Decorative elements */}
        <div className="blob-emerald w-[500px] h-[500px] -top-20 -left-20 animate-morph-blob opacity-20" />
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-premium group min-h-[500px] md:min-h-[600px] lg:min-h-[650px] bg-emerald-950">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/bannar1.png"
                alt="شِهد"
                fill
                className="object-cover object-[center_center] transform scale-105 transition-transform duration-[3000ms] group-hover:scale-100"
                quality={100}
                priority
              />
              {/* Gradient overlay optimized for text clarity */}
              <div className={`absolute inset-0 ${
                lang === "ar"
                  ? "bg-gradient-to-l from-emerald-950 via-emerald-950/40 to-transparent"
                  : "bg-gradient-to-r from-emerald-950 via-emerald-950/40 to-transparent"
              }`} />
            </div>

            {/* Hero Text Content */}
            <div className={`relative z-10 h-full w-full flex flex-col justify-center px-8 sm:px-16 md:px-24 py-20 max-w-3xl ${
              lang === "ar" ? "mr-0 items-start text-start" : "ml-0 items-start text-start"
            }`}>
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-stagger-1 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs sm:text-sm text-white font-ibm-plex-arabic font-semibold uppercase tracking-wider">
                  {lang === "ar" ? "متوافق مع الشريعة الإسلامية" : "Sharia Compliant"}
                </span>
              </div>

              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-ibm-plex-arabic leading-[1.1] font-bold text-white mb-8 animate-stagger-2 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                {lang === "ar" ? (
                  <>قسّطها على رواق — <span className="gold-gradient-text italic">مع شِهد</span></>
                ) : (
                  <>Install on Ease — <span className="gold-gradient-text italic">With Shahd</span></>
                )}
              </h1>

              <p className={`text-lg sm:text-xl text-white/80 leading-relaxed mb-12 max-w-xl animate-stagger-3 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                {t.subtitle[lang]}
              </p>

              <div className={`flex flex-col sm:flex-row items-center gap-4 animate-stagger-4 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                <button className="btn-premium-gold px-12 py-4.5 rounded-2xl font-ibm-plex-arabic font-bold text-lg w-full sm:w-auto shadow-2xl">
                  {t.start[lang]}
                </button>
                <button className="px-12 py-4.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-ibm-plex-arabic font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto">
                  {lang === "ar" ? "انضم كتاجر" : "Join as Merchant"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="relative py-6 sm:py-8" ref={statsReveal.ref}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className={`glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${statsReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ background: 'linear-gradient(135deg, rgba(240,253,244,0.9), rgba(255,255,255,0.95))' }}
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              {[
                { num: `${merchantCount}+`, label: lang === "ar" ? "تاجر" : "Merchants" },
                { num: `${userCount}K+`, label: lang === "ar" ? "مستخدم" : "Users" },
                { num: `${satisfactionCount}%`, label: lang === "ar" ? "رضا العملاء" : "Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className={`text-center transition-all duration-700 ${statsReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} 
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-ibm-plex-arabic font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent">
                    {stat.num}
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-700/70 mt-1 font-ibm-plex-arabic">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="relative py-16 sm:py-24 overflow-hidden" ref={hiwReveal.ref}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[#f8fdf9]" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #166534 0, #166534 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }} />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          {/* Section header */}
          <div className={`text-center mb-16 sm:mb-20 ${hiwReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-ibm-plex-arabic font-semibold mb-4">
              {lang === "ar" ? "خطوات بسيطة" : "Simple Steps"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-ibm-plex-arabic text-[#0a1f10] font-bold mb-5">
              {t.hiw[lang]}
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-[3px] bg-emerald-400 rounded-full" />
              <div className="w-3 h-[3px] bg-emerald-300 rounded-full" />
              <div className="w-1.5 h-[3px] bg-emerald-200 rounded-full" />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            {[
              { step: 1, title: t.step1, desc: t.step1Desc, img: "/images/pic1.png", color: "from-emerald-500 to-emerald-400" },
              { step: 2, title: t.step2, desc: t.step2Desc, img: "/images/pic2.png", color: "from-emerald-600 to-emerald-500" },
              { step: 3, title: t.step3, desc: t.step3Desc, img: "/images/pic3.png", color: "from-emerald-700 to-emerald-600" },
            ].map((item, i) => (
              <div
                key={i}
                className={`group bg-white rounded-[2rem] overflow-hidden border border-emerald-100/50 transition-all duration-700 flex flex-col h-full hover:shadow-elevated hover:-translate-y-2 ${
                  hiwReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${200 + i * 150}ms` }}
              >
                {/* Image */}
                <div className="relative w-full h-72 sm:h-80 overflow-hidden">
                  <Image src={item.img} alt={item.title[lang]} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  {/* Gradient overlay at bottom for smooth blend */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
                  {/* Step number badge */}
                  <div className="absolute top-5 right-5 flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {item.step}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-ibm-plex-arabic text-[#0a1f10] mb-3 font-bold leading-tight">
                    {item.title[lang]}
                  </h3>
                  <p className="text-[15px] text-emerald-800/60 leading-relaxed font-ibm-plex-arabic font-normal">
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSTALLMENT CALCULATOR ═══ */}
      <section className="relative py-20 sm:py-32 bg-emerald-950 overflow-hidden" ref={calcReveal.ref}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.62 10l.38.38L30.38 35.0l-.38-.38L54.62 10zM10.5 34.5l.5.5L35.5 10.5l-.5-.5L10.5 34.5z' fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Right Side: Title */}
            <div className={`text-center lg:text-right order-2 lg:order-2 ${calcReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {lang === "ar" ? "كيف شِهد تشتغل؟" : "How does Shahd work?"}
              </h2>
              <p className="text-2xl md:text-3xl text-emerald-400 font-bold">
                {lang === "ar" ? "جرّبها بنفسك." : "Try it yourself."}
              </p>
            </div>

            {/* Left Side: Interactive Calculator */}
            <div className={`order-1 lg:order-1 ${calcReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="bg-[#0c1f17] rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                {/* Amount Header */}
                <div className="text-center mb-8">
                  <p className="text-white/50 text-sm font-bold mb-2 uppercase tracking-wider">{lang === "ar" ? "حدد المبلغ" : "Select Amount"}</p>
                  <div className="text-5xl md:text-6xl font-bold text-white">
                    {lang === "ar" ? `د.أ ${sliderAmount}` : `JD ${sliderAmount}`}
                  </div>
                </div>

                {/* Slider */}
                <div className="relative mb-10 px-1">
                  <input
                    type="range"
                    min={50}
                    max={2000}
                    step={10}
                    value={sliderAmount}
                    onChange={(e) => setSliderAmount(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-6
                      [&::-webkit-slider-thumb]:h-6
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-white
                      [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(255,255,255,0.4)]
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:border-4
                      [&::-webkit-slider-thumb]:border-emerald-500
                      [&::-webkit-slider-thumb]:transition-all
                      [&::-webkit-slider-thumb]:hover:scale-125
                      [&::-moz-range-thumb]:w-6
                      [&::-moz-range-thumb]:h-6
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-white
                      [&::-moz-range-thumb]:border-4
                      [&::-moz-range-thumb]:border-emerald-500
                      [&::-moz-range-thumb]:cursor-pointer"
                    style={{ background: `linear-gradient(to right, #10b981 0%, #10b981 ${((sliderAmount - 50) / (2000 - 50)) * 100}%, rgba(255,255,255,0.1) ${((sliderAmount - 50) / (2000 - 50)) * 100}%, rgba(255,255,255,0.1) 100%)` }}
                  />
                  <div className="flex justify-between mt-3 text-xs text-white/30 font-bold">
                    <span>{lang === "ar" ? "د.أ 50" : "JD 50"}</span>
                    <span>{lang === "ar" ? "د.أ 2,000" : "JD 2,000"}</span>
                  </div>
                </div>

                {/* Installment Timeline */}
                <div className="space-y-0">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="relative">
                      <div className={`flex items-center justify-between py-4 ${i < 3 ? 'border-b border-white/5' : ''}`}>
                        <div className="flex items-center gap-4">
                          <div className="relative flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${i === 0 ? 'bg-emerald-500 text-white' : 'bg-white/10 text-white/60'}`}>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                          </div>
                          <div>
                            <p className="text-white font-bold text-sm">
                              {i === 0
                                ? (lang === "ar" ? "اليوم" : "Today")
                                : (lang === "ar" ? `بعد ${i * 30} يوم` : `${i * 30} days later`)}
                            </p>
                          </div>
                        </div>
                        <div className="text-white font-bold text-lg">
                          {lang === "ar"
                            ? `د.أ ${(sliderAmount / 4).toFixed(3)}`
                            : `JD ${(sliderAmount / 4).toFixed(3)}`}
                        </div>
                      </div>
                      {/* Connecting line */}
                      {i < 3 && (
                        <div className={`absolute ${lang === 'ar' ? 'right-[19px]' : 'left-[19px]'} top-[52px] w-[2px] h-4 bg-white/10`} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-emerald-400 font-bold text-lg">{lang === "ar" ? "فوائد 0%" : "0% Interest"}</span>
                  <span className="text-white font-bold text-xl">
                    {lang === "ar"
                      ? `د.أ ${sliderAmount.toFixed(3)}`
                      : `JD ${sliderAmount.toFixed(3)}`}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="relative py-16 sm:py-24 overflow-hidden" ref={cardReveal.ref}>
        <div className="blob-emerald w-[600px] h-[600px] -bottom-40 -left-60" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Phone Image */}
            <div className={`flex-1 flex justify-center w-full md:w-auto ${cardReveal.isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="relative">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/30 to-emerald-500/20 rounded-[3rem] blur-[60px] scale-90" />
                <Image
                  src="/images/pay.png"
                  alt={t.cardTitle[lang]}
                  width={500}
                  height={500}
                  className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] h-auto object-contain relative z-10 animate-float-slow drop-shadow-2xl"
                  quality={100}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className={`flex-1 space-y-6 w-full md:w-auto text-center md:text-start ${cardReveal.isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'}`}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-ibm-plex-arabic font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                {t.cardTitle[lang]}
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-ibm-plex-arabic text-[#0a1f10] leading-[1.15] font-bold">
                {t.cardHeadline[lang]}
                <br />
                <span className="bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
                  {t.cardHeadline2[lang]}
                </span>
              </h2>

              <p className="text-base sm:text-lg text-emerald-800/60 leading-relaxed max-w-lg mx-auto md:mx-0 font-ibm-plex-arabic font-normal">
                {t.cardDescription[lang]}
              </p>

              {/* VISA badge */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-2">
                  <span className="font-bold text-lg text-[#1a1f71] tracking-wider">VISA</span>
                </div>
                <span className="text-sm text-emerald-600/60 font-ibm-plex-arabic">
                  {lang === "ar" ? "مقبولة في كل مكان" : "Accepted everywhere"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SHOPPING SECTION ═══ */}
      <section className="relative py-8 sm:py-12 px-4 sm:px-6" ref={shoppingReveal.ref}>
        <div className="container mx-auto max-w-7xl">
          <div className={`relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden ${shoppingReveal.isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}
            style={{
              background: 'linear-gradient(135deg, #052e16 0%, #0a3d1f 30%, #14532d 60%, #166534 100%)',
            }}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-emerald-400/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-emerald-300/10 blur-[80px]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 p-8 sm:p-10 md:p-14">
              {/* Character Image */}
              <div className="flex-shrink-0 relative w-full md:w-auto -mt-4 md:-mt-20 -mb-4 md:-mb-16">
                <img
                  src="/images/shopshahed.png"
                  alt="شِهد"
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-[240px] sm:max-w-[300px] md:max-w-[380px] h-auto mx-auto md:mx-0 animate-float-slow"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-white flex flex-col justify-center text-center md:text-start w-full">
                <p className="text-sm text-white/50 mb-3 font-ibm-plex-arabic font-normal">
                  {lang === "ar" ? "انضم لملايين المتسوقين" : "Join millions of shoppers"}
                </p>

                <div className="mb-6">
                  <div className="inline-block bg-gradient-to-r from-emerald-400 to-emerald-300 px-4 py-1.5 rounded-xl mb-3">
                    <h3 className="text-xl sm:text-2xl font-ibm-plex-arabic font-bold text-[#052e16]">
                      {lang === "ar" ? "التسوّق غير" : "Shopping is Different"}
                    </h3>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-ibm-plex-arabic font-bold text-white">
                    {lang === "ar" ? "مع شِهد" : "with Shahd"}
                  </h3>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    lang === "ar" ? "لاق آلاف المتاجر عشان تقسم مشترياتك منها على أقساط مريحة" : "Find thousands of stores to divide your purchases into comfortable installments",
                    lang === "ar" ? "احصل على عروض حصرية، وتتبع دفعاتك بسهولة ومن مكان واحد" : "Get exclusive offers, and track your payments easily from one place"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 justify-center md:justify-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed font-ibm-plex-arabic font-normal text-start">{text}</p>
                    </div>
                  ))}
                </div>

                {/* Call to Action Box */}
                <div className="rounded-2xl p-5 sm:p-6 bg-white/[0.06] backdrop-blur-md border border-white/10">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex-1 text-center sm:text-start">
                      <h4 className="text-lg sm:text-xl font-ibm-plex-arabic font-bold text-white mb-2">
                        {lang === "ar" ? "حمل التطبيق" : "Download the App"}
                      </h4>
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <div className="flex text-emerald-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          ))}
                        </div>
                        <span className="text-xs text-white/60 font-ibm-plex-arabic">
                          {lang === "ar" ? "4.8 تقييم متجر التطبيقات" : "4.8 App Store rating"}
                        </span>
                      </div>
                    </div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl flex items-center justify-center p-2 flex-shrink-0 shadow-lg">
                      <div className="w-full h-full bg-emerald-50 rounded-lg flex items-center justify-center">
                        <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="relative py-16 sm:py-24 overflow-hidden" ref={featuresReveal.ref}>
        <div className="blob-accent w-[400px] h-[400px] top-20 -right-40" />

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <div className={`text-center mb-14 sm:mb-20 ${featuresReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-ibm-plex-arabic font-semibold mb-4">
              {lang === "ar" ? "لماذا شِهد؟" : "Why Shahd?"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-ibm-plex-arabic text-[#0a1f10] font-bold">
              {t.features[lang]}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.feature1, desc: t.feature1Desc, icon: featureIcons[0], gradient: "from-emerald-500 to-emerald-400" },
              { title: t.feature2, desc: t.feature2Desc, icon: featureIcons[1], gradient: "from-emerald-600 to-emerald-500" },
              { title: t.feature3, desc: t.feature3Desc, icon: featureIcons[2], gradient: "from-emerald-700 to-emerald-600" },
              { title: t.feature4, desc: t.feature4Desc, icon: featureIcons[3], gradient: "from-emerald-800 to-emerald-700" },
            ].map((feature, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-[2.2rem] p-8 sm:p-9 border border-emerald-100/60 transition-all duration-500 hover:-translate-y-3 cursor-pointer ${
                  featuresReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${200 + (i % 4) * 100}ms`
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-emerald-100/0 to-emerald-50/0 group-hover:from-emerald-100/50 group-hover:to-emerald-50/30 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-ibm-plex-arabic text-[#0a1f10] mb-2.5 font-bold">
                    {feature.title[lang]}
                  </h3>
                  <p className="text-sm text-emerald-800/55 leading-relaxed font-ibm-plex-arabic font-normal">
                    {feature.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MERCHANTS ═══ */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6" ref={merchantsReveal.ref}>
        <div className="container mx-auto max-w-7xl">
          <div className={`relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden ${merchantsReveal.isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}
            style={{
              background: 'linear-gradient(135deg, #052e16, #0a3d1f 40%, #14532d 70%, #166534)'
            }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full border border-white/5" />
            <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] rounded-full border border-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[100px]" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20">
              <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-white/90 text-sm font-ibm-plex-arabic mb-5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    {lang === "ar" ? "للتجار" : "For Merchants"}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-ibm-plex-arabic text-white mb-4 font-bold leading-tight">
                    {t.merchantsTitle[lang]}
                  </h2>
                  <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto font-ibm-plex-arabic font-normal leading-relaxed">
                    {t.merchantsDesc[lang]}
                  </p>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
                  {[
                    {
                      title: t.merchantsFeature1, desc: lang === "ar" ? "زد مبيعاتك بشكل كبير" : "Significantly increase your sales",
                      icon: <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    },
                    {
                      title: t.merchantsFeature2, desc: lang === "ar" ? "احصل على دفعاتك فوراً" : "Get your payments instantly",
                      icon: <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    },
                    {
                      title: t.merchantsFeature3, desc: lang === "ar" ? "نظام إدارة بسيط وسهل" : "Simple and easy management system",
                      icon: <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 sm:p-7 text-center border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300 group cursor-pointer">
                      <div className="w-14 h-14 bg-white/[0.08] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/[0.12] transition-all duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-ibm-plex-arabic font-bold text-white mb-2">{item.title[lang]}</h3>
                      <p className="text-white/50 text-sm font-ibm-plex-arabic font-normal">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                  <button className="relative overflow-hidden px-10 py-4 rounded-2xl bg-white text-[#052e16] text-base sm:text-lg font-ibm-plex-arabic font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group cursor-pointer">
                    <span className="relative z-10">{t.joinNow[lang]}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative pt-16 pb-8 border-t border-emerald-100 overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white" />

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
            {/* Brand */}
            <div className="flex-1 max-w-sm">
              <Image
                src="/images/logo_shahadd.png"
                alt="شِهد"
                width={100}
                height={35}
                className="h-9 w-auto mb-4 object-contain"
                quality={100}
              />
              <p className="text-emerald-800/50 text-sm leading-relaxed font-ibm-plex-arabic font-normal">
                {lang === "ar"
                  ? "منصة تمويل مبتكرة تتيح لك الشراء الآن والدفع لاحقًا بطريقة متوافقة مع أحكام الشريعة."
                  : "An innovative financing platform that lets you buy now and pay later in a Sharia-compliant way."}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div className="flex flex-col gap-3">
                <h4 className="font-ibm-plex-arabic font-bold text-[#0a1f10] text-sm mb-1">
                  {lang === "ar" ? "الروابط" : "Links"}
                </h4>
                {[
                  { label: lang === "ar" ? "عن شِهد" : "About", href: "#" },
                  { label: lang === "ar" ? "كيف يعمل" : "How It Works", href: "/how-it-works" },
                  { label: lang === "ar" ? "للأعمال" : "For Business", href: "/business" },
                ].map((link, i) => (
                  <Link key={i} href={link.href} className="text-emerald-800/50 hover:text-emerald-700 transition-colors text-sm font-ibm-plex-arabic cursor-pointer">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-ibm-plex-arabic font-bold text-[#0a1f10] text-sm mb-1">
                  {lang === "ar" ? "الدعم" : "Support"}
                </h4>
                {[
                  { label: lang === "ar" ? "الأسئلة الشائعة" : "FAQ", href: "/faq" },
                  { label: lang === "ar" ? "اتصل بنا" : "Contact", href: "/faq" },
                  { label: lang === "ar" ? "الشروط والأحكام" : "Terms", href: "/terms" },
                  { label: lang === "ar" ? "الخصوصية" : "Privacy", href: "#" },
                ].map((link, i) => (
                  <Link key={i} href={link.href} className="text-emerald-800/50 hover:text-emerald-700 transition-colors text-sm font-ibm-plex-arabic cursor-pointer">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col items-start">
              <h4 className="font-ibm-plex-arabic font-bold text-[#0a1f10] text-sm mb-3">
                {lang === "ar" ? "تابعنا" : "Follow Us"}
              </h4>
              <div className="flex gap-3">
                {[
                  // LinkedIn
                  <svg key="li" className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
                  // Facebook
                  <svg key="fb" className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
                  // Instagram
                  <svg key="ig" className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
                ].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center text-emerald-700 hover:text-emerald-600 transition-all duration-300 cursor-pointer" aria-label="Social Media">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent mb-6" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-emerald-800/40 text-xs font-ibm-plex-arabic">
              © 2025 شِهد — {lang === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
            </p>
            <div className="flex items-center gap-2 text-emerald-800/30 text-xs font-ibm-plex-arabic">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              {lang === "ar" ? "جميع المعاملات مشفرة وآمنة" : "All transactions encrypted & secure"}
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ FIXED MOBILE DOWNLOAD ═══ */}
      <button
        className={`md:hidden fixed bottom-0 left-0 right-0 mx-4 mb-4 px-6 py-4 rounded-2xl bg-[#0a1f10] text-white text-base font-ibm-plex-arabic font-bold shadow-[0_-4px_30px_rgba(0,0,0,0.15)] transition-all duration-500 z-50 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-lg ${
          showButton ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        <span>{lang === "ar" ? "حمل التطبيق" : "Download App"}</span>
      </button>

    </main>
  );
}
