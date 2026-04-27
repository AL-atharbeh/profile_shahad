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

export default function TermsPage() {
    const [lang, setLang] = useState<Lang>("ar");
    const [navScrolled, setNavScrolled] = useState(false);
    
    const heroReveal = useReveal(0.05);
    const contentReveal = useReveal(0.1);

    useEffect(() => {
        const handleScroll = () => setNavScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sections = [
        {
            title: { ar: "١. مقدمة", en: "1. Introduction" },
            content: {
                ar: "مرحباً بكم في منصة شِهد. من خلال استخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل البدء في استخدام المنصة.",
                en: "Welcome to Shahd. By using our services, you agree to be bound by these terms and conditions. Please read them carefully before using the platform."
            }
        },
        {
            title: { ar: "٢. الأهلية", en: "2. Eligibility" },
            content: {
                ar: "لاستخدام شِهد، يجب أن تكون مقيماً في الأردن، وأن تبلغ من العمر ١٨ عاماً على الأقل، وأن تمتلك هوية شخصية سارية المفعول وحساب بنكي نشط.",
                en: "To use Shahd, you must be a resident of Jordan, at least 18 years old, and possess a valid national ID and an active bank account."
            }
        },
        {
            title: { ar: "٣. آلية الدفع والتقسيط", en: "3. Payment and Installments" },
            content: {
                ar: "تتيح لك شِهد تقسيم مشترياتك إلى أقساط شهرية مريحة. يتم سحب القسط الأول عند الشراء، وتُسحب الأقساط المتبقية تلقائياً من بطاقتك المسجلة في نفس التاريخ من كل شهر.",
                en: "Shahd allows you to split your purchases into comfortable monthly installments. The first installment is processed at purchase, and remaining installments are automatically debited from your registered card on the same date each month."
            }
        },
        {
            title: { ar: "٤. الرسوم والمتأخرات", en: "4. Fees and Late Payments" },
            content: {
                ar: "نحن في شِهد نؤمن بالشفافية الكاملة. لا توجد رسوم خفية، ولكن قد يتم تطبيق رسوم تأخير بسيطة في حال فشل سداد القسط في موعده المحدد بعد منحك فترة سماح كافية.",
                en: "We believe in full transparency. There are no hidden fees, but a small late fee may apply if an installment is not paid on its due date after a sufficient grace period."
            }
        }
    ];

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
                            <Link href="/how-it-works">{lang === "ar" ? "كيف يعمل" : "How it Works"}</Link>
                            <Link href="/business">{lang === "ar" ? "للأعمال" : "Business"}</Link>
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
            <section className="relative w-full pt-32 sm:pt-48 pb-20 px-6 overflow-hidden bg-emerald-50" ref={heroReveal.ref}>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-100/50 to-transparent" />
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <div className={`inline-block px-4 py-1 rounded-full bg-emerald-600/5 border border-emerald-600/10 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-6 animate-stagger-1 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                        {lang === "ar" ? "الميثاق القانوني" : "Legal Charter"}
                    </div>
                    <h1 className={`text-4xl md:text-7xl font-bold text-emerald-950 mb-6 animate-stagger-2 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                        {lang === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
                    </h1>
                    <p className={`text-emerald-800/60 font-bold animate-stagger-3 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                        {lang === "ar" ? "آخر تحديث: ٢٦ أبريل ٢٠٢٥" : "Last Updated: April 26, 2025"}
                    </p>
                </div>
            </section>

            {/* ═══ TERMS CONTENT ═══ */}
            <section className="py-20 md:py-32 bg-white" ref={contentReveal.ref}>
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-16">
                        {sections.map((section, i) => (
                            <div key={i} className={`relative ${contentReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                                <div className={`absolute -right-10 top-0 text-[5rem] font-bold text-emerald-50 pointer-events-none hidden lg:block`}>
                                    {i + 1}
                                </div>
                                <div className="relative">
                                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-6 flex items-center gap-4">
                                        <div className="w-1.5 h-8 bg-emerald-500 rounded-full" />
                                        {section.title[lang]}
                                    </h2>
                                    <div className={`text-lg md:text-xl text-emerald-800/70 leading-relaxed font-medium`}>
                                        {section.content[lang]}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`mt-24 p-12 rounded-[2.5rem] bg-emerald-950 text-white relative overflow-hidden ${contentReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
                        <div className="relative z-10 text-center">
                            <h3 className="text-2xl font-bold mb-6">{lang === "ar" ? "هل لديك تساؤل قانوني؟" : "Any Legal Questions?"}</h3>
                            <p className="text-white/60 mb-8 max-w-xl mx-auto">{lang === "ar" ? "فريقنا القانوني مستعد للإجابة على كافة استفساراتكم المتعلقة بسياسات المنصة." : "Our legal team is ready to answer any questions regarding our platform policies."}</p>
                            <Link href="mailto:legal@shahd.com" className="btn-premium-gold px-12 py-4 rounded-xl font-bold inline-block">
                                legal@shahd.com
                            </Link>
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
