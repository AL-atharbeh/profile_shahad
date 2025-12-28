"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

export default function HowItWorksPage() {
    const [lang, setLang] = useState<Lang>("ar");
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqs = [
        {
            question: {
                ar: "كيف يعمل الدفع لاحقًا؟",
                en: "How does pay later work?"
            },
            answer: {
                ar: "عند اختيار الدفع لاحقًا عبر شِهد، يتم تقسيم قيمة مشترياتك وفق الخطة التي حددتها عند الدفع. تُخصم الدفعة الأولة عند الشراء، وتُخصم الدفعات المتبقية شهريًا حسب خطتك.",
                en: "When you choose to pay later with Shahd, your purchase amount is split according to the plan you selected at checkout. The first payment is deducted at purchase, and the remaining payments are deducted monthly according to your plan."
            }
        },
        {
            question: {
                ar: "ما هي طرق الدفع المتاحة؟",
                en: "What payment methods are available?"
            },
            answer: {
                ar: "يمكنك الدفع باستخدام بطاقة الائتمان أو البطاقة البنكية. نقبل جميع البطاقات الرئيسية مثل فيزا وماستركارد.",
                en: "You can pay using a credit card or bank card. We accept all major cards like Visa and Mastercard."
            }
        },
        {
            question: {
                ar: "هل توجد فوائد أو رسوم إضافية؟",
                en: "Are there any interest or additional fees?"
            },
            answer: {
                ar: "لا، مع شِهد لا توجد فوائد أو رسوم إضافية. تدفع فقط قيمة مشترياتك مقسّمة على 4 دفعات شهرية.",
                en: "No, with Shahd there are no interest or additional fees. You only pay the purchase amount divided into 4 monthly installments."
            }
        },
        {
            question: {
                ar: "كيف يمكنني تتبع دفعاتي؟",
                en: "How can I track my payments?"
            },
            answer: {
                ar: "يمكنك تتبع جميع دفعاتك من خلال تطبيق شِهد. ستحصل على إشعارات قبل موعد كل دفعة وتستطيع عرض تاريخ جميع دفعاتك السابقة.",
                en: "You can track all your payments through the Shahd app. You'll receive notifications before each payment due date and can view the history of all your previous payments."
            }
        },
        {
            question: {
                ar: "ماذا يحدث إذا تأخرت في الدفع؟",
                en: "What happens if I'm late on a payment?"
            },
            answer: {
                ar: "ننصح بالالتزام بمواعيد الدفعات لتجنب أي رسوم تأخير. يمكنك الاتصال بنا لمناقشة أي ظروف خاصة.",
                en: "We recommend adhering to payment schedules to avoid any late fees. You can contact us to discuss any special circumstances."
            }
        }
    ];

    return (
        <main className="bg-white text-[#0f1c16] min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
            {/* NAVBAR */}
            <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo_shahadd.png"
                            alt="شِهد"
                            width={100}
                            height={35}
                            className="h-8 md:h-10 w-auto object-contain transition-transform hover:scale-105 cursor-pointer"
                            priority
                            quality={100}
                        />
                    </Link>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors font-ibm-plex-arabic text-sm font-medium text-gray-700"
                        >
                            {lang === "ar" ? "EN" : "AR"}
                        </button>
                    </div>
                </div>
            </header>
            {/* // trigger redeploy */}

            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-br from-[#132c17] via-[#4d6528] to-[#a1ae1c] py-6 md:py-8 lg:py-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                        {/* Image - Left Side */}
                        <div className="flex justify-center md:justify-start">
                            <div className="relative w-full max-w-[240px] md:max-w-[280px]">
                                <Image
                                    src="/images/shahad.png"
                                    alt={lang === "ar" ? "تطبيق شِهد" : "Shahd App"}
                                    width={400}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                    quality={100}
                                    priority
                                />
                            </div>
                        </div>
                        
                        {/* Text Content - Right Side */}
                        <div className={`flex flex-col justify-center ${lang === "ar" ? "text-center md:text-right" : "text-center md:text-left"}`}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-ibm-plex-arabic mb-3 md:mb-4 font-bold leading-tight text-white !text-white" style={{ lineHeight: '68px', color: '#ffffff' }}>
                                {lang === "ar" ? "أحلى الأشياء تجي على دفعات" : "The Best Things Come in Installments"}
                            </h1>
                            <p className="text-base md:text-lg font-federant leading-relaxed text-white" style={{ color: '#ffffff' }}>
                                {lang === "ar" 
                                    ? "مع شِهد، تقدر تقسّم مشترياتك على 4 دفعات بدون فوائد، اونلاين وداخل المتاجر"
                                    : "With Shahd, you can split your purchases into 4 installments without interest, online and in stores"}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAY AT YOUR PACE */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-ibm-plex-arabic text-black mb-4 font-bold">
                            {lang === "ar" ? "ادفع على راحتك" : "Pay at Your Pace"}
                        </h2>
                        <h3 className="text-xl md:text-2xl font-ibm-plex-arabic text-[#132c17] mb-6 font-semibold">
                            {lang === "ar" ? "اشترِ الحين، ادفع بعدين" : "Buy Now, Pay Later"}
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 font-federant leading-relaxed">
                            {lang === "ar"
                                ? "تسوق الأشياء اللي تحبها وقسّم مشترياتك شوي شوي."
                                : "Shop for things you love and split your purchases bit by bit."}
                        </p>
                    </div>
                </div>
            </section>

            {/* NO INTEREST OR FEES */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-ibm-plex-arabic text-black mb-6 font-bold">
                            {lang === "ar" ? "بدون فوائد أو رسوم" : "No Interest or Fees"}
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 font-federant leading-relaxed">
                            {lang === "ar"
                                ? "سدد الدفعات في وقتها، ولا تدفع أكثر من مبلغ مشترياتك."
                                : "Pay your installments on time, and you won't pay more than your purchase amount."}
                        </p>
                    </div>
                </div>
            </section>

            {/* CHOOSE ANY CARD */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-ibm-plex-arabic text-black mb-6 font-bold">
                            {lang === "ar" ? "اختر أي بطاقة" : "Choose Any Card"}
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 font-federant leading-relaxed">
                            {lang === "ar"
                                ? "اربط بطاقتك الإئتمانية أو البنكية واحصل على موافقة فورية."
                                : "Link your credit or bank card and get instant approval."}
                        </p>
                    </div>
                </div>
            </section>

            {/* HOW TO PAY ONLINE */}
            <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-ibm-plex-arabic text-black mb-12 text-center font-bold">
                        {lang === "ar" ? "كيفية الدفع أونلاين" : "How to Pay Online"}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-ibm-plex-arabic text-white font-bold">1</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-ibm-plex-arabic text-black mb-4 font-semibold">
                                {lang === "ar" ? "ابحث عن ماركاتك المفضلة" : "Search for Your Favorite Brands"}
                            </h3>
                            <p className="text-gray-600 font-federant text-sm md:text-base leading-relaxed">
                                {lang === "ar"
                                    ? "تسوق ماركاتك المفضلة أو اكتشف علامات تجارية جديدة تمنحك أفضل مايمكن الحصول عليه أثناء التسوق."
                                    : "Shop your favorite brands or discover new brands that give you the best shopping experience."}
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-ibm-plex-arabic text-white font-bold">2</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-ibm-plex-arabic text-black mb-4 font-semibold">
                                {lang === "ar" ? "اختر شِهد عند الدفع" : "Choose Shahd at Checkout"}
                            </h3>
                            <p className="text-gray-600 font-federant text-sm md:text-base leading-relaxed">
                                {lang === "ar"
                                    ? "تسوق ماركاتك المفضلة أو اكتشف علامات تجارية جديدة تمنحك أفضل مايمكن الحصول عليه أثناء التسوق. اختر بين أديداس، ايكيا، سنتربوينت، جولدن سنت، وغيرهم من مئات المتاجر."
                                    : "Shop your favorite brands or discover new brands that give you the best shopping experience. Choose from Adidas, IKEA, Centrepoint, Golden Scent, and hundreds of other stores."}
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-ibm-plex-arabic text-white font-bold">3</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-ibm-plex-arabic text-black mb-4 font-semibold">
                                {lang === "ar" ? "قسّمها على 4 دفعات شهرية" : "Split into 4 Monthly Payments"}
                            </h3>
                            <p className="text-gray-600 font-federant text-sm md:text-base leading-relaxed">
                                {lang === "ar"
                                    ? "تسوق ماركاتك المفضلة أو اكتشف علامات تجارية جديدة تمنحك أفضل مايمكن الحصول عليه أثناء التسوق. اختر بين أديداس، ايكيا، سنتربوينت، جولدن سنت، وغيرهم من مئات المتاجر."
                                    : "Shop your favorite brands or discover new brands that give you the best shopping experience. Choose from Adidas, IKEA, Centrepoint, Golden Scent, and hundreds of other stores."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IN-STORE PAYMENT METHODS */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-ibm-plex-arabic text-black mb-12 text-center font-bold">
                        {lang === "ar" ? "وسائل الدفع داخل المتجر" : "In-Store Payment Methods"}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Shahd Card */}
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-ibm-plex-arabic text-black mb-4 font-semibold">
                                {lang === "ar" ? "بطاقة شِهد" : "Shahd Card"}
                            </h3>
                            <p className="text-gray-600 font-federant text-sm md:text-base leading-relaxed">
                                {lang === "ar"
                                    ? "استخدم طريقة دفع آمنة وسريعة من خلال محفظتك الرقمية."
                                    : "Use a safe and fast payment method through your digital wallet."}
                            </p>
                        </div>

                        {/* Payment Link */}
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-ibm-plex-arabic text-black mb-4 font-semibold">
                                {lang === "ar" ? "رابط الدفع" : "Payment Link"}
                            </h3>
                            <p className="text-gray-600 font-federant text-sm md:text-base leading-relaxed">
                                {lang === "ar"
                                    ? "ادفع مع رابط الدفع المُرسل من خلال الرسائل النصية أو البريد الإلكتروني."
                                    : "Pay with the payment link sent via text message or email."}
                            </p>
                        </div>

                        {/* Custom Code */}
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-ibm-plex-arabic text-black mb-4 font-semibold">
                                {lang === "ar" ? "رمز مخصص" : "Custom Code"}
                            </h3>
                            <p className="text-gray-600 font-federant text-sm md:text-base leading-relaxed">
                                {lang === "ar"
                                    ? "استخدم رمز المتسوق الخاص فيك لإتمام عملية الدفع عند الكاشير في ثوانِ."
                                    : "Use your custom shopper code to complete payment at the cashier in seconds."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT'S NEXT */}
            <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-ibm-plex-arabic text-black mb-12 text-center font-bold">
                        {lang === "ar" ? "ما التالي؟" : "What's Next?"}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Track Payments */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-ibm-plex-arabic text-black mb-4 font-semibold">
                                {lang === "ar" ? "تتبع دفعاتك" : "Track Your Payments"}
                            </h3>
                            <p className="text-gray-600 font-federant text-sm md:text-base leading-relaxed">
                                {lang === "ar"
                                    ? "ابقَ على اطلاع حول تاريخ دفعاتك والدفعات القادمة لتجنب المفاجآت."
                                    : "Stay informed about your payment history and upcoming payments to avoid surprises."}
                            </p>
                        </div>

                        {/* Get Notifications */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-ibm-plex-arabic text-black mb-4 font-semibold">
                                {lang === "ar" ? "احصل على التنبيهات" : "Get Notifications"}
                            </h3>
                            <p className="text-gray-600 font-federant text-sm md:text-base leading-relaxed">
                                {lang === "ar"
                                    ? "تلقَ إشعارات في الوقت المناسب عبر الرسائل النصية والهاتف والبريد الإلكتروني للدفعات القادمة."
                                    : "Receive timely notifications via text, phone, and email for upcoming payments."}
                            </p>
                        </div>

                        {/* Pay Installments */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-ibm-plex-arabic text-black mb-4 font-semibold">
                                {lang === "ar" ? "سدد دفعاتك" : "Pay Your Installments"}
                            </h3>
                            <p className="text-gray-600 font-federant text-sm md:text-base leading-relaxed">
                                {lang === "ar"
                                    ? "قم بإعداد الدفعات التلقائية أو اختر الدفع في الوقت الذي تريده عبر تطبيق شِهد."
                                    : "Set up automatic payments or choose to pay whenever you want through the Shahd app."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-ibm-plex-arabic text-black mb-12 text-center font-bold">
                        {lang === "ar" ? "الأسئلة المتكررة" : "Frequently Asked Questions"}
                    </h2>
                    
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-right hover:bg-gray-100 transition-colors"
                                >
                                    <h3 className="text-lg md:text-xl font-ibm-plex-arabic text-black font-semibold flex-1">
                                        {faq.question[lang]}
                                    </h3>
                                    <svg
                                        className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${lang === "ar" ? "mr-4" : "ml-4"} ${openQuestion === index ? "rotate-180" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openQuestion === index && (
                                    <div className={`px-6 md:px-8 pb-5 md:pb-6 ${lang === "ar" ? "text-right" : "text-left"}`}>
                                        <p className="text-gray-700 font-federant text-base md:text-lg leading-relaxed">
                                            {faq.answer[lang]}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#132c17] via-[#4d6528] to-[#a1ae1c] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-ibm-plex-arabic text-white mb-6 font-bold">
                            {lang === "ar" 
                                ? "التسوّق له شكل مختلف مع تطبيق شِهد" 
                                : "Shopping has a different look with the Shahd app"}
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 font-federant mb-8 max-w-2xl mx-auto">
                            {lang === "ar"
                                ? "لاقي آلاف المتاجر عشان تقسّم مشترياتك منها على 4 دفعات، احصل على عروض حصرية، وتتبع دفعاتك."
                                : "Find thousands of stores to split your purchases into 4 payments, get exclusive offers, and track your payments."}
                        </p>
                        <Link
                            href="/download"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#132c17] font-ibm-plex-arabic font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
                        >
                            {lang === "ar" ? "حمّل التطبيق" : "Download App"}
                        </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-8 sm:py-10 md:py-12 text-center border-t border-gray-200 bg-gradient-to-b from-[#132c17] to-[#0f1c16] text-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <Link href="/" className="inline-block mb-4">
                        <Image
                            src="/images/logo_shahadd.png"
                            alt="شِهد"
                            width={80}
                            height={28}
                            className="mx-auto h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            quality={100}
                        />
                    </Link>
                    <p className="text-white/70 font-federant text-sm">
                        {lang === "ar"
                            ? "© 2025 شِهد — جميع الحقوق محفوظة"
                            : "© 2025 Shahd — All Rights Reserved"}
                    </p>
                </div>
            </footer>
        </main>
    );
}

