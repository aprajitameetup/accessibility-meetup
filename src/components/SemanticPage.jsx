import React, { useState } from 'react'

function SemanticPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="semantic-page">
      <div className="container">
        <header>
          <h1>Semantic HTML Demo</h1>
          <p className="demo-description">
            This page uses proper semantic HTML5 elements. Notice how screen readers can navigate by landmarks, 
            understand the page structure, and properly announce form elements.
          </p>
        </header>

        <main>
          <section className="demo-section" aria-labelledby="article-heading">
            <h2 id="article-heading">Latest News Article</h2>
            <article>
              <header>
                <h3>Web Accessibility Guidelines Updated</h3>
                <div className="article-meta">
                  <time dateTime="2024-01-15">January 15, 2024</time>
                  <span> by </span>
                  <span>Accessibility Team</span>
                </div>
              </header>
              
              <div className="article-content">
                <p>
                  The World Wide Web Consortium (W3C) has released updated accessibility guidelines 
                  that emphasize the importance of semantic HTML for screen reader users.
                </p>
                <p>
                  These guidelines highlight how proper use of HTML5 semantic elements like 
                  <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, 
                  <code>&lt;section&gt;</code>, and <code>&lt;article&gt;</code> can significantly 
                  improve the user experience for people using assistive technologies.
                </p>
                <p>
                  Screen readers can navigate these elements using landmark navigation, 
                  making it much easier for users to understand and navigate web content.
                </p>
              </div>
            </article>
          </section>

          <aside className="demo-section" aria-labelledby="sidebar-heading">
            <h2 id="sidebar-heading">Related Information</h2>
            <nav aria-label="Related links">
              <ul>
                <li><a href="#wcag">WCAG 2.1 Guidelines</a></li>
                <li><a href="#aria">ARIA Best Practices</a></li>
                <li><a href="#testing">Accessibility Testing Tools</a></li>
              </ul>
            </nav>
          </aside>

          <section className="demo-section" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Contact Form</h2>
            <p>This form demonstrates proper form labeling and structure:</p>
            
            {showAlert && (
              <div className="alert alert-success" role="alert" aria-live="polite">
                <strong>Success!</strong> Your message has been submitted.
              </div>
            )}

            <form onSubmit={handleSubmit} aria-labelledby="contact-heading">
              <fieldset>
                <legend className="sr-only">Contact Information</legend>
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    aria-describedby="name-help"
                  />
                  <div id="name-help" className="sr-only">
                    Enter your full name as it appears on official documents
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    aria-describedby="email-help"
                  />
                  <div id="email-help" className="sr-only">
                    We'll use this to respond to your message
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    rows="4"
                    required
                    aria-describedby="message-help"
                  ></textarea>
                  <div id="message-help" className="sr-only">
                    Tell us about your accessibility needs or questions
                  </div>
                </div>

                <button type="submit" className="button">
                  Send Message
                </button>
              </fieldset>
            </form>
          </section>
        </main>

        <footer className="demo-section">
          <h2>Page Features Demonstrated</h2>
          <ul>
            <li><strong>Landmarks:</strong> header, main, section, aside, footer</li>
            <li><strong>Headings:</strong> Proper h1-h6 hierarchy</li>
            <li><strong>Form Labels:</strong> Properly associated with inputs</li>
            <li><strong>ARIA:</strong> aria-labelledby, aria-describedby, role attributes</li>
            <li><strong>Semantic Elements:</strong> article, time, nav, fieldset, legend</li>
            <li><strong>Live Regions:</strong> aria-live for dynamic content</li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default SemanticPage
