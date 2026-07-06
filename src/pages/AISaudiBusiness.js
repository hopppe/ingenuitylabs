import React from "react";
import NichePage from "../components/NichePage";

const AISaudiBusiness = () => (
  <NichePage
    seo={{
      title:
        "Custom AI Solutions in Saudi Arabia — Jeddah-Based Studio | Ingenuity Labs",
      description:
        "Ingenuity Labs builds custom AI, apps, and websites for Saudi businesses from Jeddah: bilingual Arabic-English AI assistants, WhatsApp automation, ZATCA e-invoicing tools, and booking systems.",
      path: "/ai-for-saudi-business",
    }}
    heroMeta="Custom AI for Saudi businesses — built in Jeddah"
    heroTitle={
      <>
        AI for the Saudi market, <br />
        built inside it.
      </>
    }
    heroSub="Ingenuity Labs is based in Jeddah. We build custom AI systems, apps, and websites for Saudi businesses — bilingual by default, WhatsApp-first where your customers are, and aligned with local requirements like ZATCA e-invoicing."
    servicesKicker="What we build for Saudi businesses"
    services={[
      {
        title: "Bilingual AI assistants",
        description:
          "Customer-facing AI that answers in Arabic and English — on WhatsApp, on your website, or in your app — qualifying leads, booking appointments, and answering questions in the dialect your customers actually write in.",
      },
      {
        title: "WhatsApp-first automation",
        description:
          "In Saudi Arabia, business runs on WhatsApp. We build AI that lives there: instant replies to inquiries, order and booking flows, follow-ups, and a CRM record created from every conversation.",
        proof: "See our WhatsApp CRM product for a taste of the approach.",
      },
      {
        title: "Compliance & operations tooling",
        description:
          "ZATCA-compliant e-invoicing (Fatoora), Nitaqat tracking, booking systems, and the internal automation around them — built to fit how your operation already runs, in both languages.",
        proof:
          "Shipped in the Kingdom: ksaflagfootball.com, Saudi Arabia's official flag football organization.",
      },
    ]}
    faqs={[
      {
        q: "Do you build in Arabic?",
        a: "Yes — everything we ship for the Saudi market is bilingual Arabic-English, including right-to-left interfaces and AI that reads and writes natural Saudi Arabic, not textbook translations.",
      },
      {
        q: "Are you actually in Saudi Arabia?",
        a: "Yes. Ingenuity Labs is based in Jeddah, with Texas roots. We work on Saudi time, meet in person where it helps, and understand how business gets done in the Kingdom.",
      },
      {
        q: "Can you integrate with ZATCA e-invoicing requirements?",
        a: "Yes. We build Fatoora-compliant e-invoicing into the systems we ship and can retrofit compliance into your existing invoicing flow.",
      },
      {
        q: "What does a project cost and how fast is it?",
        a: "After a short scoping call we give you a fixed quote. Working prototypes typically take one to two weeks; production systems usually ship in four to eight weeks.",
      },
    ]}
    ctaTitle="Tell us about your business."
    ctaSub="A short call — Arabic or English — and we'll tell you honestly what AI can do for your operation, what it costs, and how fast you'd have it."
    related={{
      lead: "Curious what we ship? See",
      to: "/",
      label: "our studio homepage",
    }}
  />
);

export default AISaudiBusiness;
