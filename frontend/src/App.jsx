import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Ambulances from "./pages/Ambulances";
import Hospitals from "./pages/Hospitals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import "./App.css";

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">

          <span className="badge">
            🩹 Emergency Care, Anytime, Anywhere
          </span>

          <h2 className="hero-heading">
            <span className="line-dark">Fast. Reliable.</span>
            <span className="line-red">Life-saving.</span>
          </h2>

          <p className="hero-text">
            CareTrack connects you to the nearest ambulance and hospital
            network in seconds, so help is never far away.
          </p>

          <div className="cta-group">
            <Link to="/ambulances" className="btn btn-primary">
              🚑 Request Ambulance <span>→</span>
            </Link>

            <Link to="/hospitals" className="btn btn-secondary">
              🏥 View Hospitals
            </Link>
          </div>

          <div className="trust-row">
            <span>
              <i className="check">✓</i> Real-time Tracking
            </span>

            <span>
              <i className="check">✓</i> Verified Hospitals
            </span>

            <span>
              <i className="check">✓</i> 24/7 Support
            </span>
          </div>

        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-hospital">🏥</div>
            <div className="visual-ambulance">🚑</div>

            <p className="visual-quote">
              "Because Every Second Counts" ♡
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">

        <div className="feature-card">
          <div className="feature-icon icon-red">🚑</div>
          <h3>Book Ambulance</h3>
          <p>Get nearest ambulance in just a few clicks.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon icon-blue">🏥</div>
          <h3>Find Hospitals</h3>
          <p>Locate nearby hospitals with real-time information.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon icon-green">📍</div>
          <h3>Live Tracking</h3>
          <p>Track ambulance location in real time.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon icon-purple">🛡️</div>
          <h3>Safe & Reliable</h3>
          <p>Verified network for your safety.</p>
        </div>

      </section>

      {/* Emergency Banner */}
      <footer className="emergency-banner">

        <div className="banner-left">
          <span className="banner-label">🩹 EMERGENCY?</span>

          <h2>We're here to help.</h2>

          <p>
            Quick access to medical care, when you need it the most.
          </p>
        </div>

        <div className="banner-pulse"></div>

        <div className="banner-right">

          <button className="btn btn-call">
            📞 Call Emergency Helpline <strong>102 / 108</strong>
          </button>

          <p className="banner-note">
            Your Health, Our Priority ♡
          </p>

        </div>

      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        {/* Navbar */}
        <nav className="navbar">

          <div className="nav-brand">

            <Link to="/" className="nav-brand">
              <span className="nav-logo">🚑</span>

              <div>
                <h1 className="nav-title">CareTrack</h1>

                <p className="nav-subtitle">
                  For a Safer Tomorrow
                </p>
              </div>
            </Link>

          </div>

          <ul className="nav-links">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/ambulances">Ambulances</Link>
            </li>

            <li>
              <Link to="/hospitals">Hospitals</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>

          <div className="nav-actions">

            <div className="search-box">
              <span>🔍</span>

              <input
                type="text"
                placeholder="Search hospitals, location..."
              />
            </div>

            <Link to="/login" className="btn btn-login">
              Login
            </Link>

          </div>

        </nav>

        {/* Pages */}
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/ambulances"
            element={<Ambulances />}
          />

          <Route
            path="/hospitals"
            element={<Hospitals />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;