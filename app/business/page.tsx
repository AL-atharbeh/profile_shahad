"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

export default function BusinessPage() {
  const [lang, setLang] = useState<Lang>("ar");

  const t = {
    heroTitle: {
      ar: "مستقبل الأعمال يبدأ مع شِهد",
      en: "The Future of Business Starts with Shahd"
    },
    heroDesc: {
      ar: "كُن شريكاً في الانطلاقة الكبرى. نحن نبني عصراً جديداً من القوة الشرائية في الأردن. انضم إلينا اليوم وغير مفاهيم البيع في متجرك.",
      en: "Be a partner in the grand launch. We are building a new era of purchasing power in Jordan. Join us today and transform your sales concepts."
    },
    benefit1Title: { ar: "نمو يفوق التوقعات", en: "Growth Beyond Expectations" },
    benefit1Desc: { ar: "حوّل كل زيارة إلى عملية بيع ناجحة. أدواتنا مصممة بدقة لزيادة معدل التحويل وجذب عملاء جدد يبحثون عن المرونة.", en: "Turn every visit into a successful sale. Our tools are precisely designed to increase conversion rates and attract new customers looking for flexibility." },
    benefit2Title: { ar: "سيولة فورية، أمان تام", en: "Instant Liquidity, Total Security" },
    benefit2Desc: { ar: "استلم أموالك فور إتمام البيع. شِهد تتحمل كامل مسؤلية المخاطر والتحصيل، مما يتيح لك التركيز فقط على توسيع نشاطك.", en: "Receive your money immediately upon sale. Shahd takes full responsibility for risk and collection, allowing you to focus solely on expanding your business." },
    startNow: { ar: "كن شريكاً مؤسساً", en: "Become a Founding Partner" },
  };

  return (
    <main className="bg-[#0a110b] text-white min-h-screen font-ibm-plex-arabic overflow-hidden" dir={lang === "ar" ? "rtl" : "ltr"}>
      
      {/* GLOWING BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#132c17] rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#4d6528] rounded-full blur-[180px] opacity-20"></div>
        <div className="absolute top-[30%] left-[20%] w-[200px] h-[200px] bg-[#a1ae1c] rounded-full blur-[120px] opacity-10"></div>
      </div>

      {/* NAVBAR */}
      <header className="w-full bg-black/20 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/">
            <Image src="/images/logo_shahadd.png" alt="شِهد" width={110} height={40} className="h-10 w-auto object-contain brightness-0 invert" priority />
          </Link>
          <div className="flex items-center gap-6">
            <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              {lang === "ar" ? "English" : "عربي"}
            </button>
            <Link href="/" className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-bold hover:bg-white/10 transition-all">
              {lang === "ar" ? "تسجيل دخول" : "Login"}
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION - UNREAL / DREAMY */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
          <div className="flex-1 text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a1ae1c]/30 bg-[#a1ae1c]/5 text-[#a1ae1c] text-xs font-bold mb-8 animate-pulse">
               <span className="w-2 h-2 bg-[#a1ae1c] rounded-full"></span>
               {lang === "ar" ? "فرصة حصرية للانضمام" : "Exclusive Partnership Opportunity"}
            </div>
            <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              {t.heroTitle[lang]}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-federant leading-relaxed mb-12 max-w-2xl">
              {t.heroDesc[lang]}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-[#a1ae1c] text-[#132c17] rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(161,174,28,0.4)] transition-all transform hover:-translate-y-1">
                {t.startNow[lang]}
              </button>
              <button className="px-10 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-bold text-lg hover:bg-white/10 transition-all">
                {lang === "ar" ? "تواصل معنا" : "Contact Us"}
              </button>
            </div>
          </div>
          <div className="flex-1 relative mt-20 md:mt-0 flex justify-center">
             <div className="relative w-full max-w-[500px] animate-[float_6s_ease-in-out_infinite]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#132c17] to-transparent rounded-full blur-3xl opacity-50"></div>
                <Image src="/images/97398349855.png" alt="Shahd" width={600} height={1000} className="relative z-10 w-full h-auto drop-shadow-[0_0_50px_rgba(19,44,23,0.5)]" />
             </div>
          </div>
        </div>
      </section>

      {/* STATS GLASS GRID */}
      <section className="py-20 bg-white/5 border-y border-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl md:text-8xl font-bold text-[#a1ae1c] mb-2">33%+</div>
              <p className="text-white/40 uppercase tracking-widest text-sm font-bold">Basket Size Growth</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-bold text-white mb-2">18%+</div>
              <p className="text-white/40 uppercase tracking-widest text-sm font-bold">Conversion Rate</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-bold text-[#4d6528] mb-2">31%+</div>
              <p className="text-white/40 uppercase tracking-widest text-sm font-bold">Customer Loyalty</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTIONS - CINEMATIC */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-6">
          
          <div className="flex flex-col md:flex-row items-center gap-20 mb-40">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{t.benefit1Title[lang]}</h2>
              <p className="text-xl text-white/50 leading-relaxed font-federant mb-10">{t.benefit1Desc[lang]}</p>
              <div className="h-1 w-32 bg-gradient-to-r from-[#a1ae1c] to-transparent rounded-full"></div>
            </div>
            <div className="flex-1 order-1 md:order-2 group">
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <Image src="/images/pic1.png" alt="Feature" width={800} height={1000} className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-20">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{t.benefit2Title[lang]}</h2>
              <p className="text-xl text-white/50 leading-relaxed font-federant mb-10">{t.benefit2Desc[lang]}</p>
              <div className="h-1 w-32 bg-gradient-to-r from-[#4d6528] to-transparent rounded-full"></div>
            </div>
            <div className="flex-1 group">
               <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <Image src="/images/shopshahed.png" alt="Payment" width={800} height={1000} className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#132c17]/30 blur-[100px] rounded-full scale-150 translate-y-1/2"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold mb-12">{lang === "ar" ? "مستقبلك يبدأ هنا" : "Your Future Starts Here"}</h2>
          <button className="px-16 py-6 bg-white text-black rounded-full font-bold text-2xl hover:bg-[#a1ae1c] hover:text-[#132c17] transition-all transform hover:scale-110 shadow-[0_0_60px_rgba(255,255,255,0.2)]">
            {lang === "ar" ? "سجل اهتمامك الآن" : "Register Your Interest Now"}
          </button>
        </div>
      </section>

      {/* FOOTER - MINIMALIST */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
           <Image src="/images/logo_shahadd.png" alt="شِهد" width={100} height={35} className="h-8 w-auto brightness-0 invert" />
           <div className="flex gap-10 text-white/40 text-sm font-bold uppercase tracking-widest">
              <Link href="/">Home</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/terms">Privacy</Link>
           </div>
           <p className="text-white/20 text-xs">© 2025 SHAHD INC. THE NEW ERA.</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </main>
  );
}
