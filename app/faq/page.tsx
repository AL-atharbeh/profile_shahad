"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "ar" | "en";

interface Category {
  id: number;
  icon: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  faqs: FAQ[];
}

interface FAQ {
  question: { ar: string; en: string };
  answer: { ar: string; en: string };
}

const getIcon = (iconName: string) => {
  const iconClass = "w-full h-full";
  const strokeWidth = 2;

  switch (iconName) {
    case "rocket":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "package":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    case "credit-card":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      );
    case "x-circle":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "clock":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "settings":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "dollar":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "shield":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "help":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function FAQPage() {
  const [lang, setLang] = useState<Lang>("ar");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const t = {
    searchPlaceholder: {
      ar: "ساعدني بخصوص......",
      en: "Help me with..."
    },
    allSections: {
      ar: "كل الأقسام",
      en: "All Sections"
    },
    helpEmail: {
      ar: "help@shahd.com",
      en: "help@shahd.com"
    },
    backToCategories: {
      ar: "العودة للأقسام",
      en: "Back to Categories"
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

  const categories: Category[] = [
    {
      id: 1,
      icon: "rocket",
      title: {
        ar: "كيفية البدء",
        en: "Getting Started"
      },
      description: {
        ar: "كل ما تحتاج معرفته قبل أول عملية شراء مع شِهد",
        en: "Everything you need to know before your first purchase with Shahd"
      },
      faqs: [
        {
          question: { ar: "كيف أسجل في شِهد؟", en: "How do I register with Shahd?" },
          answer: { ar: "التسجيل سهل جداً:<ul><li>حمّل التطبيق من متجر التطبيقات</li><li>افتحه وادخل رقم جوالك</li><li>راح يوصلك كود تأكيد، دخّله</li><li>خلاص صرت جاهز للتسوق!</li></ul>كل العملية ما تاخذ أكثر من دقيقتين.", en: "Registration is very easy:<ul><li>Download the app from the app store</li><li>Open it and enter your mobile number</li><li>You'll receive a confirmation code, enter it</li><li>You're ready to shop!</li></ul>The whole process takes no more than two minutes." }
        },
        {
          question: { ar: "هل التسجيل مجاني؟", en: "Is registration free?" },
          answer: { ar: "أيوه، التسجيل مجاني 100%:<ul><li>ما فيه أي رسوم خفية</li><li>تقدر تسجل وتتصفح المتاجر براحتك</li><li>ما راح تدفع شي إلا لما تشتري فعلياً</li></ul>", en: "Yes, registration is 100% free:<ul><li>No hidden fees</li><li>You can register and browse stores comfortably</li><li>You won't pay anything until you actually make a purchase</li></ul>" }
        },
        {
          question: { ar: "شو المعلومات المطلوبة للتسجيل؟", en: "What information is required for registration?" },
          answer: { ar: "نحتاج منك المعلومات التالية:<ul><li>رقم الجوال</li><li>البطاقة الشخصية</li></ul>بعدين لما تبدأ تشتري، راح نطلب منك تربط بطاقتك البنكية أو حسابك عشان نقدر نسحب الأقساط.", en: "We need the following information from you:<ul><li>Mobile number</li><li>ID card</li></ul>Then when you start shopping, we'll ask you to link your bank card or account so we can withdraw installments." }
        }
      ]
    },
    {
      id: 2,
      icon: "package",
      title: {
        ar: "الطلبات",
        en: "Orders"
      },
      description: {
        ar: "تتبّع طلباتك، وأبلغ عن أي مشكلات، وتعرّف على سياسات الاسترداد",
        en: "Track your orders, report issues, and learn about refund policies"
      },
      faqs: [
        {
          question: { ar: "كيف أتتبع طلبي؟", en: "How do I track my order?" },
          answer: { ar: "افتح التطبيق واضغط على 'طلباتي' من القائمة الرئيسية. راح تلاقي:<ul><li>كل طلباتك مع حالة كل طلب</li><li>حالات الطلب: قيد المعالجة، تم الشحن، تم التسليم</li><li>رقم التتبع (إذا انشحن الطلب)</li></ul>", en: "Open the app and click on 'My Orders' from the main menu. You'll find:<ul><li>All your orders with status</li><li>Order statuses: processing, shipped, delivered</li><li>Tracking number (if shipped)</li></ul>" }
        },
        {
          question: { ar: "ما وصلني المنتج، شو أسوي؟", en: "I didn't receive my product, what should I do?" },
          answer: { ar: "لا تقلق، اتبع هذه الخطوات:<ul><li>تأكد من حالة الطلب في التطبيق</li><li>إذا مكتوب 'تم التسليم' وما وصلك شي</li><li>تواصل معنا فوراً من خلال قسم الدعم</li><li>راح نتابع الموضوع مع المتجر ونحله خلال 24 ساعة</li></ul>", en: "Don't worry, follow these steps:<ul><li>Check the order status in the app</li><li>If it says 'Delivered' and you didn't receive anything</li><li>Contact us immediately through support section</li><li>We'll follow up with the store and resolve it within 24 hours</li></ul>" }
        },
        {
          question: { ar: "هل أقدر أرجع المنتج إذا ما عجبني؟", en: "Can I return the product if I don't like it?" },
          answer: { ar: "أكيد! شروط الإرجاع:<ul><li>كل متجر عنده سياسة إرجاع خاصة</li><li>أغلب المتاجر تعطيك من 7 لـ 14 يوم</li><li>المنتج لازم يكون بنفس حالته الأصلية</li><li>لازم تكون معك الفاتورة</li></ul>تقدر تشوف سياسة الإرجاع لكل متجر قبل ما تشتري.", en: "Sure! Return conditions:<ul><li>Each store has its own return policy</li><li>Most stores give you 7 to 14 days</li><li>Product must be in original condition</li><li>You must have the invoice</li></ul>You can see the return policy for each store before you buy." }
        }
      ]
    },
    {
      id: 3,
      icon: "credit-card",
      title: {
        ar: "المدفوعات",
        en: "Payments"
      },
      description: {
        ar: "تحكّم في مدفوعاتك ومواعيد السداد بكل سهولة",
        en: "Control your payments and due dates with ease"
      },
      faqs: [
        {
          question: { ar: "متى موعد دفع القسط الأول؟", en: "When is the first installment due?" },
          answer: { ar: "مواعيد الدفع:<ul><li>القسط الأول: يوم استلام المنتج أو بعد 3 أيام من الشراء (أيهما أقرب)</li><li>الأقساط الباقية: تنسحب كل شهر في نفس التاريخ</li></ul>", en: "Payment schedule:<ul><li>First installment: day of receiving product or 3 days after purchase (whichever is closer)</li><li>Remaining installments: withdrawn every month on the same date</li></ul>" }
        },
        {
          question: { ar: "شو يصير إذا ما كان عندي رصيد كافي؟", en: "What happens if I don't have enough balance?" },
          answer: { ar: "إذا فشل السحب:<ul><li>راح نحاول مرة ثانية بعد 3 أيام</li><li>راح نبعثلك إشعار عشان تجهز الرصيد</li><li>إذا تأخرت أكثر من 7 أيام: رسوم تأخير بسيطة (حوالي 5 دنانير)</li></ul>", en: "If withdrawal fails:<ul><li>We'll try again after 3 days</li><li>We'll send you a notification to prepare balance</li><li>If late more than 7 days: small late fee (about 5 dinars)</li></ul>" }
        },
        {
          question: { ar: "هل أقدر أدفع كل المبلغ مرة وحدة؟", en: "Can I pay the full amount at once?" },
          answer: { ar: "أكيد! مميزات الدفع المبكر:<ul><li>تقدر تسدد كامل المبلغ المتبقي في أي وقت</li><li>من خلال التطبيق بسهولة</li><li>بدون أي رسوم إضافية</li><li>راح توفر على نفسك الفوائد المستقبلية</li></ul>", en: "Sure! Early payment benefits:<ul><li>You can pay the full remaining amount anytime</li><li>Through the app easily</li><li>Without any additional fees</li><li>You'll save yourself future interest</li></ul>" }
        }
      ]
    },
    {
      id: 4,
      icon: "x-circle",
      title: {
        ar: "عمليات الشراء المرفوضة",
        en: "Declined Purchases"
      },
      description: {
        ar: "ما تحتاج معرفته إذا لم تتم عملية شراء بنجاح",
        en: "What you need to know if a purchase was not successful"
      },
      faqs: [
        {
          question: { ar: "ليش انرفض طلبي؟", en: "Why was my request rejected?" },
          answer: { ar: "الأسباب المحتملة للرفض:<ul><li>وصلت للحد الأقصى من المشتريات</li><li>في مدفوعات متأخرة على حسابك</li><li>المبلغ أكبر من قدرتك الشرائية المتاحة</li><li>عوامل أخرى نستخدمها لتحديد الموافقات</li></ul>افتح التطبيق وراح تلاقي السبب بالضبط.", en: "Possible reasons for rejection:<ul><li>Reached maximum number of purchases</li><li>Late payments on your account</li><li>Amount exceeds your available purchasing power</li><li>Other factors we use to determine approvals</li></ul>Open the app and you'll find the exact reason." }
        },
        {
          question: { ar: "كيف أزيد الحد الشرائي حقي؟", en: "How do I increase my purchase limit?" },
          answer: { ar: "كيف تزيد الحد الشرائي:<ul><li>يزيد تلقائياً كل ما تسدد أقساطك في وقتها</li><li>كل ما كنت ملتزم أكثر، كل ما الحد يرتفع أسرع</li><li>عادة بعد 3-4 مشتريات ناجحة راح تلاحظ زيادة واضحة</li></ul>", en: "How to increase purchase limit:<ul><li>Increases automatically when you pay installments on time</li><li>The more committed you are, the faster it rises</li><li>Usually after 3-4 successful purchases you'll notice a clear increase</li></ul>" }
        },
        {
          question: { ar: "هل أقدر أحاول مرة ثانية بعد الرفض؟", en: "Can I try again after rejection?" },
          answer: { ar: "أكيد، بس الأفضل تحل المشكلة أولاً:<ul><li>إذا السبب مدفوعات متأخرة: سددها وحاول مرة ثانية</li><li>إذا السبب الحد الشرائي: جرب تشتري بمبلغ أقل</li><li>أو استنى شوي لحد ما يزيد الحد</li></ul>", en: "Sure, but better solve the problem first:<ul><li>If reason is late payments: pay them and try again</li><li>If reason is purchase limit: try buying smaller amount</li><li>Or wait a bit until limit increases</li></ul>" }
        }
      ]
    },
    {
      id: 5,
      icon: "clock",
      title: {
        ar: "ادفع لاحقًا",
        en: "Pay Later"
      },
      description: {
        ar: "قسّم مشترياتك على دفعات وأدِر مواعيد السداد والرسوم والاسترداد بسهولة",
        en: "Split your purchases into installments and manage due dates, fees, and refunds easily"
      },
      faqs: [
        {
          question: { ar: "كم قسط أقدر أختار؟", en: "How many installments can I choose?" },
          answer: { ar: "يعتمد على المبلغ والمتجر، الخيارات المتاحة:<ul><li>3 أو 4 أو 6 أشهر (عادة)</li><li>المشتريات الكبيرة (فوق 500 دينار): لحد 12 شهر</li><li>راح تشوف الخيارات المتاحة قبل ما تأكد الطلب</li></ul>", en: "Depends on amount and store, available options:<ul><li>3, 4, or 6 months (usually)</li><li>Large purchases (over 500 dinars): up to 12 months</li><li>You'll see available options before confirming order</li></ul>" }
        },
        {
          question: { ar: "هل في فوائد على الأقساط؟", en: "Is there interest on installments?" },
          answer: { ar: "نعم، في فائدة بسيطة تختلف حسب عدد الأقساط:<ul><li>التقسيط على 3 أشهر: حوالي 2%</li><li>التقسيط على 6 أشهر: حوالي 5%</li><li>كل التفاصيل راح تكون واضحة قبل ما تشتري</li><li>ما في مفاجآت</li></ul>", en: "Yes, small interest varies by installments:<ul><li>3 months installment: about 2%</li><li>6 months installment: about 5%</li><li>All details will be clear before you buy</li><li>No surprises</li></ul>" }
        },
        {
          question: { ar: "أقدر أغير موعد السحب الشهري؟", en: "Can I change the monthly withdrawal date?" },
          answer: { ar: "للأسف لا:<ul><li>موعد السحب يتحدد تلقائياً بناءً على تاريخ الشراء</li><li>لكن تقدر تسدد مبكر في أي وقت إذا حابب</li></ul>", en: "Unfortunately no:<ul><li>Withdrawal date is automatically determined based on purchase date</li><li>But you can pay early anytime if you want</li></ul>" }
        }
      ]
    },
    {
      id: 6,
      icon: "settings",
      title: {
        ar: "الحساب والإعدادات",
        en: "Account & Settings"
      },
      description: {
        ar: "حدّث بياناتك، وأكّد صحة هويتك، واربط حسابك البنكي بأمان",
        en: "Update your information, verify your identity, and link your bank account securely"
      },
      faqs: [
        {
          question: { ar: "كيف أغير رقم جوالي؟", en: "How do I change my mobile number?" },
          answer: { ar: "خطوات تغيير رقم الجوال:<ul><li>اذهب لـ 'الإعدادات' ثم 'معلومات الحساب'</li><li>اضغط على 'تغيير رقم الجوال'</li><li>راح نرسلك كود تأكيد على الرقم الجديد والقديم</li><li>العملية تاخذ دقيقتين بس</li></ul>", en: "Steps to change mobile number:<ul><li>Go to 'Settings' then 'Account Information'</li><li>Click on 'Change Mobile Number'</li><li>We'll send confirmation code to new and old number</li><li>Process takes only two minutes</li></ul>" }
        },
        {
          question: { ar: "ليش يطلبون مني صورة البطاقة الشخصية؟", en: "Why do they ask me for a photo of my ID card?" },
          answer: { ar: "هذا للأمان وعشان نتأكد إنك فعلاً صاحب الحساب:<ul><li>كل بياناتك محمية ومشفرة</li><li>ما نستخدمها إلا للتحقق</li><li>هذا شرط قانوني من البنك المركزي كمان</li></ul>", en: "This is for security and to verify you're the account holder:<ul><li>All your data is protected and encrypted</li><li>We only use it for verification</li><li>This is also a legal requirement from Central Bank</li></ul>" }
        },
        {
          question: { ar: "هل أقدر أربط أكثر من بطاقة بنكية؟", en: "Can I link more than one bank card?" },
          answer: { ar: "أيوه، تقدر تربط لحد 3 بطاقات مختلفة:<ul><li>تختار أي وحدة تكون الأساسية للسحب التلقائي</li><li>مفيد إذا عندك بطاقة للمصاريف وبطاقة للادخار</li></ul>", en: "Yes, you can link up to 3 different cards:<ul><li>Choose which one to be primary for automatic withdrawal</li><li>Useful if you have a card for expenses and a card for savings</li></ul>" }
        }
      ]
    },
    {
      id: 7,
      icon: "dollar",
      title: {
        ar: "الكاش باك",
        en: "Cashback"
      },
      description: {
        ar: "تعرّف على طريقة عمل الكاش باك وكيفية استخدامه",
        en: "Learn how cashback works and how to use it"
      },
      faqs: [
        {
          question: { ar: "شو هو الكاش باك؟", en: "What is cashback?" },
          answer: { ar: "الكاش باك هو مبلغ يرجعلك من قيمة مشترياتك:<ul><li>مثلاً: اشتريت بـ 100 دينار وفي كاش باك 5%</li><li>راح يرجعلك 5 دنانير</li><li>تقدر تستخدمهم في مشترياتك الجاية</li><li>يعني كأنك بتحصل على خصم مؤجل!</li></ul>", en: "Cashback is an amount that returns from your purchases:<ul><li>Example: bought for 100 dinars with 5% cashback</li><li>5 dinars will be returned to you</li><li>You can use them in your next purchases</li><li>It's like getting a deferred discount!</li></ul>" }
        },
        {
          question: { ar: "كيف أستخدم الكاش باك حقي؟", en: "How do I use my cashback?" },
          answer: { ar: "كيف تستخدم الكاش باك:<ul><li>يتجمع في محفظتك داخل التطبيق</li><li>لما تشتري شي جديد، راح يظهرلك خيار 'استخدم الكاش باك'</li><li>اختاره وراح ينخصم من المبلغ الكلي تلقائياً</li></ul>", en: "How to use cashback:<ul><li>Accumulates in your wallet inside the app</li><li>When you buy something new, 'Use Cashback' option will appear</li><li>Choose it and it will be deducted from total amount automatically</li></ul>" }
        },
        {
          question: { ar: "هل الكاش باك له تاريخ انتهاء؟", en: "Does cashback have an expiration date?" },
          answer: { ar: "نعم، الكاش باك صالح لمدة 6 أشهر:<ul><li>من تاريخ حصولك عليه</li><li>بعدها راح ينتهي تلقائياً</li><li>عشان كذا الأفضل تستخدمه بأسرع وقت ممكن!</li></ul>", en: "Yes, cashback is valid for 6 months:<ul><li>From the date you receive it</li><li>After that it will expire automatically</li><li>That's why it's better to use it as soon as possible!</li></ul>" }
        }
      ]
    },
    {
      id: 8,
      icon: "shield",
      title: {
        ar: "الاحتيال والأمان",
        en: "Fraud & Security"
      },
      description: {
        ar: "حافظ على أمان حسابك وأبلغ عن أي نشاط مريب",
        en: "Keep your account secure and report any suspicious activity"
      },
      faqs: [
        {
          question: { ar: "كيف أحمي حسابي من الاختراق؟", en: "How do I protect my account from hacking?" },
          answer: { ar: "نصائح لحماية حسابك:<ul><li>ما تشارك كود التأكيد مع أي شخص (حتى لو قالوا إنهم من شِهد)</li><li>احنا أبداً ما نطلب الكود منك</li><li>فعّل التحقق بخطوتين من الإعدادات</li><li>غيّر كلمة المرور كل فترة</li></ul>", en: "Tips to protect your account:<ul><li>Don't share confirmation code with anyone (even if they say they're from Shahd)</li><li>We never ask you for the code</li><li>Enable two-step verification from settings</li><li>Change your password periodically</li></ul>" }
        },
        {
          question: { ar: "وصلني رابط مشبوه باسم شِهد، شو أسوي؟", en: "I received a suspicious link in the name of Shahd, what should I do?" },
          answer: { ar: "لا تضغط عليه أبداً!<ul><li>احنا ما نرسل روابط عبر الرسائل النصية أو الواتساب</li><li>كل التعاملات تكون من خلال التطبيق الرسمي بس</li><li>أبلغنا عن الرسالة فوراً من خلال قسم الأمان</li></ul>", en: "Never click on it!<ul><li>We don't send links via text messages or WhatsApp</li><li>All transactions are through the official app only</li><li>Report the message immediately through the security section</li></ul>" }
        },
        {
          question: { ar: "شفت عملية شراء ما سويتها أنا، شو أسوي؟", en: "I saw a purchase I didn't make, what should I do?" },
          answer: { ar: "اتصل فينا فوراً:<ul><li>على رقم 0791234567</li><li>أو من خلال الدعم في التطبيق</li><li>راح نجمد الحساب مؤقتاً ونحقق في الموضوع</li><li>إذا طلعت العملية احتيالية: راح نلغيها ونرجعلك فلوسك خلال 5 أيام عمل</li></ul>", en: "Call us immediately:<ul><li>At 0791234567</li><li>Or through support in the app</li><li>We'll temporarily freeze the account and investigate</li><li>If transaction is fraudulent: we'll cancel it and return your money within 5 business days</li></ul>" }
        }
      ]
    },
    {
      id: 9,
      icon: "help",
      title: {
        ar: "دعم إضافي",
        en: "Additional Support"
      },
      description: {
        ar: "أبلغ عن خلاف أو اطلب الدعم إذا كنت تواجه صعوبات مالية",
        en: "Report a dispute or request support if you're facing financial difficulties"
      },
      faqs: [
        {
          question: { ar: "عندي ظرف طارئ وما قدرت أدفع القسط، شو الحل؟", en: "I have an emergency and couldn't pay the installment, what's the solution?" },
          answer: { ar: "تواصل معنا قبل موعد الدفع إذا ممكن:<ul><li>نقدر نأجلك لمدة شهر واحد بدون رسوم تأخير</li><li>لازم تبلغنا قبل موعد الدفع</li><li>هذا الخيار متاح مرة وحدة كل 6 أشهر</li></ul>", en: "Contact us before payment date if possible:<ul><li>We can postpone you for one month without late fees</li><li>You must notify us beforehand</li><li>This option is available once every 6 months</li></ul>" }
        },
        {
          question: { ar: "كيف أقدم شكوى على متجر؟", en: "How do I file a complaint against a store?" },
          answer: { ar: "خطوات تقديم شكوى:<ul><li>اذهب لـ 'طلباتي' واختر الطلب المعني</li><li>اضغط على 'تقديم شكوى'</li><li>اكتب المشكلة بالتفصيل وأرفق صور إذا في</li><li>راح نتواصل مع المتجر ونحل الموضوع خلال 3 أيام عمل</li></ul>", en: "Steps to file a complaint:<ul><li>Go to 'My Orders' and select the order in question</li><li>Click on 'Submit a Complaint'</li><li>Write the problem in detail and attach photos if any</li><li>We'll contact the store and resolve the issue within 3 business days</li></ul>" }
        },
        {
          question: { ar: "هل في برنامج مساعدة للناس اللي عندهم صعوبات مالية؟", en: "Is there an assistance program for people with financial difficulties?" },
          answer: { ar: "نعم، عندنا برنامج 'شِهد معك' للحالات الصعبة:<ul><li>إذا صار عندك ظرف مالي قاسي (فقدان وظيفة، مرض، إلخ)</li><li>تقدر تقدم طلب لإعادة جدولة ديونك أو تخفيض الفوائد</li><li>كل حالة ندرسها بشكل منفصل</li></ul>", en: "Yes, we have 'Shahd with You' program for difficult cases:<ul><li>If you have a tough financial situation (job loss, illness, etc.)</li><li>You can apply to reschedule your debts or reduce interest</li><li>We study each case separately</li></ul>" }
        }
      ]
    }
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

      {/* HERO SECTION WITH SEARCH */}
      <section className="relative bg-gradient-to-br from-[#132c17] via-[#4d6528] to-[#a1ae1c] py-20 md:py-28 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-2/5">
            <div className="relative w-full h-full">
              <Image
                src="/images/shahad.png"
                alt="شِهد"
                fill
                className="object-contain object-right scale-75 md:scale-100"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-3xl md:text-5xl font-ibm-plex-arabic text-white mb-6 text-center font-bold">
            {lang === "ar" ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
          </h1>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder={t.searchPlaceholder[lang]}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-5 pr-14 rounded-2xl border-2 border-white/20 bg-white/95 backdrop-blur-sm shadow-2xl text-lg font-ibm-plex-arabic focus:outline-none focus:border-white focus:bg-white transition-all"
            />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES OR FAQ SECTION */}
      {selectedCategory === null ? (
        <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-ibm-plex-arabic text-black mb-4 text-center font-bold">
            {t.allSections[lang]}
          </h2>
          <p className="text-center text-gray-600 font-federant mb-12 md:mb-16 text-base md:text-lg max-w-2xl mx-auto">
            {lang === "ar"
              ? "اختر القسم المناسب للحصول على المساعدة التي تحتاجها"
              : "Choose the appropriate section to get the help you need"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setOpenFAQ(null);
                }}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:border-[#132c17] transition-all duration-300 text-right transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 -mt-2 text-gray-700 group-hover:text-[#132c17] transition-colors duration-300">
                    {getIcon(category.icon)}
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="text-xl md:text-2xl font-ibm-plex-arabic text-black font-bold mb-2 group-hover:text-[#132c17] transition-colors">
                      {category.title[lang]}
                    </h3>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 font-federant leading-relaxed text-right">
                  {category.description[lang]}
                </p>
                <div className="mt-4 flex items-center justify-end gap-2 text-[#132c17] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-ibm-plex-arabic font-semibold">
                    {lang === "ar" ? "اعرف المزيد" : "Learn more"}
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </section>
      ) : (
        <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
          <button
            onClick={() => setSelectedCategory(null)}
            className="group flex items-center gap-2 text-gray-700 hover:text-[#132c17] font-ibm-plex-arabic font-semibold mb-8 transition-all hover:gap-3"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{lang === "ar" ? "العودة للأقسام" : "Back to Categories"}</span>
          </button>

          {categories.find(c => c.id === selectedCategory) && (
            <>
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-4 text-[#132c17]">
                  {getIcon(categories.find(c => c.id === selectedCategory)!.icon)}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-ibm-plex-arabic text-black mb-4 font-bold">
                  {categories.find(c => c.id === selectedCategory)!.title[lang]}
                </h2>
                <p className="text-gray-600 font-federant text-base md:text-lg max-w-2xl mx-auto">
                  {categories.find(c => c.id === selectedCategory)!.description[lang]}
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {categories.find(c => c.id === selectedCategory)!.faqs.map((faq, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#132c17] transition-colors">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full p-6 md:p-8 flex items-start justify-between gap-4 text-right"
                    >
                      <h3 className="text-lg md:text-xl font-ibm-plex-arabic font-bold text-black flex-1">
                        {faq.question[lang]}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-[#132c17] flex-shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <div
                          className="text-gray-700 font-federant text-base md:text-lg leading-relaxed [&_ul]:list-disc [&_ul]:mr-6 [&_ul]:mt-3 [&_ul]:space-y-2 [&_li]:text-gray-700 [&_li]:leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: faq.answer[lang] }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      )}

      {/* CONTACT SECTION */}
      <section className="bg-gradient-to-br from-[#f0fdf4] to-white py-16 md:py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-ibm-plex-arabic text-black font-bold mb-4">
            {lang === "ar" ? "لم تجد ما تبحث عنه؟" : "Didn't find what you're looking for?"}
          </h3>
          <p className="text-gray-600 font-federant mb-8 text-base md:text-lg">
            {lang === "ar"
              ? "تواصل معنا مباشرة وسنكون سعداء بمساعدتك"
              : "Contact us directly and we'll be happy to help you"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {/* Phone */}
            <a
              href="tel:+96212345678"
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 md:p-8 border-2 border-gray-100 hover:border-[#132c17] transition-all transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#132c17]/10 to-[#4d6528]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-[#132c17] group-hover:to-[#4d6528] transition-all">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#132c17] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl font-ibm-plex-arabic font-bold text-black mb-1 group-hover:text-[#132c17] transition-colors">
                {lang === "ar" ? "اتصل بنا" : "Call Us"}
              </p>
              <p className="text-gray-600 font-federant text-sm md:text-base" dir="ltr">
                +962 1 234 5678
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:help@shahd.com"
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 md:p-8 border-2 border-gray-100 hover:border-[#132c17] transition-all transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#132c17]/10 to-[#4d6528]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-[#132c17] group-hover:to-[#4d6528] transition-all">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#132c17] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl font-ibm-plex-arabic font-bold text-black mb-1 group-hover:text-[#132c17] transition-colors">
                {lang === "ar" ? "راسلنا" : "Email Us"}
              </p>
              <p className="text-gray-600 font-federant text-sm md:text-base">
                help@shahd.com
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-gray-200 bg-gradient-to-b from-[#132c17] to-[#0f1c16] text-white">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/images/logo_shahadd.png"
              alt="شِهد"
              width={80}
              height={28}
              className="h-8 w-auto mx-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              quality={100}
            />
          </Link>
          <p className="text-white/70 font-federant text-sm">
            {lang === "ar"
              ? "© 2025 شِهد — جميع الحقوق محفوظة"
              : "© 2025 Shahd — All Rights Reserved"}
          </p>
        </div>
      </footer>

    </main>
  );
}
