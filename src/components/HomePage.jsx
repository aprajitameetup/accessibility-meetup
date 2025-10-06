import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="container">
      <header>
        <h1>Accessibility Demo: Multiple Accessibility Topics</h1>
        <p className="demo-description">
          This demo showcases various accessibility concepts including semantic HTML for screen readers, 
          color accessibility for color-blind users, and the impact of proper accessibility patterns.
        </p>
      </header>

      <section className="demo-section">
        <h2>Demo Overview</h2>
        <p>
          This demonstration includes multiple accessibility scenarios:
        </p>
        <ul>
          <li><strong>Semantic HTML:</strong> Uses proper HTML5 semantic elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, and &lt;footer&gt;</li>
          <li><strong>Non-Semantic HTML:</strong> Uses only &lt;div&gt; and &lt;span&gt; elements with no semantic meaning</li>
          <li><strong>Color Accessibility:</strong> Demonstrates how color-blind users experience forms with color-only error indicators</li>
          <li><strong>Map Accessibility:</strong> Shows how color-blind users might miss critical information on maps with color-only markers</li>
          <li><strong>ARIA Live & Focus Trap:</strong> Demonstrates dynamic content announcements and modal dialog accessibility</li>
          <li><strong>Accessibility Checklist:</strong> Common accessibility issues and their solutions with code examples</li>
        </ul>
      </section>

      <section className="demo-section">
        <h2>How to Test with Screen Readers</h2>
        <ol>
          <li><strong>NVDA (Windows):</strong> Download from <a href="https://www.nvaccess.org/" target="_blank" rel="noopener noreferrer">nvaccess.org</a></li>
          <li><strong>JAWS (Windows):</strong> Download trial from <a href="https://www.freedomscientific.com/" target="_blank" rel="noopener noreferrer">freedomscientific.com</a></li>
          <li><strong>VoiceOver (Mac):</strong> Enable in System Preferences → Accessibility → VoiceOver</li>
          <li><strong>Orca (Linux):</strong> Install with <code>sudo apt install orca</code></li>
        </ol>
        
        <h3>Testing Steps:</h3>
        <ol>
          <li>Navigate to the "Semantic HTML" page</li>
          <li>Use screen reader shortcuts to navigate by landmarks, headings, and form elements</li>
          <li>Notice how the screen reader announces the page structure</li>
          <li>Navigate to the "Non-Semantic HTML" page</li>
          <li>Compare the navigation experience - notice the lack of landmarks and structure</li>
        </ol>
      </section>

      <section className="demo-section">
        <h2>Key Differences You'll Notice</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3>✅ Semantic HTML</h3>
            <ul>
              <li>Screen readers can navigate by landmarks</li>
              <li>Proper heading hierarchy is announced</li>
              <li>Form labels are properly associated</li>
              <li>Content structure is clear</li>
              <li>ARIA roles and properties work correctly</li>
            </ul>
          </div>
          <div>
            <h3>❌ Non-Semantic HTML</h3>
            <ul>
              <li>No landmarks available for navigation</li>
              <li>Screen reader reads through content linearly</li>
              <li>No heading structure announced</li>
              <li>Form elements may not be properly labeled</li>
              <li>Difficult to understand page structure</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>Get Started</h2>
        <p>Choose a page to explore:</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <Link to="/semantic" className="button">
            View Semantic HTML Demo
          </Link>
          <Link to="/non-semantic" className="button" style={{ background: '#e74c3c' }}>
            View Non-Semantic HTML Demo
          </Link>
          <Link to="/color-blind" className="button" style={{ background: '#9b59b6' }}>
            View Color Accessibility Demo
          </Link>
          <Link to="/map" className="button" style={{ background: '#27ae60' }}>
            View Map Accessibility Demo
          </Link>
          <Link to="/aria-live" className="button" style={{ background: '#e67e22' }}>
            View ARIA Live & Focus Trap Demo
          </Link>
          <Link to="/checklist" className="button" style={{ background: '#6f42c1' }}>
            View Accessibility Checklist
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
