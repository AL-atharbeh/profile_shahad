"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

export default function BusinessPage() {
  const [lang, setLang] = useState<Lang>("ar");

  const t = {
    heroTitle: {
      ar: "كُن شريكاً في قصة نجاح شِهد",
      en: "Be a Partner in Shahd's Success Story"
    },
    heroDesc: {
      ar: "نحن في مرحلة الانطلاق، وندعوك لتكون من أوائل التجار الذين يقدمون تجربة دفع مرنة ومبتكرة لعملائهم في الأردن. زِد مبيعاتك واستلم مستحقاتك فوراً.",
      en: "We are in the launch phase, and we invite you to be among the first merchants to offer a flexible and innovative payment experience to their customers in Jordan."
    },
    benefit1Title: { ar: "حول المتصفحين إلى متسوقين", en: "Turn Browsers into Shoppers" },
    benefit1Desc: { ar: "أزل عقبة التسعير وزِد معدلات التحويل في متجرك من خلال خيارات تقسيط سهلة وشفافة.", en: "Remove price barriers and increase conversion rates in your store through easy and transparent installment options." },
    benefit2Title: { ar: "استلم مستحقاتك كاملة ومقدماً", en: "Get Paid in Full Upfront" },
    benefit2Desc: { ar: "نحن نتحمل جميع مخاطر الائتمان. ستحصل على مبلغ البيع بالكامل فوراً، بينما يقسط العميل دفعاته لنا.", en: "We take all credit risks. You get the full sale amount immediately, while the customer pays us in installments." },
    stat1Title: { ar: "٣٣٪+", en: "33%+" },
    stat1Desc: { ar: "زيادة متوقعة في حجم السلة", en: "Expected increase in basket size" },
    stat2Title: { ar: "١٨٪+", en: "18%+" },
    stat2Desc: { ar: "زيادة في معدل التحويل", en: "Increase in conversion rate" },
    sellAnywhere: { ar: "حل واحد لكل قنوات البيع الخاصة بك", en: "One Solution for All Your Sales Channels" },
    startNow: { ar: "كن أول المنضمين", en: "Be First to Join" },
    businessLogin: { ar: "تسجيل الدخول للأعمال", en: "Business Login" },
  };

  return (
    <main className="bg-white text-[#0f1c16] min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
      
      {/* NAVBAR */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Image src="/images/logo_shahadd.png" alt="شِهد" width={100} height={35} className="h-8 md:h-10 w-auto object-contain cursor-pointer" priority />
          </Link>
          <div className="flex items-center gap-3">
             <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="px-3 py-1.5 rounded-lg bg-gray-50 text-sm font-medium">
              {lang === "ar" ? "English" : "عربي"}
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#132c17] text-white text-sm font-bold shadow-md hover:bg-[#1d3f22] transition-all">
              {t.businessLogin[lang]}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION - MODERN & CLEAN */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#f8faf7] via-white to-[#f0fdf4] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-right md:text-right">
            <div className="inline-block px-4 py-1.5 bg-[#a1ae1c]/10 text-[#4d6528] rounded-full text-sm font-bold mb-6">
               {lang === "ar" ? "انطلاقتنا قريباً 🚀" : "Launch Phase 🚀"}
            </div>
            <h1 className="text-4xl md:text-6xl font-ibm-plex-arabic font-bold text-[#132c17] leading-tight mb-6">
              {t.heroTitle[lang]}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-federant mb-10 max-w-2xl">
              {t.heroDesc[lang]}
            </p>
            <button className="px-10 py-4 bg-[#132c17] text-white rounded-2xl font-ibm-plex-arabic font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
              {t.startNow[lang]}
            </button>
          </div>
          <div className="flex-1 relative w-full max-w-[450px] md:max-w-[550px]">
             <div className="absolute -inset-4 bg-gradient-to-r from-[#132c17]/10 to-[#a1ae1c]/10 blur-3xl rounded-full"></div>
             <Image 
               src="/images/97398349855.png" 
               alt="Shahd Partner" 
               width={500} 
               height={800} 
               className="relative z-10 w-full h-auto drop-shadow-2xl object-contain"
             />
          </div>
        </div>
      </section>

      {/* GROWTH SECTION - ALTERNATING WITH EXISTING PICS */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-24 md:mb-32">
            <div className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[450px]">
               <Image src="/images/pic1.png" alt="Growth" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-ibm-plex-arabic font-bold text-[#132c17] mb-6">{t.benefit1Title[lang]}</h2>
              <p className="text-lg text-gray-600 font-federant leading-relaxed mb-8">{t.benefit1Desc[lang]}</p>
              <div className="flex gap-4 items-center">
                 <div className="text-4xl font-bold text-[#132c17]">{t.stat1Title[lang]}</div>
                 <div className="text-sm text-gray-400 font-ibm-plex-arabic">{t.stat1Desc[lang]}</div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
            <div className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[450px]">
               <Image src="/images/shopshahed.png" alt="Payment" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-ibm-plex-arabic font-bold text-[#4d6528] mb-6">{t.benefit2Title[lang]}</h2>
              <p className="text-lg text-gray-600 font-federant leading-relaxed mb-8">{t.benefit2Desc[lang]}</p>
              <div className="flex gap-4 items-center">
                 <div className="text-4xl font-bold text-[#4d6528]">{t.stat2Title[lang]}</div>
                 <div className="text-sm text-gray-400 font-ibm-plex-arabic">{t.stat2Desc[lang]}</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CHANNELS SECTION */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-ibm-plex-arabic font-bold mb-16">{t.sellAnywhere[lang]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 rounded-[2rem] bg-white shadow-lg">
                <div className="w-16 h-16 bg-[#132c17]/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8 text-[#132c17]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{lang === "ar" ? "المتجر الإلكتروني" : "E-Commerce"}</h3>
                <p className="text-gray-500 font-federant">ربط سلس ومباشر مع منصات الشراء بضغطة زر واحدة.</p>
             </div>
             <div className="p-8 rounded-[2rem] bg-white shadow-lg">
                <div className="w-16 h-16 bg-[#4d6528]/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8 text-[#4d6528]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{lang === "ar" ? "نقاط البيع" : "POS Systems"}</h3>
                <p className="text-gray-500 font-federant">قدم الخدمة لعملائك داخل متجرك الفعلي بكل سهولة وسرعة.</p>
             </div>
             <div className="p-8 rounded-[2rem] bg-white shadow-lg">
                <div className="w-16 h-16 bg-[#a1ae1c]/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8 text-[#a1ae1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{lang === "ar" ? "روابط الدفع" : "Payment Links"}</h3>
                <p className="text-gray-500 font-federant">شارك روابط الدفع عبر تطبيقات المراسلة واستقبل مدفوعاتك فوراً.</p>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-[#132c17] text-white">
        <div className="container mx-auto px-6 text-center">
           <Image src="/images/logo_shahadd.png" alt="شِهد" width={100} height={35} className="h-10 w-auto mx-auto mb-8 object-contain brightness-0 invert" />
           <p className="text-white/60 mb-10 font-federant">شِهد — شريكك الأمثل في النمو والابتكار.</p>
           <div className="flex flex-wrap justify-center gap-6 font-oswald text-sm text-white/80">
              <Link href="/">الرئيسية</Link>
              <Link href="/faq">الأسئلة الشائعة</Link>
              <Link href="/terms">الشروط والأحكام</Link>
           </div>
        </div>
      </footer>
    </main>
  );
}
