import React from "react";
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
              world we're shaping.
            </p>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="Design chair" />
        </div>
      </section>
    </main>
  );
};

export default About;