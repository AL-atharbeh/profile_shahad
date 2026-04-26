"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

export default function DownloadPage() {
    const [lang, setLang] = useState<Lang>("ar");

    const t = {
        title: {
            ar: "التطبيق اللي فيه كل شيء",
            en: "The App That Has Everything"
        },
        subtitle: {
            ar: "تتبع دفعاتك، احصل على عروض حصرية واكتشف آلاف المتاجر اللي تقدر تقسّم فيها مشترياتك على 4.",
            en: "Track your payments, get exclusive offers and discover thousands of stores where you can split your purchases into 4."
        },
        downloadApp: {
            ar: "حمّل التطبيق",
            en: "Download App"
        },
        nextLevel: {
            ar: "خذ تجربة تسوقك لمستوى ثاني",
            en: "Take Your Shopping Experience to the Next Level"
        },
        discoverStores: {
            ar: "اكتشف أفضل المتاجر",
            en: "Discover the Best Stores"
        },
        discoverStoresDesc: {
            ar: "اعرف وين تقدر تقسّم مشترياتك على 4 أونلاين أو داخل المتاجر من براندات الكل يحبها وكل المنتجات اللي إنت تحبها",
            en: "Know where you can split your purchases into 4 online or in stores from brands everyone loves and all the products you love"
        },
        exclusiveOffers: {
            ar: "العروض حولك وحواليك",
            en: "Offers All Around You"
        },
        exclusiveOffersDesc: {
            ar: "مع تطبيق شِهد، ما راح تفوّت عليك أي عرض مع العروض الحصرية من المتاجر الشريكة لشِهد",
            en: "With Shahd app, you won't miss any offer with exclusive offers from Shahd partner stores"
        },
        priceAlerts: {
            ar: "تنبيهات انخفاض الأسعار",
            en: "Price Drop Alerts"
        },
        priceAlertsDesc: {
            ar: "ضيف منتجاتك اللي تحبّها للمفضلة وبيجيك خبر أول ما تنزل أسعارها بكل بساطة",
            en: "Add your favorite products to favorites and get notified as soon as prices drop"
        },
        staySmartTitle: {
            ar: "خلّك ذهين وتابع دفعاتك",
            en: "Stay Smart and Track Your Payments"
        },
        managePayments: {
            ar: "تحكم بإدارة مشترياتك",
            en: "Control Your Purchases"
        },
        managePaymentsDesc: {
            ar: "تتبع تاريخ دفعاتك كاملة وخلّك عندك علم لكل دفعاتك الجاية والرصيد المتبقي بكل سهولة",
            en: "Track your complete payment history and stay informed of all your upcoming payments and remaining balance easily"
        },
        payOnTime: {
            ar: "ادفع على الوقت",
            en: "Pay On Time"
        },
        payOnTimeDesc: {
            ar: "مع شِهد دفعاتك راح تتسدد تلقائيًا بموعدها، وعندك الخيار إنك تدفعها قبل التاريخ المحدد.",
            en: "With Shahd, your payments will be automatically paid on time, and you have the option to pay them before the due date."
        },
        easyReturns: {
            ar: "استرجع طلباتك بسهولة",
            en: "Easy Returns"
        },
        easyReturnsDesc: {
            ar: "احصل على الدعم طول الأسبوع على مدى 24 ساعة لطلبات الاسترجاع والدفعات أو حتى لمشاركة رأيك. بالإضافة لبرنامج حماية شِهد اللي يضمن حل مشاكل الطلبات مع المتاجر",
            en: "Get 24/7 support for return requests, payments, or even to share your opinion. Plus Shahd's protection program that ensures order issues with stores are resolved"
        },
        finalCta: {
            ar: "استمتع بتجربة تسوق مختلفة",
            en: "Enjoy a Different Shopping Experience"
        },
        finalCtaDesc: {
            ar: "مع تطبيق شِهد، تقدر تتسوق الحين، تدفع بعدين وتكسب مبالغ استرداد نقدي - بدون فوائد، ولا رسوم أو مفاجآت.",
            en: "With Shahd app, you can shop now, pay later and earn cashback - without interest, fees or surprises."
        }
    };

    return (
        <main className="bg-white text-[#0f1c16] min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>

            {/* NAVBAR */}
            <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo_shahadd.png"
                            alt="شِهد"
                            width={100}
                            height={35}
                            className="h-8 md:h-10 w-auto object-contain transition-transform hover:scale-105"
                            priority
                            quality={100}
                        />
                    </Link>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors font-ibm-plex-arabic text-sm font-medium text-gray-700"
                        >
                            <span className="text-sm">{lang === "ar" ? "🇬🇧" : "🇯🇴"}</span>
                            <span className="hidden sm:inline text-sm">{lang === "ar" ? "English" : "عربي"}</span>
                        </button>
                    </div>

                </div>
            </header>

            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-br from-[#132c17] via-[#4d6528] to-[#a1ae1c] py-2 md:py-3 px-4 sm:px-6 overflow-hidden" dir={lang === "ar" ? "rtl" : "ltr"}>
                <div className="container mx-auto relative z-10 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 items-center">
                        
                        {/* People Image - Left Side */}
                        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                            <div className="relative w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px]">
                                <Image
                                    src="/images/shahad_phone1.png"
                                    alt="شِهد App"
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                    quality={100}
                                    priority
                                />
                            </div>
                        </div>

                        {/* Text Content - Right Side */}
                        <div className={`text-white flex flex-col justify-center order-1 lg:order-2 ${lang === "ar" ? "text-right" : "text-left"}`}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ibm-plex-arabic font-bold mb-6 text-white !text-white" style={{ lineHeight: '50px', color: '#ffffff' }}>
                                {t.title[lang]}
                            </h1>
                            
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-federant mb-6 leading-relaxed text-white/95 max-w-lg">
                                {t.subtitle[lang]}
                            </p>

                            {/* Download Buttons */}
                            <div className="flex flex-row items-center justify-center gap-5 flex-wrap mt-0">
                                {/* App Store Button */}
                                <a href="#" className="group flex items-center gap-3 text-white hover:opacity-90 transition-all duration-300 hover:scale-105">
                                    <div className="bg-white/10 backdrop-blur-sm p-2.5 rounded-xl group-hover:bg-white/20 transition-colors">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                        </svg>
                                    </div>
                                    <div className={`${lang === "ar" ? "text-right" : "text-left"}`}>
                                        <div className="text-xs opacity-90 font-federant mb-0.5">{lang === "ar" ? "حمّل من" : "Download on"}</div>
                                        <div className="text-lg font-bold font-ibm-plex-arabic">App Store</div>
                                    </div>
                                </a>

                                {/* Google Play Button */}
                                <a href="#" className="group flex items-center gap-3 text-white hover:opacity-90 transition-all duration-300 hover:scale-105">
                                    <div className="bg-white/10 backdrop-blur-sm p-2.5 rounded-xl group-hover:bg-white/20 transition-colors">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                        </svg>
                                    </div>
                                    <div className={`${lang === "ar" ? "text-right" : "text-left"}`}>
                                        <div className="text-xs opacity-90 font-federant mb-0.5">{lang === "ar" ? "حمّل من" : "GET IT ON"}</div>
                                        <div className="text-lg font-bold font-ibm-plex-arabic">Google Play</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* NEXT LEVEL SECTION */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-ibm-plex-arabic font-bold text-center mb-16 text-[#132c17]">
                        {t.nextLevel[lang]}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                        {/* Feature 1 */}
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-2xl flex items-center justify-center">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-ibm-plex-arabic font-bold mb-4 text-[#132c17]">
                                {t.discoverStores[lang]}
                            </h3>
                            <p className="text-gray-700 font-federant text-lg leading-relaxed">
                                {t.discoverStoresDesc[lang]}
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-2xl flex items-center justify-center">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-ibm-plex-arabic font-bold mb-4 text-[#132c17]">
                                {t.exclusiveOffers[lang]}
                            </h3>
                            <p className="text-gray-700 font-federant text-lg leading-relaxed">
                                {t.exclusiveOffersDesc[lang]}
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-2xl flex items-center justify-center">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-ibm-plex-arabic font-bold mb-4 text-[#132c17]">
                                {t.priceAlerts[lang]}
                            </h3>
                            <p className="text-gray-700 font-federant text-lg leading-relaxed">
                                {t.priceAlertsDesc[lang]}
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* PAYMENT MANAGEMENT SECTION */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-ibm-plex-arabic font-bold text-center mb-16 text-[#132c17]">
                        {t.staySmartTitle[lang]}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                        {/* Feature 1 */}
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-2xl flex items-center justify-center">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-ibm-plex-arabic font-bold mb-4 text-[#132c17]">
                                {t.managePayments[lang]}
                            </h3>
                            <p className="text-gray-700 font-federant text-lg leading-relaxed">
                                {t.managePaymentsDesc[lang]}
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-2xl flex items-center justify-center">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-ibm-plex-arabic font-bold mb-4 text-[#132c17]">
                                {t.payOnTime[lang]}
                            </h3>
                            <p className="text-gray-700 font-federant text-lg leading-relaxed">
                                {t.payOnTimeDesc[lang]}
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#132c17] to-[#4d6528] rounded-2xl flex items-center justify-center">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-ibm-plex-arabic font-bold mb-4 text-[#132c17]">
                                {t.easyReturns[lang]}
                            </h3>
                            <p className="text-gray-700 font-federant text-lg leading-relaxed">
                                {t.easyReturnsDesc[lang]}
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="relative bg-white py-10 md:py-12 px-4 sm:px-6 overflow-hidden">

                <div className="container mx-auto relative z-10 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        
                        {/* Text Content */}
                        <div className={`space-y-6 ${lang === "ar" ? "lg:text-right text-center" : "lg:text-left text-center"}`}>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-ibm-plex-arabic font-bold leading-tight text-[#132c17]" style={{ color: '#132c17' }}>
                                {t.finalCta[lang]}
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl font-federant leading-relaxed text-gray-700">
                                {t.finalCtaDesc[lang]}
                            </p>

                            {/* Download Button */}
                            <div className="pt-2 flex justify-start">
                                <button className="group px-8 py-4 bg-[#132c17] text-white rounded-xl font-ibm-plex-arabic font-bold text-base hover:bg-[#1a3a20] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3">
                                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    {t.downloadApp[lang]}
                                </button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative w-full max-w-xs">
                                <Image
                                    src="/images/shahad.png"
                                    alt="شِهد App"
                                    width={500}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                    quality={100}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-8 sm:py-10 md:py-12 text-center border-t border-gray-200 bg-gradient-to-b from-[#132c17] to-[#0f1c16] text-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <Image
                        src="/images/logo_shahadd.png"
                        alt="شِهد"
                        width={80}
                        height={28}
                        className="mx-auto mb-4 h-8 w-auto object-contain opacity-90"
                        quality={100}
                    />
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
