"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

export default function FAQPage() {
  const [lang, setLang] = useState<Lang>("ar");
  const [searchQuery, setSearchQuery] = useState("");

  const t = {
    searchPlaceholder: {
      ar: "ساعدني بخصوص......",
      en: "Help me with..."
    },
    allSections: {
      ar: "كل الأقسام",
      en: "All Sections"
    },
    howItWorks: {
      ar: "طريقة عمل شِهد",
      en: "How Shahd Works"
    },
    payments: {
      ar: "المدفوعات",
      en: "Payments"
    },
    products: {
      ar: "المنتجات والخدمات",
      en: "Products and Services"
    },
    account: {
      ar: "الحساب",
      en: "Account"
    },
    orders: {
      ar: "الطلبات",
      en: "Orders"
    },
    support: {
      ar: "الدعم",
      en: "Support"
    },
    helpEmail: {
      ar: "help@shahd.com",
      en: "help@shahd.com"
    }
  };

  const categories = [
    { id: 1, title: t.howItWorks },
    { id: 2, title: t.payments },
    { id: 3, title: t.products },
    { id: 4, title: t.account },
    { id: 5, title: t.orders },
    { id: 6, title: t.support }
  ];

  return (
    <main className="bg-white text-[#0f1c16] min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* NAVBAR */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
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
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <span className="text-gray-800 px-4 py-2.5 rounded-lg text-base md:text-lg font-ibm-plex-arabic font-semibold">
              {lang === "ar" ? "الأسئلة الشائعة" : "FAQ"}
            </span>
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors font-ibm-plex-arabic text-sm font-medium text-gray-700"
            >
              <span className="text-sm">🌐</span>
              <span className="text-sm">{lang === "ar" ? "AR" : "EN"}</span>
            </button>
          </div>

        </div>
      </header>

      {/* HERO SECTION WITH SEARCH */}
      <section className="relative bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#bbf7d0] py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-2/5 z-0">
          <div className="relative w-full h-full translate-x-25 translate-y-20 md:translate-x-0 md:translate-y-0">
            <Image
              src="/images/shahad.png"
              alt="شِهد"
              fill
              className="object-contain object-right scale-50 md:scale-100"
              quality={100}
              priority
            />
          </div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-30">
          {/* Search Bar */}
          <div className="relative mb-16">
            <input
              type="text"
              placeholder={t.searchPlaceholder[lang]}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 bg-white shadow-lg text-lg font-ibm-plex-arabic focus:outline-none focus:border-[#132c17] transition-all relative z-30"
            />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none z-40">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-[#f0fdf4] to-white">
        <h2 className="text-3xl md:text-4xl font-ibm-plex-arabic text-black mb-12 text-center">
          {t.allSections[lang]}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#132c17] transition-all text-right group flex items-center justify-between"
            >
              <h3 className="text-lg font-ibm-plex-arabic text-black font-semibold">
                {category.title[lang]}
              </h3>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-[#132c17] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 font-federant">
            {t.helpEmail[lang]}
          </p>
        </div>
      </footer>

    </main>
  );
}

