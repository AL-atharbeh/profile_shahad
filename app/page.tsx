"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show button when scrolling down, hide when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowButton(true);
      } else if (currentScrollY < lastScrollY) {
        setShowButton(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    },
    cardTitle: {
      ar: "بطاقة شِهد",
      en: "Shahd Card"
    },
    cardHeadline: {
      ar: "قسم مشترياتك على 4 دفعات",
      en: "Split your purchases into 4 payments"
    },
    cardHeadline2: {
      ar: "في أي مكان",
      en: "Anywhere"
    },
    cardDescription: {
      ar: "بطاقة شِهد تمكنك من تقسيم مشترياتك اليومية على 4 دفعات، في أي مكان يقبل VISA بدون فوائد أو رسوم.",
      en: "The Shahd card enables you to split your daily purchases into 4 payments, anywhere Visa is accepted, without interest or fees."
    },
    learnMore: {
      ar: "اعرف أكثر",
      en: "Learn more"
    },
    businessLogin: {
      ar: "تسجيل الدخول للأعمال",
      en: "Business Login"
    },
    downloadApp: {
      ar: "حمل التطبيق",
      en: "Download App"
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
            <Link href="/how-it-works" className="text-gray-800 hover:text-gray-900 px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#132c17]/5 hover:via-[#4d6528]/5 hover:to-[#a1ae1c]/5 transition-all cursor-pointer text-base md:text-lg">
              {lang === "ar" ? "كيف يعمل" : "How It Works"}
            </Link>
            <a className="text-gray-800 hover:text-gray-900 px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#132c17]/5 hover:via-[#4d6528]/5 hover:to-[#a1ae1c]/5 transition-all cursor-pointer text-base md:text-lg">
              {lang === "ar" ? "للأعمال" : "For Business"}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Business Login Button */}
            <button className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#4d6528] text-white font-ibm-plex-arabic text-sm font-semibold hover:bg-[#5a7530] hover:shadow-lg transition-all">
              {t.businessLogin[lang]}
            </button>

            {/* Download App Button */}
            <Link href="/download" className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg border-2 border-[#4d6528] text-[#4d6528] font-ibm-plex-arabic text-sm font-semibold hover:bg-[#4d6528] hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">{t.downloadApp[lang]}</span>
            </Link>

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
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* TEXT */}
        <div className="flex-1 space-y-4 sm:space-y-6 w-full md:w-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ibm-plex-arabic leading-tight text-black text-center md:text-right">
            {t.title[lang]}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-federant text-center md:text-right mx-auto md:mx-0">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center w-full md:w-auto">
          <Image
            src="/images/97398349855.png"
            alt="شِهد"
            width={200}
            height={200}
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[200px] lg:max-w-[200px] h-auto object-contain drop-shadow-2xl"
            quality={100}
          />
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-[#f0fdf4]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-ibm-plex-arabic text-black mb-8 sm:mb-12 md:mb-16 text-center">{t.hiw[lang]}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          <div className="p-6 sm:p-8 md:p-10 border border-transparent bg-gradient-to-br from-[#132c17]/20 via-[#4d6528]/15 to-[#a1ae1c]/10 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition bg-white transform hover:-translate-y-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#132c17]/10 via-[#4d6528]/10 to-[#a1ae1c]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-ibm-plex-arabic bg-gradient-to-r from-[#132c17] via-[#4d6528] to-[#a1ae1c] bg-clip-text text-transparent">1</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-ibm-plex-arabic text-black mb-2 sm:mb-3">{t.step1[lang]}</h3>
            <p className="text-sm sm:text-base text-gray-600 font-federant leading-relaxed">{t.step1Desc[lang]}</p>
          </div>

          <div className="p-6 sm:p-8 md:p-10 border border-transparent bg-gradient-to-br from-[#132c17]/20 via-[#4d6528]/15 to-[#a1ae1c]/10 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition bg-white transform hover:-translate-y-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#132c17]/10 via-[#4d6528]/10 to-[#a1ae1c]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-ibm-plex-arabic bg-gradient-to-r from-[#132c17] via-[#4d6528] to-[#a1ae1c] bg-clip-text text-transparent">2</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-ibm-plex-arabic text-black mb-2 sm:mb-3">{t.step2[lang]}</h3>
            <p className="text-sm sm:text-base text-gray-600 font-federant leading-relaxed">{t.step2Desc[lang]}</p>
          </div>

          <div className="p-6 sm:p-8 md:p-10 border border-transparent bg-gradient-to-br from-[#132c17]/20 via-[#4d6528]/15 to-[#a1ae1c]/10 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition bg-white transform hover:-translate-y-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#132c17]/10 via-[#4d6528]/10 to-[#a1ae1c]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-ibm-plex-arabic bg-gradient-to-r from-[#132c17] via-[#4d6528] to-[#a1ae1c] bg-clip-text text-transparent">3</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-ibm-plex-arabic text-black mb-2 sm:mb-3">{t.step3[lang]}</h3>
            <p className="text-sm sm:text-base text-gray-600 font-federant leading-relaxed">{t.step3Desc[lang]}</p>
          </div>

        </div>
      </section>

      {/* CARD SECTION */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">

          {/* Phone Image */}
          <div className="flex-1 flex justify-center w-full md:w-auto">
            <Image
              src="/images/pay.png"
              alt={t.cardTitle[lang]}
              width={550}
              height={550}
              className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] h-auto object-contain drop-shadow-2xl"
              quality={100}
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-4 sm:space-y-6 w-full md:w-auto text-center md:text-right">
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-federant">
              {t.cardTitle[lang]}
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-ibm-plex-arabic text-black leading-tight">
              {t.cardHeadline[lang]}
              <br />
              {t.cardHeadline2[lang]}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-federant max-w-lg mx-auto md:mx-0">
              {t.cardDescription[lang]}
            </p>
          </div>

        </div>
      </section>

      {/* SHOPPING CARD */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#132c17] via-[#4d6528] to-[#132c17] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative">
            {/* Character Image */}
            <div className="flex-shrink-0 relative w-full md:w-auto -mt-4 md:-mt-16 -mb-4 md:-mb-16 md:-ml-12" style={{ zIndex: 10 }}>
              <img
                src="/images/shahad.png"
                alt="شِهد"
                className="object-contain drop-shadow-2xl w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto mx-auto md:mx-0"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-white flex flex-col justify-center text-center md:text-right w-full md:w-auto">
              {/* Top Text */}
              <p className="text-xs sm:text-sm md:text-base text-white/80 mb-3 sm:mb-4 font-federant">
                {lang === "ar" ? "انضم لملايين المتسوقين" : "Join millions of shoppers"}
              </p>

              {/* Main Headline */}
              <div className="mb-4 sm:mb-6">
                <div className="inline-block bg-gradient-to-r from-[#a1ae1c] to-[#eddb80] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg mb-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-ibm-plex-arabic font-bold text-[#132c17]">
                    {lang === "ar" ? "التسوّق غير" : "Shopping is Different"}
                  </h3>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-ibm-plex-arabic font-bold text-white">
                  {lang === "ar" ? "مع شِهد" : "with Shahd"}
                </h3>
              </div>

              {/* Body Text */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base md:text-lg font-federant leading-relaxed text-white/90">
                  {lang === "ar"
                    ? "لاق آلاف المتاجر عشان تقسم مشترياتك منها على أقساط مريحة"
                    : "Find thousands of stores to divide your purchases into comfortable installments"}
                </p>
                <p className="text-sm sm:text-base md:text-lg font-federant leading-relaxed text-white/90">
                  {lang === "ar"
                    ? "احصل على عروض حصرية، وتتبع دفعاتك بسهولة ومن مكان واحد"
                    : "Get exclusive offers, and track your payments easily from one place"}
                </p>
              </div>

              {/* Call to Action Box */}
              <div className="border-2 border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-white/5 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-center md:items-start md:items-center justify-between gap-4">
                  <div className="flex-1 text-center md:text-right">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-ibm-plex-arabic font-bold text-white mb-2">
                      {lang === "ar" ? "حمل التطبيق" : "Download the App"}
                    </h4>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <div className="flex text-yellow-400">
                        <span className="text-base sm:text-lg">★★★★★</span>
                      </div>
                      <span className="text-xs sm:text-sm text-white/80 font-federant">
                        {lang === "ar" ? "4.8 تقييم متجر التطبيقات" : "4.8 App Store rating"}
                      </span>
                    </div>
                  </div>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg flex items-center justify-center p-2 flex-shrink-0">
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
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-ibm-plex-arabic text-black mb-8 sm:mb-12 md:mb-16 text-center">{t.features[lang]}</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">

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
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#132c17] via-[#4d6528] to-[#a1ae1c] p-6 sm:p-8 md:p-12 lg:p-16 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-ibm-plex-arabic text-white mb-3 sm:mb-4 font-bold">{t.merchantsTitle[lang]}</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto font-federant leading-relaxed">{t.merchantsDesc[lang]}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-ibm-plex-arabic font-bold text-white mb-2">{t.merchantsFeature1[lang]}</h3>
                <p className="text-white text-xs sm:text-sm font-federant">{lang === "ar" ? "زد مبيعاتك بشكل كبير" : "Significantly increase your sales"}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-ibm-plex-arabic font-bold text-white mb-2">{t.merchantsFeature2[lang]}</h3>
                <p className="text-white text-xs sm:text-sm font-federant">{lang === "ar" ? "احصل على دفعاتك فوراً" : "Get your payments instantly"}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-ibm-plex-arabic font-bold text-white mb-2">{t.merchantsFeature3[lang]}</h3>
                <p className="text-white text-xs sm:text-sm font-federant">{lang === "ar" ? "نظام إدارة بسيط وسهل" : "Simple and easy management system"}</p>
              </div>
            </div>

            <div className="text-center">
              <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-white text-[#132c17] text-base sm:text-lg font-ibm-plex-arabic font-bold hover:bg-white/90 shadow-xl transition transform hover:scale-105">
                {t.joinNow[lang]}
              </button>
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
            className="h-6 sm:h-7 md:h-8 w-auto mx-auto mb-3 sm:mb-4 object-contain"
            quality={100}
          />
          <p className="text-white/80 font-federant mb-4 sm:mb-6 text-sm sm:text-base">
            {lang === "ar"
              ? "منصة تمويل مبتكرة تتيح لك الشراء الآن والدفع لاحقًا"
              : "An innovative financing platform that lets you buy now and pay later"}
          </p>
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 flex-wrap text-xs sm:text-sm">
            <a href="#" className="text-white/80 hover:text-white transition font-oswald">{lang === "ar" ? "عن شِهد" : "About"}</a>
            <Link href="/faq" className="text-white/80 hover:text-white transition font-oswald">{lang === "ar" ? "اتصل بنا" : "Contact"}</Link>
            <a href="#" className="text-white/80 hover:text-white transition font-oswald">{lang === "ar" ? "الشروط والأحكام" : "Terms"}</a>
            <a href="#" className="text-white/80 hover:text-white transition font-oswald">{lang === "ar" ? "الخصوصية" : "Privacy"}</a>
            <Link href="/faq" className="text-white/80 hover:text-white transition font-oswald">{lang === "ar" ? "الأسئلة الشائعة" : "FAQ"}</Link>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 sm:gap-6 mb-3 sm:mb-4">
            {/* Social Media - Left */}
            <div className="flex flex-col items-center md:items-start">
              <p className="text-white/80 font-federant mb-2 text-xs sm:text-sm">{lang === "ar" ? "تابعنا" : "Follow Us"}</p>
              <div className="flex gap-2 sm:gap-3">
                {/* LinkedIn */}
                <a href="#" className="text-white/80 hover:text-white transition transform hover:scale-110" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" className="text-white/80 hover:text-white transition transform hover:scale-110" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="text-white/80 hover:text-white transition transform hover:scale-110" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Download App - Right */}
            <div className="hidden md:flex items-center gap-2 sm:gap-3">
              <p className="text-white/80 font-federant text-xs sm:text-sm">{lang === "ar" ? "حمل التطبيق" : "Download App"}</p>
              <div className="bg-white rounded-lg p-1.5 sm:p-2 shadow-lg">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs text-gray-500">QR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-xs sm:text-sm font-federant text-center">
            © 2025 شِهد — {lang === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
          </p>
        </div>
      </footer>

      {/* Fixed Download Button for Mobile */}
      <button
        className={`md:hidden fixed bottom-0 left-0 right-0 mx-4 mb-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#132c17] to-[#4d6528] text-white text-base font-ibm-plex-arabic font-bold hover:opacity-90 shadow-2xl transition-all duration-300 z-50 flex items-center justify-center gap-2 ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
      >
        <span>{lang === "ar" ? "حمل التطبيق" : "Download App"}</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </main>
  );
}
