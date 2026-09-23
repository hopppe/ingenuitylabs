// Copy + structured data for the Prayer Pause landing page (/prayer-pause).
// Kept apart from the component so the visible FAQ and the FAQPage JSON-LD
// are generated from the same source and can never drift apart.

export const APP_ID = "6758054860";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_ID}`;
export const PAGE_PATH = "/prayer-pause";
export const PAGE_URL = `https://ingenuitylabs.net${PAGE_PATH}`;
export const OG_IMAGE = "/prayer-pause-og.jpg";

export const SEO_TITLE = "Prayer Pause – Free Christian Screen Time App for iPhone";
export const SEO_DESCRIPTION =
  "Prayer Pause locks the apps you choose until you pray. A free Christian screen time app for iPhone with no subscriptions and no ads. Pray before you scroll.";

export const LANGUAGES = ["English", "Spanish", "Portuguese", "French", "German", "Korean"];
// Shipping with 1.1 — move into "available" once it is live on the App Store.
export const UPCOMING_LANGUAGES = LANGUAGES.slice(1);

export const STEPS = [
  {
    title: "Choose what to lock",
    body:
      "Pick the apps that pull you in — social media, games, video — or flip it around and block everything except the few apps you need.",
  },
  {
    title: "Set your prayer times",
    body:
      "At each prayer time Apple's Screen Time locks those apps right on schedule. Add focus windows, like overnight, to keep them locked when you should be resting.",
  },
  {
    title: "Pray, then scroll",
    body:
      "Check in on how you're doing, pray a guided prayer matched to your mood, and your apps unlock. Your streak grows one day at a time.",
  },
];

export const FEATURES = [
  {
    icon: "🔒",
    title: "App blocker built on Screen Time",
    items: [
      "Block selected apps, or everything except the ones you choose",
      "Scheduled prayer times that lock apps on time",
      "Focus windows, like 10 PM to 7 AM",
      "Apps unlock the moment you finish praying",
    ],
  },
  {
    icon: "🙏",
    title: "Guided prayer for how you feel",
    items: [
      "A quick mood check-in before you pray",
      "A guided prayer matched to your mood",
      "Read-aloud audio when you'd rather listen",
      "Morning, midday and night rhythm with a quiet pause",
    ],
  },
  {
    icon: "📖",
    title: "Bible verse of the day",
    items: [
      "A fresh verse every day",
      "Home screen and lock screen widgets",
      "Bible reading plans that go at your pace",
      "Share a verse as a beautiful image",
    ],
  },
  {
    icon: "🧠",
    title: "Scripture memory",
    items: [
      "Spaced repetition that brings verses back at the right time",
      "Choose any verse from the whole Bible",
      "Record verses in your own voice and listen back",
      "Track which verses you've truly learned",
    ],
  },
  {
    icon: "📝",
    title: "Prayer journal",
    items: [
      "Your prayers and reflections, saved automatically",
      "A prayer request list for the people you're praying for",
      "Mark requests as answered",
      "Everything stays on your iPhone",
    ],
  },
  {
    icon: "🔥",
    title: "Streaks and insights",
    items: [
      "Daily prayer streak and calendar",
      "Insights into your mood and prayer rhythm over time",
      "Say “Hey Siri, start my prayer”",
      "Five calm themes, light and dark",
    ],
  },
];

export const FAQS = [
  {
    q: "Is Prayer Pause really free?",
    a:
      "Yes. Every feature is free — no subscription, no trial, no ads and nothing locked behind a paywall. Many prayer lock and Bible lock apps charge up to around $100 a year; we believe a paywall shouldn't stand between you and getting closer to God. If you'd like to support the app there's an optional donation, but it unlocks nothing extra.",
  },
  {
    q: "How does the app blocking work?",
    a:
      "Prayer Pause uses Apple's own Screen Time (Family Controls) system. The first time you open it, iOS asks you to allow Screen Time access. You then choose which apps to lock — or lock everything except a few you need — and set your prayer times. At each prayer time those apps are shielded until you finish praying. Apple keeps your app choices private: Prayer Pause can't see which apps you use or for how long.",
  },
  {
    q: "What happens if I miss a prayer time?",
    a:
      "Your apps stay locked until you pray, whenever that is later in the day — just open Prayer Pause and pray to unlock them. At midnight any lock from the previous day clears, so you never wake up locked out over yesterday. A missed day simply starts a new streak, with no guilt.",
  },
  {
    q: "Can I block every app except the ones I need?",
    a:
      "Yes. Choose “block all apps except selected” and pick the apps you want to keep — like Phone, Messages or Maps. Everything else locks at prayer time. You can also add up to three focus windows, such as overnight, that keep apps locked on a recurring schedule.",
  },
  {
    q: "Does Prayer Pause work on iPad or Android?",
    a:
      "Prayer Pause is made for iPhone and requires iOS 17 or later. It isn't available for iPad or Android.",
  },
  {
    q: "Is my data private?",
    a:
      "Yes. There's no account and no sign-up. Your prayers, journal, prayer requests and mood check-ins are stored only on your iPhone — never on our servers — and the app has no ads, analytics or tracking.",
  },
  {
    q: "Which languages does Prayer Pause support?",
    a: `Prayer Pause is in English today. ${UPCOMING_LANGUAGES.slice(0, -1).join(", ")} and ${UPCOMING_LANGUAGES.slice(-1)} are coming in the next update.`,
  },
];

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      "@id": `${PAGE_URL}#app`,
      name: "Prayer Pause",
      description:
        "A Christian screen time app for iPhone that locks the apps you choose until you pray. Guided prayer, Bible verse of the day, reading plans, scripture memory and a prayer journal — completely free.",
      url: PAGE_URL,
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      image: `https://ingenuitylabs.net${OG_IMAGE}`,
      operatingSystem: "iOS 17.0 or later",
      applicationCategory: "LifestyleApplication",
      softwareVersion: "1.1",
      inLanguage: ["en"],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: APP_STORE_URL,
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
