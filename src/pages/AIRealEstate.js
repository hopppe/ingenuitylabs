import React from "react";
import NichePage from "../components/NichePage";

const AIRealEstate = () => (
  <NichePage
    seo={{
      title:
        "AI for Real Estate & Property Management — Custom Systems | Ingenuity Labs",
      description:
        "Custom AI for real estate teams and property managers: lead follow-up that never sleeps, tenant communications handled, lease and document review in minutes. Built by a studio with real estate development expertise.",
      path: "/ai-for-real-estate",
    }}
    heroMeta="AI for real estate teams & property managers"
    heroTitle={
      <>
        Every lead answered. <br />
        Every document read. <br />
        Every tenant heard.
      </>
    }
    heroSub="We build custom AI for real estate businesses — and we speak the language: our founding team includes a master's in real estate development. Lead response, tenant communications, and document work, running around the clock."
    servicesKicker="What we build for real estate businesses"
    services={[
      {
        title: "Lead response & qualification",
        description:
          "Portal inquiries, website forms, and missed calls answered in minutes with real answers about the property — then qualified and booked into a showing slot. Speed-to-lead decides who wins the listing conversation; AI makes you first, every time.",
      },
      {
        title: "Tenant & owner communications",
        description:
          "Maintenance requests triaged and dispatched, common questions answered instantly, rent reminders and renewal outreach sent on schedule — with a full record kept, and a human pulled in the moment judgment is needed.",
      },
      {
        title: "Lease & document intelligence",
        description:
          "Leases summarized to the terms that matter, key dates extracted into your calendar, deal memos drafted from the file, comps pulled into a one-page brief. The reading your team puts off, done before coffee.",
        proof:
          "We integrate with AppFolio, Buildium, Yardi, your MLS workflow, or plain spreadsheets and inboxes.",
      },
    ]}
    faqs={[
      {
        q: "Do you understand real estate, or just AI?",
        a: "Both. Our founding team pairs deep engineering with a master's in real estate development, so we know the difference between a lease abstract and a listing description before the project starts.",
      },
      {
        q: "Which property management systems do you work with?",
        a: "AppFolio, Buildium, Yardi, and most systems with an API or export. If your operation runs on spreadsheets and email, that works too — we build around what you have.",
      },
      {
        q: "Can the AI talk to tenants without embarrassing us?",
        a: "It answers in your voice, only within the boundaries you set, and hands the conversation to a human the moment something needs judgment. You review everything it sends until you're comfortable letting it run.",
      },
      {
        q: "What does it cost?",
        a: "After a short scoping call we give you a fixed quote and an honest answer about whether AI actually fixes your bottleneck. Prototypes take one to two weeks; production systems typically ship in four to eight.",
      },
    ]}
    ctaTitle="Tell us where the hours go."
    ctaSub="Fifteen minutes on a call and we'll tell you what's automatable in your operation, what it costs, and how fast you'd have it."
    related={{
      lead: "Also serving the trades — see",
      to: "/ai-for-home-services",
      label: "what we build for home-service companies",
    }}
  />
);

export default AIRealEstate;
