import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
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
            <form onSubmit={handleSubmit}>
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

              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="send-button" disabled={sending}>
                {sending ? "SENDING..." : "SEND"}
              </button>
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