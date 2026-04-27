"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

// ─── Intersection Observer Hook ───
function useReveal(threshold = 0.1) {
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
            { threshold, rootMargin: '0px 0px -40px 0px' }
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

export default function BusinessPage() {
    const [lang, setLang] = useState<Lang>("ar");
    const [navScrolled, setNavScrolled] = useState(false);

    // Section reveal refs
    const heroReveal = useReveal(0.05);
    const statsReveal = useReveal(0.15);
    const featuresReveal = useReveal(0.15);
    const channelsReveal = useReveal(0.15);
    const ctaReveal = useReveal(0.15);

    // Dynamic stats
    const stat1Val = useCountUp(33, 2000, statsReveal.isVisible);
    const stat2Val = useCountUp(18, 2000, statsReveal.isVisible);
    const stat3Val = useCountUp(31, 2000, statsReveal.isVisible);

    useEffect(() => {
        const handleScroll = () => setNavScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const t = {
        title: { ar: "شريكك في النمو والابتكار", en: "Your Partner in Growth and Innovation" },
        subtitle: { 
            ar: "انضم إلى شبكة تجار شِهد اليوم. نمكنك من تقديم حلول تقسيط مرنة لعملائك، مما يزيد من مبيعاتك ويحسن تجربة عملائك، مع ضمان استلام مستحقاتك فوراً.",
            en: "Join the Shahd merchant network. Offer flexible installment solutions, increase sales, and improve customer loyalty with guaranteed immediate payments."
        },
        statsTitle: { ar: "نتائج ملموسة لشركائنا", en: "Proven Results for Partners" },
        featuresTitle: { ar: "لماذا يختار التجار شِهد؟", en: "Why Merchants Choose Shahd?" },
    };

    return (
        <main className={`bg-white text-[#0a1f10] min-h-screen font-ibm-plex-arabic ${lang === "ar" ? "rtl" : "ltr"}`} dir={lang === "ar" ? "rtl" : "ltr"}>
            
            {/* ═══ NAVBAR ═══ */}
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                navScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-emerald-100/50 py-3 shadow-premium' : 'bg-transparent py-5'
            }`}>
                <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                    <Link href="/" className="flex items-center transform transition-transform hover:scale-105 active:scale-95 group">
                        <Image src="/images/logo_shahadd.png" alt="شِهد" width={110} height={40} className="h-9 md:h-11 w-auto object-contain" priority />
                    </Link>
                    
                    <div className="flex items-center gap-6">
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link href="/" className="text-sm font-bold text-emerald-900/60 hover:text-emerald-900 transition-colors">{lang === "ar" ? "الرئيسية" : "Home"}</Link>
                            <Link href="/how-it-works" className="text-sm font-bold text-emerald-900/60 hover:text-emerald-900 transition-colors">{lang === "ar" ? "كيف يعمل" : "How it Works"}</Link>
                            <Link href="/business" className="text-sm font-bold text-emerald-600 underline decoration-2 underline-offset-8">{lang === "ar" ? "للأعمال" : "Business"}</Link>
                        </nav>
                        <button
                            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all text-sm font-bold text-emerald-800"
                        >
                            <span className="text-[10px] opacity-60 font-bold">{lang === "ar" ? "EN" : "ع"}</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* ═══ HERO SECTION ═══ */}
            <section className="relative w-full pt-28 sm:pt-36 pb-16 px-4 sm:px-6 overflow-hidden" ref={heroReveal.ref}>
                <div className="blob-emerald w-[500px] h-[500px] -top-20 -right-40 opacity-20" />
                
                <div className="container mx-auto max-w-7xl relative">
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-premium bg-emerald-950 min-h-[500px] md:min-h-[600px] group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b] via-[#022c22] to-black" />
                        
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 md:p-20">
                            {/* Left Side: Content */}
                            <div className={`${lang === "ar" ? "text-right" : "text-left"}`}>
                                <div className={`inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6 animate-stagger-1 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    {lang === "ar" ? "حلول التجار" : "Merchant Solutions"}
                                </div>
                                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-stagger-2 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    {t.title[lang]}
                                </h1>
                                <p className={`text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl animate-stagger-3 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    {t.subtitle[lang]}
                                </p>
                                <div className={`flex flex-wrap gap-5 animate-stagger-4 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    <button className="btn-premium-gold px-12 py-4.5 rounded-2xl font-bold text-lg shadow-2xl">
                                        {lang === "ar" ? "انضم كشريك" : "Join as Partner"}
                                    </button>
                                    <button className="px-10 py-4.5 rounded-2xl border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-all">
                                        {lang === "ar" ? "تواصل معنا" : "Contact Us"}
                                    </button>
                                </div>
                            </div>

                            {/* Right Side: Image Overlay */}
                            <div className={`relative flex justify-center ${heroReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                                <div className="relative w-full max-w-[380px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                                    <Image src="/images/97398349855.png" alt="Business App" width={600} height={800} className="w-full h-auto animate-float-slow" priority />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ STATS BAR ═══ */}
            <section className="py-20 md:py-32 bg-white" ref={statsReveal.ref}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className={`text-center mb-16 ${statsReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">{t.statsTitle[lang]}</h2>
                        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { val: stat1Val, label: lang === "ar" ? "زيادة في حجم سلة التسوق" : "Average Order Value Increase", suffix: "%+" },
                            { val: stat2Val, label: lang === "ar" ? "تحسن في معدل التحويل" : "Conversion Rate Boost", suffix: "%+" },
                            { val: stat3Val, label: lang === "ar" ? "زيادة في تكرار الشراء" : "Repeat Purchase Increase", suffix: "%+" }
                        ].map((stat, i) => (
                            <div key={i} className="glass-card p-12 rounded-[2.5rem] text-center border border-emerald-50 shadow-premium transition-all duration-700 hover:-translate-y-2">
                                <div className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-4">
                                    {stat.val}{stat.suffix}
                                </div>
                                <p className="text-emerald-800/60 font-bold text-lg">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ MAIN FEATURES ═══ */}
            <section className="py-20 md:py-32 bg-emerald-50/30" ref={featuresReveal.ref}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
                        <div className={`${featuresReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-8 shadow-glow">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z M2 17l10 5 10-5M2 12l10 5 10-5M2 7l10 5 10-5" /></svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6">{lang === "ar" ? "سيولة نقدية فورية" : "Immediate Cash Flow"}</h2>
                            <p className="text-xl text-emerald-800/70 leading-relaxed mb-8">
                                {lang === "ar" ? "استلم أموالك بالكامل فور إتمام عملية البيع. شِهد تتحمل جميع مخاطر الائتمان والتحصيل، لتتمكن من التركيز على نمو أعمالك." : "Receive your funds in full immediately. We handle the credit risks so you can focus on scaling your business."}
                            </p>
                            <ul className="space-y-4">
                                {[lang === "ar" ? "دفاعات يومية" : "Daily payouts", lang === "ar" ? "صفر مخاطر تحصيل" : "Zero collection risk", lang === "ar" ? "تغطية كاملة" : "Full coverage"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-emerald-900 font-bold">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={`relative ${featuresReveal.isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-premium group">
                                <Image src="/images/pay.png" alt="Fast Payment" width={600} height={600} className="w-full h-auto transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-200/50 rounded-full blur-3xl" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className={`order-2 md:order-1 relative ${featuresReveal.isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-premium group">
                                <Image src="/images/shopshahed.png" alt="Merchant Growth" width={600} height={600} className="w-full h-auto transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/50 rounded-full blur-3xl" />
                        </div>
                        <div className={`order-1 md:order-2 ${featuresReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-8 shadow-glow">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6">{lang === "ar" ? "توسع في قاعدة العملاء" : "Growth with Every Sale"}</h2>
                            <p className="text-xl text-emerald-800/70 leading-relaxed mb-8">
                                {lang === "ar" ? "اجذب شريحة جديدة من المتسوقين الذين يفضلون مرونة الدفع على دفعات شهرية مريحة. شِهد تمنح عملاءك القدرة الشرائية التي يحتاجونها." : "Attract a new audience with split-payment options. Shahd gives your customers the buying power they need to choose you."}
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-emerald-50">
                                    <div className="text-2xl font-bold text-emerald-900 mb-1">90%+</div>
                                    <div className="text-sm text-emerald-800/60 font-bold">{lang === "ar" ? "نسبة الموافقة" : "Approval Rate"}</div>
                                </div>
                                <div className={`p-6 bg-white rounded-2xl shadow-sm border border-emerald-50`}>
                                    <div className="text-2xl font-bold text-emerald-900 mb-1">0%</div>
                                    <div className="text-sm text-emerald-800/60 font-bold">{lang === "ar" ? "عناء التحصيل" : "Collection Hassle"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CHANNELS SECTION ═══ */}
            <section className="py-20 md:py-32 bg-white" ref={channelsReveal.ref}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className={`text-center mb-20 ${channelsReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6">{lang === "ar" ? "تكامل في دقائق، بيع في كل مكان" : "Integrate Once, Sell Everywhere"}</h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { 
                                title: lang === "ar" ? "المتاجر الإلكترونية" : "E-Commerce", 
                                desc: lang === "ar" ? "إضافات جاهزة لأشهر المنصات مثل سلة، زد، وغيرها." : "Ready-to-use plugins for Salla, Zid, Magento and more.",
                                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            },
                            { 
                                title: lang === "ar" ? "نقاط البيع" : "In-Store POS", 
                                desc: lang === "ar" ? "تكامل سلس مع أنظمة نقاط البيع لعمليات مسح سريعة." : "Seamless POS integration for lightning-fast QR scanning.",
                                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            },
                            { 
                                title: lang === "ar" ? "روابط الدفع" : "Payment Links", 
                                desc: lang === "ar" ? "أنشئ روابط دفع وشاركها عبر الرسائل بسرعة." : "Create and share payment links via SMS or social media instantly.",
                                icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                            }
                        ].map((channel, i) => (
                            <div key={i} className={`p-12 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100 hover:bg-white hover:shadow-elevated transition-all duration-500 group ${channelsReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 text-emerald-600 shadow-premium transition-transform group-hover:scale-110">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={channel.icon} /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-950 mb-4">{channel.title}</h3>
                                <p className="text-emerald-800/60 leading-relaxed text-lg">{channel.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="py-20 md:py-36 bg-gray-50" ref={ctaReveal.ref}>
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className={`relative overflow-hidden rounded-[3.5rem] bg-emerald-950 p-12 md:p-24 text-center ${ctaReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-black opacity-90" />
                        <div className="relative z-10">
                            <i className="inline-block mb-8 text-emerald-400 text-6xl opacity-20">"</i>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10">
                                {lang === "ar" ? "جاهز لرفع مبيعاتك؟" : "Ready to Boost Your Sales?"}
                            </h2>
                            <button className="btn-premium-gold px-14 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-transform hover:scale-105 active:scale-98">
                                {lang === "ar" ? "سجل كتاجر الآن" : "Register as Merchant"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ FOOTER ═══ */}
            <footer className="py-20 bg-emerald-950 text-white border-t border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-right">
                        <div className="md:col-span-1 flex flex-col items-center md:items-start">
                            <Image src="/images/logo_shahadd.png" alt="شِهد" width={110} height={40} className="mb-6" />
                            <p className="text-white/40 text-sm leading-relaxed">
                                {lang === "ar" ? "منصة تمويل مبتكرة تتيح لك الشراء الآن والدفع لاحقًا." : "Innovative financing platform for buying now and paying later."}
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <h4 className="font-bold mb-6 text-emerald-400">{lang === "ar" ? "روابط سريعة" : "Quick Links"}</h4>
                            <div className="flex flex-col gap-4 text-white/50 text-sm font-bold">
                                <Link href="/">{lang === "ar" ? "الرئيسية" : "Home"}</Link>
                                <Link href="/how-it-works">{lang === "ar" ? "الخدمات" : "Services"}</Link>
                                <Link href="/business">{lang === "ar" ? "للأعمال" : "Business"}</Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                             <h4 className="font-bold mb-6 text-emerald-400">{lang === "ar" ? "الدعم" : "Support"}</h4>
                             <div className="flex flex-col gap-4 text-white/50 text-sm font-bold">
                                <Link href="/faq">{lang === "ar" ? "الأسئلة الشائعة" : "FAQ"}</Link>
                                <Link href="/terms">{lang === "ar" ? "الشروط" : "Terms"}</Link>
                                <Link href="/contact">{lang === "ar" ? "اتصل بنا" : "Contact"}</Link>
                             </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                             <h4 className="font-bold mb-6 text-emerald-400">{lang === "ar" ? "اللغة" : "Language"}</h4>
                             <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="text-white/50 text-sm font-bold uppercase tracking-widest">{lang === "ar" ? "English" : "عربي"}</button>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-12 text-center text-white/20 text-xs">
                        © 2025 شِهد — {lang === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
                    </div>
                </div>
            </footer>
        </main>
    );
}
