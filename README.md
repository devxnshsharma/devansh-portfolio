<div style="page-break-after: always; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 80vh; text-align: center;">

# Web Development Fundamentals
## Digital Assignment Submission

<br/><br/>

**Name:** Devansh Sharma
**Registration Number:** 24BCE0717

</div>

<div style="page-break-after: always; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 80vh; text-align: center;">

## Important Links

### GitHub Repository
[https://github.com/devxnshsharma/devansh-studio](https://github.com/devxnshsharma/devansh-portfolio)

### Live Webpage Link (GitHub Pages)
[https://devxnshsharma.github.io/devansh-studio/](https://devxnshsharma.github.io/devansh-studio/)

</div>

<div style="page-break-after: always; min-height: 80vh;">

## Table of Contents

1. [Step-by-Step Documentation](#step-by-step-documentation)
2. [Reflection on Learning (10 Key Points)](#reflection-on-learning)
3. [The Importance of a Personal Webpage](#the-importance-of-a-personal-webpage)
4. [Screenshots](#screenshots)

</div>

## Step-by-Step Documentation

### 1. Planning and Tech Stack Selection
**Objective:** Establish the foundation for a personal portfolio website.
**Tools Chosen:**
- **Framework:** React + Vite for high performance and fast development experience.
- **Styling:** Tailwind CSS for rapid, utility-first styling.
- **Animations:** Framer Motion for smooth, declarative transitions and GSAP for scroll animations.
- **Icons:** `lucide-react` to keep the UI clean and modern.
**Design Choices:** A clear "Dark Cyberpunk/Modern Minimalist" aesthetic with deep contrast, glassmorphism, and smooth scroll effects. Decided to focus on a one-page robust interactive scroll-driven UI.

### 2. Project Initialization
- Used `npm create vite@latest devansh-studio --template react-ts` to scaffold the project structure.
- Cleaned up the boilerplate code provided by Vite.
- Installed the necessary dependencies via `npm install tailwindcss postcss autoprefixer framer-motion lucide-react`.
- Initialized Tailwind by creating `tailwind.config.js` and configuring themes and color variables in `index.css`.

### 3. Component Architecture and Development
- **Navigation Navbar:** Developed a sticky, responsive navigation bar ensuring seamless access to different sections.
- **Hero Section:** Built a visually striking landing area introducing my name and a creative title alongside dynamic text animations.
- **About Section:** Structured an integrated brief introducing my background and continuous learning journey.
- **Skills Section:** Created a robust grid layout employing Framer Motion to visualize technical proficiencies interactively.
- **Projects Section:** Designed reusable "Project Card" components to display image previews, tags, and links clearly.
- **Contact Form:** Integrated standard HTML forms stylized beautifully.

### 4. Advanced Interactive Features
- **Custom Cursor:** Implemented a smooth, trailing custom cursor utilizing `requestAnimationFrame` and lerp-based interpolation to add a high degree of polish to the user experience.
- **Scroll Animations:** Integrated Framer Motion viewpoints mapping to reveal elements seamlessly as the user scrolls downwards.

### 5. Version Control Integration
- Created a repository on GitHub (`devansh-studio`).
- Executed `git init` in the root folder.
- Followed standard version control commands:
  ```bash
  git add .
  git commit -m "Initial portfolio commit"
  git branch -M main
  git remote add origin https://github.com/devxnshsharma/devansh-studio.git
  git push -u origin main
  ```
- Regularly committed structural and feature updates (e.g., `git commit -m "feat: added custom cursor"`).

### 6. Deployment Process
- Configured Vite for relative base paths inside `vite.config.ts`.
- Set up the GitHub Pages environment.
- Successfully built the application using `npm run build` and pointed the GitHub Pages settings to host directly from the deployment branch.

---

## Reflection on Learning

Through this project, I gained pivotal insights into web development. The 10 key learning points are:

1. **Modern Frontend Tooling:** Transitioning to Vite from older bundlers showed significantly better build times and improved Developer Experience.
2. **Component-Based Architecture:** Structuring UI elements into reusable React components drastically minimized code repetition and simplified maintainability.
3. **State Management:** Learned to efficiently manage interactive application states, specifically when handling the custom cursor interpolation logic.
4. **Utility-First Styling Solutions:** Mastered the core tenets of Tailwind CSS, replacing tedious CSS files with rapid inline class architectures.
5. **Animation Math (Lerp):** Discovered the process of creating "lagging" or inherently smooth following user interfaces via linear interpolation (lerp).
6. **Responsive Design Execution:** Gained mastery over CSS Flexbox/Grid and CSS Media queries (via Tailwind variants like `md:`, `lg:`) to ensure it looks excellent on mobile browsers.
7. **Version Control Mechanics:** Realized the critical importance of discrete commits and atomic version history via Git to safeguard project progress.
8. **Scroll Optimization:** Dealt with mapping UI reveals tightly triggered by the browser scroll events, balancing effects without causing layout thrashing.
9. **Accessibility First Contexts:** Used semantic HTML tags out of the box to keep the interactive layer functional for varied inputs.
10. **CI/CD Paradigms:** Set up the codebase to automatically build and deploy to a live static hosting environment (GitHub Pages).

---

## The Importance of a Personal Webpage

In the rapid evolution of digital connectivity, a personal webpage transcends being merely a digital resume—it operates as a dynamic, interactive canvas demonstrating true professional capability.

1. **Undisputed Proof of Work:** Unlike standard PDF resumes where developers merely claim their skills, a web portfolio acts as concrete proof of ability. The structure, performance, and UI/UX directly signal proficiency.
2. **Personal Branding & Discovery:** A personal site acts as the hub of your professional digital presence. It allows the integration of unique aesthetics (like custom cursors and dark modes) indicating distinct personality.
3. **Always-On Accessibility:** It remains accessible to recruiters, colleagues, and collaborators 24/7.
4. **Centralized Hub:** It efficiently connects one's multifaceted digital footprint mapping directly to GitHub, LinkedIn, and social portals.

Ultimately, crafting this platform provides immense educational benefits in mastering production-level engineering workflows.

---

## Screenshots

### 1. Landing / Hero Section


### 2. Portfolio / Projects Gallery


### 3. Contact Section

