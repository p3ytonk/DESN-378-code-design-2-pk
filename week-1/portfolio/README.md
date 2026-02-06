# Peyton Knox — Web Design Portfolio

**DESN368: Code + Design 1 | Fall 2025**  
Eastern Washington University  
Instructor: Travis Masingale

---

## About This Repository

This repository documents my journey through DESN368, where I learned to build for the web with HTML and CSS and understand how the web works at the source level.

- **View Live Portfolio:** https://p3ytonk.github.io/DESN-378-code-design-2-pk/week-1/portfolio/
- **View Learning Log:** https://github.com/p3ytonk/DESN368-code-design-workspace-pk/blob/main/learning-log.html

---

## Design Direction

For my portfolio, I pursued an old art book aesthetic that feels vintage but still clean and readable.

- Header Font: Dawning of a New Day
- Body Font: Cormorant Garamond
- Primary Accent: #510D18
- Secondary Accents: #93B385 and #E4CC6D

Figma File: https://www.figma.com/design/XhizZ8IPivT7yFTITw8IIT/Final-Porfolio?node-id=1-2&t=0mZdvKgCf37K8Aa9-0

---

## Design Tokens and Theme System

This portfolio uses a design token system stored in `css/variables.css` so visual decisions live in one place and can scale across pages.

### Token Categories
- Colors: semantic tokens for surface, text, accent, border, links, and card surfaces
- Typography: font families, multiple font sizes, and line heights
- Spacing: a consistent spacing scale from xs through 2xl
- Optional layout and motion tokens: max width, border radius, shadow tokens, transition duration, and easing

### Light and Dark Modes
Theme styling is controlled using the `data-theme` attribute on the `<html>` element, not CSS classes. Token values are defined for:
- Default values in `:root`
- Light mode overrides in `[data-theme="light"]`
- Dark mode overrides in `[data-theme="dark"]`

This makes both themes intentional and consistent because the same components reuse the same semantic tokens.

### Theme Toggle Behavior
The UI provides three modes:
- Light
- Dark
- System

The theme changes immediately when clicked. The selected mode is saved in `localStorage`, so the theme persists after refresh. If the user chooses Light or Dark, that choice overrides the operating system preference. If the user chooses System, the theme follows the OS setting, and can update live when the OS theme changes.

---

## Accessibility and Reduced Motion

This project includes a `prefers-reduced-motion: reduce` media query to reduce or remove decorative transitions and animations while keeping functional motion like focus visibility.

Theme controls are keyboard accessible and include ARIA labels.

---

## Drop Down Menu
viewBox="0 0 24 24" sets the svg's drawing space. It means that the icon is designed on a 24 by 24 grid, so it can scale bigger or smaller without getting distorted.
currentColor is flexible because the icon just copies whatever color the text is in CSS, so when my site switches themes or colors, the icon updates automatically. 
If I used path, the d part is the directions for drawing the shape. It is a list of points and commands that tell the svg where to go to make the lines and curves. 

# Reflection Questions:
My system icon is a beetle because it feels like a neutral default mode instead of clearly day or night. I also feel like it communicates balance and that it can switch either way depending on what the users system preferences are. 
Light and Dark force a theme. When I click Light, I store "light" and set data-theme to light. When I click Dark, I store "dark" and set data-theme to dark. System is different because I store "system" but I do not force one theme forever.
What surprised me was that "system" is not really a theme. it is a rule that decided the theme for you. I also learned that svg's using currentColor are way easier because they automatically match whatever color the button text is, so they work in both light and dark without extra edits. 

## Featured Projects

The Recipe  
Slow Cooker Tortilla Soup Recipe  
View Project: https://p3ytonk.github.io/DESN368-code-design-workspace-pk/week-2/recipe-site/recipe.html

Tribute Site  
Tribute Site on the well-known designer Cipe Pineles  
View Project: https://p3ytonk.github.io/DESN368-code-design-workspace-pk/week-4/tribute-site/tribute.html

Field Guide  
Interactive Field Guide on The Sims 4  
View Project: https://p3ytonk.github.io/DESN368-code-design-workspace-pk/week-6/field-guide.html

Product Landing Page  
Retro vibe record store product landing page  
View Project: https://p3ytonk.github.io/DESN368-code-design-workspace-pk/week-10/product-landing-page.html

---

## Technical Skills Demonstrated

- Semantic HTML5
- CSS Layout (Flexbox and Grid)
- Responsive design with media queries
- CSS custom properties and token systems
- Theme toggling with `data-theme` and JavaScript
- localStorage persistence
- System preference detection with matchMedia
- Reduced motion support

---

## Starter Structure

- css
  - variables.css
  - stylesheet.css
  - normalize.css
- scripts
  - main.js
- README.md
- index.html

---

## Archive

- Course Log: ./archive/course-log.md
- Learning Log: ./learning-log.html

---

## Credits and Citations

Assets
- Cipe Pineles portrait image
- The Sims 4 logo

Tools and References
- MDN Web Docs: CSS Custom Properties
- MDN Web Docs: localStorage
- MDN Web Docs: matchMedia
- MDN Web Docs: prefers-color-scheme
- MDN Web Docs: prefers-reduced-motion
- CSS Tricks: A Complete Guide to Dark Mode
- web.dev: prefers-reduced-motion

AI Assistance
- Used ChatGPT for assistance fixing bug issues and helping with animations and JavaScript logic on Field Guide, Product Landing Page, and Portfolio theme system

---

## Reflection

Read Full Reflection: https://p3ytonk.github.io/DESN368-code-design-workspace-pk/reflection/reflection.html
