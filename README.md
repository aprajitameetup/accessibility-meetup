# Accessibility Demo

A comprehensive React project demonstrating various accessibility concepts including semantic HTML, color accessibility, map accessibility, ARIA live regions, focus traps, and common accessibility issues. Perfect for learning accessibility best practices and understanding common accessibility issues.

## Features

- **6 Comprehensive Demos**: Multiple accessibility scenarios
- **Interactive Examples**: Hands-on demonstrations with real code
- **Color Blind Simulation**: Visual accessibility testing
- **Screen Reader Testing**: Optimized for various assistive technologies
- **Professional Design**: Clean, modern UI suitable for presentations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd accessibility-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Demo Pages

### 🏠 Home Page
- Overview of all accessibility demonstrations
- Instructions for testing with screen readers
- Quick navigation to all demo scenarios

### 📝 Semantic HTML Page
- Uses proper HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- Demonstrates landmarks, headings, form labels
- Shows best practices for accessibility

### ❌ Non-Semantic HTML Page
- Uses only `<div>` and `<span>` elements
- Demonstrates accessibility problems
- Shows what happens without semantic structure
- Highlights the importance of proper HTML

### 🎨 Color Accessibility Page
- Color-blind simulation toggle
- Demonstrates color-only error indicators vs accessible patterns
- Interactive forms showing problematic vs accessible designs
- Detailed contrast ratio explanations with WCAG guidelines

### 🗺️ Map Accessibility Page
- Interactive map with color-only markers
- Demonstrates accessibility issues for color-blind users
- Shows accessible alternatives with icons and text
- Real-world scenario examples

### 🔊 ARIA Live & Focus Trap Page
- Focus trap demonstration with modal dialogs
- ARIA live regions for dynamic content announcements
- Interactive examples with notifications and counters
- Keyboard navigation and screen reader support

### ✅ Accessibility Checklist Page
- Comprehensive checklist of common accessibility issues
- Interactive examples for each checklist item
- Code snippets showing bad vs good practices
- Expandable sections with detailed explanations

## Testing with Screen Readers

### Recommended Screen Readers

1. **NVDA (Windows)** - Free
   - Download from [nvaccess.org](https://www.nvaccess.org/)
   - Press `Insert + F7` to open elements list
   - Use `D` key to navigate by landmarks

2. **JAWS (Windows)** - Commercial
   - Download trial from [freedomscientific.com](https://www.freedomscientific.com/)
   - Use `Insert + F7` for elements list
   - Use `R` key for landmarks

3. **VoiceOver (Mac)** - Built-in
   - Enable in System Preferences → Accessibility → VoiceOver
   - Use `VO + U` for rotor
   - Navigate by landmarks with `VO + Command + L`

4. **Orca (Linux)** - Free
   - Install with `sudo apt install orca`
   - Use `Insert + F7` for elements list

### Testing Steps

1. **Start with Home Page**:
   - Navigate to `/` for overview
   - Review all available demo scenarios
   - Understand the testing approach

2. **Semantic vs Non-Semantic Comparison**:
   - Navigate to `/semantic` - Use screen reader shortcuts to explore landmarks
   - Navigate to `/non-semantic` - Try to navigate by landmarks (there are none!)
   - Notice the dramatic difference in navigation experience

3. **Color Accessibility Testing**:
   - Navigate to `/color-blind`
   - Toggle color-blind simulation mode
   - Compare error visibility in both modes
   - Review contrast ratio explanations

4. **Interactive Demos**:
   - Test `/aria-live` for focus traps and live regions
   - Explore `/checklist` for comprehensive accessibility guidelines
   - Try `/map` for visual accessibility scenarios

5. **Key Differences to Highlight**:
   - Landmark navigation availability
   - Color contrast and accessibility
   - Dynamic content announcements
   - Focus management
   - Overall user experience impact

## Technical Details

### Built With
- React 18
- React Router for navigation
- Vite for build tooling
- Modern CSS with accessibility focus

### Accessibility Features
- Skip links for keyboard navigation
- Proper heading hierarchy
- ARIA landmarks and labels
- Form label associations
- Focus management and focus traps
- ARIA live regions for dynamic content
- Color contrast compliance
- Screen reader optimizations
- Interactive examples and demonstrations

## Contributing

This project is designed for educational purposes. Feel free to:
- Add more examples
- Improve the styling
- Add more accessibility features
- Create additional demo scenarios

## License

This project is open source and available under the MIT License.

## About

Created to demonstrate accessibility best practices and common issues in web development. Perfect for educational purposes, learning accessibility concepts, and understanding how to build inclusive web applications.