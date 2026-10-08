function About() {
  const steps = [
    {
      number: '01',
      icon: '📍',
      title: 'Enter Location',
      description: 'Share your current location or type your address so we know exactly where help is needed.',
    },
    {
      number: '02',
      icon: '🔍',
      title: 'Find Ambulance / Hospital',
      description: 'We instantly search our verified network to show you the nearest available ambulances and hospitals.',
    },
    {
      number: '03',
      icon: '✅',
      title: 'Select Service',
      description: 'Compare options by distance, rating and availability, then choose the one that fits your need.',
    },
    {
      number: '04',
      icon: '🚨',
      title: 'Get Emergency Assistance',
      description: 'Your request is confirmed instantly and help is on its way — track it in real time until it arrives.',
    },
  ];

  return (
    <div className="about-page">
      {/* Intro */}
      <section className="about-intro">
        <span className="badge">🩹 Our Mission</span>
        <h2>About CareTrack</h2>
        <p className="flow-subtext">
          CareTrack was built on a simple idea: in an emergency, every second
          matters. We connect people to the nearest ambulances and hospitals
          in seconds, so help is never far away.
        </p>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <h3 className="section-heading">How It Works</h3>

        <div className="steps-list">
          {steps.map((step, i) => (
            <div className="step-row" key={step.number}>
              <div className="step-marker">
                <span className="step-icon">{step.icon}</span>
                <span className="step-number">{step.number}</span>
              </div>

              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>

              {i < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon icon-red">⚡</div>
          <h3>Speed</h3>
          <p>Every workflow is built to shave seconds off response time.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon icon-blue">🤝</div>
          <h3>Trust</h3>
          <p>Every hospital and ambulance on our network is verified.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon icon-green">🌍</div>
          <h3>Access</h3>
          <p>Available anytime, anywhere, for anyone who needs it.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon icon-purple">🛡️</div>
          <h3>Safety</h3>
          <p>Real-time tracking keeps you informed every step of the way.</p>
        </div>
      </section>
    </div>
  );
}

export default About;