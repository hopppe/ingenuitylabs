import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import aboutImg from "../assets/aboutpage.avif";

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
            <div className="project-card">
              <h3>EquiSplit</h3>
              <p>An innovative iOS expense splitting application with a clean, intuitive UI and practical design that makes managing shared costs simple and transparent.</p>
              <Link 
                                  to="/equisplit" 
                className="project-link"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="project-card">
              <h3>Arabic Stories</h3>
              <p>An AI-powered language learning platform that creates personalized Arabic stories. Users can choose topics, vocabulary, difficulty levels, and dialects to generate interactive stories with word-by-word English translations.</p>
              <a 
                href="https://arabic-stories.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Site →
              </a>
            </div>
            
            <div className="project-card">
              <h3>HiyaTrip</h3>
              <p>An intelligent AI travel planner that creates comprehensive trip plans based on your destination, dates, interests, and custom preferences. Features detailed itineraries, interactive maps, and budget planning.</p>
              <a 
                href="https://www.hiyatrip.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Site →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;