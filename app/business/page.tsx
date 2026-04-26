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
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Image src="/images/logo_shahadd.png" alt="شِهد" width={100} height={35} className="h-8 md:h-10 w-auto object-contain cursor-pointer" priority />
          </Link>
          <div className="flex items-center gap-4">
             <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="text-sm font-semibold text-gray-500 hover:text-[#132c17] transition-colors">
              {lang === "ar" ? "English" : "عربي"}
            </button>
            <button className="px-5 py-2 rounded-xl bg-[#132c17] text-white text-sm font-bold hover:shadow-lg transition-all">
              {lang === "ar" ? "دخول التجار" : "Merchant Login"}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION - CLEAN & PROFESSIONAL */}
      <section className="py-12 md:py-20 bg-[#fcfdfc]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-ibm-plex-arabic font-bold leading-tight text-[#132c17]">
                {t.heroTitle[lang]}
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-federant leading-relaxed max-w-xl">
                {t.heroDesc[lang]}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-3 bg-[#132c17] text-white rounded-xl font-bold text-base hover:bg-[#1d3f22] transition-all">
                  {t.startNow[lang]}
                </button>
                <button className="px-8 py-3 border border-gray-200 text-[#132c17] rounded-xl font-bold text-base hover:bg-gray-50 transition-all">
                  {lang === "ar" ? "تواصل معنا" : "Contact Sales"}
                </button>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
               <div className="relative w-full max-w-[400px] md:max-w-[450px]">
                  <Image src="/images/97398349855.png" alt="Shahd Business" width={450} height={700} className="w-full h-auto object-contain drop-shadow-xl" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[t.stat1, t.stat2, t.stat3].map((s, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-3xl bg-gray-50 text-center">
                 <div className="text-4xl md:text-5xl font-bold text-[#132c17] mb-2">{s.n}</div>
                 <p className="text-sm text-gray-500 font-ibm-plex-arabic">{s.d[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES - SIDE BY SIDE */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           
           <div className="flex flex-col md:flex-row items-center gap-12 mb-20 md:mb-28 max-w-5xl mx-auto">
              <div className="flex-1">
                 <Image src="/images/pay.png" alt="Payment" width={400} height={400} className="w-full max-w-[300px] h-auto mx-auto object-contain" />
              </div>
              <div className="flex-1 space-y-4">
                 <h2 className="text-2xl md:text-3xl font-bold text-[#132c17]">{t.feature1Title[lang]}</h2>
                 <p className="text-gray-600 leading-relaxed text-base md:text-lg">{t.feature1Desc[lang]}</p>
              </div>
           </div>

           <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-5xl mx-auto">
              <div className="flex-1">
                 <Image src="/images/shopshahed.png" alt="Grow" width={400} height={400} className="w-full max-w-[300px] h-auto mx-auto object-contain" />
              </div>
              <div className="flex-1 space-y-4">
                 <h2 className="text-2xl md:text-3xl font-bold text-[#132c17]">{t.feature2Title[lang]}</h2>
                 <p className="text-gray-600 leading-relaxed text-base md:text-lg">{t.feature2Desc[lang]}</p>
              </div>
           </div>

        </div>
      </section>

      {/* CHANNELS */}
      <section className="py-16 bg-[#fcfdfc] border-y border-gray-50">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-12">{t.sellAnywhere[lang]}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
               <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-[#132c17]/5 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#132c17]">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                  </div>
                  <h3 className="font-bold mb-2">{lang === "ar" ? "المتجر الإلكتروني" : "E-Commerce"}</h3>
               </div>
               <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-[#132c17]/5 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#132c17]">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                  </div>
                  <h3 className="font-bold mb-2">{lang === "ar" ? "نقاط البيع" : "POS Systems"}</h3>
               </div>
               <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-[#132c17]/5 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#132c17]">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"/></svg>
                  </div>
                  <h3 className="font-bold mb-2">{lang === "ar" ? "روابط الدفع" : "Payment Links"}</h3>
               </div>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-gray-100">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <Image src="/images/logo_shahadd.png" alt="شِهد" width={100} height={35} className="h-8 w-auto object-contain" />
            <div className="flex gap-8 text-sm font-medium text-gray-500">
               <Link href="/" className="hover:text-[#132c17]">Home</Link>
               <Link href="/faq" className="hover:text-[#132c17]">FAQ</Link>
               <Link href="/terms" className="hover:text-[#132c17]">Terms</Link>
            </div>
            <p className="text-gray-400 text-xs">© ٢٠٢٥ شِهد — جميع الحقوق محفوظة</p>
         </div>
      </footer>
    </main>
  );
}
