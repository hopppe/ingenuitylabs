import React, { useState, useEffect } from "react";
import "./AIClassForm.css";

const AIClassForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Consultation Intake — Ingenuity Labs";
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setFormValues(data);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <main className="aiclass-form">
      <div className="aiclass-form-container">
        <header className="aiclass-form-header">
          <div className="aiclass-form-badge">AI for Business Leaders · Session 1 Exercise</div>
          <h1>AI Consultation Intake</h1>
          <p className="aiclass-form-subtitle">
            A practice form to fill out with Claude in Chrome. Open the Claude side
            panel, give it the company profile document from your course materials,
            and ask it to fill in every field below — but stop before submitting so
            you can review.
          </p>
          <a
            className="aiclass-form-download"
            href="/session1-samples.zip"
            download
          >
            <span className="aiclass-form-download-icon" aria-hidden="true">↓</span>
            <span className="aiclass-form-download-text">
              <strong>Download Session 1 samples</strong>
              <span>company profile, messy folder, sales CSV — everything you need for today</span>
            </span>
          </a>
        </header>

        {submitted ? (
          <div className="aiclass-form-success">
            <div className="aiclass-form-success-icon">✓</div>
            <h2>Nice work.</h2>
            <p>
              Claude filled the form for you — here's what it submitted. In a real
              workflow this would go to the Ingenuity Labs sales team. For this
              exercise, compare what Claude typed against the profile document.
            </p>
            <div className="aiclass-form-review">
              {Object.entries(formValues).map(([key, val]) => (
                <div key={key} className="aiclass-form-review-row">
                  <span className="aiclass-form-review-label">{key}</span>
                  <span className="aiclass-form-review-value">{val || "—"}</span>
                </div>
              ))}
            </div>
            <button
              className="aiclass-form-btn"
              onClick={() => setSubmitted(false)}
            >
              Run the exercise again
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="aiclass-form-body">
            <section className="aiclass-form-section">
              <h3>Company</h3>

              <div className="aiclass-form-group">
                <label htmlFor="companyName">
                  Company name <span className="required">*</span>
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  placeholder="e.g. Al-Noor Logistics"
                />
              </div>

              <div className="aiclass-form-row">
                <div className="aiclass-form-group">
                  <label htmlFor="industry">
                    Industry <span className="required">*</span>
                  </label>
                  <select id="industry" name="industry" required defaultValue="">
                    <option value="" disabled>
                      Select industry
                    </option>
                    <option>Retail / E-commerce</option>
                    <option>Logistics & Supply Chain</option>
                    <option>Finance / Banking</option>
                    <option>Healthcare</option>
                    <option>Real Estate</option>
                    <option>Education</option>
                    <option>Energy</option>
                    <option>Food & Beverage</option>
                    <option>Professional Services</option>
                    <option>Manufacturing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="aiclass-form-group">
                  <label htmlFor="companySize">
                    Company size <span className="required">*</span>
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select size
                    </option>
                    <option>1–10 employees</option>
                    <option>11–50 employees</option>
                    <option>51–250 employees</option>
                    <option>251–1,000 employees</option>
                    <option>1,000+ employees</option>
                  </select>
                </div>
              </div>

              <div className="aiclass-form-row">
                <div className="aiclass-form-group">
                  <label htmlFor="annualRevenue">Annual revenue (SAR)</label>
                  <select
                    id="annualRevenue"
                    name="annualRevenue"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select range
                    </option>
                    <option>Under 1M</option>
                    <option>1M – 5M</option>
                    <option>5M – 25M</option>
                    <option>25M – 100M</option>
                    <option>100M – 500M</option>
                    <option>500M+</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>

                <div className="aiclass-form-group">
                  <label htmlFor="city">City</label>
                  <select id="city" name="city" defaultValue="">
                    <option value="" disabled>
                      Select city
                    </option>
                    <option>Riyadh</option>
                    <option>Jeddah</option>
                    <option>Dammam</option>
                    <option>Mecca</option>
                    <option>Medina</option>
                    <option>Abha</option>
                    <option>Khobar</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="aiclass-form-section">
              <h3>Primary contact</h3>

              <div className="aiclass-form-row">
                <div className="aiclass-form-group">
                  <label htmlFor="contactName">
                    Full name <span className="required">*</span>
                  </label>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    required
                    placeholder="e.g. Faisal Al-Otaibi"
                  />
                </div>

                <div className="aiclass-form-group">
                  <label htmlFor="title">Title / role</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="e.g. Chief Operating Officer"
                  />
                </div>
              </div>

              <div className="aiclass-form-row">
                <div className="aiclass-form-group">
                  <label htmlFor="email">
                    Work email <span className="required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.sa"
                  />
                </div>

                <div className="aiclass-form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+966 ..."
                  />
                </div>
              </div>
            </section>

            <section className="aiclass-form-section">
              <h3>What brings you in</h3>

              <div className="aiclass-form-group">
                <label htmlFor="primaryChallenge">
                  Primary business challenge you want AI to help with{" "}
                  <span className="required">*</span>
                </label>
                <textarea
                  id="primaryChallenge"
                  name="primaryChallenge"
                  rows="4"
                  required
                  placeholder="Describe the biggest problem you're trying to solve..."
                />
              </div>

              <div className="aiclass-form-group">
                <label>AI experience level</label>
                <div className="aiclass-form-radios">
                  <label className="aiclass-form-radio">
                    <input type="radio" name="aiExperience" value="None" />
                    <span>None — brand new to AI</span>
                  </label>
                  <label className="aiclass-form-radio">
                    <input type="radio" name="aiExperience" value="Some" />
                    <span>Some — tried ChatGPT / Claude casually</span>
                  </label>
                  <label className="aiclass-form-radio">
                    <input type="radio" name="aiExperience" value="Advanced" />
                    <span>Advanced — already using AI in my business</span>
                  </label>
                </div>
              </div>

              <div className="aiclass-form-row">
                <div className="aiclass-form-group">
                  <label htmlFor="timeline">Preferred start timeline</label>
                  <select id="timeline" name="timeline" defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>Within 3 months</option>
                    <option>Within 6 months</option>
                    <option>Just exploring</option>
                  </select>
                </div>

                <div className="aiclass-form-group">
                  <label htmlFor="budget">Budget range (SAR)</label>
                  <select id="budget" name="budget" defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option>Under 50K</option>
                    <option>50K – 150K</option>
                    <option>150K – 500K</option>
                    <option>500K – 1M</option>
                    <option>1M+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="aiclass-form-group">
                <label htmlFor="notes">Anything else we should know?</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Vision 2030 alignment, data residency, Arabic-language needs, etc."
                />
              </div>
            </section>

            <div className="aiclass-form-actions">
              <button type="submit" className="aiclass-form-btn aiclass-form-btn-primary">
                Submit intake
              </button>
              <p className="aiclass-form-reminder">
                Exercise tip: ask Claude to <strong>stop before submitting</strong>{" "}
                so you can review what it typed.
              </p>
            </div>
          </form>
        )}
      </div>
    </main>
  );
};

export default AIClassForm;
