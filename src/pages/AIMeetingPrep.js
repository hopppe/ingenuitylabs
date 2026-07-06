import React from "react";
import NichePage from "../components/NichePage";

const AIMeetingPrep = () => (
  <NichePage
    seo={{
      title:
        "AI Meeting Prep & CRM Automation for Sales and Service Teams | Ingenuity Labs",
      description:
        "Custom AI that briefs your team before every meeting — CRM history, email threads, open proposals — and keeps the CRM updated afterward. Built around HubSpot, Salesforce, or whatever you run.",
      path: "/ai-meeting-prep",
    }}
    heroMeta="AI meeting prep & CRM automation for client-facing teams"
    heroTitle={
      <>
        Walk into every meeting <br />
        already caught up.
      </>
    }
    heroSub="We build custom AI that reads your CRM, inbox, and calendar, then hands each person a briefing before every call — who they're meeting, where the deal stands, what to open with. After the call, it files the notes and updates the record."
    servicesKicker="What we build for client-facing teams"
    services={[
      {
        title: "Morning briefings",
        description:
          "By eight, everyone has a brief for the day's meetings: the relationship history, the open proposal and whether it's been read, the sticking point from the last call, and a suggested opener. Pulled from the systems you already keep — nobody compiles anything.",
      },
      {
        title: "CRM that updates itself",
        description:
          "The most expensive lie in sales data is the empty CRM field. Our systems draft the post-call notes, log the activity, update deal stages, and flag follow-ups — your team just approves. Pipeline reviews stop being archaeology.",
      },
      {
        title: "Follow-ups that never slip",
        description:
          "Replies drafted in your voice within minutes of a meeting ending, proposals nudged when they've gone quiet, and next steps booked while the conversation is still warm.",
        proof:
          "We build on HubSpot, Salesforce, Pipedrive, Google Workspace, Outlook, and Slack — or your in-house tools.",
      },
    ]}
    faqs={[
      {
        q: "Which CRMs and calendars can the AI connect to?",
        a: "HubSpot, Salesforce, Pipedrive, Google Workspace, Microsoft Outlook, Slack, and most tools with an API. If you run something in-house, we build the connection as part of the project.",
      },
      {
        q: "How is this different from the AI features inside my CRM?",
        a: "Built-in AI features summarize what's inside that one tool. We build across your tools — CRM plus inbox plus calendar plus documents — and shape the output around how your team actually sells or serves, not a vendor's generic template.",
      },
      {
        q: "Is our customer data safe?",
        a: "Yes. Data stays in infrastructure you control, access mirrors the permissions your team already has, and we configure the AI so your data is never used to train public models.",
      },
      {
        q: "How long until the team sees value?",
        a: "A working prototype on your real data typically takes one to two weeks. Most teams have daily briefings in production within a month.",
      },
    ]}
    ctaTitle="Tell us how your team preps today."
    ctaSub="Fifteen minutes on a call and we'll tell you what's automatable, what it costs, and how fast you'd have it — honestly."
    related={{
      lead: "Run a home-service company? See",
      to: "/ai-for-home-services",
      label: "what we build for the trades",
    }}
  />
);

export default AIMeetingPrep;
