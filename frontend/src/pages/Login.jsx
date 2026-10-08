import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({ identifier: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.identifier.trim() === '' || form.password.trim() === '') {
      setError('Please enter both email/mobile and password.');
      return;
    }
    // TODO: replace with real authentication API call
    setError('');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setForm({ identifier: '', password: '' });
    setRememberMe(false);
  };

  const dashboardItems = [
    {
      icon: '🚑',
      title: 'Request Ambulance',
      description: 'Book the nearest available ambulance instantly.',
      action: () => navigate('/ambulances'),
    },
    {
      icon: '🏥',
      title: 'Find Hospital',
      description: 'Search verified hospitals near your location.',
      action: () => navigate('/hospitals'),
    },
    {
      icon: '📍',
      title: 'Track Ambulance',
      description: 'View live location of your requested ambulance.',
      action: () => alert('Live tracking coming soon.'),
    },
    {
      icon: '📋',
      title: 'Booking History',
      description: 'See your past ambulance and hospital bookings.',
      action: () => alert('Booking history coming soon.'),
    },
  ];

  if (isLoggedIn) {
    return (
      <div className="dashboard-page">
        <section className="dashboard-header">
          <span className="badge">👋 Welcome back</span>
          <h2>Your Dashboard</h2>
          <p className="flow-subtext">
            {form.identifier} — choose what you need help with.
          </p>
        </section>

        <div className="dashboard-grid">
          {dashboardItems.map((item) => (
            <button
              className="dashboard-card"
              key={item.title}
              onClick={item.action}
            >
              <div className="dashboard-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </button>
          ))}
        </div>

        <button className="link-back" onClick={handleLogout}>
          ← Logout
        </button>
      </div>
    );
  }

  return (
    <div className="login-page">
      <section className="flow-card login-card">
        <div className="login-logo">🚑</div>
        <h2>Login to CareTrack</h2>
        <p className="flow-subtext">
          Access your dashboard to request ambulances, find hospitals and
          track bookings.
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="identifier">Email / Mobile Number</label>
            <input
              id="identifier"
              name="identifier"
              type="text"
              placeholder="you@example.com or 98765 43210"
              value={form.identifier}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <span className="forgot-password">Forgot Password?</span>
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn btn-primary btn-full">
            Login
          </button>
        </form>

        <p className="login-footer">
          Don't have an account?{' '}
          <Link to="/register" className="login-link">Register</Link>
        </p>

        <a href="tel:108" className="emergency-call-link">
          📞 Call 102 / 108
        </a>
      </section>
    </div>
  );
}

export default Login;