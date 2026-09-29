// Copy + structured data for the Kingdom Arabic landing page (/kingdom-arabic).
// Kept apart from the component so the visible FAQ and the FAQPage JSON-LD
// are generated from the same source and can never drift apart.
// Never mention the app's private Gathering feature here.

export const APP_ID = "6755405579";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_ID}`;
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ingenuitylabs.LearnArabic";
export const PAGE_PATH = "/kingdom-arabic";
export const PAGE_URL = `https://ingenuitylabs.net${PAGE_PATH}`;
export const OG_IMAGE = "/kingdom-arabic-og.jpg";

export const SEO_TITLE = "Kingdom Arabic – Learn Arabic Through the Bible (iPhone & Android)";
export const SEO_DESCRIPTION =
  "Read the whole Arabic Bible and tap any word to see its meaning. Build vocabulary with spaced-repetition flashcards and memorize verses step by step. Free, offline, no account.";

// John 1:1 with the glosses the app itself shows (bible-translations/mappings/JHN/1.json).
export const DEMO_VERSE = {
  reference: "John 1:1",
  english: "In the beginning was the Word, and the Word was with God, and the Word was God.",
  words: [
    { ar: "فِي", en: "In" },
    { ar: "الْبَدْءِ", en: "the beginning" },
    { ar: "كَانَ", en: "was" },
    { ar: "الْكَلِمَةُ،", en: "the Word" },
    { ar: "وَالْكَلِمَةُ", en: "and the Word" },
    { ar: "كَانَ", en: "was" },
    { ar: "عِنْدَ", en: "with" },
    { ar: "اللهِ.", en: "God" },
    { ar: "وَكَانَ", en: "and was" },
    { ar: "الْكَلِمَةُ", en: "the Word" },
    { ar: "اللهُ.", en: "God" },
  ],
};

export const SHOWCASE = [
  {
    key: "tap-word",
    eyebrow: "Read",
    title: "Tap any word. Understand it instantly.",
    body:
      "All 66 books of the Arabic Bible, fully vowelled, with English alongside. Tap a word and its meaning appears right above it — and it's saved for review, so reading turns into vocabulary.",
    points: ["Full harakat for accurate reading", "English translation under every verse", "Listen to any verse read aloud"],
    alt: "Psalm 23 in Arabic with the word رَاعِيَّ tapped, showing the gloss “my shepherd”",
  },
  {
    key: "word-study",
    eyebrow: "Study",
    title: "Follow a word through the whole Bible.",
    body:
      "Word study shows every verse a word appears in, how it's translated each time, and the related forms that share its root — the fastest way to really know a word.",
    points: ["Occurrence counts across Scripture", "Each meaning with its verses", "Related forms from the same root"],
    alt: "Word study for نَفْسِي (my soul), which appears 203 times, with verses from Genesis",
  },
  {
    key: "card-front",
    eyebrow: "Remember",
    title: "Flashcards that know when you'll forget.",
    body:
      "The words you tap become flashcards on a proven Anki-style schedule. Hard words come back sooner; words you know move out to long-term review.",
    points: ["Again · Hard · Good · Easy grading", "New, learning and review queues", "Organize cards into your own groups"],
    alt: "Flashcard for the Arabic word الْكَلِمَةُ with Again, Hard, Good and Easy buttons",
  },
  {
    key: "memorize",
    eyebrow: "Memorize",
    title: "Hide God's word in your heart — in Arabic.",
    body:
      "Memorize whole verses in five steps: learn the meaning, fade the words away, recite from first letters, rebuild the verse from tiles, then recall it from memory.",
    points: ["Learn → Fade → First letters → Build → Recall", "Review scheduled for the days you need it", "Watch verses move to mastered"],
    alt: "Memorizing Romans 8:28 with a quarter of the words hidden",
  },
  {
    key: "progress",
    eyebrow: "Grow",
    title: "A little every day adds up.",
    body:
      "Keep a streak, see every day you studied, and track the words you've learned and the verses you've memorized. A daily reminder keeps you coming back.",
    points: ["Daily streak and study calendar", "Flashcard and memory stats", "Optional daily reminder"],
    alt: "Progress screen with a 38-day streak and a calendar of study days",
  },
];

export const EXTRAS = [
  { icon: "📖", title: "The whole Bible", body: "66 books, Arabic and English, stored on your phone." },
  { icon: "✈️", title: "100% offline", body: "No internet needed — read on a plane or anywhere." },
  { icon: "🔒", title: "Private by design", body: "No account, no ads, no tracking. Your data stays yours." },
  { icon: "🔊", title: "Hear it spoken", body: "Arabic pronunciation for words and whole verses." },
  { icon: "🔎", title: "Search Scripture", body: "Search Scripture and jump straight to any verse." },
  { icon: "💾", title: "Backup & restore", body: "Export your progress and bring it to a new phone." },
];

export const FAQS = [
  {
    q: "Is Kingdom Arabic free?",
    a: "Yes. Kingdom Arabic is free to download on iPhone and Android, with no subscription, no ads and no account.",
  },
  {
    q: "Which Arabic Bible does it use?",
    a: "It uses a fully vowelled Arabic Bible — all 66 books — with an English translation shown under every verse, so you can check your reading as you go.",
  },
  {
    q: "Do I need to know Arabic already?",
    a: "No. If you can read the Arabic alphabet you can start: tap any word for its meaning and let the flashcards build your vocabulary. Intermediate learners use it to read Scripture fluently and memorize verses.",
  },
  {
    q: "Does it work without internet?",
    a: "Yes. The whole Bible and every word gloss ship inside the app, so everything works offline.",
  },
  {
    q: "Is my data private?",
    a: "Yes. There's no sign-up and nothing is sent to a server. Your flashcards, verses and progress live on your device, and you can back them up to a file whenever you like.",
  },
];

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      "@id": `${PAGE_URL}#app`,
      name: "Kingdom Arabic",
      description:
        "Learn Arabic through the Bible: read all 66 books in Arabic, tap any word for its meaning, review vocabulary with spaced-repetition flashcards and memorize verses step by step. Free and fully offline.",
      url: PAGE_URL,
      downloadUrl: [APP_STORE_URL, PLAY_STORE_URL],
      installUrl: APP_STORE_URL,
      image: `https://ingenuitylabs.net${OG_IMAGE}`,
      operatingSystem: "iOS, Android",
      applicationCategory: "EducationalApplication",
      inLanguage: ["en", "ar"],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      publisher: {
        "@type": "Organization",
        name: "Ingenuity Labs",
        url: "https://ingenuitylabs.net",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};
