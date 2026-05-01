# ◈ Studio — Portfolio Platform

A modern Single Page Application (SPA) built with React, showcasing a creative agency's project portfolio with dynamic filtering, project addition, and a polished editorial design.

---

## Features

- **Landing Page** — Full-screen hero with animated stats and project count
- **Project Grid** — Responsive card layout displaying all portfolio projects
- **Search / Filter** — Real-time search across titles, categories, descriptions, and tags
- **Add Project Form** — Modal form with validation to dynamically add new projects
- **Responsive Design** — Mobile-friendly layout that adapts to all screen sizes
- **Accessible** — ARIA roles, labels, keyboard navigation, and focus management

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | Component framework |
| Vite | Dev server & bundler |
| Plain CSS (modular per component) | Styling |
| Jest + React Testing Library | Unit tests |

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio-spa.git
cd portfolio-spa

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Running Tests

```bash
npm test
```

---

## Project Structure

```
portfolio-spa/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── babel.config.js             # Babel config for Jest
├── src/
│   ├── main.jsx                # React DOM mount point
│   ├── App.jsx                 # Root component (holds all shared state)
│   ├── App.css                 # Layout for controls row
│   ├── styles/
│   │   └── global.css          # CSS variables, reset, base styles
│   ├── components/
│   │   ├── Header.jsx/.css     # Fixed top nav with Add Project CTA
│   │   ├── Hero.jsx/.css       # Full-screen landing section
│   │   ├── SearchBar.jsx/.css  # Controlled search input
│   │   ├── ProjectGrid.jsx/.css # Maps projects → ProjectCards
│   │   ├── ProjectCard.jsx/.css # Single project display card
│   │   ├── AddProjectForm.jsx/.css # Modal form for new projects
│   │   └── Footer.jsx/.css     # Page footer
│   └── tests/
│       ├── setupTests.js       # Jest/RTL setup
│       ├── __mocks__/
│       │   └── styleMock.js    # CSS mock for Jest
│       ├── SearchBar.test.jsx
│       ├── ProjectCard.test.jsx
│       ├── ProjectGrid.test.jsx
│       └── AddProjectForm.test.jsx
```

---

## Component Tree

```
App (state: projects, searchQuery, showForm)
├── Header          (props: onAddClick)
├── Hero            (props: projectCount)
├── SearchBar       (props: value, onChange)
├── ProjectGrid     (props: projects, searchQuery)
│   └── ProjectCard (props: project)  ×N
├── Footer
└── AddProjectForm  (props: onSubmit, onClose)  ← conditional
```

---

## State Management

All shared state lives in `App.jsx` — the nearest common parent:

| State | Type | Purpose |
|---|---|---|
| `projects` | array | All project objects |
| `searchQuery` | string | Live search input value |
| `showForm` | boolean | Controls modal visibility |

`filteredProjects` is **derived** from `projects` + `searchQuery` on every render — no extra state needed.

---

## Known Limitations

- Projects are stored in React state only; they reset on page refresh (no backend/localStorage persistence)
- No routing — all content lives on one page
- The "Edit" and "Delete" project features are not yet implemented

---

## Design Credits

- Fonts: [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- Color scheme: Dark editorial with electric lime accent (`#e8ff47`)