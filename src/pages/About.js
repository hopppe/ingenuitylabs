import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import aboutImg from "../assets/aboutpage.avif";
import prayerPauseIcon from "../assets/prayerpause-icon.png";
import salahShieldIcon from "../assets/salahshield-icon.png";

const PROJECTS = [
  {
    name: "Prayer Pause",
    icon: prayerPauseIcon,
    platform: "iOS",
    description: "Block distracting apps until you complete your daily prayer or scripture memory session. Build a daily habit of putting God first, before your phone.",
    linkLabel: "Learn More",
    linkTo: "/prayer-pause",
    internal: true,
  },
  {
    name: "EquiSplit",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/33/8f/b9/338fb9d9-afa2-8071-2709-74f67ffcf5ba/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
    platform: "iOS",
    description: "An innovative iOS expense splitting app with a clean, intuitive UI that makes managing shared costs simple and transparent. Free, forever.",
    linkLabel: "Learn More",
    linkTo: "/equisplit",
    internal: true,
  },
  {
    name: "Kingdom Arabic",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/da/77/6e/da776ea8-7c74-af01-7216-f47adbc82657/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
    platform: "iOS & Android",
    description: "Learn Arabic through Bible reading and spaced repetition flashcards. Read the complete Arabic Bible with instant word translations, then master vocabulary with an Anki-style learning system.",
    linkLabel: "Learn More",
    linkTo: "/kingdom-arabic",
    internal: true,
  },
  {
    name: "HiyaTrip",
    icon: "https://www.hiyatrip.com/hiya-logo.png",
    platform: "Web",
    description: "An intelligent AI travel planner that creates comprehensive trip plans based on your destination, dates, interests, and preferences. Features detailed itineraries and budget planning.",
    linkLabel: "Visit Site",
    linkTo: "https://www.hiyatrip.com",
    internal: false,
  },
  {
    name: "Star Date",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/24/ed/ba/24edba6c-b4bc-ab01-5d94-a1229d4681bf/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
    platform: "iOS",
    description: "Discover what the universe looked like on the days that matter most. Enter any date and see the actual NASA Astronomy Picture of the Day from that moment in time.",
    linkLabel: "Learn More",
    linkTo: "/star-date",
    internal: true,
  },
  {
    name: "anaFluent",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4b/6b/46/4b6b46cf-8f80-1561-3eae-6d227b7ad050/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
    platform: "iOS & Android",
    description: "A comprehensive English learning app powered by AI. Practice with real-time voice conversations, CEFR-aligned lessons, spaced repetition flashcards, and personalized daily plans.",
    linkLabel: "Visit Site",
    linkTo: "https://anafluent.com",
    internal: false,
  },
  {
    name: "KSA Flag Football",
    iconText: "KSAFF",
    platform: "Web",
    description: "Saudi Arabia's official flag football organization. Operates 14 teams across 3 regions with 130+ players, preparing athletes for the 2028 LA Olympics. Every body counts.",
    linkLabel: "Visit Site",
    linkTo: "https://www.ksaflagfootball.com",
    internal: false,
  },
  {
    name: "SalahShield",
    icon: salahShieldIcon,
    platform: "iOS",
    description: "Block distracting apps until you complete your daily salah. Track all five prayers with accurate times, Quran ayahs in Arabic + English, and a guided prayer flow.",
    linkLabel: "Learn More",
    linkTo: "/salah-shield",
    internal: true,
  },
];

const About = () => {
  return (
    <main className="about">
      <section className="about-header">
        <div className="about-text">
          <h1>Who we are</h1>
          <div className="about-content">
            <p className="about-intro">
              <strong>Ingenuity Labs was born in Texas, but built with a global mindset.</strong> Our founders bring
              together deep technical expertise—a PhD in
              engineering—and strategic vision through a
              master's in real estate development. This unique
              blend allows us to approach challenges from both
              the ground up and the big picture. We specialize
              in crafting personalized solutions that are as
              adaptable as the future demands. Whether it's
              designing intelligent software, engineering
              complex systems, or navigating emerging
              technologies, we're built to evolve—just like the
              world we're shaping. We are currently located in Jeddah, Saudi Arabia.
            </p>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="Design chair" />
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-container">
          <h2>Our Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <div className="project-card" key={project.name}>
                <div className="project-card-top">
                  {project.iconText ? (
                    <div className="project-icon-wrap project-icon-text">
                      {project.iconText}
                    </div>
                  ) : (
                    <div className="project-icon-wrap">
                      <img
                        src={project.icon}
                        alt={`${project.name} icon`}
                        className="project-icon"
                      />
                    </div>
                  )}
                  <div className="project-title-group">
                    <h3>{project.name}</h3>
                    <span className="project-platform">{project.platform}</span>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                {project.internal ? (
                  <Link to={project.linkTo} className="project-link">
                    {project.linkLabel} →
                  </Link>
                ) : (
                  <a
                    href={project.linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.linkLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
