// Copy for /roshan (EN) and /ar/roshan (AR): the AI-for-cafés offering page.
// Demo links point at the live Roshan Coffee demo café. Never link /m (it lists
// real cafés' private menus) — use /m/roshan for the online-menu demo.

export const DEMO_URL = "https://roshan-coffee.vercel.app";
export const CONTACT_EMAIL = "ethan@ingenuitylabs.net";

const demo = (path) => `${DEMO_URL}${path}`;

export const EN = {
  lang: "en",
  dir: "ltr",
  path: "/roshan",
  altPath: "/ar/roshan",
  altLabel: "العربية",
  seo: {
    title: "AI for Cafés & Restaurants in Saudi Arabia | Ingenuity Labs",
    description:
      "WhatsApp ordering, an Arabic voice barista, QR menus, automatic restocking, staffing and review replies — AI built for Saudi cafés and restaurants by Ingenuity Labs. Try every feature live on our demo café.",
  },
  hero: {
    meta: "Ingenuity Labs · Jeddah, Saudi Arabia",
    title: ["We build AI", "for cafés and", "restaurants."],
    sub: "It answers your WhatsApp, takes orders, reorders stock, plans your staff and replies to reviews, in Arabic and English. See every tool working on Roshan Coffee, our live demo café.",
    primary: "See it live on our demo café",
    secondary: "Book a 20-minute walkthrough",
  },
  glanceKicker: "What it does for you",
  glance: [
    { title: "Answers WhatsApp 24/7", desc: "Orders, questions and complaints, in Saudi Arabic and English." },
    { title: "Never runs out", desc: "Reorders stock from the warehouse before it’s gone." },
    { title: "Plans your staff", desc: "Rotas built around rush hours, prayer times and Ramadan." },
    { title: "Replies to every review", desc: "Google and delivery-app reviews answered in the customer’s language." },
  ],
  board: {
    title: "The menu",
    subtitle: "Every item runs live on our demo café",
    live: "Live",
  },
  menuKicker: "The menu — what we build for you",
  tryIt: "Try it live",
  sections: [
    {
      id: "front",
      name: "Front of house",
      note: "What your customers see",
      items: [
        {
          name: "WhatsApp ordering & customer agent",
          short: "WhatsApp agent",
          desc: "Answers every message on your WhatsApp number in Saudi Arabic or English: takes orders from your real menu, handles complaints, answers hours and branch questions, and sends the order to the kitchen. One agent across all your branch numbers.",
          replaces: "Replaces: staff replying to WhatsApp between orders, missed messages after closing.",
          link: demo("/studio/whatsapp"),
        },
        {
          name: "Voice barista",
          short: "Voice barista",
          desc: "An animated barista on your website or a tablet at the counter that customers talk to, in Arabic or English. It knows your menu, beans, prices and branches, and recommends drinks.",
          replaces: "Replaces: “what do you recommend?” queues at the bar.",
          link: demo("/barista"),
        },
        {
          name: "QR & online menu",
          short: "QR menu",
          desc: "A fast, bilingual menu in your brand, with photos and a printable QR card for every table. You update it in minutes. No more PDF or Google Drive links.",
          replaces: "Replaces: PDF menus, Google Drive links, reprinting.",
          link: demo("/m/roshan"),
        },
        {
          name: "Taste matcher",
          short: "Taste matcher",
          desc: "Customers describe what they like (“fruity, not bitter”) and get the right coffee, beans or dish from your menu, with a reason.",
          replaces: "Replaces: guesswork for new customers.",
          link: demo("/beans"),
        },
      ],
    },
    {
      id: "back",
      name: "Behind the bar",
      note: "What runs your operation",
      items: [
        {
          name: "Stock & restocking autopilot",
          short: "Restocking autopilot",
          desc: "Watches sales and stock at every branch, forecasts what runs out, and messages the warehouse on WhatsApp. When they reply, the transfer is recorded. Built to connect to Foodics.",
          replaces: "Replaces: end-of-day stock calls, running out of milk on a Thursday night.",
          link: demo("/studio/logistics"),
        },
        {
          name: "Demand forecast & staffing",
          short: "Staffing planner",
          desc: "Hour-by-hour demand for each branch, aware of prayer times, weekends, Ramadan and Jeddah Season, turned into a staff rota and a plain-language summary.",
          replaces: "Replaces: rotas built from memory.",
          link: demo("/studio/insights"),
        },
        {
          name: "Review inbox",
          short: "Review replies",
          desc: "Collects your Google and delivery-app reviews, shows what customers praise and complain about, and drafts a reply to each one in the reviewer’s language.",
          replaces: "Replaces: unanswered reviews.",
          link: demo("/studio/reviews"),
        },
        {
          name: "Ads studio",
          short: "Ads studio",
          desc: "Instagram, Snapchat, TikTok and Google ads in English and Saudi Arabic, with matching visuals, written in your brand’s voice from your real menu.",
          replaces: "Replaces: waiting on an agency for every post.",
          link: demo("/studio/ads"),
        },
        {
          name: "Owner’s daily brief",
          short: "Daily brief",
          desc: "One short message each morning: yesterday’s sales, what to reorder, what customers said, and what to watch today.",
          replaces: "Replaces: digging through five dashboards.",
          link: demo("/studio"),
        },
      ],
    },
  ],
  demo: {
    kicker: "The demo café",
    title: "Meet Roshan Coffee.",
    body: "Roshan Coffee is a café we invented in Al-Balad, Jeddah, to show everything working together. Every feature on it is real, not a mock-up: talk to the barista, order on WhatsApp, open the back office.",
    body2: "Before we meet, we rebuild it with your name, menu, colours and branches, so you see your own café running on it.",
    cta: "Open the demo café",
    links: [
      { label: "Café website", href: demo("/") },
      { label: "Voice barista", href: demo("/barista") },
      { label: "Back office", href: demo("/studio") },
    ],
  },
  stepsKicker: "How we work",
  steps: [
    {
      title: "A demo in your brand",
      desc: "Send us your menu or Instagram. We rebuild the demo café as yours, then walk you through it in 20 minutes.",
    },
    {
      title: "Start with one thing",
      desc: "Pick the item that hurts most, usually WhatsApp or restocking. We pilot it at one branch with a clear number to hit.",
    },
    {
      title: "Connect your systems",
      desc: "Your WhatsApp numbers on the official WhatsApp Business Platform, your POS, your warehouse. Your team keeps working the way it does now.",
    },
    {
      title: "Roll out",
      desc: "When the pilot proves itself, we add branches and the next item from the menu.",
    },
  ],
  whyKicker: "Why Ingenuity Labs",
  why: [
    {
      title: "Arabic first",
      desc: "Built for Saudi customers: Saudi dialect, right-to-left screens, Hijri dates, prayer times and Ramadan hours.",
    },
    {
      title: "Local",
      desc: "We are in Jeddah. We come to your branch, train your team and answer on WhatsApp.",
    },
    {
      title: "Built for you, owned by you",
      desc: "Your menu, your brand, your data. No per-seat licence and no platform you are locked into.",
    },
  ],
  faqs: [
    {
      q: "Do my staff need to learn new software?",
      a: "No. Orders arrive where your team already works, the warehouse answers on WhatsApp, and the owner gets a WhatsApp brief. Most staff never open a new app.",
    },
    {
      q: "Does it really speak Saudi Arabic?",
      a: "Yes. The WhatsApp agent and the voice barista understand and reply in Saudi Arabic and English, and switch when the customer switches.",
    },
    {
      q: "Does it work with Foodics?",
      a: "The restocking and forecasting tools are built to read sales from Foodics. Using another POS? Tell us which one and we will check it before you commit.",
    },
    {
      q: "What does it cost?",
      a: "A monthly fee for what you use, quoted after a short call. You can start with one item at one branch.",
    },
    {
      q: "Is our data safe?",
      a: "Your menu, sales and customer messages stay in your project, are only used to run your café, and are never used to train public AI models.",
    },
  ],
  cta: {
    kicker: "Now taking cafés and restaurants",
    title: "See your café running on it.",
    sub: "Send us your menu or Instagram. We will build the demo in your brand and walk you through it.",
    primary: "Book a walkthrough",
    email: `or email ${CONTACT_EMAIL}`,
  },
};

export const AR = {
  lang: "ar",
  dir: "rtl",
  path: "/ar/roshan",
  altPath: "/roshan",
  altLabel: "English",
  seo: {
    title: "الذكاء الاصطناعي للمقاهي والمطاعم في السعودية | Ingenuity Labs",
    description:
      "طلبات واتساب، باريستا صوتي بالعربي، منيو QR، إعادة تعبئة المخزون تلقائياً، جدولة الموظفين والرد على التقييمات — ذكاء اصطناعي مصمم للمقاهي والمطاعم السعودية. جرّب كل ميزة مباشرة على مقهانا التجريبي.",
  },
  hero: {
    meta: "Ingenuity Labs · جدة، المملكة العربية السعودية",
    title: ["نبني حلول الذكاء الاصطناعي", "للمقاهي والمطاعم."],
    sub: "يرد على الواتساب، ويستقبل الطلبات، ويطلب المخزون، وينظّم دوام الموظفين، ويرد على التقييمات، بالعربي والإنجليزي. شاهد كل الأدوات تعمل مباشرة على «روشن كوفي»، مقهانا التجريبي.",
    primary: "شاهدها مباشرة على مقهانا التجريبي",
    secondary: "احجز عرضاً لمدة ٢٠ دقيقة",
  },
  glanceKicker: "ماذا يقدّم لك",
  glance: [
    { title: "يرد على الواتساب ٢٤/٧", desc: "طلبات وأسئلة وشكاوى، باللهجة السعودية والإنجليزي." },
    { title: "ما ينفد عندك شيء", desc: "يطلب المخزون من المستودع قبل أن ينفد." },
    { title: "ينظّم دوام الموظفين", desc: "جداول دوام حسب أوقات الذروة والصلاة ورمضان." },
    { title: "يرد على كل تقييم", desc: "تقييمات Google وتطبيقات التوصيل يُرد عليها بلغة العميل." },
  ],
  board: {
    title: "المنيو",
    subtitle: "كل عنصر يعمل مباشرة على مقهانا التجريبي",
    live: "مباشر",
  },
  menuKicker: "المنيو — ما نبنيه لك",
  tryIt: "جرّبها مباشرة",
  sections: [
    {
      id: "front",
      name: "واجهة المقهى",
      note: "ما يراه عملاؤك",
      items: [
        {
          name: "طلبات واتساب ووكيل خدمة العملاء",
          short: "وكيل واتساب",
          desc: "يرد على كل رسالة تصل رقم الواتساب باللهجة السعودية أو بالإنجليزي: يستقبل الطلبات من منيوك الحقيقي، ويتعامل مع الشكاوى، ويجيب عن أوقات العمل والفروع، ويرسل الطلب للمطبخ. وكيل واحد لكل أرقام فروعك.",
          replaces: "بدلاً من: موظف يرد على الواتساب بين الطلبات، ورسائل ضائعة بعد الإغلاق.",
          link: demo("/studio/whatsapp"),
        },
        {
          name: "باريستا صوتي",
          short: "باريستا صوتي",
          desc: "باريستا متحرك على موقعك أو على شاشة عند الكاونتر، يتكلم معه العميل بالعربي أو الإنجليزي. يعرف منيوك وأنواع البن والأسعار والفروع، ويقترح المشروبات.",
          replaces: "بدلاً من: طابور «وش تنصحني؟» عند البار.",
          link: demo("/barista"),
        },
        {
          name: "منيو QR ومنيو إلكتروني",
          short: "منيو QR",
          desc: "منيو سريع بلغتين وبهوية مقهاك، مع صور وبطاقة QR جاهزة للطباعة لكل طاولة. تعدّله في دقائق، بدون ملفات PDF أو روابط Google Drive.",
          replaces: "بدلاً من: منيو PDF وروابط Drive وإعادة الطباعة.",
          link: demo("/m/roshan"),
        },
        {
          name: "مطابقة الذوق",
          short: "مطابقة الذوق",
          desc: "يصف العميل ما يحبه («فواكه، مو مرّة») ويحصل على القهوة أو البن أو الطبق المناسب من منيوك، مع السبب.",
          replaces: "بدلاً من: التخمين مع العملاء الجدد.",
          link: demo("/beans"),
        },
      ],
    },
    {
      id: "back",
      name: "خلف البار",
      note: "ما يدير تشغيلك",
      items: [
        {
          name: "المخزون وإعادة التعبئة التلقائية",
          short: "إعادة التعبئة التلقائية",
          desc: "يتابع المبيعات والمخزون في كل فرع، ويتوقع ما سينفد، ويرسل للمستودع على الواتساب. وعندما يرد المستودع يُسجَّل التحويل. مصمم للربط مع Foodics.",
          replaces: "بدلاً من: مكالمات جرد آخر اليوم، ونفاد الحليب ليلة الخميس.",
          link: demo("/studio/logistics"),
        },
        {
          name: "توقع الطلب وجدولة الموظفين",
          short: "جدولة الموظفين",
          desc: "توقع الطلب ساعة بساعة لكل فرع، مع مراعاة أوقات الصلاة وعطلة نهاية الأسبوع ورمضان وموسم جدة، ويحوّله إلى جدول دوام وملخص واضح.",
          replaces: "بدلاً من: جداول الدوام من الذاكرة.",
          link: demo("/studio/insights"),
        },
        {
          name: "صندوق التقييمات",
          short: "الرد على التقييمات",
          desc: "يجمع تقييمات Google وتطبيقات التوصيل، ويوضح ما يمدحه العملاء وما يشتكون منه، ويكتب مسودة رد لكل تقييم بلغة صاحبه.",
          replaces: "بدلاً من: تقييمات بدون رد.",
          link: demo("/studio/reviews"),
        },
        {
          name: "استوديو الإعلانات",
          short: "استوديو الإعلانات",
          desc: "إعلانات إنستقرام وسناب شات وتيك توك وGoogle بالعربي السعودي والإنجليزي، مع تصاميم مناسبة، بأسلوب علامتك ومن منيوك الحقيقي.",
          replaces: "بدلاً من: انتظار الوكالة لكل منشور.",
          link: demo("/studio/ads"),
        },
        {
          name: "الملخص اليومي للمالك",
          short: "الملخص اليومي",
          desc: "رسالة قصيرة كل صباح: مبيعات الأمس، وما يجب طلبه، وما قاله العملاء، وما يجب الانتباه له اليوم.",
          replaces: "بدلاً من: التنقل بين خمس لوحات تحكم.",
          link: demo("/studio"),
        },
      ],
    },
  ],
  demo: {
    kicker: "المقهى التجريبي",
    title: "تعرّف على روشن كوفي.",
    body: "روشن كوفي مقهى ابتكرناه في البلد بجدة لنعرض كل شيء يعمل معاً. كل ميزة فيه حقيقية وليست مجرد تصميم: كلّم الباريستا، اطلب على الواتساب، وافتح الإدارة الخلفية.",
    body2: "قبل أن نلتقي، نعيد بناءه باسم مقهاك ومنيوك وألوانك وفروعك، لترى مقهاك أنت يعمل عليه.",
    cta: "افتح المقهى التجريبي",
    links: [
      { label: "موقع المقهى", href: demo("/") },
      { label: "الباريستا الصوتي", href: demo("/barista") },
      { label: "الإدارة الخلفية", href: demo("/studio") },
    ],
  },
  stepsKicker: "طريقة عملنا",
  steps: [
    {
      title: "عرض بهوية مقهاك",
      desc: "أرسل لنا المنيو أو حساب الإنستقرام. نعيد بناء المقهى التجريبي باسمك، ثم نعرضه عليك في ٢٠ دقيقة.",
    },
    {
      title: "ابدأ بميزة واحدة",
      desc: "اختر الأكثر إلحاحاً، غالباً الواتساب أو إعادة التعبئة. نجربها في فرع واحد بهدف واضح نقيسه.",
    },
    {
      title: "ربط أنظمتك",
      desc: "أرقام الواتساب على منصة واتساب للأعمال الرسمية، ونظام نقاط البيع، والمستودع. فريقك يكمل شغله بنفس الطريقة.",
    },
    {
      title: "التوسع",
      desc: "عندما تثبت التجربة نجاحها، نضيف الفروع والعنصر التالي من المنيو.",
    },
  ],
  whyKicker: "لماذا Ingenuity Labs",
  why: [
    {
      title: "العربي أولاً",
      desc: "مصمم للعميل السعودي: اللهجة السعودية، والشاشات من اليمين لليسار، والتاريخ الهجري، وأوقات الصلاة، ودوام رمضان.",
    },
    {
      title: "محليون",
      desc: "نحن في جدة. نزورك في الفرع، وندرّب فريقك، ونرد عليك على الواتساب.",
    },
    {
      title: "مبني لك، وملك لك",
      desc: "منيوك، وهويتك، وبياناتك. بدون رسوم لكل مستخدم، وبدون منصة تقيّدك.",
    },
  ],
  faqs: [
    {
      q: "هل يحتاج موظفيني لتعلم برنامج جديد؟",
      a: "لا. الطلبات تصل حيث يعمل فريقك أصلاً، والمستودع يرد على الواتساب، والمالك يستلم ملخصاً على الواتساب. أغلب الموظفين لن يفتحوا تطبيقاً جديداً.",
    },
    {
      q: "هل يتكلم فعلاً باللهجة السعودية؟",
      a: "نعم. وكيل الواتساب والباريستا الصوتي يفهمان ويردان باللهجة السعودية والإنجليزية، ويغيّران اللغة عندما يغيّرها العميل.",
    },
    {
      q: "هل يعمل مع Foodics؟",
      a: "أدوات إعادة التعبئة والتوقع مصممة لقراءة المبيعات من Foodics. تستخدم نظاماً آخر؟ أخبرنا به ونتحقق منه قبل أن تلتزم.",
    },
    {
      q: "كم التكلفة؟",
      a: "اشتراك شهري حسب ما تستخدمه، نحدده بعد مكالمة قصيرة. يمكنك البدء بميزة واحدة في فرع واحد.",
    },
    {
      q: "هل بياناتنا آمنة؟",
      a: "المنيو والمبيعات ورسائل العملاء تبقى في مشروعك، وتُستخدم فقط لتشغيل مقهاك، ولا تُستخدم أبداً لتدريب نماذج ذكاء اصطناعي عامة.",
    },
  ],
  cta: {
    kicker: "نستقبل الآن المقاهي والمطاعم",
    title: "شاهد مقهاك يعمل عليه.",
    sub: "أرسل لنا المنيو أو حساب الإنستقرام. نبني العرض بهوية مقهاك ونعرضه عليك.",
    primary: "احجز عرضاً",
    email: `أو راسلنا على ${CONTACT_EMAIL}`,
  },
};
