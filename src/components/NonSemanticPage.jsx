import React, { useState } from 'react'

function NonSemanticPage() {
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
    <div className="non-semantic-page">
      <div className="container">
        <div>
          <div>
            <h1>Non-Semantic HTML Demo</h1>
            <div>
              This page uses only div and span elements with no semantic meaning. 
              Notice how screen readers struggle to understand the page structure 
              and cannot navigate by landmarks.
            </div>
          </div>

          <div>
            <div>
              <div>
                <h2>Latest News Article</h2>
                <div>
                  <div>
                    <div>Web Accessibility Guidelines Updated</div>
                    <div>
                      <span>January 15, 2024</span>
                      <span> by </span>
                      <span>Accessibility Team</span>
                    </div>
                  </div>
                  
                  <div>
                    <div>
                      The World Wide Web Consortium (W3C) has released updated accessibility guidelines 
                      that emphasize the importance of semantic HTML for screen reader users.
                    </div>
                    <div>
                      These guidelines highlight how proper use of HTML5 semantic elements like 
                      header, nav, main, section, and article can significantly 
                      improve the user experience for people using assistive technologies.
                    </div>
                    <div>
                      Screen readers can navigate these elements using landmark navigation, 
                      making it much easier for users to understand and navigate web content.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2>Related Information</h2>
              <div>
                <div>
                  <div><span>WCAG 2.1 Guidelines</span></div>
                  <div><span>ARIA Best Practices</span></div>
                  <div><span>Accessibility Testing Tools</span></div>
                </div>
              </div>
            </div>

            <div>
              <h2>Contact Form</h2>
              <div>This form demonstrates poor form structure without proper labeling:</div>
              
              {showAlert && (
                <div>
                  <span>Success!</span> Your message has been submitted.
                </div>
              )}

              <div onSubmit={handleSubmit}>
                <div>
                  <div>
                    <div>Full Name *</div>
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <div>Email Address *</div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <div>Message *</div>
                    <div>
                      <div
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input"
                        style={{ minHeight: '100px', resize: 'vertical' }}
                        contentEditable
                        suppressContentEditableWarning={true}
                        onInput={(e) => setFormData({...formData, message: e.target.textContent})}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div onClick={handleSubmit} className="button" style={{ cursor: 'pointer' }}>
                      Send Message
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2>Problems with This Approach</h2>
            <div>
              <div>No landmarks available for navigation</div>
              <div>Screen reader reads through content linearly</div>
              <div>No heading structure announced</div>
              <div>Form elements not properly labeled</div>
              <div>Difficult to understand page structure</div>
              <div>No semantic meaning for assistive technologies</div>
              <div>Poor user experience for screen reader users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NonSemanticPage
