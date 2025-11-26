"use client";
import { useState } from "react";
import Image from "next/image";

type Lang = "ar" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const t = {
    title: {
      ar: "قسّطها على رواق - مع شِهد",
      en: "Installment on Ease - With Shahd"
    },
    subtitle: {
      ar: "بتقدر تقسّم مشترياتك لأقساط مريحة بدون فوائد ولا رسوم تأخير. وكلّه بطريقة سهلة، سريعة، ومتوافقة مع أحكام الشريعة.",
      en: "You can split your purchases into comfortable installments without interest or late fees. All in an easy, fast, and Sharia-compliant way."
    },
    start: { ar: "ابدأ الآن", en: "Start Now" },
    merchant: { ar: "انضم كتاجر", en: "Join as Merchant" },
    hiw: { ar: "كيف تعمل شِهد؟", en: "How Shahd Works" },
    step1: {
      ar: "اختر الخدمة أو المنتج",
      en: "Choose a product or service"
    },
    step1Desc: {
      ar: "تصفّح المتاجر المتاحة واختر ما تحتاجه من منتجات أو خدمات.",
      en: "Browse available stores and select the products or services you need."
    },
    step2: {
      ar: "قدّم طلب التمويل خلال دقيقة",
      en: "Apply for financing in 1 minute"
    },
    step2Desc: {
      ar: "املأ بياناتك الأساسية وانتظر الموافقة الفورية على طلبك.",
      en: "Fill in your basic information and wait for instant approval."
    },
    step3: {
      ar: "ادفع لاحقًا عبر أقساط سهلة",
      en: "Pay later in flexible installments"
    },
    step3Desc: {
      ar: "قسّط مشترياتك على دفعات مريحة تناسب ميزانيتك.",
      en: "Split your purchases into comfortable installments that fit your budget."
    },
    features: { ar: "مميزات شِهد", en: "Shahd Features" },
    feature1: {
      ar: "موافقة فورية",
      en: "Instant Approval"
    },
    feature1Desc: {
      ar: "احصل على الموافقة خلال دقائق بدون تعقيدات.",
      en: "Get approved within minutes without complications."
    },
    feature2: {
      ar: "أقساط مرنة",
      en: "Flexible Installments"
    },
    feature2Desc: {
      ar: "اختر خطة الدفع التي تناسبك من خيارات متعددة.",
      en: "Choose the payment plan that suits you from multiple options."
    },
    feature3: {
      ar: "آمن ومضمون",
      en: "Secure & Guaranteed"
    },
    feature3Desc: {
      ar: "معاملات آمنة ومحمية بأحدث تقنيات الأمان.",
      en: "Secure transactions protected by the latest security technologies."
    },
    feature4: {
      ar: "بدون رسوم خفية",
      en: "No Hidden Fees"
    },
    feature4Desc: {
      ar: "شفافية كاملة في التكاليف والرسوم.",
      en: "Full transparency in costs and fees."
    },
    merchantsTitle: { ar: "حل شامل لأصحاب المتاجر", en: "A Complete Solution for Merchants" },
    merchantsDesc: {
      ar: "زد مبيعاتك حتى 60% عبر توفير خيار التقسيط الآمن لعملائك. انضم إلى شبكة من التجار الناجحين واستفد من نظام دفع مرن وآمن يساعدك على زيادة مبيعاتك.",
      en: "Boost your sales up to 60% by offering secure pay-later options. Join a network of successful merchants and benefit from a flexible and secure payment system that helps increase your sales."
    },
    merchantsFeature1: {
      ar: "زيادة المبيعات",
      en: "Increase Sales"
    },
    merchantsFeature2: {
      ar: "دفع فوري",
      en: "Instant Payment"
    },
    merchantsFeature3: {
      ar: "إدارة سهلة",
      en: "Easy Management"
    },
    joinNow: { ar: "انضم الآن", en: "Join Now" },
    faq: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
    faq1Q: {
      ar: "كيف يمكنني التسجيل في شِهد؟",
      en: "How can I register with Shahd?"
    },
    faq1A: {
      ar: "يمكنك التسجيل بسهولة من خلال الموقع أو التطبيق. ستحتاج فقط إلى معلوماتك الأساسية وبطاقة الهوية.",
      en: "You can register easily through the website or app. You'll only need your basic information and ID card."
    },
    faq2Q: {
      ar: "ما هي مدة الموافقة على الطلب؟",
      en: "How long does approval take?"
    },
    faq2A: {
      ar: "معظم الطلبات يتم الموافقة عليها فورًا خلال دقائق قليلة.",
      en: "Most requests are approved instantly within a few minutes."
    },
    faq3Q: {
      ar: "هل توجد رسوم إضافية؟",
      en: "Are there any additional fees?"
    },
    faq3A: {
      ar: "لا توجد رسوم خفية. جميع التكاليف واضحة ومعلنة قبل الموافقة على الطلب.",
      en: "There are no hidden fees. All costs are clear and announced before request approval."
    },
    faq4Q: {
      ar: "كيف يمكن للتاجر الانضمام؟",
      en: "How can a merchant join?"
    },
    faq4A: {
      ar: "يمكن للتجار التسجيل من خلال قسم 'للأعمال' أو الضغط على زر 'انضم كتاجر'. سنقوم بالتواصل معك لإتمام عملية التسجيل.",
      en: "Merchants can register through the 'For Business' section or by clicking 'Join as Merchant'. We'll contact you to complete the registration process."
    },
    faq5Q: {
      ar: "ما هي طرق الدفع المتاحة؟",
      en: "What payment methods are available?"
    },
    faq5A: {
      ar: "يمكنك الدفع عبر البطاقات البنكية، التحويل البنكي، أو المحافظ الإلكترونية.",
      en: "You can pay via bank cards, bank transfer, or electronic wallets."
    }
  };

  return (
    <main className="bg-white text-[#0f1c16] min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* NAVBAR */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/images/logo_shahadd.png" 
              alt="شِهد" 
              width={100} 
              height={35}
              className="h-8 md:h-10 w-auto object-contain transition-transform hover:scale-105 cursor-pointer"
              priority
              quality={100}
            />
          </div>

          {/* Menu */}
          <nav className="hidden lg:flex items-center gap-8 font-ibm-plex-arabic font-semibold">
            <a className="text-gray-800 hover:text-gray-900 px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#132c17]/5 hover:via-[#4d6528]/5 hover:to-[#a1ae1c]/5 transition-all cursor-pointer text-base md:text-lg">
              {lang === "ar" ? "الرئيسية" : "Home"}
            </a>
            <a className="text-gray-800 hover:text-gray-900 px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#132c17]/5 hover:via-[#4d6528]/5 hover:to-[#a1ae1c]/5 transition-all cursor-pointer text-base md:text-lg">
              {lang === "ar" ? "كيف يعمل" : "How It Works"}
            </a>
            <a className="text-gray-800 hover:text-gray-900 px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#132c17]/5 hover:via-[#4d6528]/5 hover:to-[#a1ae1c]/5 transition-all cursor-pointer text-base md:text-lg">
              {lang === "ar" ? "للأعمال" : "For Business"}
            </a>
            <a className="text-gray-800 hover:text-gray-900 px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#132c17]/5 hover:via-[#4d6528]/5 hover:to-[#a1ae1c]/5 transition-all cursor-pointer text-base md:text-lg">
              {lang === "ar" ? "اتصل بنا" : "Contact"}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">

            {/* Language Switch */}
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors font-ibm-plex-arabic text-sm font-medium text-gray-700"
            >
              <span className="text-sm">{lang === "ar" ? "🇬🇧" : "🇯🇴"}</span>
              <span className="hidden sm:inline text-sm">{lang === "ar" ? "English" : "عربي"}</span>
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">

        {/* TEXT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-ibm-plex-arabic leading-tight text-black">
            {t.title[lang]}
          </h1>

          <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-federant">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center relative">
          <div className="absolute w-96 h-96 bg-gradient-to-br from-[#132c17]/10 via-[#4d6528]/10 to-[#a1ae1c]/10 rounded-full blur-3xl"></div>
          <div className="relative w-[430px] h-[400px] flex items-center justify-center">
            <Image 
              src="/images/shahad.png" 
              alt="شِهد" 
              width={400} 
              height={400}
              className="w-full h-full object-contain drop-shadow-2xl"
              quality={100}
            />
          </div>
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="container mx-auto px-6 py-24 bg-gradient-to-b from-white to-[#f0fdf4]">
        <h2 className="text-4xl md:text-5xl font-ibm-plex-arabic text-black mb-16 text-center">{t.hiw[lang]}</h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-10 border border-transparent bg-gradient-to-br from-[#132c17]/20 via-[#4d6528]/15 to-[#a1ae1c]/10 rounded-3xl shadow-sm hover:shadow-xl transition bg-white transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17]/10 via-[#4d6528]/10 to-[#a1ae1c]/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-ibm-plex-arabic bg-gradient-to-r from-[#132c17] via-[#4d6528] to-[#a1ae1c] bg-clip-text text-transparent">1</span>
            </div>
            <h3 className="text-2xl font-ibm-plex-arabic text-black mb-3">{t.step1[lang]}</h3>
            <p className="text-gray-600 font-federant leading-relaxed">{t.step1Desc[lang]}</p>
          </div>

          <div className="p-10 border border-transparent bg-gradient-to-br from-[#132c17]/20 via-[#4d6528]/15 to-[#a1ae1c]/10 rounded-3xl shadow-sm hover:shadow-xl transition bg-white transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17]/10 via-[#4d6528]/10 to-[#a1ae1c]/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-ibm-plex-arabic bg-gradient-to-r from-[#132c17] via-[#4d6528] to-[#a1ae1c] bg-clip-text text-transparent">2</span>
            </div>
            <h3 className="text-2xl font-ibm-plex-arabic text-black mb-3">{t.step2[lang]}</h3>
            <p className="text-gray-600 font-federant leading-relaxed">{t.step2Desc[lang]}</p>
          </div>

          <div className="p-10 border border-transparent bg-gradient-to-br from-[#132c17]/20 via-[#4d6528]/15 to-[#a1ae1c]/10 rounded-3xl shadow-sm hover:shadow-xl transition bg-white transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#132c17]/10 via-[#4d6528]/10 to-[#a1ae1c]/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-ibm-plex-arabic bg-gradient-to-r from-[#132c17] via-[#4d6528] to-[#a1ae1c] bg-clip-text text-transparent">3</span>
            </div>
            <h3 className="text-2xl font-ibm-plex-arabic text-black mb-3">{t.step3[lang]}</h3>
            <p className="text-gray-600 font-federant leading-relaxed">{t.step3Desc[lang]}</p>
          </div>

        </div>
      </section>

      {/* SHOPPING CARD */}
      <section className="container mx-auto px-6 py-12">
        <div className="rounded-3xl bg-gradient-to-br from-[#132c17] via-[#4d6528] to-[#132c17] p-8 md:p-12 shadow-2xl relative overflow-visible">
          <div className="flex flex-col md:flex-row items-center gap-8 relative">
            {/* Character Image */}
            <div className="flex-shrink-0 relative -mt-8 md:-mt-16 -mb-8 md:-mb-16 md:-ml-12" style={{ zIndex: 10 }}>
              <img 
                src="/images/shahad.png" 
                alt="شِهد" 
                className="object-contain drop-shadow-2xl"
                style={{ 
                  width: '500px',
                  height: 'auto',
                  minWidth: '450px'
                }}
              />
            </div>
            
            {/* Text Content */}
            <div className="flex-1 text-white flex flex-col justify-center">
              {/* Top Text */}
              <p className="text-sm md:text-base text-white/80 mb-4 font-federant">
                {lang === "ar" ? "انضم لملايين المتسوقين" : "Join millions of shoppers"}
              </p>
              
              {/* Main Headline */}
              <div className="mb-6">
                <div className="inline-block bg-gradient-to-r from-[#a1ae1c] to-[#eddb80] px-4 py-2 rounded-lg mb-2">
                  <h3 className="text-xl md:text-2xl font-ibm-plex-arabic font-bold text-[#132c17]">
                    {lang === "ar" ? "التسوّق غير" : "Shopping is Different"}
                  </h3>
                </div>
                <h3 className="text-2xl md:text-3xl font-ibm-plex-arabic font-bold text-white">
                  {lang === "ar" ? "مع شِهد" : "with Shahd"}
                </h3>
              </div>
              
              {/* Body Text */}
              <div className="space-y-3 mb-8">
                <p className="text-base md:text-lg font-federant leading-relaxed text-white/90">
                  {lang === "ar" 
                    ? "لاق آلاف المتاجر عشان تقسم مشترياتك منها على أقساط مريحة"
                    : "Find thousands of stores to divide your purchases into comfortable installments"}
                </p>
                <p className="text-base md:text-lg font-federant leading-relaxed text-white/90">
                  {lang === "ar" 
                    ? "احصل على عروض حصرية، وتتبع دفعاتك بسهولة ومن مكان واحد"
                    : "Get exclusive offers, and track your payments easily from one place"}
                </p>
              </div>
              
              {/* Call to Action Box */}
              <div className="border-2 border-white/30 rounded-2xl p-6 bg-white/5 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-ibm-plex-arabic font-bold text-white mb-2">
                      {lang === "ar" ? "حمل التطبيق" : "Download the App"}
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        <span className="text-lg">★★★★★</span>
                      </div>
                      <span className="text-sm text-white/80 font-federant">
                        {lang === "ar" ? "4.8 تقييم متجر التطبيقات" : "4.8 App Store rating"}
                      </span>
                    </div>
                  </div>
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-2">
                    <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                      QR
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-ibm-plex-arabic text-black mb-16 text-center">{t.features[lang]}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <div className="flex flex-col">
            <div className="relative rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden aspect-[4/5] mb-3">
              <Image 
                src="/images/shahad.png" 
                alt={t.feature1[lang]}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-ibm-plex-arabic text-black mb-1.5 text-center">{t.feature1[lang]}</h3>
            <p className="text-gray-600 font-federant text-xs text-center">{t.feature1Desc[lang]}</p>
          </div>

          <div className="flex flex-col">
            <div className="relative rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden aspect-[4/5] mb-3">
              <Image 
                src="/images/shahad.png" 
                alt={t.feature2[lang]}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-ibm-plex-arabic text-black mb-1.5 text-center">{t.feature2[lang]}</h3>
            <p className="text-gray-600 font-federant text-xs text-center">{t.feature2Desc[lang]}</p>
          </div>

          <div className="flex flex-col">
            <div className="relative rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden aspect-[4/5] mb-3">
              <Image 
                src="/images/shahad.png" 
                alt={t.feature3[lang]}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-ibm-plex-arabic text-black mb-1.5 text-center">{t.feature3[lang]}</h3>
            <p className="text-gray-600 font-federant text-xs text-center">{t.feature3Desc[lang]}</p>
          </div>

          <div className="flex flex-col">
            <div className="relative rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden aspect-[4/5] mb-3">
              <Image 
                src="/images/shahad.png" 
                alt={t.feature4[lang]}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-ibm-plex-arabic text-black mb-1.5 text-center">{t.feature4[lang]}</h3>
            <p className="text-gray-600 font-federant text-xs text-center">{t.feature4Desc[lang]}</p>
          </div>

        </div>
      </section>

      {/* MERCHANTS */}
      <section className="container mx-auto px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-br from-[#132c17] via-[#4d6528] to-[#a1ae1c] p-8 md:p-12 lg:p-16 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-ibm-plex-arabic text-white mb-4">{t.merchantsTitle[lang]}</h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-federant leading-relaxed">{t.merchantsDesc[lang]}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-ibm-plex-arabic font-bold text-white mb-2">{t.merchantsFeature1[lang]}</h3>
                <p className="text-white/80 text-sm font-federant">{lang === "ar" ? "زد مبيعاتك بشكل كبير" : "Significantly increase your sales"}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-ibm-plex-arabic font-bold text-white mb-2">{t.merchantsFeature2[lang]}</h3>
                <p className="text-white/80 text-sm font-federant">{lang === "ar" ? "احصل على دفعاتك فوراً" : "Get your payments instantly"}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-ibm-plex-arabic font-bold text-white mb-2">{t.merchantsFeature3[lang]}</h3>
                <p className="text-white/80 text-sm font-federant">{lang === "ar" ? "نظام إدارة بسيط وسهل" : "Simple and easy management system"}</p>
              </div>
            </div>

            <div className="text-center">
              <button className="px-10 py-4 rounded-full bg-white text-[#132c17] text-lg font-ibm-plex-arabic font-bold hover:bg-white/90 shadow-xl transition transform hover:scale-105">
                {t.joinNow[lang]}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-24 bg-gradient-to-b from-[#f0fdf4] to-white">
        <h2 className="text-4xl md:text-5xl font-ibm-plex-arabic text-black mb-16 text-center">{t.faq[lang]}</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: t.faq1Q, a: t.faq1A },
            { q: t.faq2Q, a: t.faq2A },
            { q: t.faq3Q, a: t.faq3A },
            { q: t.faq4Q, a: t.faq4A },
            { q: t.faq5Q, a: t.faq5A }
          ].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-right hover:bg-gray-50 transition"
              >
                <span className="font-ibm-plex-arabic text-lg text-black flex-1">{item.q[lang]}</span>
                <span className="text-2xl bg-gradient-to-r from-[#132c17] via-[#4d6528] to-[#a1ae1c] bg-clip-text text-transparent transform transition-transform" style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  {lang === "ar" ? "▼" : "▼"}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 font-federant leading-relaxed">{item.a[lang]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6">
          <Image 
            src="/images/logo_shahadd.png" 
            alt="شِهد" 
            width={80} 
            height={28}
            className="h-7 md:h-8 w-auto mx-auto mb-4 object-contain"
            quality={100}
          />
          <p className="text-gray-600 font-federant mb-6">
            {lang === "ar" 
              ? "منصة تمويل مبتكرة تتيح لك الشراء الآن والدفع لاحقًا" 
              : "An innovative financing platform that lets you buy now and pay later"}
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-600 hover:bg-gradient-to-r hover:from-[#132c17] hover:via-[#4d6528] hover:to-[#a1ae1c] hover:bg-clip-text hover:text-transparent transition font-oswald">{lang === "ar" ? "عن شِهد" : "About"}</a>
            <a href="#" className="text-gray-600 hover:bg-gradient-to-r hover:from-[#132c17] hover:via-[#4d6528] hover:to-[#a1ae1c] hover:bg-clip-text hover:text-transparent transition font-oswald">{lang === "ar" ? "اتصل بنا" : "Contact"}</a>
            <a href="#" className="text-gray-600 hover:bg-gradient-to-r hover:from-[#132c17] hover:via-[#4d6528] hover:to-[#a1ae1c] hover:bg-clip-text hover:text-transparent transition font-oswald">{lang === "ar" ? "الشروط والأحكام" : "Terms"}</a>
            <a href="#" className="text-gray-600 hover:bg-gradient-to-r hover:from-[#132c17] hover:via-[#4d6528] hover:to-[#a1ae1c] hover:bg-clip-text hover:text-transparent transition font-oswald">{lang === "ar" ? "الخصوصية" : "Privacy"}</a>
          </div>
          <p className="text-gray-500 text-sm font-federant">
            © 2025 شِهد — {lang === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
          </p>
        </div>
      </footer>

    </main>
  );
}
