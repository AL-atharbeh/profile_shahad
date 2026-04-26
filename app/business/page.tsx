"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

export default function BusinessPage() {
  const [lang, setLang] = useState<Lang>("ar");

  const t = {
    heroTitle: {
      ar: "انطلق بأعمالك لأبعد مدى مع شِهد",
      en: "Take your business further with Shahd"
    },
    heroDesc: {
      ar: "تمكّن من الوصول لأفضل المتسوقين في الأردن من خلال توفير طريقة دفع مرنة أونلاين وداخل المتجر، مع استلام كامل مستحقاتك مقدمًا.",
      en: "Reach the best shoppers in Jordan by offering flexible payment options online and in-store, and get paid in full upfront."
    },
    trustedBy: {
      ar: "مُجرّب، مُختبَر وموثوق به من قبل +٥,٠٠٠ متجر",
      en: "Tried, tested and trusted by 5,000+ stores"
    },
    stat1Title: { ar: "٣٣٪+", en: "33%+" },
    stat1Desc: { ar: "زيادة في حجم سلة التسوق", en: "Increase in basket size" },
    stat2Title: { ar: "١٨٪+", en: "18%+" },
    stat2Desc: { ar: "زيادة في معدل التحويل", en: "Increase in conversion rate" },
    stat3Title: { ar: "٣١٪+", en: "31%+" },
    stat3Desc: { ar: "زيادة في الإنفاق لكل عميل", en: "Increase in customer spend" },
    sellAnywhere: { ar: "تمكن من البيع في أي مكان وفي أي وقت", en: "Sell anywhere, anytime" },
    online: { ar: "أونلاين", en: "Online" },
    onlineDesc: { ar: "مكّن عملاءك من تقسيم مشترياتهم على ٤ دفعات بدون فوائد في صفحة الدفع بمتجرك.", en: "Enable your customers to split their purchases into 4 interest-free payments on your checkout page." },
    inStore: { ar: "داخل المتجر", en: "In-Store" },
    inStoreDesc: { ar: "اقبل شِهد كطريقة للدفع في متجرك عبر أجهزة نقاط البيع لديك.", en: "Accept Shahd as a payment method in your store via your POS devices." },
    paymentLink: { ar: "في أي مكان", en: "Anywhere" },
    paymentLinkDesc: { ar: "احصل على أموالك فوريًا من خلال مشاركة رابط الدفع مع عملائك.", en: "Get paid instantly by sharing a payment link with your customers." },
    integration: { ar: "ربط ولا أسهل، مع إضافات لتسهيل أعمالك", en: "Easy integration to facilitate your business" },
    startNow: { ar: "ابدأ الآن", en: "Start Now" },
    businessLogin: { ar: "تسجيل الدخول للأعمال", en: "Business Login" },
    downloadApp: { ar: "حمل التطبيق", en: "Download App" },
  };

  return (
    <main className="bg-white text-[#0f1c16] min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
      
      {/* NAVBAR */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/images/logo_shahadd.png" alt="شِهد" width={100} height={35} className="h-8 md:h-10 w-auto object-contain cursor-pointer" priority />
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#4d6528] text-white font-ibm-plex-arabic text-sm font-semibold hover:bg-[#5a7530] transition-all">
              {t.businessLogin[lang]}
            </button>
            <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors font-ibm-plex-arabic text-sm font-medium text-gray-700">
              <span className="text-sm">{lang === "ar" ? "🇬🇧" : "🇯🇴"}</span>
              <span className="hidden sm:inline text-sm">{lang === "ar" ? "English" : "عربي"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#132c17] py-20 md:py-32">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-ibm-plex-arabic font-bold text-white mb-6 leading-tight">
              {t.heroTitle[lang]}
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-federant mb-10 leading-relaxed">
              {t.heroDesc[lang]}
            </p>
            <button className="px-8 py-4 bg-[#a1ae1c] text-[#132c17] rounded-xl font-ibm-plex-arabic font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              {t.startNow[lang]}
            </button>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-12 border-b border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 font-ibm-plex-arabic font-bold mb-8">{t.trustedBy[lang]}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            {/* Example Logos placeholders or real ones if available */}
            <h3 className="text-xl font-bold">JARIR</h3>
            <h3 className="text-xl font-bold">SHEIN</h3>
            <h3 className="text-xl font-bold">ALMOSAFER</h3>
            <h3 className="text-xl font-bold">BOUTIQAAT</h3>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-ibm-plex-arabic font-bold text-center mb-16 md:mb-24">
            {lang === "ar" ? "دفعات صغيرة تصنع أعمالاً كبيرة" : "Small payments build big business"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-3xl bg-white shadow-xl border border-gray-50 transform hover:-translate-y-2 transition-all">
              <div className="text-5xl md:text-6xl font-bold text-[#132c17] mb-4">{t.stat1Title[lang]}</div>
              <p className="text-lg md:text-xl text-gray-600 font-ibm-plex-arabic">{t.stat1Desc[lang]}</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white shadow-xl border border-gray-50 transform hover:-translate-y-2 transition-all">
              <div className="text-5xl md:text-6xl font-bold text-[#4d6528] mb-4">{t.stat2Title[lang]}</div>
              <p className="text-lg md:text-xl text-gray-600 font-ibm-plex-arabic">{t.stat2Desc[lang]}</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white shadow-xl border border-gray-50 transform hover:-translate-y-2 transition-all">
              <div className="text-5xl md:text-6xl font-bold text-[#a1ae1c] mb-4">{t.stat3Title[lang]}</div>
              <p className="text-lg md:text-xl text-gray-600 font-ibm-plex-arabic">{t.stat3Desc[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SELL ANYWHERE */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-ibm-plex-arabic font-bold text-center mb-16 underline decoration-[#a1ae1c] underline-offset-8">
            {t.sellAnywhere[lang]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-[#132c17]/10 rounded-2xl flex items-center justify-center mb-6 text-[#132c17]">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
               </div>
               <h3 className="text-2xl font-bold mb-4">{t.online[lang]}</h3>
               <p className="text-gray-600 font-federant leading-relaxed">{t.onlineDesc[lang]}</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-[#4d6528]/10 rounded-2xl flex items-center justify-center mb-6 text-[#4d6528]">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
               </div>
               <h3 className="text-2xl font-bold mb-4">{t.inStore[lang]}</h3>
               <p className="text-gray-600 font-federant leading-relaxed">{t.inStoreDesc[lang]}</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-[#a1ae1c]/10 rounded-2xl flex items-center justify-center mb-6 text-[#a1ae1c]">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
               </div>
               <h3 className="text-2xl font-bold mb-4">{t.paymentLink[lang]}</h3>
               <p className="text-gray-600 font-federant leading-relaxed">{t.paymentLinkDesc[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-ibm-plex-arabic font-bold mb-16 md:mb-24">
            {t.integration[lang]}
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 grayscale opacity-60">
             <div className="px-6 py-3 rounded-xl border border-gray-200 font-bold">Shopify</div>
             <div className="px-6 py-3 rounded-xl border border-gray-200 font-bold">Salla</div>
             <div className="px-6 py-3 rounded-xl border border-gray-200 font-bold">Zid</div>
             <div className="px-6 py-3 rounded-xl border border-gray-200 font-bold">Magento</div>
             <div className="px-6 py-3 rounded-xl border border-gray-200 font-bold">WooCommerce</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-gray-200 bg-[#132c17] text-white">
        <div className="container mx-auto px-6 text-center">
          <Link href="/">
            <Image src="/images/logo_shahadd.png" alt="شِهد" width={100} height={35} className="h-10 w-auto mx-auto mb-8 object-contain" />
          </Link>
          <div className="flex justify-center gap-8 mb-10 text-sm font-oswald text-white/70">
            <Link href="/" className="hover:text-white transition">{lang === "ar" ? "الرئيسية" : "Home"}</Link>
            <Link href="/terms" className="hover:text-white transition">{lang === "ar" ? "الشروط والأحكام" : "Terms"}</Link>
            <Link href="/faq" className="hover:text-white transition">{lang === "ar" ? "الأسئلة الشائعة" : "FAQ"}</Link>
          </div>
          <p className="text-white/50 text-xs font-federant">
            © ٢٠٢٥ شِهد — جميع الحقوق محفوظة
          </p>
        </div>
      </footer>
    </main>
  );
}
