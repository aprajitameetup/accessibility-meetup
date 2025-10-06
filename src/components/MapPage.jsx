import React, { useState } from 'react';
import './MapPage.css';

function MapPage() {
  const [isColorBlindMode, setIsColorBlindMode] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Sample data for map markers
  const markers = [
    { id: 1, x: 20, y: 30, type: 'error', message: 'Critical System Error', severity: 'high' },
    { id: 2, x: 60, y: 25, type: 'error', message: 'Database Connection Failed', severity: 'high' },
    { id: 3, x: 40, y: 60, type: 'error', message: 'Service Unavailable', severity: 'medium' },
    { id: 4, x: 80, y: 70, type: 'error', message: 'Authentication Failed', severity: 'high' },
    { id: 5, x: 30, y: 80, type: 'error', message: 'Memory Leak Detected', severity: 'medium' },
    { id: 6, x: 70, y: 40, type: 'error', message: 'API Rate Limit Exceeded', severity: 'low' },
    { id: 7, x: 50, y: 20, type: 'error', message: 'SSL Certificate Expired', severity: 'high' },
    { id: 8, x: 90, y: 50, type: 'error', message: 'Disk Space Low', severity: 'medium' }
  ];

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const getMarkerStyle = (marker) => {
    const baseStyle = {
      position: 'absolute',
      left: `${marker.x}%`,
      top: `${marker.y}%`,
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    };

    if (isColorBlindMode) {
      // In color-blind mode, red markers become nearly invisible
      return {
        ...baseStyle,
        backgroundColor: '#999',
        border: '2px solid #666',
        color: '#666'
      };
    } else {
      // Normal mode with red indicators
      return {
        ...baseStyle,
        backgroundColor: marker.severity === 'high' ? '#dc3545' : 
                        marker.severity === 'medium' ? '#fd7e14' : '#ffc107',
        border: '2px solid #fff',
        color: '#fff'
      };
    }
  };

  const getAccessibleMarkerStyle = (marker) => {
    return {
      position: 'absolute',
      left: `${marker.x}%`,
      top: `${marker.y}%`,
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer',
      backgroundColor: marker.severity === 'high' ? '#dc3545' : 
                      marker.severity === 'medium' ? '#fd7e14' : '#ffc107',
      border: '2px solid #fff',
      color: '#fff',
      // Additional visual indicators that work in color-blind mode
      boxShadow: marker.severity === 'high' ? '0 0 0 3px #000' : '0 0 0 2px #000',
      borderRadius: marker.severity === 'high' ? '50%' : '4px'
    };
  };

  return (
    <div className="container">
      <header role="banner">
        <h1>Map Color Accessibility Demo</h1>
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="#main-content">Skip to main content</a></li>
            <li><a href="#color-blind-toggle">Toggle Color Blind Mode</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" role="main">
        <section aria-labelledby="demo-heading">
          <h2 id="demo-heading">Color-Only Map Markers vs. Accessible Patterns</h2>
          
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
                ? '🔍 Color Blind Mode: Notice how red error markers become nearly invisible!' 
                : '👁️ Normal Vision: All error markers are clearly visible with red colors'
              }
            </p>
          </div>

          <div className={`color-blind-simulator ${isColorBlindMode ? 'active' : ''}`}>
            <div className="demo-section">
              <h3>❌ Problem: Color-Only Map Indicators</h3>
              <p>This map uses only red/orange colors to indicate system errors. Color-blind users may not see these critical alerts!</p>
              
              <div className="map-container">
                <div className="map-background">
                  <div className="map-title">System Status Map</div>
                  <div className="map-legend">
                    <div className="legend-item">
                      <span className="legend-color high"></span>
                      <span>High Priority Errors</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-color medium"></span>
                      <span>Medium Priority</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-color low"></span>
                      <span>Low Priority</span>
                    </div>
                  </div>
                  
                  {markers.map(marker => (
                    <div
                      key={marker.id}
                      className="map-marker"
                      style={getMarkerStyle(marker)}
                      onClick={() => handleMarkerClick(marker)}
                      role="button"
                      tabIndex="0"
                      aria-label={`Error marker: ${marker.message}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleMarkerClick(marker);
                        }
                      }}
                    >
                      {marker.severity === 'high' ? '!' : marker.severity === 'medium' ? '⚠' : 'i'}
                    </div>
                  ))}
                </div>
              </div>

              {selectedMarker && (
                <div className="marker-details" role="dialog" aria-labelledby="marker-title">
                  <h4 id="marker-title">Error Details</h4>
                  <p><strong>Message:</strong> {selectedMarker.message}</p>
                  <p><strong>Severity:</strong> {selectedMarker.severity}</p>
                  <p><strong>Location:</strong> Server {selectedMarker.id}</p>
                  <button onClick={() => setSelectedMarker(null)}>Close</button>
                </div>
              )}
            </div>

            <div className="demo-section">
              <h3>✅ Solution: Accessible Map Patterns</h3>
              <p>This map uses multiple visual indicators: colors, shapes, patterns, and text labels for comprehensive accessibility.</p>
              
              <div className="map-container">
                <div className="map-background">
                  <div className="map-title">Accessible System Status Map</div>
                  <div className="map-legend accessible-legend">
                    <div className="legend-item">
                      <span className="legend-shape high">●</span>
                      <span className="legend-text">High Priority (Red Circle)</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-shape medium">■</span>
                      <span className="legend-text">Medium Priority (Orange Square)</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-shape low">▲</span>
                      <span className="legend-text">Low Priority (Yellow Triangle)</span>
                    </div>
                  </div>
                  
                  {markers.map(marker => (
                    <div
                      key={`accessible-${marker.id}`}
                      className="accessible-marker"
                      style={getAccessibleMarkerStyle(marker)}
                      onClick={() => handleMarkerClick(marker)}
                      role="button"
                      tabIndex="0"
                      aria-label={`${marker.severity} priority error: ${marker.message}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleMarkerClick(marker);
                        }
                      }}
                    >
                      <div className="marker-content">
                        <div className="marker-icon">
                          {marker.severity === 'high' ? '!' : marker.severity === 'medium' ? '⚠' : 'i'}
                        </div>
                        <div className="marker-label">
                          {marker.severity.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside role="complementary" aria-labelledby="tips-heading">
            <h2 id="tips-heading">Map Accessibility Tips</h2>
            <ul>
              <li><strong>Use multiple visual cues</strong> - Colors, shapes, patterns, and text</li>
              <li><strong>Provide text alternatives</strong> - Screen reader accessible labels</li>
              <li><strong>Include legends</strong> - Explain all symbols and colors</li>
              <li><strong>Test with color-blind simulation</strong> - Ensure all information remains accessible</li>
              <li><strong>Consider tactile alternatives</strong> - For physical maps or print materials</li>
              <li><strong>Use consistent patterns</strong> - Same shape always means same thing</li>
            </ul>
          </aside>
        </section>
      </main>

      <footer role="contentinfo">
        <p>&copy; 2025 Map Accessibility Demo</p>
      </footer>
    </div>
  );
}

export default MapPage;
