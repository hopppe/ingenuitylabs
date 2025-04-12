import React from "react";
import "./Home.css";
import heroImg from "../assets/hero.png";
import featureImg from "../assets/feature.avif";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="text">
          <h1>Building<br />What's Next</h1>
          <p>Apps. AI. Engineering. We turn complex<br />problems into elegant solutions.</p>
          <a href="/about" className="btn">Learn more</a>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Modern sculpture" />
        </div>
      </section>

      <section className="feature">
        <div className="feature-image">
          <img src={featureImg} alt="Design object" />
        </div>
        <div className="text">
          <h2>What We Do:<br />Design Clarity, Build<br /> Momentum</h2>
          <p>
            We build custom apps, design advanced<br />
            engineering systems, and offer AI consulting<br />
            tailored to your toughest challenges.
          </p>
          <a href="/about" className="btn">Learn more</a>
        </div>
      </section>
    </main>
  );
};

export default Home;