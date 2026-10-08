import { useState } from 'react';

const MOCK_HOSPITALS = [
  {
    id: 1,
    name: 'City Care Multispeciality Hospital',
    location: 'Rajpur Road, Dehradun',
    distance: '1.8 km',
    rating: 4.6,
    beds: 12,
    emergency: true,
    icon: '🏥',
    specialties: ['Cardiology', 'Trauma Care', 'ICU'],
    phone: '+91 98765 43210',
  },
  {
    id: 2,
    name: 'Sunrise General Hospital',
    location: 'Race Course Road, Dehradun',
    distance: '3.2 km',
    rating: 4.3,
    beds: 5,
    emergency: true,
    icon: '🏥',
    specialties: ['General Medicine', 'Orthopedics'],
    phone: '+91 98765 11223',
  },
  {
    id: 3,
    name: 'Green Valley Hospital',
    location: 'Sahastradhara Road, Dehradun',
    distance: '4.5 km',
    rating: 4.1,
    beds: 0,
    emergency: false,
    icon: '🏥',
    specialties: ['Pediatrics', 'Gynecology'],
    phone: '+91 98765 99887',
  },
];

function Hospitals() {
  const [step, setStep] = useState('location'); // location | list | details | selected
  const [location, setLocation] = useState('');
  const [selected, setSelected] = useState(null);

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    if (location.trim() === '') return;
    setStep('list');
  };

  const handleUseCurrentLocation = () => {
    setLocation('Current Location (GPS)');
    setStep('list');
  };

  const handleViewDetails = (hospital) => {
    setSelected(hospital);
    setStep('details');
  };

  const handleSelectHospital = () => {
    setStep('selected');
  };

  const handleStartOver = () => {
    setStep('location');
    setLocation('');
    setSelected(null);
  };

  return (
    <div className="ambulances-page">
      {/* Progress indicator */}
      <div className="progress-bar">
        {['location', 'list', 'details', 'selected'].map((s, i) => (
          <div
            key={s}
            className={`progress-step ${
              ['location', 'list', 'details', 'selected'].indexOf(step) >= i ? 'active' : ''
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
          <h2>Where should we search?</h2>
          <p className="flow-subtext">
            Enter your location to find nearby hospitals with real-time availability.
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
              🔍 Search Hospitals
            </button>
          </form>

          <button className="btn btn-secondary btn-gps" onClick={handleUseCurrentLocation}>
            📌 Use My Current Location
          </button>
        </section>
      )}

      {/* Step 2: Nearby hospitals list */}
      {step === 'list' && (
        <section className="flow-card flow-card-wide">
          <span className="badge">🏥 Step 2 of 3</span>
          <h2>Hospitals near you</h2>
          <p className="flow-subtext">
            Showing results for: <strong>{location}</strong>
          </p>

          <div className="ambulance-list">
            {MOCK_HOSPITALS.map((h) => (
              <div key={h.id} className="hospital-card">
                <div className="ambulance-icon">{h.icon}</div>
                <div className="ambulance-info">
                  <h3>{h.name}</h3>
                  <p>📍 {h.location}</p>
                  <div className="ambulance-meta">
                    <span>📏 {h.distance}</span>
                    <span>⭐ {h.rating}</span>
                    <span>🛏️ {h.beds} beds</span>
                  </div>
                  <span className={`emergency-tag ${h.emergency ? 'available' : 'unavailable'}`}>
                    {h.emergency ? '🚨 Emergency Available' : '⛔ Emergency Unavailable'}
                  </span>
                </div>
                <button className="btn btn-secondary" onClick={() => handleViewDetails(h)}>
                  View Details
                </button>
              </div>
            ))}
          </div>

          <button className="link-back" onClick={() => setStep('location')}>
            ← Change location
          </button>
        </section>
      )}

      {/* Step 3: Hospital details */}
      {step === 'details' && selected && (
        <section className="flow-card">
          <span className="badge">🏥 Step 3 of 3</span>
          <h2>{selected.name}</h2>
          <p className="flow-subtext">📍 {selected.location}</p>

          <div className="eta-box">
            <div>
              <p className="eta-label">Distance</p>
              <p className="eta-value">{selected.distance}</p>
            </div>
            <div>
              <p className="eta-label">Rating</p>
              <p className="eta-value">⭐ {selected.rating}</p>
            </div>
            <div>
              <p className="eta-label">Beds</p>
              <p className="eta-value">{selected.beds}</p>
            </div>
          </div>

          <span className={`emergency-tag ${selected.emergency ? 'available' : 'unavailable'}`}>
            {selected.emergency ? '🚨 Emergency Available' : '⛔ Emergency Unavailable'}
          </span>

          <div className="details-block">
            <h3>Specialties</h3>
            <div className="specialty-tags">
              {selected.specialties.map((s) => (
                <span key={s} className="specialty-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="details-block">
            <h3>Contact</h3>
            <p className="flow-subtext">📞 {selected.phone}</p>
          </div>

          <div className="cta-group">
            <button
              className="btn btn-primary"
              disabled={selected.beds === 0}
              onClick={handleSelectHospital}
            >
              🏥 Select Hospital
            </button>
            <button className="btn btn-secondary" onClick={() => setStep('list')}>
              Back
            </button>
          </div>

          {selected.beds === 0 && (
            <p className="no-beds-note">No beds currently available at this hospital.</p>
          )}
        </section>
      )}

      {/* Step 4: Selected confirmation */}
      {step === 'selected' && selected && (
        <section className="flow-card confirmation-card">
          <div className="confirm-icon">✅</div>
          <h2>Hospital Selected</h2>
          <p className="flow-subtext">
            {selected.name} has been noted for your visit.
          </p>

          <div className="booking-summary">
            <div className="summary-row">
              <span>Hospital</span>
              <strong>{selected.name}</strong>
            </div>
            <div className="summary-row">
              <span>Location</span>
              <strong>{selected.location}</strong>
            </div>
            <div className="summary-row">
              <span>Distance</span>
              <strong>{selected.distance}</strong>
            </div>
            <div className="summary-row">
              <span>Beds Available</span>
              <strong>{selected.beds}</strong>
            </div>
            <div className="summary-row">
              <span>Contact</span>
              <strong>{selected.phone}</strong>
            </div>
          </div>

          <div className="cta-group">
            <button className="btn btn-primary">🚑 Request Ambulance to Here</button>
            <button className="btn btn-secondary" onClick={handleStartOver}>
              Search Again
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default Hospitals;