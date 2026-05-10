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

export default function HowItWorksPage() {
    const [lang, setLang] = useState<Lang>("ar");
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    // Section reveal refs
    const heroReveal = useReveal(0.05);
    const splitReveal = useReveal(0.15);
    const onlineReveal = useReveal(0.15);
    const faqReveal = useReveal(0.15);
    const ctaReveal = useReveal(0.15);

    const toggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const t = {
        title: { ar: "أحلى الأشياء تجي على دفعات", en: "The Best Things Come in Installments" },
        subtitle: {
            ar: "مع شِهد، تقدر تقسّم مشترياتك على 4 دفعات بدون فوائد، أونلاين وداخل المتاجر. عملية سهلة، فورية، ومتوافقة تماماً مع أحكام الشريعة.",
            en: "With Shahd, split your purchases into 4 interest-free installments, online and in-store. Easy, instant, and fully Sharia-compliant."
        },
        onlineTitle: { ar: "كيفية الدفع أونلاين", en: "How to Pay Online" },
        instoreTitle: { ar: "وسائل الدفع داخل المتجر", en: "In-Store Payment Methods" },
        nextTitle: { ar: "ما التالي؟", en: "What's Next?" },
        faqTitle: { ar: "الأسئلة المتكررة", en: "Frequently Asked Questions" },
    };

    const faqs = [
        {
            question: { ar: "كيف يعمل الدفع لاحقًا؟", en: "How does pay later work?" },
            answer: {
                ar: "عند اختيار الدفع لاحقًا عبر شِهد، يتم تقسيم قيمة مشترياتك وفق الخطة التي حددتها عند الدفع. تُخصم الدفعة الأولى عند الشراء، وتُخصم الدفعات المتبقية شهريًا حسب خطتك.",
                en: "When you choose to pay later with Shahd, your purchase is split according to your plan. The first payment is made at checkout, and the rest are handled monthly."
            }
        },
        {
            question: { ar: "ما هي طرق الدفع المتاحة؟", en: "What payment methods are available?" },
            answer: {
                ar: "يمكنك الدفع باستخدام بطاقة الائتمان أو البطاقة البنكية. نقبل جميع البطاقات الرئيسية مثل فيزا وماستركارد وكينت.",
                en: "You can pay using credit or debit cards. We accept all major cards including Visa, Mastercard, and KNET."
            }
        },
        {
            question: { ar: "هل توجد فوائد أو رسوم إضافية؟", en: "Are there any interest or additional fees?" },
            answer: {
                ar: "لا، مع شِهد لا توجد فوائد أو رسوم إضافية طالما التزمت بالسداد في الوقت المحدد. تدفع فقط قيمة مشترياتك مقسّمة على دفعات مريحة.",
                en: "No, Shahd offers 0% interest and no hidden fees as long as you pay on time. You only pay for what you buy."
            }
        },
        {
            question: { ar: "كيف يمكنني تتبع دفعاتي؟", en: "How can I track my payments?" },
            answer: {
                ar: "ببساطة عبر تطبيق شِهد. ستحصل على جدول زمني واضح لكل دفعاتك، مع إشعارات ذكية تذكرك بموعد كل دفعة قبل وقت كافٍ.",
                en: "Follow your payments in the Shahd app. You'll get a clear timeline and smart notifications before each due date."
            }
        }
    ];

    return (
        <main className={`bg-white text-[#0a1f10] min-h-screen font-ibm-plex-arabic ${lang === "ar" ? "rtl" : "ltr"}`} dir={lang === "ar" ? "rtl" : "ltr"}>

            {/* ═══ NAVBAR ═══ */}
            <Navbar lang={lang} setLang={setLang} />

            {/* ═══ HERO SECTION ═══ */}
            <section className="relative w-full pt-28 sm:pt-36 pb-16 px-4 sm:px-6 overflow-hidden" ref={heroReveal.ref}>
                <div className="blob-emerald w-[500px] h-[500px] -top-40 -right-40 animate-morph-blob opacity-20" />

                <div className="container mx-auto max-w-7xl relative">
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-premium bg-emerald-950 min-h-[450px] md:min-h-[550px] lg:min-h-[600px] group">
                        <div className="absolute inset-0 bg-[#064e3b]" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.62 10l.38.38L30.38 35.0l-.38-.38L54.62 10zM10.5 34.5l.5.5L35.5 10.5l-.5-.5L10.5 34.5z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

                        <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-0 h-full min-h-[450px] md:min-h-[550px] lg:min-h-[600px]">
                            {/* Text Content */}
                            <div className={`flex-1 flex flex-col justify-center p-8 md:p-16 order-1 md:order-1 ${lang === "ar" ? "text-right" : "text-left"}`}>
                                <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-stagger-1 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    {t.title[lang]}
                                </h1>
                                <p className={`text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl animate-stagger-2 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    {t.subtitle[lang]}
                                </p>
                                <div className={`flex flex-wrap gap-4 animate-stagger-3 ${heroReveal.isVisible ? '' : 'opacity-0'}`}>
                                    <button className="btn-premium-gold px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl">
                                        {lang === "ar" ? "ابدأ اليوم" : "Start Today"}
                                    </button>
                                </div>
                            </div>

                            {/* Image — complete and edge-to-edge */}
                            <div className="flex-1 relative min-h-[400px] md:min-h-0 order-2 md:order-2 overflow-hidden">
                                <Image 
                                    src="/images/shahad.png" 
                                    alt="Shahd App" 
                                    fill 
                                    className="object-cover object-top md:object-right" 
                                    priority 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CORE VALUE PROPS ═══ */}
            <section className="py-16 md:py-24 bg-white" ref={splitReveal.ref}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: lang === "ar" ? "ادفع على راحتك" : "Pay at Your Pace",
                                desc: lang === "ar" ? "تسوق الأشياء اللي تحبها وقسّم مشترياتك شوي شوي." : "Shop for things you love and split your payments gradually.",
                                icon: "M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z M2 17l10 5 10-5M2 12l10 5 10-5M2 7l10 5 10-5"
                            },
                            {
                                title: lang === "ar" ? "بدون فوائد أو رسوم" : "No Interest or Fees",
                                desc: lang === "ar" ? "سدد الدفعات في وقتها، ولا تدفع أكثر من مبلغ مشترياتك." : "Pay on time and don't pay a penny more than the checkout price.",
                                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            },
                            {
                                title: lang === "ar" ? "اختر أي بطاقة" : "Choose Any Card",
                                desc: lang === "ar" ? "اربط بطاقتك الإئتمانية أو البنكية واحصل على موافقة فورية." : "Link any credit or debit card and get approved in seconds.",
                                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            }
                        ].map((item, i) => (
                            <div key={i}
                                className={`text-center p-10 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100 transition-all duration-700 hover:shadow-elevated hover:-translate-y-2 ${splitReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 200}ms` }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-premium flex items-center justify-center mx-auto mb-8 text-emerald-600">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-950 mb-4">{item.title}</h3>
                                <p className="text-emerald-800/70 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ HOW TO PAY ONLINE ═══ */}
            <section className="py-20 md:py-32 bg-emerald-950 text-white overflow-hidden relative" ref={onlineReveal.ref}>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-20">
                        <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${onlineReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            {t.onlineTitle[lang]}
                        </h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                        {[
                            { num: "1", title: lang === "ar" ? "ابحث عن ماركاتك المفضلة" : "Search Brands", desc: lang === "ar" ? "تصفح مئات المتاجر المتاحة في تطبيق شِهد أو تصفح المتاجر الشريكة." : "Shop your favorites or discover new brands that offer BNPL." },
                            { num: "2", title: lang === "ar" ? "اختر شِهد عند الدفع" : "Choose Shahd", desc: lang === "ar" ? "عند وصولك لصفحة الدفع في أي متجر شريك، اختر شِهد كوسيلة للدفع." : "Select Shahd as your payment method at any partner store checkout." },
                            { num: "3", title: lang === "ar" ? "قسّمها على 4 دفعات" : "Split into 4", desc: lang === "ar" ? "أكمل بياناتك مرة واحدة، وقسم مبلغ مشترياتك على 4 دفعات شهرية مريحة." : "Complete your info once and split your total into 4 easy monthly payments." }
                        ].map((step, i) => (
                            <div key={i} className={`relative group ${onlineReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
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

            {/* ═══ FAQ SECTION ═══ */}
            <section className="py-20 md:py-32 bg-gray-50" ref={faqReveal.ref}>
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className={`text-center mb-16 ${faqReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6">{t.faqTitle[lang]}</h2>
                        <p className="text-emerald-800/60 text-lg">كل ما تحتاج لمعرفته حول شِهد</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index}
                                className={`glass-card rounded-[2rem] overflow-hidden border border-emerald-100 transition-all duration-700 ${faqReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full px-8 py-7 flex items-center justify-between text-right hover:bg-emerald-50/30 transition-colors"
                                >
                                    <h3 className="text-xl font-bold text-emerald-950 flex-1">
                                        {faq.question[lang]}
                                    </h3>
                                    <div className={`w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center transition-transform duration-500 ${openQuestion === index ? "rotate-180 bg-emerald-600 text-white" : "text-emerald-600"}`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </button>
                                <div className={`transition-all duration-500 ease-in-out ${openQuestion === index ? "max-h-[300px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
                                    <div className={`px-8 pb-8 text-emerald-800/70 text-lg leading-relaxed ${lang === "ar" ? "text-right" : "text-left"}`}>
                                        {faq.answer[lang]}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="py-20 md:py-32 bg-white" ref={ctaReveal.ref}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className={`relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 p-12 md:p-24 text-center ${ctaReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8">
                                {lang === "ar" ? "ابدأ رحلة تسوق مختلفة" : "Experience Shopping Differently"}
                            </h2>
                            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                                {lang === "ar" ? "حمّل تطبيق شِهد اليوم وانضم لآلاف المستخدمين الذين يستمتعون بحرية مالية أكبر." : "Join thousands who shop with more financial freedom. Download the app today."}
                            </p>
                            <Link href="/download" className="btn-premium-gold px-12 py-5 rounded-2xl font-bold text-xl inline-block shadow-2xl">
                                {lang === "ar" ? "حمّل التطبيق الآن" : "Download Now"}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ FOOTER ═══ */}
            <footer className="py-16 bg-emerald-950 text-white border-t border-white/5">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <Link href="/" className="inline-block mb-10 group transition-transform hover:scale-105">
                        <Image src="/images/logo_shahadd.png" alt="شِهد" width={120} height={45} className="mx-auto" priority />
                    </Link>
                    <p className="text-white/30 text-xs text-center border-t border-white/5 pt-10">
                        © 2025 شِهد — {lang === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
                    </p>
                </div>
            </footer>
        </main>
    );
}
