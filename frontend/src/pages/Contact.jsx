import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* Header */}
      <section className="contact-header">
        <span className="badge">📞 Get in Touch</span>

        <h1>We're Here to Help</h1>

        <p>
          Have a question or need assistance? Contact the CareTrack
          support team and we'll be happy to help.
        </p>
      </section>

      {/* Contact Information */}
      <section className="contact-container">

        <div className="contact-info">

          <h2>Contact Information</h2>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h3>Emergency Helpline</h3>
              <p>102 / 108</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email Support</h3>
              <p>support@caretrack.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>Roorkee, Uttarakhand, India</p>
            </div>
          </div>

          <div className="contact-item">
            <span>🕐</span>
            <div>
              <h3>Support Hours</h3>
              <p>24/7 Emergency Support</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-card">

          <h2>Send Us a Message</h2>

          {submitted ? (
            <div className="success-message">
              <div>✅</div>
              <h3>Message Sent!</h3>
              <p>
                Thank you for contacting CareTrack. We'll get back
                to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
              />

              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />

              <label>Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                required
              />

              <label>Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                required
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Send Message →
              </button>

            </form>
          )}

        </div>

      </section>

      {/* Emergency Banner */}
      <section className="contact-emergency">
        <h2>🚨 Medical Emergency?</h2>

        <p>
          For immediate medical assistance, call the emergency
          helpline.
        </p>

        <button className="btn btn-call">
          📞 Call 102 / 108
        </button>
      </section>

    </div>
  );
}

export default Contact;