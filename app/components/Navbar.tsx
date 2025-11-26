"use client";

import { useState } from "react";

export default function Navbar({ lang, setLang }) {
    return (
        <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* Menu (Right Side in Arabic) */}
                <div className="flex items-center gap-6 font-semibold text-[#0f2c20]">
                    <a href="#" className="hover:text-[#1DB954] transition">
                        {lang === "ar" ? "السوق" : "Market"}
                    </a>

                    <a href="#" className="hover:text-[#1DB954] transition">
                        {lang === "ar" ? "طرق الدفع" : "Payment Methods"}
                    </a>

                    <a href="#" className="hover:text-[#1DB954] transition">
                        {lang === "ar" ? "للأعمال" : "For Business"}
                    </a>
                </div>

                {/* Logo */}
                <div className="text-3xl font-black text-[#1DB954] tracking-tight">
                    Shahd
                </div>

                {/* Right Side buttons */}
                <div className="flex items-center gap-3">

                    {/* Language Switcher */}
                    <button
                        onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                        className="flex items-center gap-2 bg-white border px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition"
                    >
                        <img
                            src={lang === "ar" ? "/uk.png" : "/jordan.png"}
                            className="w-5 h-4 rounded-sm"
                        />
                        {lang === "ar" ? "English" : "عربي"}
                    </button>

                    {/* Country (Jordan Only for Now) */}
                    <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition">
                        <img src="/jordan.png" className="w-6 h-4 rounded-sm" />
                        <span className="font-semibold">{lang === "ar" ? "الأردن" : "Jordan"}</span>
                    </button>

                    {/* Login */}
                    <a
                        href="#"
                        className="font-semibold hover:text-[#1DB954] transition"
                    >
                        {lang === "ar" ? "تسجيل الدخول للأعمال" : "Business Login"}
                    </a>

                </div>
            </div>
        </nav>
    );
}
