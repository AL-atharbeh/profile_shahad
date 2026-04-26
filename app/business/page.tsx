"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

export default function BusinessPage() {
  const [lang, setLang] = useState<Lang>("ar");

  const t = {
    heroTitle: {
      ar: "شريكك في النمو والابتكار",
      en: "Your Partner in Growth and Innovation"
    },
    heroDesc: {
      ar: "انضم إلى شبكة تجار شِهد اليوم. نمكنك من تقديم حلول تقسيط مرنة لعملائك، مما يزيد من مبيعاتك ويحسن تجربة عملائك، مع ضمان استلام مستحقاتك فوراً.",
      en: "Join the Shahd merchant network today. We enable you to offer flexible installment solutions to your customers, increasing your sales and improving your customer experience, with guaranteed immediate payment."
    },
    stat1: { n: "٣٣٪+", d: { ar: "زيادة في حجم سلة التسوق", en: "Increase in average order value" } },
    stat2: { n: "١٨٪+", d: { ar: "تحسن في معدل التحويل", en: "Improvement in conversion rate" } },
    stat3: { n: "٣١٪+", d: { ar: "زيادة في تكرار الشراء", en: "Increase in purchase frequency" } },
    feature1Title: { ar: "سيولة نقدية فورية", en: "Immediate Cash Flow" },
    feature1Desc: { ar: "استلم أموالك بالكامل فور إتمام عملية البيع. شِهد تتحمل جميع مخاطر الائتمان والتحصيل.", en: "Receive your funds in full immediately after the sale. Shahd handles all credit and collection risks." },
    feature2Title: { ar: "توسع في قاعدة العملاء", en: "Expand Your Customer Base" },
    feature2Desc: { ar: "اجذب شريحة جديدة من المتسوقين الذين يفضلون مرونة الدفع على دفعات شهرية مريحة.", en: "Attract a new segment of shoppers who prefer the flexibility of paying in comfortable monthly installments." },
    startNow: { ar: "ابدأ كشريك الآن", en: "Start as a Partner Now" },
    sellAnywhere: { ar: "بع في كل مكان", en: "Sell Everywhere" },
  };

  return (
    <main className="bg-[#ffffff] text-[#132c17] min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
      
      {/* NAVBAR */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          
          {/* Logo/Branding */}
          <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
            <Link href="/" className="cursor-pointer">
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
            
            <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
              <Link href="/" className="text-gray-800 hover:text-gray-900 px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#132c17]/5 hover:via-[#4d6528]/5 hover:to-[#a1ae1c]/5 transition-all cursor-pointer text-base md:text-lg">
                {lang === "ar" ? "الرئيسية" : "Home"}
              </Link>
              <Link href="/how-it-works" className="text-gray-800 hover:text-gray-900 px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#132c17]/5 hover:via-[#4d6528]/5 hover:to-[#a1ae1c]/5 transition-all cursor-pointer text-base md:text-lg">
                {lang === "ar" ? "كيف يعمل" : "How It Works"}
              </Link>
              <Link href="/business" className="text-[#4d6528] font-bold px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#132c17]/5 via-[#4d6528]/5 to-[#a1ae1c]/5 transition-all text-base md:text-lg">
                {lang === "ar" ? "للأعمال" : "For Business"}
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/download" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#132c17] to-[#4d6528] text-white font-ibm-plex-arabic text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>{lang === "ar" ? "حمل التطبيق" : "Download App"}</span>
            </Link>

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

      {/* Hero Section ... */}
      <section className="py-12 md:py-20 bg-[#fcfdfc]">
        {/* ... Hero Content ... */}
      </section>

      {/* ... Other Sections ... */}

      {/* FOOTER */}
      <footer className="py-8 sm:py-10 md:py-12 text-center border-t border-gray-200 bg-gradient-to-b from-[#132c17] to-[#0f1c16] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Link href="/">
            <Image
              src="/images/logo_shahadd.png"
              alt="شِهد"
              width={80}
              height={28}
              className="h-6 sm:h-7 md:h-8 w-auto mx-auto mb-3 sm:mb-4 object-contain brightness-0 invert"
              quality={100}
            />
          </Link>
          <p className="text-white/80 font-federant mb-4 sm:mb-6 text-sm sm:text-base">
            {lang === "ar"
              ? "منصة تمويل مبتكرة تتيح لك الشراء الآن والدفع لاحقًا"
              : "An innovative financing platform that lets you buy now and pay later"}
          </p>
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 flex-wrap text-xs sm:text-sm">
            <Link href="/" className="text-white/80 hover:text-white transition font-oswald">{lang === "ar" ? "الرئيسية" : "Home"}</Link>
            <Link href="/faq" className="text-white/80 hover:text-white transition font-oswald">{lang === "ar" ? "اتصل بنا" : "Contact"}</Link>
            <Link href="/terms" className="text-white/80 hover:text-white transition font-oswald">{lang === "ar" ? "الشروط والأحكام" : "Terms"}</Link>
            <Link href="/faq" className="text-white/80 hover:text-white transition font-oswald">{lang === "ar" ? "الأسئلة الشائعة" : "FAQ"}</Link>
            <Link href="/business" className="text-white/80 hover:text-white transition font-oswald">{lang === "ar" ? "للأعمال" : "Business"}</Link>
          </div>

          <p className="text-white/60 text-xs sm:text-sm font-federant text-center">
            © 2025 شِهد — {lang === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
          </p>
        </div>
      </footer>
    </main>
  );
}
