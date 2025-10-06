# Accessibility Demo Presentation Guide

## Pre-Demo Setup

1. **Test Your Screen Reader**:
   - Ensure your screen reader is working properly
   - Test navigation shortcuts
   - Verify audio output is clear

2. **Browser Setup**:
   - Use Chrome or Firefox for best screen reader compatibility
   - Disable browser extensions that might interfere
   - Test with both keyboard and mouse navigation

3. **Backup Plans**:
   - Have a recorded video ready as backup
   - Prepare to explain what users would hear
   - Have the demo running locally as fallback

## Demo Script

### Introduction (2 minutes)
- "Today I'll demonstrate why semantic HTML matters for accessibility"
- "We'll compare two identical pages - one with semantic HTML, one without"
- "You'll see how screen readers interpret each approach"

### Semantic HTML Demo (5 minutes)
1. **Navigate to Semantic Page**
   - "Let's start with the semantic version"
   - "Notice the clear page structure"

2. **Landmark Navigation**
   - Use screen reader landmark shortcuts
   - "Screen readers can jump directly to main content, navigation, etc."
   - "This is like having a table of contents for the page"

3. **Heading Structure**
   - Navigate by headings
   - "Screen readers announce the heading hierarchy"
   - "Users can understand the content organization"

4. **Form Interaction**
   - Tab through form elements
   - "Notice how labels are properly announced"
   - "Screen readers know what each field is for"

### Non-Semantic HTML Demo (5 minutes)
1. **Navigate to Non-Semantic Page**
   - "Now let's see the same content without semantic HTML"
   - "Only div and span elements are used"

2. **Try Landmark Navigation**
   - "Let's try to navigate by landmarks..."
   - "There are no landmarks available!"
   - "Users must read through everything linearly"

3. **Heading Navigation**
   - "Let's try heading navigation..."
   - "The structure is unclear to screen readers"

4. **Form Problems**
   - "Notice the form elements..."
   - "Labels aren't properly associated"
   - "Screen readers struggle to understand the form"

### Key Takeaways (3 minutes)
- "Semantic HTML isn't just about code quality"
- "It directly impacts real users with disabilities"
- "Small changes make a big difference"
- "Accessibility is about inclusion, not just compliance"

## Screen Reader Shortcuts

### NVDA (Windows)
- `D` - Navigate by landmarks
- `H` - Navigate by headings
- `F` - Navigate by form fields
- `Insert + F7` - Elements list

### JAWS (Windows)
- `R` - Navigate by landmarks
- `H` - Navigate by headings
- `F` - Navigate by form fields
- `Insert + F7` - Elements list

### VoiceOver (Mac)
- `VO + Command + L` - Landmarks
- `VO + Command + H` - Headings
- `VO + Command + J` - Form controls
- `VO + U` - Rotor

## Common Questions & Answers

**Q: "Why not just use ARIA attributes?"**
A: "ARIA is powerful, but semantic HTML is the foundation. ARIA enhances semantic HTML, it doesn't replace it."

**Q: "Does this really matter for most users?"**
A: "15% of the world's population has a disability. That's over 1 billion people who benefit from accessible design."

**Q: "How much extra work is this?"**
A: "Very little! Most semantic elements are just different HTML tags. The structure is often simpler than div-heavy layouts."

**Q: "What about mobile users?"**
A: "Screen readers work on mobile devices too. VoiceOver on iOS and TalkBack on Android use the same semantic structure."

## Troubleshooting

### If Screen Reader Doesn't Work
- Check if it's enabled and running
- Try refreshing the page
- Use keyboard navigation to demonstrate
- Explain what users would hear

### If Demo Crashes
- Have the backup video ready
- Continue with explanation
- Show the code differences
- Focus on the principles

### If Time Runs Short
- Skip the non-semantic demo
- Focus on the semantic benefits
- Show the code structure
- Emphasize the impact

## Post-Demo Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Screen Reader Survey](https://webaim.org/projects/screenreadersurvey8/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

## Follow-up Actions

1. **Share the demo** with your team
2. **Test your own projects** with screen readers
3. **Learn more** about accessibility guidelines
4. **Advocate** for inclusive design practices
