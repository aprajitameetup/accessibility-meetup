import React, { useState } from 'react';
import './ChecklistPage.css';

function ChecklistPage() {
  const [expandedItems, setExpandedItems] = useState({});
  const [buttonClicks, setButtonClicks] = useState({ div: 0, button: 0 });
  const [imageAlt, setImageAlt] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formErrors, setFormErrors] = useState({});

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleDivClick = () => {
    setButtonClicks(prev => ({ ...prev, div: prev.div + 1 }));
  };

  const handleButtonClick = () => {
    setButtonClicks(prev => ({ ...prev, button: prev.button + 1 }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    setFormErrors(errors);
  };

  const checklistItems = [
    {
      id: 'buttons',
      title: 'Using <div> / <span> for buttons',
      problem: '❌ Using <div> / <span> for buttons',
      solution: '✅ Use <button>',
      description: 'Interactive elements should use semantic HTML elements for proper accessibility.',
      examples: {
        bad: `<div onclick="handleClick()">Click me</div>`,
        good: `<button onclick="handleClick()">Click me</button>`
      },
      interactiveExample: (
        <div className="interactive-example">
          <h5>Try it yourself:</h5>
          <div className="example-buttons">
            <div 
              className="bad-button" 
              onClick={handleDivClick}
              style={{ 
                padding: '10px 20px', 
                background: '#dc3545', 
                color: 'white', 
                cursor: 'pointer',
                border: 'none',
                borderRadius: '4px',
                margin: '5px'
              }}
            >
              ❌ Div Button (Clicks: {buttonClicks.div})
            </div>
            <button 
              className="good-button"
              onClick={handleButtonClick}
              style={{ 
                padding: '10px 20px', 
                background: '#28a745', 
                color: 'white', 
                border: 'none',
                borderRadius: '4px',
                margin: '5px'
              }}
            >
              ✅ Real Button (Clicks: {buttonClicks.button})
            </button>
          </div>
          <p className="example-note">
            <strong>Try:</strong> Use Tab to navigate - notice the div doesn't get focus, but the button does!
          </p>
        </div>
      ),
      benefits: [
        'Built-in keyboard navigation (Enter/Space)',
        'Screen reader recognition as button',
        'Focus management handled automatically',
        'Semantic meaning for assistive technologies'
      ]
    },
    {
      id: 'alt-text',
      title: 'Missing alt text',
      problem: '❌ Missing alt text',
      solution: '✅ Add descriptive alt',
      description: 'Images need descriptive alternative text for screen reader users.',
      examples: {
        bad: `<img src="chart.png" />`,
        good: `<img src="chart.png" alt="Sales increased 25% from Q1 to Q2" />`
      },
      interactiveExample: (
        <div className="interactive-example">
          <h5>Try it yourself:</h5>
          <div className="image-examples">
            <div className="bad-image">
              <h6>❌ No alt text:</h6>
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjUwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DaGFydDwvdGV4dD4KPC9zdmc+" 
                style={{ width: '100px', height: '50px', border: '1px solid #ccc' }}
              />
              <p className="example-note">Screen reader: "Image" (no description)</p>
            </div>
            <div className="good-image">
              <h6>✅ With alt text:</h6>
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjUwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DaGFydDwvdGV4dD4KPC9zdmc+" 
                alt="Sales chart showing 25% increase from Q1 to Q2"
                style={{ width: '100px', height: '50px', border: '1px solid #ccc' }}
              />
              <p className="example-note">Screen reader: "Sales chart showing 25% increase from Q1 to Q2"</p>
            </div>
          </div>
        </div>
      ),
      benefits: [
        'Screen readers can describe images',
        'Essential for users with visual impairments',
        'Improves SEO and searchability',
        'Provides context when images fail to load'
      ]
    },
    {
      id: 'contrast',
      title: 'Poor color contrast',
      problem: '❌ Poor color contrast',
      solution: '✅ Follow WCAG AA (4.5:1)',
      description: 'Text must have sufficient contrast against background colors.',
      examples: {
        bad: `<p style="color: #999; background: #fff;">Low contrast text</p>`,
        good: `<p style="color: #333; background: #fff;">High contrast text</p>`
      },
      interactiveExample: (
        <div className="interactive-example">
          <h5>Try it yourself:</h5>
          <div className="contrast-examples">
            <div className="bad-contrast">
              <h6>❌ Poor contrast (1.2:1 ratio):</h6>
              <p style={{ 
                color: '#999', 
                background: '#fff', 
                padding: '10px', 
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}>
                This text is hard to read
              </p>
            </div>
            <div className="good-contrast">
              <h6>✅ Good contrast (4.5:1 ratio):</h6>
              <p style={{ 
                color: '#333', 
                background: '#fff', 
                padding: '10px', 
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}>
                This text is easy to read
              </p>
            </div>
          </div>
        </div>
      ),
      benefits: [
        'Readable for users with visual impairments',
        'Better visibility in various lighting conditions',
        'Complies with accessibility standards',
        'Improves readability for all users'
      ]
    },
    {
      id: 'keyboard',
      title: 'Keyboard traps / no focus',
      problem: '❌ Keyboard traps / no focus',
      solution: '✅ Manage focus with tabindex / focus trap',
      description: 'All interactive elements must be keyboard accessible.',
      examples: {
        bad: `<div onclick="openModal()">Open Modal</div>`,
        good: `<button onclick="openModal()" tabindex="0">Open Modal</button>`
      },
      benefits: [
        'Keyboard-only users can navigate',
        'Screen reader users can access content',
        'Follows accessibility guidelines',
        'Works without mouse or touch'
      ]
    },
    {
      id: 'labels',
      title: 'Empty links or buttons',
      problem: '❌ Empty links or buttons',
      solution: '✅ Use meaningful text labels',
      description: 'Interactive elements need descriptive text for screen readers.',
      examples: {
        bad: `<button><span class="icon">+</span></button>`,
        good: `<button><span class="icon">+</span> Add Item</button>`
      },
      benefits: [
        'Screen readers announce meaningful text',
        'Users understand the action',
        'Better user experience',
        'Follows accessibility best practices'
      ]
    },
    {
      id: 'color-only',
      title: 'Relying on color only',
      problem: '❌ Relying on color only',
      solution: '✅ Add icons, text, or patterns',
      description: 'Don\'t rely solely on color to convey information.',
      examples: {
        bad: `<span style="color: red;">Error</span>`,
        good: `<span style="color: red;">⚠️ Error: Please check your input</span>`
      },
      benefits: [
        'Accessible to color-blind users',
        'Multiple ways to convey information',
        'Works in grayscale or high contrast mode',
        'More robust communication'
      ]
    },
    {
      id: 'headings',
      title: 'Skipping headings structure',
      problem: '❌ Skipping headings structure',
      solution: '✅ Use proper <h1> → <h6> hierarchy',
      description: 'Use proper heading hierarchy for content structure.',
      examples: {
        bad: `<h1>Title</h1><h3>Subtitle</h3>`,
        good: `<h1>Title</h1><h2>Subtitle</h2>`
      },
      benefits: [
        'Screen readers can navigate by headings',
        'Clear content hierarchy',
        'Better document structure',
        'Improved SEO and accessibility'
      ]
    },
    {
      id: 'form-labels',
      title: 'Not labeling form fields',
      problem: '❌ Not labeling form fields',
      solution: '✅ Use <label> or aria-label',
      description: 'Form inputs need proper labels for accessibility.',
      examples: {
        bad: `<input type="text" placeholder="Name" />`,
        good: `<label for="name">Name:</label><input type="text" id="name" />`
      },
      interactiveExample: (
        <div className="interactive-example">
          <h5>Try it yourself:</h5>
          <div className="form-examples">
            <div className="bad-form">
              <h6>❌ No labels:</h6>
              <form onSubmit={handleFormSubmit}>
                <input 
                  type="text" 
                  placeholder="Name" 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  style={{ margin: '5px', padding: '8px', border: '1px solid #dc3545' }}
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  style={{ margin: '5px', padding: '8px', border: '1px solid #dc3545' }}
                />
                <button type="submit" style={{ margin: '5px', padding: '8px' }}>Submit</button>
              </form>
              <p className="example-note">Screen reader: "Edit" (no context)</p>
            </div>
            <div className="good-form">
              <h6>✅ With labels:</h6>
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="name-field">Name:</label>
                <input 
                  type="text" 
                  id="name-field"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  style={{ margin: '5px', padding: '8px', border: '1px solid #28a745' }}
                />
                <label htmlFor="email-field">Email:</label>
                <input 
                  type="email" 
                  id="email-field"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  style={{ margin: '5px', padding: '8px', border: '1px solid #28a745' }}
                />
                <button type="submit" style={{ margin: '5px', padding: '8px' }}>Submit</button>
              </form>
              <p className="example-note">Screen reader: "Name, edit" (clear context)</p>
            </div>
          </div>
        </div>
      ),
      benefits: [
        'Screen readers announce field purpose',
        'Clicking label focuses input',
        'Better form usability',
        'Required for accessibility compliance'
      ]
    },
    {
      id: 'media',
      title: 'Auto-playing media',
      problem: '❌ Auto-playing media',
      solution: '✅ Provide controls / pause option',
      description: 'Auto-playing media can be disruptive and inaccessible.',
      examples: {
        bad: `<video autoplay muted><source src="video.mp4" /></video>`,
        good: `<video controls><source src="video.mp4" /></video>`
      },
      benefits: [
        'Users can control playback',
        'Respects user preferences',
        'Accessible to all users',
        'Follows accessibility guidelines'
      ]
    },
    {
      id: 'aria-overuse',
      title: 'Overusing ARIA',
      problem: '❌ Overusing ARIA',
      solution: '✅ Prefer native HTML first',
      description: 'Use semantic HTML before adding ARIA attributes.',
      examples: {
        bad: `<div role="button" tabindex="0" aria-label="Click me">Click</div>`,
        good: `<button>Click me</button>`
      },
      benefits: [
        'Simpler, more maintainable code',
        'Built-in accessibility features',
        'Better browser support',
        'Follows progressive enhancement'
      ]
    }
  ];

  return (
    <div className="container">
      <header role="banner">
        <h1>Accessibility Checklist</h1>
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="#main-content">Skip to main content</a></li>
            <li><a href="#checklist">Accessibility Checklist</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" role="main">
        <section id="checklist" aria-labelledby="checklist-heading">
          <h2 id="checklist-heading">Common Accessibility Issues & Solutions</h2>
          <p>This checklist covers the most common accessibility issues and their solutions. Click on any item to see detailed examples and benefits.</p>
          
          <div className="checklist-container">
            {checklistItems.map((item) => (
              <div key={item.id} className="checklist-item">
                <button
                  className="checklist-header"
                  onClick={() => toggleExpanded(item.id)}
                  aria-expanded={expandedItems[item.id]}
                  aria-controls={`content-${item.id}`}
                >
                  <div className="checklist-title">
                    <span className="problem">{item.problem}</span>
                    <span className="solution">{item.solution}</span>
                  </div>
                  <span className="expand-icon">
                    {expandedItems[item.id] ? '−' : '+'}
                  </span>
                </button>
                
                {expandedItems[item.id] && (
                  <div id={`content-${item.id}`} className="checklist-content">
                    <p className="description">{item.description}</p>
                    
                    {item.interactiveExample && (
                      <div className="interactive-section">
                        {item.interactiveExample}
                      </div>
                    )}
                    
                    <div className="examples">
                      <h4>Code Examples:</h4>
                      <div className="code-examples">
                        <div className="bad-example">
                          <h5>❌ Bad:</h5>
                          <pre><code>{item.examples.bad}</code></pre>
                        </div>
                        <div className="good-example">
                          <h5>✅ Good:</h5>
                          <pre><code>{item.examples.good}</code></pre>
                        </div>
                      </div>
                    </div>
                    
                    <div className="benefits">
                      <h4>Benefits:</h4>
                      <ul>
                        {item.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <aside role="complementary" aria-labelledby="tips-heading">
          <h2 id="tips-heading">Quick Accessibility Tips</h2>
          <div className="quick-tips">
            <div className="tip-card">
              <h3>🎯 Test with Keyboard</h3>
              <p>Navigate your entire interface using only Tab, Shift+Tab, Enter, and Space keys.</p>
            </div>
            <div className="tip-card">
              <h3>🔍 Use Screen Reader</h3>
              <p>Test with NVDA, JAWS, or VoiceOver to experience how users with visual impairments navigate.</p>
            </div>
            <div className="tip-card">
              <h3>🎨 Check Contrast</h3>
              <p>Use tools like WebAIM's contrast checker to ensure 4.5:1 ratio for normal text.</p>
            </div>
            <div className="tip-card">
              <h3>📱 Test on Mobile</h3>
              <p>Ensure touch targets are at least 44px and content is readable without zooming.</p>
            </div>
          </div>
        </aside>
      </main>

      <footer role="contentinfo">
        <p>React Rajasthan Meet-up Accessibility Demo</p>
      </footer>
    </div>
  );
}

export default ChecklistPage;
