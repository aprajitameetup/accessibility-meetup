import React, { useState } from 'react';
import './ColorBlindPage.css';

function ColorBlindPage() {
  const [isColorBlindMode, setIsColorBlindMode] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    age: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age < 18) {
      newErrors.age = 'Must be 18 or older';
    }
    
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <header role="banner">
        <h1>Color Accessibility Demo</h1>
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="#main-content">Skip to main content</a></li>
            <li><a href="#color-blind-toggle">Toggle Color Blind Mode</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" role="main">
        <section aria-labelledby="demo-heading">
          <h2 id="demo-heading">Color-Only Error Indicators vs. Accessible Patterns</h2>
          
          <div className="demo-controls">
            <button 
              id="color-blind-toggle"
              onClick={() => setIsColorBlindMode(!isColorBlindMode)}
              className={`toggle-button ${isColorBlindMode ? 'active' : ''}`}
              aria-pressed={isColorBlindMode}
            >
              {isColorBlindMode ? 'Normal Vision Mode' : 'Color Blind Simulation Mode'}
            </button>
            <p className="demo-instruction">
              {isColorBlindMode 
                ? '🔍 Color Blind Mode: Notice how error states become nearly invisible!' 
                : '👁️ Normal Vision: All errors are clearly visible with red colors'
              }
            </p>
          </div>

          <div className={`color-blind-simulator ${isColorBlindMode ? 'active' : ''}`}>
            <div className="demo-section">
              <h3>❌ Problem: Color-Only Error Indicators</h3>
              <p>This form uses only red text and red borders to indicate errors. Color-blind users may not see these errors!</p>
              
              <form onSubmit={handleSubmit} className="problematic-form">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error-input' : ''}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error-input' : ''}
                    aria-invalid={!!errors.password}
                  />
                  {errors.password && (
                    <span className="error-text">{errors.password}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password *</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'error-input' : ''}
                    aria-invalid={!!errors.confirmPassword}
                  />
                  {errors.confirmPassword && (
                    <span className="error-text">{errors.confirmPassword}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error-input' : ''}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <span className="error-text">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="age">Age *</label>
                  <input 
                    type="number" 
                    id="age" 
                    name="age" 
                    value={formData.age}
                    onChange={handleChange}
                    className={errors.age ? 'error-input' : ''}
                    aria-invalid={!!errors.age}
                  />
                  {errors.age && (
                    <span className="error-text">{errors.age}</span>
                  )}
                </div>

                <button type="submit" className="submit-button">
                  Submit Form
                </button>
              </form>
            </div>

            <div className="demo-section">
              <h3>✅ Solution: Accessible Error Patterns</h3>
              <p>This form uses multiple indicators: icons, text, borders, and ARIA attributes for comprehensive accessibility.</p>
              
              <form className="accessible-form">
                <div className="form-group">
                  <label htmlFor="accessible-email">Email Address *</label>
                  <div className="input-container">
                    <input 
                      type="email" 
                      id="accessible-email" 
                      name="accessible-email"
                      className="error-input"
                      aria-invalid="true"
                      aria-describedby="accessible-email-error"
                    />
                    <span className="error-icon" aria-hidden="true">⚠️</span>
                  </div>
                  <div id="accessible-email-error" className="error-message" role="alert">
                    <strong>Error:</strong> Email is required and must be valid
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="accessible-password">Password *</label>
                  <div className="input-container">
                    <input 
                      type="password" 
                      id="accessible-password" 
                      name="accessible-password"
                      className="error-input"
                      aria-invalid="true"
                      aria-describedby="accessible-password-error"
                    />
                    <span className="error-icon" aria-hidden="true">⚠️</span>
                  </div>
                  <div id="accessible-password-error" className="error-message" role="alert">
                    <strong>Error:</strong> Password must be at least 8 characters long
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="accessible-confirm">Confirm Password *</label>
                  <div className="input-container">
                    <input 
                      type="password" 
                      id="accessible-confirm" 
                      name="accessible-confirm"
                      className="error-input"
                      aria-invalid="true"
                      aria-describedby="accessible-confirm-error"
                    />
                    <span className="error-icon" aria-hidden="true">⚠️</span>
                  </div>
                  <div id="accessible-confirm-error" className="error-message" role="alert">
                    <strong>Error:</strong> Passwords do not match
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="accessible-phone">Phone Number *</label>
                  <div className="input-container">
                    <input 
                      type="tel" 
                      id="accessible-phone" 
                      name="accessible-phone"
                      className="error-input"
                      aria-invalid="true"
                      aria-describedby="accessible-phone-error"
                    />
                    <span className="error-icon" aria-hidden="true">⚠️</span>
                  </div>
                  <div id="accessible-phone-error" className="error-message" role="alert">
                    <strong>Error:</strong> Phone number is required
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="accessible-age">Age *</label>
                  <div className="input-container">
                    <input 
                      type="number" 
                      id="accessible-age" 
                      name="accessible-age"
                      className="error-input"
                      aria-invalid="true"
                      aria-describedby="accessible-age-error"
                    />
                    <span className="error-icon" aria-hidden="true">⚠️</span>
                  </div>
                  <div id="accessible-age-error" className="error-message" role="alert">
                    <strong>Error:</strong> Must be 18 or older
                  </div>
                </div>

                <button type="button" className="submit-button">
                  Submit Form
                </button>
              </form>
            </div>
          </div>

          <aside role="complementary" aria-labelledby="tips-heading">
            <h2 id="tips-heading">Accessibility Tips</h2>
            <ul>
              <li><strong>Don't rely on color alone</strong> - Use icons, text, and patterns</li>
              <li><strong>Provide multiple indicators</strong> - Visual, textual, and programmatic</li>
              <li><strong>Use ARIA attributes</strong> - <code>aria-invalid</code>, <code>aria-describedby</code></li>
              <li><strong>Include role="alert"</strong> - For dynamic error announcements</li>
              <li><strong>Test with color-blind simulation</strong> - Ensure all users can see errors</li>
            </ul>
          </aside>
        </section>

        <section aria-labelledby="contrast-heading" className="contrast-info-section">
          <h2 id="contrast-heading">Understanding Color Contrast Ratios</h2>
          
          <div className="contrast-explanation">
            <h3>4.5:1 contrast ratio comes from the WCAG 2.1 guidelines.</h3>
            
            <p>Here's what it means:</p>
            <ul>
              <li>It's the ratio between the luminance (perceived brightness) of text and its background.</li>
              <li>A ratio of 4.5:1 means the text color is 4.5 times brighter or darker than the background.</li>
              <li>This ensures people with low vision or color deficiencies can still read the text comfortably.</li>
            </ul>
          </div>

          <div className="contrast-examples">
            <h3>✅ Examples:</h3>
            <div className="example-grid">
              <div className="contrast-sample">
                <div className="sample-text" style={{ color: '#000000', backgroundColor: '#FFFFFF' }}>
                  Black text (#000000) on white background (#FFFFFF)
                </div>
                <div className="ratio-info">→ 21:1 (maximum contrast)</div>
              </div>
              
              <div className="contrast-sample">
                <div className="sample-text" style={{ color: '#555555', backgroundColor: '#FFFFFF' }}>
                  Dark gray text (#555555) on white background
                </div>
                <div className="ratio-info">→ ~7:1 (passes AA and AAA)</div>
              </div>
              
              <div className="contrast-sample">
                <div className="sample-text" style={{ color: '#999999', backgroundColor: '#FFFFFF' }}>
                  Light gray text (#999999) on white background
                </div>
                <div className="ratio-info">→ ~3:1 (fails AA)</div>
              </div>
            </div>
          </div>

          <div className="wcag-rules">
            <h3>📌 WCAG Rules:</h3>
            <ul>
              <li><strong>AA standard (normal text):</strong> needs at least 4.5:1</li>
              <li><strong>AA standard (large text ≥18pt or 14pt bold):</strong> needs at least 3:1</li>
              <li><strong>AAA standard:</strong> needs 7:1 for normal text</li>
            </ul>
          </div>

        </section>
      </main>

      <footer role="contentinfo">
        <p>React Rajasthan Meet-up Accessibility Demo</p>
      </footer>
    </div>
  );
}

export default ColorBlindPage;
