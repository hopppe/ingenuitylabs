import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    // Form will still submit to Formspree, this just handles showing the confirmation
    setSubmitted(true);
  };
  
  return (
    <main className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p className="contact-intro">Have a challenge in mind? Let's talk.</p>

          {submitted ? (
            <div className="success-message">
              <h2>Thank you for your message!</h2>
              <p>We'll get back to you as soon as possible.</p>
              <button onClick={() => setSubmitted(false)} className="btn">Send another message</button>
            </div>
          ) : (
            <form action="https://formspree.io/f/mpwpbavr" method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>
                  Name <span className="required">(required)</span>
                </label>
                <div className="name-fields">
                  <div className="input-group">
                    <label htmlFor="firstName" className="sublabel">First Name</label>
                    <input id="firstName" name="firstName" type="text" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="lastName" className="sublabel">Last Name</label>
                    <input id="lastName" name="lastName" type="text" required />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>
                  Email <span className="required">(required)</span>
                </label>
                <input name="email" type="email" required />
              </div>

              <div className="form-group">
                <label>
                  Message <span className="required">(required)</span>
                </label>
                <textarea name="message" required></textarea>
              </div>

              <button type="submit" className="send-button">SEND</button>
            </form>
          )}
        </div>
        <div className="contact-image">
          {/* This will be styled with a background image in CSS */}
        </div>
      </div>
    </main>
  );
};

export default Contact;