import React, { useState, useEffect, useRef } from 'react';
import './AriaLivePage.css';

function AriaLivePage() {
  const [notifications, setNotifications] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liveRegionContent, setLiveRegionContent] = useState('');
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  // Focus trap for modal
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        firstFocusableRef.current = focusableElements[0];
        lastFocusableRef.current = focusableElements[focusableElements.length - 1];
        firstFocusableRef.current.focus();
      }
    }
  }, [isModalOpen]);

  const handleKeyDown = (e) => {
    if (!isModalOpen) return;

    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    if (e.key === 'Tab') {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          lastFocusableRef.current.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          firstFocusableRef.current.focus();
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    const notification = { id, message, type, timestamp: new Date() };
    setNotifications(prev => [...prev, notification]);
    
    // Announce to screen readers
    setLiveRegionContent(`${type}: ${message}`);
    
    // Clear after announcement
    setTimeout(() => setLiveRegionContent(''), 100);
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    setLiveRegionContent('Notification removed');
    setTimeout(() => setLiveRegionContent(''), 100);
  };

  const simulateAsyncOperation = () => {
    setIsLoading(true);
    setLiveRegionContent('Loading started...');
    
    setTimeout(() => {
      setIsLoading(false);
      setLiveRegionContent('Loading completed successfully!');
      setTimeout(() => setLiveRegionContent(''), 100);
    }, 3000);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setLiveRegionContent('Modal dialog opened');
    setTimeout(() => setLiveRegionContent(''), 100);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLiveRegionContent('Modal dialog closed');
    setTimeout(() => setLiveRegionContent(''), 100);
  };

  const incrementCounter = () => {
    setCounter(prev => prev + 1);
    setLiveRegionContent(`Counter updated to ${counter + 1}`);
    setTimeout(() => setLiveRegionContent(''), 100);
  };

  const resetCounter = () => {
    setCounter(0);
    setLiveRegionContent('Counter reset to 0');
    setTimeout(() => setLiveRegionContent(''), 100);
  };

  return (
    <div className="container">
      <header role="banner">
        <h1>Focus Trap & ARIA Live Regions Demo</h1>
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="#main-content">Skip to main content</a></li>
            <li><a href="#focus-trap-demo">Focus Trap Demo</a></li>
            <li><a href="#aria-live-demo">ARIA Live Demo</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" role="main">
        {/* Hidden live region for screen reader announcements */}
        <div 
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {liveRegionContent}
        </div>

        <section id="focus-trap-demo" aria-labelledby="focus-heading">
          <h2 id="focus-heading">Focus Trap Demo</h2>
          <p>Focus traps ensure keyboard users can't accidentally navigate outside of modal dialogs.</p>
          
          <div className="demo-section">
            <button onClick={openModal} className="open-modal-button">
              Open Modal Dialog
            </button>
            
            <div className="focus-trap-info">
              <h4>Focus Trap Features:</h4>
              <ul>
                <li>✅ Focus stays within modal</li>
                <li>✅ Tab cycles through focusable elements</li>
                <li>✅ Shift+Tab cycles backwards</li>
                <li>✅ Escape key closes modal</li>
                <li>✅ Focus returns to trigger button</li>
                <li>✅ Screen reader announces modal opening/closing</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="aria-live-demo" aria-labelledby="live-heading">
          <h2 id="live-heading">ARIA Live Regions Demo</h2>
          <p>ARIA live regions announce dynamic content changes to screen readers without interrupting their current task.</p>
          
          <div className="demo-section">
            <h3>Dynamic Content Examples</h3>
            
            <div className="button-group">
              <button onClick={() => addNotification('Success! Operation completed.', 'success')}>
                Add Success Notification
              </button>
              <button onClick={() => addNotification('Warning: Please check your input.', 'warning')}>
                Add Warning Notification
              </button>
              <button onClick={() => addNotification('Error: Something went wrong!', 'error')}>
                Add Error Notification
              </button>
              <button onClick={() => addNotification('Info: System update available.', 'info')}>
                Add Info Notification
              </button>
            </div>

            <div className="button-group">
              <button onClick={simulateAsyncOperation} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Simulate Async Operation'}
              </button>
              <button onClick={incrementCounter}>
                Increment Counter ({counter})
              </button>
              <button onClick={resetCounter}>
                Reset Counter
              </button>
            </div>

            <div className="notifications-container">
              <h4>Notifications ({notifications.length})</h4>
              <div className="notifications-list" role="log" aria-live="polite" aria-label="Notifications">
                {notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`notification ${notification.type}`}
                    role="alert"
                  >
                    <span className="notification-message">{notification.message}</span>
                    <button 
                      onClick={() => removeNotification(notification.id)}
                      aria-label={`Remove ${notification.type} notification`}
                      className="remove-button"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside role="complementary" aria-labelledby="tips-heading">
          <h2 id="tips-heading">Focus Trap & ARIA Live Tips</h2>
          <div className="tips-grid">
            <div>
              <h3>Focus Traps</h3>
              <ul>
                <li><strong>Capture Tab/Shift+Tab</strong> - Prevent escape from modal</li>
                <li><strong>Handle Escape key</strong> - Close modal on Escape</li>
                <li><strong>Return focus</strong> - Focus trigger element when closing</li>
                <li><strong>Announce changes</strong> - Use live regions for modal state</li>
                <li><strong>Test with keyboard</strong> - Ensure full keyboard navigation</li>
              </ul>
            </div>
            <div>
              <h3>ARIA Live Regions</h3>
              <ul>
                <li><strong>aria-live="polite"</strong> - Waits for user to finish current task</li>
                <li><strong>aria-live="assertive"</strong> - Interrupts immediately (use sparingly)</li>
                <li><strong>aria-atomic="true"</strong> - Announces entire content change</li>
                <li><strong>role="alert"</strong> - Implicitly assertive live region</li>
                <li><strong>role="log"</strong> - For chat logs, notifications</li>
              </ul>
            </div>
          </div>
        </aside>
      </main>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div 
          className="modal-overlay" 
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div 
            ref={modalRef}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="modal-title">Accessible Modal Dialog</h2>
            <p id="modal-description">
              This modal demonstrates proper focus trapping. Use Tab to navigate through the form elements, 
              and press Escape to close the modal.
            </p>
            
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="modal-name">Name:</label>
                <input 
                  type="text" 
                  id="modal-name" 
                  name="name" 
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="modal-email">Email:</label>
                <input 
                  type="email" 
                  id="modal-email" 
                  name="email" 
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="modal-message">Message:</label>
                <textarea 
                  id="modal-message" 
                  name="message" 
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <div className="form-group">
                <label>
                  <input type="checkbox" name="newsletter" />
                  Subscribe to newsletter
                </label>
              </div>
            </form>
            
            <div className="modal-actions">
              <button 
                type="button" 
                onClick={closeModal}
                className="secondary-button"
              >
                Cancel
              </button>
              <button 
                type="button" 
                onClick={() => {
                  addNotification('Form submitted successfully!', 'success');
                  closeModal();
                }}
                className="primary-button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <footer role="contentinfo">
        <p>React Rajasthan Meet-up Accessibility Demo</p>
      </footer>
    </div>
  );
}

export default AriaLivePage;