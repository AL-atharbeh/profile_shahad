"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

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

interface Category {
    id: number;
    icon: string;
    title: { ar: string; en: string };
    description: { ar: string; en: string };
    faqs: { question: { ar: string; en: string }; answer: { ar: string; en: string } }[];
}

export default function FAQPage() {
    const [lang, setLang] = useState<Lang>("ar");
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const heroReveal = useReveal(0.05);
    const gridReveal = useReveal(0.1);
    const contactReveal = useReveal(0.1);


    const categories: Category[] = [
        {
            id: 1,
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            title: { ar: "كيفية البدء", en: "Getting Started" },
            description: { ar: "كل ما تحتاج معرفته قبل أول عملية شراء مع شِهد", en: "Everything you need to know before your first purchase." },
            faqs: [
                { question: { ar: "كيف أسجل في شِهد؟", en: "How do I register?" }, answer: { ar: "التسجيل سهل جداً، حمّل التطبيق وادخل رقم جوالك وستصلك رسالة تفعيل فوراً.", en: "Simply download the app, enter your mobile number, and you'll receive a code instantly." } },
                { question: { ar: "هل التسجيل مجاني؟", en: "Is registration free?" }, answer: { ar: "نعم، التسجيل مجاني بالكامل ولا توجد أي رسوم اشتراك.", en: "Yes, registration is completely free with no hidden subscription fees." } }
            ]
        },
        {
            id: 2,
            icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
            title: { ar: "الطلبات والمدفوعات", en: "Orders & Payments" },
            description: { ar: "تتبّع طلباتك، وأبلغ عن أي مشكلات، وتعرّف على سياسات السداد", en: "Track orders and manage your payment schedules effectively." },
            faqs: [
                { question: { ar: "كيف أتتبع طلبي؟", en: "How do I track my order?" }, answer: { ar: "عبر قسم 'طلباتي' في التطبيق، ستجد حالة طلبتك ورابط التتبع إذا توفر.", en: "Check 'My Orders' in the app to see your status and tracking link." } }
            ]
        },
        {
            id: 3,
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
            title: { ar: "الأمان والخصوصية", en: "Security & Privacy" },
            description: { ar: "تعرف على كيفية حماية بياناتك وعملياتك الشرائية", en: "Information on how we protect your data and transactions." },
            faqs: [
                { question: { ar: "هل بياناتي البنكية آمنة؟", en: "Is my data secure?" }, answer: { ar: "نحن نستخدم أعلى معايير التشفير العالمية لضمان سلامة بياناتك وتوافقها مع شروط البنك المركزي.", en: "We use military-grade encryption and strictly follow Central Bank security guidelines." } }
            ]
        }
    ];

    return (
        <main className={`bg-white text-[#0a1f10] min-h-screen font-ibm-plex-arabic ${lang === "ar" ? "rtl" : "ltr"}`} dir={lang === "ar" ? "rtl" : "ltr"}>

            {/* ═══ NAVBAR ═══ */}
            <Navbar lang={lang} setLang={setLang} />

            {/* ═══ HERO SECTION (Search Style) ═══ */}
            <section className="relative w-full pt-32 sm:pt-48 pb-20 px-6 overflow-hidden min-h-[60vh] flex items-center bg-emerald-950" ref={heroReveal.ref}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#10b981_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#065f46_0%,transparent_50%)] opacity-30" />
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <h1 className={`text-4xl md:text-7xl font-bold text-white mb-8 leading-tight animate-stagger-1 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                        {lang === "ar" ? "كيف يمكننا مساعدتك؟" : "How Can We Help?"}
                    </h1>
                    <div className={`relative max-w-2xl mx-auto animate-stagger-2 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                        <input
                            type="text"
                            placeholder={lang === "ar" ? "ابحث عن سؤالك هنا..." : "Search for answers..."}
                            className="w-full h-18 md:h-22 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 px-10 md:px-14 text-white text-lg focus:outline-none focus:bg-white/20 transition-all shadow-2xl placeholder:text-white/30"
                        />
                        <div className={`absolute ${lang === 'ar' ? 'right-6' : 'left-6'} top-1/2 -translate-y-1/2 text-white/50`}>
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CATEGORIES GRID ═══ */}
            <section className="py-20 md:py-32 bg-white" ref={gridReveal.ref}>
                <div className="container mx-auto px-6 max-w-7xl">
                    {selectedCategory === null ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {categories.map((cat, i) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`glass-card p-10 rounded-[2.5rem] border border-emerald-50 text-center hover:shadow-elevated hover:-translate-y-2 transition-all duration-700 group ${gridReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                    style={{ animationDelay: `${i * 150}ms` }}
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={cat.icon} /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-emerald-950 mb-3">{cat.title[lang]}</h3>
                                    <p className="text-emerald-800/60 leading-relaxed font-bold">{cat.description[lang]}</p>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="max-w-3xl mx-auto">
                            <button onClick={() => setSelectedCategory(null)} className="mb-10 flex items-center gap-3 text-emerald-600 font-bold hover:gap-4 transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                {lang === "ar" ? "العودة للتصنيفات" : "Back to Categories"}
                            </button>

                            <div className="space-y-4">
                                {categories.find(c => c.id === selectedCategory)?.faqs.map((faq, i) => (
                                    <div key={i} className="glass-card rounded-[2rem] border border-emerald-50 overflow-hidden">
                                        <button
                                            onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                            className="w-full px-8 py-7 flex items-center justify-between text-right hover:bg-emerald-50/30 transition-all font-bold text-emerald-950 text-xl"
                                        >
                                            {faq.question[lang]}
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 ${openFAQ === i ? "bg-emerald-600 text-white rotate-180" : "bg-emerald-100 text-emerald-600"}`}>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </button>
                                        <div className={`transition-all duration-500 ease-out overflow-hidden ${openFAQ === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                            <div className={`px-8 pb-8 text-emerald-800/70 text-lg leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                                                {faq.answer[lang]}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ═══ CONTACT CTA ═══ */}
            <section className="py-20 md:py-32 bg-gray-50 overflow-hidden relative" ref={contactReveal.ref}>
                <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
                    <h2 className={`text-3xl md:text-5xl font-bold text-emerald-950 mb-12 ${contactReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        {lang === "ar" ? "لم تجد ما تبحث عنه؟" : "Still Need Help?"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <a href="tel:+962776719225" className={`p-10 rounded-[2.5rem] bg-white border border-emerald-100 shadow-premium flex flex-col items-center group hover:-translate-y-2 transition-all duration-700 ${contactReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                            <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <span className="text-2xl font-bold text-emerald-950 mb-2">{lang === "ar" ? "اتصل بنا" : "Call Us"}</span>
                            <span className="text-emerald-800/60 font-bold" dir="ltr">+962 7 7671 9225</span>
                        </a>
                        <a href="mailto:support@shahedapp.com" className={`p-10 rounded-[2.5rem] bg-white border border-emerald-100 shadow-premium flex flex-col items-center group hover:-translate-y-2 transition-all duration-700 ${contactReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                            <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <span className="text-2xl font-bold text-emerald-950 mb-2">{lang === "ar" ? "راسلنا" : "Email Support"}</span>
                            <span className="text-emerald-800/60 font-bold" dir="ltr">support@shahedapp.com</span>
                        </a>
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
                        © 2026 شِهد — {lang === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
                    </p>
                </div>
            </footer>
        </main>
    );
}
