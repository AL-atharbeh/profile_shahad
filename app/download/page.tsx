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

export default function DownloadPage() {
    const [lang, setLang] = useState<Lang>("ar");
    const [navScrolled, setNavScrolled] = useState(false);

    const heroReveal = useReveal(0.05);
    const featuresReveal = useReveal(0.1);
    const smartReveal = useReveal(0.1);
    const ctaReveal = useReveal(0.1);

    useEffect(() => {
        const handleScroll = () => setNavScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const t = {
        title: { ar: "التطبيق اللي فيه كل شيء", en: "The App That Has Everything" },
        subtitle: {
            ar: "تتبع دفعاتك، احصل على عروض حصرية واكتشف آلاف المتاجر اللي تقدر تقسّم فيها مشترياتك.",
            en: "Track payments, get exclusive offers and discover thousands of stores to split your purchases."
        },
    };

    return (
        <main className={`bg-white text-[#0a1f10] min-h-screen font-ibm-plex-arabic ${lang === "ar" ? "rtl" : "ltr"}`} dir={lang === "ar" ? "rtl" : "ltr"}>

            {/* ═══ NAVBAR ═══ */}
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${navScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-emerald-100/50 py-3 shadow-premium' : 'bg-transparent py-5'
                }`}>
                <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                    <Link href="/" className="flex items-center transform transition-transform hover:scale-105 active:scale-95">
                        <Image src="/images/logo_shahadd.png" alt="شِهد" width={110} height={40} className="h-9 md:h-11 w-auto object-contain" priority />
                    </Link>

                    <div className="flex items-center gap-6">
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link href="/" className="text-sm font-bold text-emerald-900/60 hover:text-emerald-900 transition-colors">{lang === "ar" ? "الرئيسية" : "Home"}</Link>
                            <Link href="/how-it-works" className="text-sm font-bold text-emerald-900/60 hover:text-emerald-900 transition-colors">{lang === "ar" ? "كيف يعمل" : "How it Works"}</Link>
                            <Link href="/business" className="text-sm font-bold text-emerald-900/60 hover:text-emerald-900 transition-colors">{lang === "ar" ? "للأعمال" : "Business"}</Link>
                        </nav>
                        <button
                            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all text-sm font-bold text-emerald-800"
                        >
                            <span className="text-[10px] opacity-60 font-bold">{lang === "ar" ? "EN" : "ع"}</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* ═══ HERO SECTION ═══ */}
            <section className="relative w-full pt-28 sm:pt-36 pb-12 px-4 sm:px-6 overflow-hidden" ref={heroReveal.ref}>
                <div className="blob-emerald w-[500px] h-[500px] -top-20 -left-20 animate-morph-blob opacity-20" />

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-premium bg-emerald-950 min-h-[500px] md:min-h-[600px] lg:min-h-[650px] group">
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b] via-[#022c22] to-emerald-950" />
                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_40%,#10b981_0%,transparent_50%),radial-gradient(circle_at_70%_80%,#065f46_0%,transparent_50%)]" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-0 h-full min-h-[500px] md:min-h-[600px] lg:min-h-[650px]">
                            {/* Text Content */}
                            <div className={`flex-1 flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20 ${lang === "ar" ? "text-right" : "text-left"}`}>
                                <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-stagger-1 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{lang === "ar" ? "متاح الآن" : "Available Now"}</span>
                                </div>

                                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] animate-stagger-2 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    {t.title[lang]}
                                </h1>

                                <p className={`text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-xl animate-stagger-3 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    {t.subtitle[lang]}
                                </p>

                                {/* Store Buttons */}
                                <div className={`flex flex-wrap gap-4 animate-stagger-4 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    <a href="#" className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                                        <div className={lang === "ar" ? "text-right" : "text-left"}>
                                            <div className="text-[10px] text-white/60 uppercase tracking-wider">{lang === "ar" ? "حمّل من" : "Download on"}</div>
                                            <div className="text-white font-bold text-lg">App Store</div>
                                        </div>
                                    </a>
                                    <a href="#" className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                                        <div className={lang === "ar" ? "text-right" : "text-left"}>
                                            <div className="text-[10px] text-white/60 uppercase tracking-wider">{lang === "ar" ? "حمّل من" : "GET IT ON"}</div>
                                            <div className="text-white font-bold text-lg">Google Play</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Phone Image — complete and edge-to-edge of the rounded container */}
                            <div className={`flex-1 relative min-h-[400px] lg:min-h-0 overflow-hidden ${heroReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                                <Image 
                                    src="/images/shahad_phone1.png" 
                                    alt="Shahd App" 
                                    fill 
                                    className="absolute inset-0 w-full h-full object-cover object-center" 
                                    priority 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ═══ FEATURES SECTION ═══ */}
            <section className="py-20 md:py-32 bg-white" ref={featuresReveal.ref}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className={`text-center mb-20 ${featuresReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">
                            {lang === "ar" ? "خذ تجربة تسوقك لمستوى ثاني" : "Elevate Your Shopping Experience"}
                        </h2>
                        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: lang === "ar" ? "اكتشف أفضل المتاجر" : "Discover the Best Stores",
                                desc: lang === "ar" ? "اعرف وين تقدر تقسّم مشترياتك أونلاين أو داخل المتاجر من براندات الكل يحبها." : "Find where you can split your purchases online or in-store from brands everyone loves.",
                                icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            },
                            {
                                title: lang === "ar" ? "العروض حولك وحواليك" : "Offers All Around You",
                                desc: lang === "ar" ? "مع تطبيق شِهد، ما راح تفوّت أي عرض حصري من المتاجر الشريكة." : "With Shahd app, never miss an exclusive offer from partner stores.",
                                icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                            },
                            {
                                title: lang === "ar" ? "تنبيهات انخفاض الأسعار" : "Price Drop Alerts",
                                desc: lang === "ar" ? "ضيف منتجاتك للمفضلة وبيجيك خبر أول ما تنزل أسعارها." : "Add favorites and get notified instantly when prices drop.",
                                icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            }
                        ].map((feature, i) => (
                            <div key={i}
                                className={`text-center p-10 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100 transition-all duration-700 hover:shadow-elevated hover:-translate-y-2 ${featuresReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 150}ms` }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-8 shadow-glow">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-950 mb-4">{feature.title}</h3>
                                <p className="text-emerald-800/60 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SMART PAYMENTS SECTION ═══ */}
            <section className="py-20 md:py-32 bg-emerald-950 text-white overflow-hidden relative" ref={smartReveal.ref}>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className={`text-center mb-20 ${smartReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            {lang === "ar" ? "خلّك ذكي وتابع دفعاتك" : "Stay Smart, Track Payments"}
                        </h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                        {[
                            {
                                num: "1",
                                title: lang === "ar" ? "تحكم بإدارة مشترياتك" : "Control Your Purchases",
                                desc: lang === "ar" ? "تتبع تاريخ دفعاتك كاملة وخلّك عارف لكل دفعاتك الجاية والرصيد المتبقي." : "Track your complete payment history and stay informed of upcoming payments."
                            },
                            {
                                num: "2",
                                title: lang === "ar" ? "ادفع على الوقت" : "Pay On Time",
                                desc: lang === "ar" ? "مع شِهد دفعاتك تتسدد تلقائياً بموعدها، وعندك خيار تدفعها قبل التاريخ المحدد." : "Payments are auto-debited on time, with the option to pay early."
                            },
                            {
                                num: "3",
                                title: lang === "ar" ? "استرجع طلباتك بسهولة" : "Easy Returns",
                                desc: lang === "ar" ? "دعم متواصل طول الأسبوع ٢٤ ساعة لطلبات الاسترجاع مع برنامج حماية شِهد." : "24/7 support for returns plus Shahd's buyer protection program."
                            }
                        ].map((step, i) => (
                            <div key={i} className={`relative group ${smartReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
                                <div className="text-[10rem] font-bold text-white/5 absolute -top-20 -left-10 pointer-events-none group-hover:text-emerald-500/10 transition-colors">
                                    {step.num}
                                </div>
                                <div className="relative pt-10">
                                    <h3 className="text-2xl font-bold mb-5 text-emerald-400">{step.title}</h3>
                                    <p className="text-white/70 leading-relaxed text-lg">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="py-20 md:py-32 bg-white" ref={ctaReveal.ref}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[2.5rem] overflow-hidden border border-emerald-100 shadow-premium">
                        <div className={`flex-1 p-10 md:p-16 ${ctaReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-8">
                                {lang === "ar" ? "استمتع بتجربة تسوق مختلفة" : "Enjoy a Different Shopping Experience"}
                            </h2>
                            <p className="text-xl text-emerald-800/60 leading-relaxed mb-10">
                                {lang === "ar" ? "مع تطبيق شِهد، تقدر تتسوق الحين وتدفع بعدين وتكسب مبالغ استرداد نقدي — بدون فوائد ولا رسوم أو مفاجآت." : "Shop now, pay later, earn cashback — without interest, fees, or surprises."}
                            </p>
                            <button className="btn-premium-gold px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl">
                                {lang === "ar" ? "حمّل التطبيق" : "Download App"}
                            </button>
                        </div>
                        <div className={`flex-1 relative min-h-[300px] lg:min-h-0 ${ctaReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                            <Image 
                                src="/images/shahad.png" 
                                alt="Shahd App" 
                                fill 
                                className="object-cover object-center lg:object-right" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ FOOTER ═══ */}
            <footer className="py-20 bg-emerald-950 text-white">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <Link href="/" className="inline-block mb-10 group transition-transform hover:scale-105">
                        <Image src="/images/logo_shahadd.png" alt="شِهد" width={110} height={40} className="mx-auto" />
                    </Link>
                    <p className="text-white/20 text-xs text-center border-t border-white/5 pt-10">
                        © 2025 شِهد — {lang === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
                    </p>
                </div>
            </footer>
        </main>
    );
}
