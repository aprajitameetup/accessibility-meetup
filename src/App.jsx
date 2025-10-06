import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import SemanticPage from './components/SemanticPage'
import NonSemanticPage from './components/NonSemanticPage'
import ColorBlindPage from './components/ColorBlindPage'
import MapPage from './components/MapPage'
import AriaLivePage from './components/AriaLivePage'
import ChecklistPage from './components/ChecklistPage'
import HomePage from './components/HomePage'

function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="container">
        <ul className="nav-list" role="menubar">
          <li role="none">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              role="menuitem"
            >
              Home
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/semantic" 
              className={`nav-link ${location.pathname === '/semantic' ? 'active' : ''}`}
              role="menuitem"
            >
              Semantic HTML
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/non-semantic" 
              className={`nav-link ${location.pathname === '/non-semantic' ? 'active' : ''}`}
              role="menuitem"
            >
              Non-Semantic HTML
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/color-blind" 
              className={`nav-link ${location.pathname === '/color-blind' ? 'active' : ''}`}
              role="menuitem"
            >
              Color Accessibility
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/map" 
              className={`nav-link ${location.pathname === '/map' ? 'active' : ''}`}
              role="menuitem"
            >
              Map Accessibility
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/aria-live" 
              className={`nav-link ${location.pathname === '/aria-live' ? 'active' : ''}`}
              role="menuitem"
            >
              ARIA Live & Focus Trap
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/checklist" 
              className={`nav-link ${location.pathname === '/checklist' ? 'active' : ''}`}
              role="menuitem"
            >
              Accessibility Checklist
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/semantic" element={<SemanticPage />} />
            <Route path="/non-semantic" element={<NonSemanticPage />} />
            <Route path="/color-blind" element={<ColorBlindPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/aria-live" element={<AriaLivePage />} />
            <Route path="/checklist" element={<ChecklistPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
