import { useState } from 'react';

const MOCK_AMBULANCES = [
  {
    id: 1,
    type: 'Basic Life Support',
    vehicleNumber: 'DL 01 AB 4521',
    driver: 'Rajesh Kumar',
    rating: 4.8,
    distance: '1.2 km',
    eta: '4 min',
    icon: '🚑',
  },
  {
    id: 2,
    type: 'Advanced Life Support',
    vehicleNumber: 'DL 03 CD 7890',
    driver: 'Suresh Patel',
    rating: 4.9,
    distance: '2.5 km',
    eta: '7 min',
    icon: '🚑',
  },
  {
    id: 3,
    type: 'ICU Ambulance',
    vehicleNumber: 'DL 05 EF 1234',
    driver: 'Amit Sharma',
    rating: 4.7,
    distance: '3.1 km',
    eta: '9 min',
    icon: '🚑',
  },
];

function Ambulances() {
  const [step, setStep] = useState('location'); // location | list | details | requesting | confirmed
  const [location, setLocation] = useState('');
  const [selected, setSelected] = useState(null);
  const [bookingId, setBookingId] = useState(null);

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    if (location.trim() === '') return;
    setStep('list');
  };

  const handleUseCurrentLocation = () => {
    setLocation('Current Location (GPS)');
    setStep('list');
  };

  const handleSelectAmbulance = (ambulance) => {
    setSelected(ambulance);
    setStep('details');
  };

  const handleRequestAmbulance = () => {
    setStep('requesting');
    setTimeout(() => {
      const id = 'MT' + Math.floor(100000 + Math.random() * 900000);
      setBookingId(id);
      setStep('confirmed');
    }, 1500);
  };

  const handleStartOver = () => {
    setStep('location');
    setLocation('');
    setSelected(null);
    setBookingId(null);
  };

  return (
    <div className="ambulances-page">
      {/* Progress indicator */}
      <div className="progress-bar">
        {['location', 'list', 'details', 'confirmed'].map((s, i) => (
          <div
            key={s}
            className={`progress-step ${
              ['location', 'list', 'details', 'requesting', 'confirmed'].indexOf(step) >= i
                ? 'active'
                : ''
            }`}
          >
            <span className="progress-dot">{i + 1}</span>
            {i < 3 && <span className="progress-line"></span>}
          </div>
        ))}
      </div>

      {/* Step 1: Location */}
      {step === 'location' && (
        <section className="flow-card">
          <span className="badge">📍 Step 1 of 3</span>
          <h2>Where do you need the ambulance?</h2>
          <p className="flow-subtext">
            Enter your location so we can find the nearest available ambulances.
          </p>

          <form className="location-form" onSubmit={handleLocationSubmit}>
            <input
              type="text"
              placeholder="Enter address, area or landmark..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="location-input"
            />
            <button type="submit" className="btn btn-primary">
              Find Ambulances <span>→</span>
            </button>
          </form>

          <button className="btn btn-secondary btn-gps" onClick={handleUseCurrentLocation}>
            📌 Use My Current Location
          </button>
        </section>
      )}

      {/* Step 2: Available ambulances */}
      {step === 'list' && (
        <section className="flow-card flow-card-wide">
          <span className="badge">🚑 Step 2 of 3</span>
          <h2>Available ambulances near you</h2>
          <p className="flow-subtext">
            Pickup location: <strong>{location}</strong>
          </p>

          <div className="ambulance-list">
            {MOCK_AMBULANCES.map((a) => (
              <div key={a.id} className="ambulance-card">
                <div className="ambulance-icon">{a.icon}</div>
                <div className="ambulance-info">
                  <h3>{a.type}</h3>
                  <p>{a.vehicleNumber}</p>
                  <div className="ambulance-meta">
                    <span>📏 {a.distance}</span>
                    <span>⏱ {a.eta}</span>
                    <span>⭐ {a.rating}</span>
                  </div>
                </div>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleSelectAmbulance(a)}
                >
                  Select
                </button>
              </div>
            ))}
          </div>

          <button className="link-back" onClick={() => setStep('location')}>
            ← Change location
          </button>
        </section>
      )}

      {/* Step 3: Driver + vehicle + ETA */}
      {step === 'details' && selected && (
        <section className="flow-card">
          <span className="badge">🧑‍⚕️ Step 3 of 3</span>
          <h2>Confirm your ambulance</h2>

          <div className="driver-card">
            <div className="driver-avatar">👨‍⚕️</div>
            <div className="driver-info">
              <h3>{selected.driver}</h3>
              <p>{selected.type}</p>
              <div className="ambulance-meta">
                <span>⭐ {selected.rating}</span>
                <span>🚑 {selected.vehicleNumber}</span>
              </div>
            </div>
          </div>

          <div className="eta-box">
            <div>
              <p className="eta-label">Estimated arrival</p>
              <p className="eta-value">{selected.eta}</p>
            </div>
            <div>
              <p className="eta-label">Distance</p>
              <p className="eta-value">{selected.distance}</p>
            </div>
          </div>

          <div className="cta-group">
            <button className="btn btn-primary" onClick={handleRequestAmbulance}>
              🚑 Request Ambulance
            </button>
            <button className="btn btn-secondary" onClick={() => setStep('list')}>
              Back
            </button>
          </div>
        </section>
      )}

      {/* Requesting state */}
      {step === 'requesting' && (
        <section className="flow-card">
          <div className="spinner"></div>
          <h2>Requesting ambulance...</h2>
          <p className="flow-subtext">Please wait while we confirm your booking.</p>
        </section>
      )}

      {/* Step 4: Confirmation */}
      {step === 'confirmed' && selected && (
        <section className="flow-card confirmation-card">
          <div className="confirm-icon">✅</div>
          <h2>Ambulance on the way!</h2>
          <p className="flow-subtext">Your booking has been confirmed.</p>

          <div className="booking-summary">
            <div className="summary-row">
              <span>Booking ID</span>
              <strong>{bookingId}</strong>
            </div>
            <div className="summary-row">
              <span>Driver</span>
              <strong>{selected.driver}</strong>
            </div>
            <div className="summary-row">
              <span>Vehicle</span>
              <strong>{selected.vehicleNumber}</strong>
            </div>
            <div className="summary-row">
              <span>ETA</span>
              <strong>{selected.eta}</strong>
            </div>
            <div className="summary-row">
              <span>Pickup</span>
              <strong>{location}</strong>
            </div>
          </div>

          <div className="cta-group">
            <button className="btn btn-primary">📞 Call Driver</button>
            <button className="btn btn-secondary" onClick={handleStartOver}>
              Book Another
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default Ambulances;