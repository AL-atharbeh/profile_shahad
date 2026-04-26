"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

export default function TermsPage() {
  const [lang, setLang] = useState<Lang>("ar");

  const t = {
    title: { ar: "الشروط والأحكام", en: "Terms and Conditions" },
    lastUpdated: { ar: "آخر تحديث: ٢٦ أبريل ٢٠٢٥", en: "Last Updated: April 26, 2025" },
    businessLogin: { ar: "تسجيل الدخول للأعمال", en: "Business Login" },
    downloadApp: { ar: "حمل التطبيق", en: "Download App" },
  };

  const sections = [
    {
      title: { ar: "١. مقدمة", en: "1. Introduction" },
      content: {
        ar: "مرحباً بكم في منصة شِهد. من خلال استخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل البدء في استخدام المنصة.",
        en: "Welcome to Shahd. By using our services, you agree to be bound by these terms and conditions. Please read them carefully before using the platform."
      }
    },
    {
      title: { ar: "٢. الأهلية", en: "2. Eligibility" },
      content: {
        ar: "لاستخدام شِهد، يجب أن تكون مقيماً في الأردن، وأن تبلغ من العمر ١٨ عاماً على الأقل، وأن تمتلك هوية شخصية سارية المفعول وحساب بنكي نشط.",
        en: "To use Shahd, you must be a resident of Jordan, at least 18 years old, and possess a valid national ID and an active bank account."
      }
    },
    {
      title: { ar: "٣. آلية الدفع والتقسيط", en: "3. Payment and Installments" },
      content: {
        ar: "تتيح لك شِهد تقسيم مشترياتك إلى أقساط شهرية مريحة. يتم سحب القسط الأول عند الشراء، وتُسحب الأقساط المتبقية تلقائياً من بطاقتك المسجلة في نفس التاريخ من كل شهر.",
        en: "Shahd allows you to split your purchases into comfortable monthly installments. The first installment is processed at purchase, and remaining installments are automatically debited from your registered card on the same date each month."
      }
    },
    {
      title: { ar: "٤. الرسوم والمتأخرات", en: "4. Fees and Late Payments" },
      content: {
        ar: "نحن في شِهد نؤمن بالشفافية الكاملة. لا توجد رسوم خفية، ولكن قد يتم تطبيق رسوم تأخير بسيطة في حال فشل سداد القسط في موعده المحدد وبعد منحك فترة سماح كافية.",
        en: "We believe in full transparency. There are no hidden fees, but a small late fee may apply if an installment is not paid on its due date after a sufficient grace period."
      }
    },
    {
      title: { ar: "٥. الخصوصية وأمن البيانات", en: "5. Privacy and Data Security" },
      content: {
        ar: "نحن نلتزم بحماية بياناتك الشخصية والمالية باستخدام أحدث تقنيات التشفير. لن نقوم بمشاركة بياناتك مع أي طرف ثالث إلا بموافقتك الصريحة أو وفقاً للقوانين المعمول بها.",
        en: "We are committed to protecting your personal and financial data using the latest encryption technologies. We will not share your data with any third party except with your explicit consent or as required by law."
      }
    },
    {
      title: { ar: "٦. إنهاء الحساب", en: "6. Account Termination" },
      content: {
        ar: "يحق لك إغلاق حسابك في أي وقت بشرط سداد جميع المبالغ المستحقة عليك للمنصة.",
        en: "You have the right to close your account at any time provided that all outstanding amounts due to the platform are paid."
      }
    }
  ];

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
            <Link href="/download" className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg border-2 border-[#4d6528] text-[#4d6528] font-ibm-plex-arabic text-sm font-semibold hover:bg-[#4d6528] hover:text-white transition-all">
              <span className="hidden sm:inline">{t.downloadApp[lang]}</span>
            </Link>
            <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors font-ibm-plex-arabic text-sm font-medium text-gray-700">
              <span className="text-sm">{lang === "ar" ? "🇬🇧" : "🇯🇴"}</span>
              <span className="hidden sm:inline text-sm">{lang === "ar" ? "English" : "عربي"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#132c17] via-[#4d6528] to-[#a1ae1c] py-16 md:py-24 px-6 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-ibm-plex-arabic font-bold mb-4">{t.title[lang]}</h1>
          <p className="text-white/80 font-federant">{t.lastUpdated[lang]}</p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl md:text-2xl font-ibm-plex-arabic font-bold text-[#132c17] mb-4">
                {section.title[lang]}
              </h2>
              <p className="text-gray-700 font-federant leading-relaxed text-base md:text-lg">
                {section.content[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-gray-200 bg-gradient-to-b from-[#132c17] to-[#0f1c16] text-white text-center">
        <div className="container mx-auto px-6">
          <Link href="/">
            <Image src="/images/logo_shahadd.png" alt="شِهد" width={80} height={28} className="h-8 w-auto mx-auto mb-6 object-contain opacity-90" />
          </Link>
          <div className="flex justify-center gap-6 mb-8 text-sm font-oswald text-white/70">
            <Link href="/" className="hover:text-white transition">{lang === "ar" ? "الرئيسية" : "Home"}</Link>
            <Link href="/faq" className="hover:text-white transition">{lang === "ar" ? "الأسئلة الشائعة" : "FAQ"}</Link>
          </div>
          <p className="text-white/60 text-xs font-federant">
            © 2025 شِهد — {lang === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
          </p>
        </div>
      </footer>
    </main>
  );
}
