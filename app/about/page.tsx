"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export default function AboutPage() {
    const [lang, setLang] = useState<Lang>("ar");

    // Section reveal refs
    const heroReveal = useReveal(0.05);
    const storyReveal = useReveal(0.15);
    const missionReveal = useReveal(0.15);
    const valuesReveal = useReveal(0.15);
    const statsReveal = useReveal(0.15);

    // Dynamic stats
    const usersCount = useCountUp(50, 2000, statsReveal.isVisible);
    const partnersCount = useCountUp(150, 2000, statsReveal.isVisible);
    const citiesCount = useCountUp(12, 2000, statsReveal.isVisible);

    const t = {
        title: { 
            ar: "شِهد: مستقبل التمويل الاستهلاكي المرن", 
            en: "Shahd: The Future of Flexible Consumer Finance" 
        },
        subtitle: { 
            ar: "نحن هنا لنعيد تعريف تجربة التسوق. في شِهد، نؤمن أن التمويل يجب أن يكون بسيطاً، شفافاً، وفي متناول الجميع.",
            en: "We are here to redefine the shopping experience. At Shahd, we believe finance should be simple, transparent, and accessible to everyone."
        },
        storyTitle: { ar: "قصة شِهد", en: "The Shahd Story" },
        missionTitle: { ar: "مهمتنا ورؤيتنا", en: "Our Mission & Vision" },
        valuesTitle: { ar: "قيمنا الجوهرية", en: "Our Core Values" },
        statsTitle: { ar: "شِهد في أرقام", en: "Shahd in Numbers" },
    };

    return (
        <main className={`bg-white text-[#0a1f10] min-h-screen font-ibm-plex-arabic ${lang === "ar" ? "rtl" : "ltr"}`} dir={lang === "ar" ? "rtl" : "ltr"}>
            
            {/* ═══ NAVBAR ═══ */}
            <Navbar lang={lang} setLang={setLang} />

            {/* ═══ HERO SECTION ═══ */}
            <section className="relative w-full pt-28 sm:pt-36 pb-12 px-4 sm:px-6 overflow-hidden" ref={heroReveal.ref}>
                <div className="blob-emerald w-[500px] h-[500px] -top-20 -left-20 animate-morph-blob opacity-20" />

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-premium bg-emerald-950 min-h-[500px] md:min-h-[600px] lg:min-h-[650px] group">
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-[#064e3b]" />
                        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,#10b981_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#065f46_0%,transparent_50%)]" />
                        
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] md:min-h-[600px] lg:min-h-[650px]">
                            {/* Left Side: Content */}
                            <div className={`flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20 ${lang === "ar" ? "text-right lg:order-2" : "text-left lg:order-1"}`}>
                                <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-stagger-1 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{lang === "ar" ? "تعرف علينا أكثر" : "Get to know us"}</span>
                                </div>
                                
                                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] animate-stagger-2 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    {t.title[lang]}
                                </h1>
                                
                                <p className={`text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-xl animate-stagger-3 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    {t.subtitle[lang]}
                                </p>
                                
                                <div className={`flex flex-wrap gap-6 animate-stagger-4 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    <Link href="/download" className="btn-premium-gold px-10 py-4.5 rounded-2xl font-bold text-lg shadow-[0_20px_50px_rgba(245,158,11,0.3)]">
                                        {lang === "ar" ? "حمل التطبيق" : "Download App"}
                                    </Link>
                                </div>
                            </div>

                            {/* Right Side: Image */}
                            <div className={`relative min-h-[500px] lg:min-h-0 overflow-hidden ${heroReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${lang === "ar" ? "lg:order-1" : "lg:order-2"}`}>
                                <Image 
                                    src="/images/shahed-pic.png" 
                                    alt="About Shahd" 
                                    fill 
                                    className="absolute inset-0 w-full h-full object-cover object-top" 
                                    priority 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ OUR STORY ═══ */}
            <section className="py-20 md:py-32 bg-white" ref={storyReveal.ref}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className={`relative aspect-[4/5] lg:aspect-auto lg:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl ${storyReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <Image 
                                src="/images/shopshahed.png" 
                                alt="Our Story" 
                                fill 
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
                        </div>
                        <div className={`${storyReveal.isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-8">{t.storyTitle[lang]}</h2>
                            <div className="space-y-6 text-lg text-emerald-800/70 leading-relaxed">
                                <p>
                                    {lang === "ar" 
                                        ? "بدأت شِهد برؤية بسيطة ولكن طموحة: جعل الحياة أسهل للجميع. لاحظنا أن الكثيرين يواجهون صعوبات في موازنة احتياجاتهم اليومية مع التزاماتهم المالية، ومن هنا ولدت فكرة شِهد." 
                                        : "Shahd began with a simple but ambitious vision: to make life easier for everyone. We noticed many struggled to balance daily needs with financial commitments, and thus Shahd was born."}
                                </p>
                                <p>
                                    {lang === "ar" 
                                        ? "نحن لسنا مجرد تطبيق تقسيط، بل نحن شريكك المالي الذي يثق بك. قمنا ببناء تقنية متطورة تتيح الموافقة الفورية والتعامل السلس مع آلاف المتاجر، مع الحفاظ على قيم الشفافية والعدالة." 
                                        : "We are more than just an installment app; we are your financial partner that trusts you. We built advanced technology for instant approvals and seamless interaction with thousands of stores, maintaining transparency and fairness."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ MISSION & VISION ═══ */}
            <section className="py-20 md:py-32 bg-emerald-50/30" ref={missionReveal.ref}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className={`glass-card p-12 rounded-[2.5rem] border border-emerald-100 shadow-premium ${missionReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-8 shadow-glow">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-3xl font-bold text-emerald-950 mb-6">{lang === "ar" ? "مهمتنا" : "Our Mission"}</h3>
                            <p className="text-lg text-emerald-800/70 leading-relaxed">
                                {lang === "ar" 
                                    ? "تمكين الأفراد من تحقيق تطلعاتهم من خلال توفير حلول مالية مرنة ومسؤولة تعزز من جودة حياتهم وتدعم نمو الاقتصاد المحلي." 
                                    : "Empowering individuals to achieve their aspirations by providing flexible and responsible financial solutions that enhance quality of life and support local economic growth."}
                            </p>
                        </div>
                        <div className={`glass-card p-12 rounded-[2.5rem] border border-emerald-100 shadow-premium ${missionReveal.isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                            <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-8 shadow-glow">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h3 className="text-3xl font-bold text-emerald-950 mb-6">{lang === "ar" ? "رؤيتنا" : "Our Vision"}</h3>
                            <p className="text-lg text-emerald-800/70 leading-relaxed">
                                {lang === "ar" 
                                    ? "أن نكون القوة الدافعة وراء عصر جديد من التمويل الاستهلاكي في المنطقة، حيث الثقة والابتكار يقودان كل معاملة." 
                                    : "To be the driving force behind a new era of consumer finance in the region, where trust and innovation lead every transaction."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CORE VALUES ═══ */}
            <section className="py-20 md:py-32 bg-white" ref={valuesReveal.ref}>
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className={`text-3xl md:text-5xl font-bold text-emerald-950 mb-16 ${valuesReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>{t.valuesTitle[lang]}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { 
                                title: lang === "ar" ? "الشفافية" : "Transparency", 
                                desc: lang === "ar" ? "لا رسوم خفية، لا مفاجآت. نحن نؤمن بالوضوح الكامل في كل خطوة." : "No hidden fees, no surprises. We believe in complete clarity at every step.",
                                icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            },
                            { 
                                title: lang === "ar" ? "الابتكار" : "Innovation", 
                                desc: lang === "ar" ? "نسخر أحدث التقنيات لتقديم تجربة مستخدم لا مثيل لها." : "We harness the latest technologies to provide an unparalleled user experience.",
                                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            },
                            { 
                                title: lang === "ar" ? "التمكين" : "Empowerment", 
                                desc: lang === "ar" ? "نمنحك القدرة على إدارة أموالك بالطريقة التي تناسبك." : "We give you the power to manage your money the way that suits you best.",
                                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            }
                        ].map((val, i) => (
                            <div key={i} className={`p-10 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100 hover:bg-white hover:shadow-elevated transition-all duration-500 group ${valuesReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 text-emerald-600 mx-auto shadow-premium group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={val.icon} /></svg>
                                </div>
                                <h4 className="text-2xl font-bold text-emerald-950 mb-4">{val.title}</h4>
                                <p className="text-emerald-800/60 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ STATS ═══ */}
            <section className="py-20 md:py-32 bg-emerald-950 text-white overflow-hidden relative" ref={statsReveal.ref}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#10b981_0%,transparent_70%)]" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.statsTitle[lang]}</h2>
                        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { val: usersCount, label: lang === "ar" ? "مستخدم نشط" : "Active Users", suffix: "K+" },
                            { val: partnersCount, label: lang === "ar" ? "شريك تجاري" : "Merchant Partners", suffix: "+" },
                            { val: citiesCount, label: lang === "ar" ? "مدينة نخدمها" : "Cities Covered", suffix: "+" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-6xl md:text-8xl font-bold text-emerald-400 mb-2">
                                    {stat.val}{stat.suffix}
                                </div>
                                <p className="text-white/60 text-xl font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FOOTER ═══ */}
            <Footer lang={lang} />
        </main>
    );
}
