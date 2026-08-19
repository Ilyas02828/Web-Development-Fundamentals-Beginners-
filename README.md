# Web Development Fundamentals
## Task # 1 and Task # 2

Day 1: HTML Fundamentals & Semantic Structure
Goal: Build a strong foundation in semantic HTML and writing clean, well-structured web pages.
Topics to Cover: Semantic HTML elements: header, nav, main, section, article, aside, and footer HTML forms: input types, label, select, textarea, and validation attributes such as required and pattern Tables, ordered/unordered lists, and figure/figcaption

### Task # 1 and Task # 2: Core CSS mechanics
Box model (margin, border, padding, content) Selectors, specificity, pseudo-classes (:hover, :nth-child) Positioning: static, relative, absolute, fixed, sticky
Task: Style yesterday's profile page with plain CSS — add a sticky navbar, styled buttons with hover effects, and a card-style layout for the skills section.
Goal: Master 1D layouts display: flex, justify-content, align-items, flex-wrap, flex-grow/shrink
Goal: Master 2D layouts. display: grid, grid-template-columns/rows, gap, grid-area, responsive grids with auto-fit/minmax

## Task # 3 and Task # 4

### Task # 3: Mobile-first thinking
Media queries, breakpoints, relative units (%, em, rem, vw/vh) Mobile-first vs desktop-first approach
Task: Take Day 3's pricing cards and Day 4's dashboard and make them fully responsive across mobile, tablet, and desktop breakpoints.

### Task # 4: Learn Bootstrap grid system & components
Bootstrap container/row/col system, breakpoints (col-sm, col-md, col-lg) Components: navbar, buttons, cards, forms, alerts
Task: Rebuild the profile page from Day 1-2 entirely using Bootstrap 5 (CDN) — responsive navbar, card-based skills section, Bootstrap form with validation classes.
<img width="1887" height="840" alt="Screenshot 2026-07-24 124318" src="https://github.com/user-attachments/assets/128a345c-29ef-4c75-8194-86db0b0cfec7" />

## Task # 5, Task # 6 and Task # 7

### Task # 5: Combine everything learned Apply HTML + CSS/Bootstrap + responsiveness together
Task: Build a complete responsive landing page (like a SaaS product or portfolio site) with:
Hero section with CTA button, Features section (3-4 cards), Testimonials or pricing section, Responsive navbar with mobile , Footer with social links

### Task # 6: Level up styling workflow
CSS variables (--custom-props), calc(), animations/transitions, @keyframes Sass basics: variables, nesting, mixins, partials (if time permits)
Task: Add smooth hover animations, a CSS-only loading spinner, and a fade-in scroll animation to the Day 7 landing page. Convert one component's CSS into Sass.

### Task # 7: Core JS + interactivity
Variables (let/const), functions, arrow functions, array/object methods (map, filter, forEach) DOM selection (querySelector), event listeners, classList manipulation
Task: Make the landing page interactive — a working mobile nav toggle (vanilla JS, no Bootstrap JS), a dark/light mode switcher, and a simple form validator with error messages hown/hidden via DOM manipulation.
<img width="1867" height="727" alt="Screenshot 2026-07-24 124453" src="https://github.com/user-attachments/assets/302a5dfd-63a0-4133-b77f-ac0e0f18d317" />

<img width="895" height="493" alt="Screenshot 2026-07-24 124700" src="https://github.com/user-attachments/assets/418d7b0b-0c8e-436c-a395-79a670963d32" />

## Task # 8: JavaScript — Async, Fetch & JSON
Goal: Prepare for API-driven apps. fetch(), Promises, async/await, error handling with try/catch Working with JSON responses
Task: Build a small "Weather/Quote/Joke card" app that fetches data from a free public API (e.g. api.quotable.io or openweathermap) and renders it dynamically into the DOM, with a loading state and error handling.
<img width="635" height="261" alt="Screenshot 2026-07-24 123913" src="https://github.com/user-attachments/assets/d649858d-cd40-43d7-a5e3-1c5c9067e2cb" />

<img width="526" height="436" alt="Screenshot 2026-07-24 121654" src="https://github.com/user-attachments/assets/b9720f31-8e4c-4722-910c-3db29e211962" />

<img width="1441" height="462" alt="Screenshot 2026-07-24 154332" src="https://github.com/user-attachments/assets/3057f43e-cf9a-4766-8e89-aaf9e858aee9" />

## Task # 9 and Task# 10

### Task # 9: Goal: Real-world component usage + theming
Modals, offcanvas, carousels, accordions, toasts Customizing Bootstrap via Sass variables ($primary, $font-family-base) instead of overriding with !important
Task: Build a small e-commerce product listing page: product cards in a responsive grid, a "quick view" modal per product, a cart offcanvas sidebar, and a custom Bootstrap theme (override 2-3 variables, e.g. primary color/fonts).

### Task # 10: Goal: Bridge to React's state concepts
localStorage/sessionStorage, JSON.stringify/parse Building a simple "state" pattern in vanilla JS (a single object representing app state, functions to update + re-render)
Task: Turn the shop page into a working cart: add/remove items updates a state object, re-renders the cart count/total, and persists to localStorage on refresh.

<img width="1242" height="748" alt="Screenshot 2026-07-27 122542" src="https://github.com/user-attachments/assets/8195eb0e-11cb-414b-a200-715a99f9c917" />

<img width="1228" height="823" alt="Screenshot 2026-07-27 122747" src="https://github.com/user-attachments/assets/4ff45d5c-69d5-486e-ac5b-78892c76cd7a" />

<img width="1245" height="837" alt="Screenshot 2026-07-27 122952" src="https://github.com/user-attachments/assets/8f0a731b-adb1-4257-a87c-17d7543ca06a" />

## Task # 11

### Task # 11: Goal: Integrate everything from both weeks
Combine HTML/CSS/Bootstrap/JS/API/localStorage into one cohesive project
Task: Build a 3-4 page mini project (e.g., a "Task Manager" or "Recipe Finder" app):
Landing/home page
A page that fetches and displays data from an API
CRUD-like interactions using localStorage (add/edit/delete items)
Fully responsive, using Bootstrap + custom CSS
Clean Git history with a proper README

<img width="1658" height="841" alt="Screenshot 2026-07-28 130750" src="https://github.com/user-attachments/assets/34def147-4f99-4426-b58d-19967efad587" />

<img width="1242" height="837" alt="Screenshot 2026-07-28 131153" src="https://github.com/user-attachments/assets/0e11d36a-8dcb-48f2-8ac9-13259bffc00d" />

## Task # 12: React Fundamentals: Setup, JSX & Components
Goal: Core React, Create React App / Vite setup, JSX syntax, functional components Props, component composition, rendering lists with .map() + key
Task: Rebuild the Day 7 landing page as a React app — break it into components (Navbar, Hero, FeatureCard, Footer), pass content via props, and render the feature cards from an array of objects instead of hardcoded HTML.

### ReactJS Project Setup Steps.
Step 1: Install Node.js
Download and install the latest LTS version of Node.js from: https://nodejs.org
After installation, verify it: node -v. Example: v24.5.0
Check npm: npm -v. Example: 11.6.0

Step 2: Create a React project
Open a terminal and run: npm create vite@latest
It will ask some questions. Example: Project name: my-react-app
Then: Select a framework: 
Choose: React
Then: Select a variant:
Choose: JavaScript (Or TypeScript if you want.)

Step 3: Go into the project: cd my-react-app

Step 4: Install dependencies
npm install or npm i (This installs everything listed in package.json.)

Step 5: Start the development server: npm run dev
You'll see something like: VITE v8.x.x ready in 400ms. Local: http://localhost:5173/
Open: http://localhost:5173

Project structure: After creating the project, you'll see something like:

```
my-react-app
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── index.html
```

<img width="840" height="722" alt="Screenshot 2026-07-30 121651" src="https://github.com/user-attachments/assets/5103079b-1ede-4e0f-9843-b59865b2eff4" />

## Task # 3: State & Events — useState
Goal: Interactivity the React way useState, controlled components, event handlers in JSX (onClick, onChange)
Conditional rendering (&&, ternary)
Task: Convert the Day 9 dark/light toggle and mobile nav into React state. Build a controlled form (name/email/message) with real-time validation messages driven by state, not DOM manipulation.

## Task # 14: useEffect & Data Fetching in React
Goal: Side effects and lifecycle useEffect, dependency arrays, cleanup functions Fetching API data inside a component, loading/error states
Task: Rebuild the Day 10 API card app in React — fetch quotes/weather on mount, show a loading spinner while fetching, handle errors gracefully, and add a "New Quote" button that re-fetches.

## NodeJS 
## Task # 15: Node.js Fundamentals & NPM
Goal: Understand the runtime outside the browser. Node.js basics: modules (require/module.exports and ES modules), npm init, installing packages Built-in modules: fs, path, http Environment variables with dotenv
Task: Build a simple CLI tool with Node (no Express) that reads a JSON file of "tasks," lets you add/list/delete tasks via command-line arguments, and writes back to the file using fs.

<img width="578" height="767" alt="Screenshot 2026-08-04 120136" src="https://github.com/user-attachments/assets/243aa142-da50-499e-b775-8f9f9bbbe53a" />

## ExpressJS
## Task # 16:  Express Fundamentals — Routing & Middleware
Goal: Build a real HTTP server Setting up Express, routes (GET/POST/PUT/DELETE), route params, query params Middleware concept: express.json(), custom logging middleware, next() 
Task: Build a REST API for the Task Manager (from Day 21) using Express and an in-memory array — full CRUD (GET/tasks, POST/tasks, PUT/tasks/:id, DELETE/tasks/:id). Add a custom logging middleware that prints method + URL + timestamp.

<img width="496" height="747" alt="Screenshot 2026-08-04 160413" src="https://github.com/user-attachments/assets/6d33eb06-5401-4ef5-830a-873e8abe9dd5" />

<img width="495" height="580" alt="Screenshot 2026-08-04 160429" src="https://github.com/user-attachments/assets/50f28eda-fa33-45dc-8473-4e9a12aedec0" />

<img width="637" height="597" alt="Screenshot 2026-08-04 160454" src="https://github.com/user-attachments/assets/d35bda96-1c15-4e6d-82e9-57c22fb7c005" />

<img width="518" height="616" alt="Screenshot 2026-08-04 160514" src="https://github.com/user-attachments/assets/63239fe5-9485-4aae-a722-453941cf8f72" />

## MongoDB & Mongoose
## Task # 17: MongoDB & Mongoose Basics
Goal: Real persistence layer. MongoDB Atlas setup (free cluster), Mongoose schemas/models, connecting Express to MongoDB CRUD with Mongoose (.find(), .create(), .findByIdAndUpdate(), .findByIdAndDelete())
Task: Replace the in-memory array from Day 23 with a real MongoDB collection via Mongoose. Define a Task schema (title, description, completed, createdAt) and wire all CRUD routes to the database.

<img width="670" height="757" alt="Screenshot 2026-08-05 125746" src="https://github.com/user-attachments/assets/1cd044c7-e231-49eb-b7f3-c499bbd22479" />
<img width="542" height="906" alt="Screenshot 2026-08-05 125852" src="https://github.com/user-attachments/assets/e0112737-17bf-4636-a854-27a00fb965f1" />
<img width="517" height="643" alt="Screenshot 2026-08-05 125926" src="https://github.com/user-attachments/assets/37b3563b-32fa-43b5-8ede-441a09560145" />
<img width="540" height="678" alt="Screenshot 2026-08-05 130014" src="https://github.com/user-attachments/assets/25e049c0-8ad8-480e-896c-c6533343d599" />
<img width="595" height="616" alt="Screenshot 2026-08-05 130034" src="https://github.com/user-attachments/assets/dee0e823-a6bb-4bef-a0d8-2d10c80f02a3" />

## Create frontend for the Task Manager App using ReactJS.
<img width="413" height="692" alt="Screenshot 2026-08-10 105234" src="https://github.com/user-attachments/assets/20e8c22a-3e23-477e-aa3a-35b7f0994c19" />

<img width="831" height="846" alt="Screenshot 2026-08-10 105338" src="https://github.com/user-attachments/assets/6a71b9a8-6afe-4d05-baed-5b2f742fd3c8" />

## Task # 17:  Authentication — JWT & bcrypt
Goal: Secure user accounts Password hashing with bcrypt, JWT generation/verification
POST /register, POST /login, protected routes with auth middleware
Task: Add a User model and build register/login endpoints (hashed passwords, JWT on login). Protect the Task routes so only logged-in users can access their own tasks (add a userId field to Task, filter by it).

### Updated Task Manager Project
This task improves the existing Task Manager Project by replacing an open task system with a user-specific and protected task management system. The main technologies used for authentication are:
bcrypt — for securely hashing user passwords.
JSON Web Token (JWT) — for authentication after login.
Express middleware — for protecting task routes.
MongoDB/Mongoose — for storing users and their tasks.
Axios interceptors — for automatically sending the JWT from the React frontend to the backend.

## Task # 18: Connecting React Frontend to the Express/MongoDB Backend
Goal: Full-stack integration. Replacing json-server/mock data in the  React app with real API calls Handling JWT on the frontend (storing token, sending Authorization header, protected routes/UI) CORS setup on the Express side
Task: Connect the React Task Manager to the real task-api. Add login/register pages in React, store the JWT (localStorage or memory), attach it to API requests, and make the task list user-specific.

<img width="573" height="701" alt="Screenshot 2026-08-10 155201" src="https://github.com/user-attachments/assets/155057a6-e890-4b8d-86e4-5990164883ad" />
<img width="468" height="568" alt="Screenshot 2026-08-10 155210" src="https://github.com/user-attachments/assets/6864a8c6-4d64-48f5-a90c-12657c03dfa9" />

## Task # 19: TypeScript Fundamentals
Goal: Type safety mindset. Basic types, interfaces vs types, enum, generics basics, tsconfig.json Typing function params/returns, union types, optional/nullable
Task: Convert the Day 22 Node CLI tool to TypeScript. Define an interface for Task, type all functions, and fix all type errors (no any).

<img width="535" height="598" alt="Screenshot 2026-08-11 135338" src="https://github.com/user-attachments/assets/11b9c592-c4cc-4312-acc2-3464161c3de0" />

## Task # 20: TypeScript + Express Backend
Goal: Type-safe API layer. Typing Express Request/Response, typing Mongoose schemas/models with Document/interfaces Typed middleware, typed error handling
Task: Migrate the Day 26 task-api to TypeScript — typed Task/User interfaces, typed route handlers, typed JWT payload. Set up ts-node-dev for local dev.

## Task # 21: Admin Panel Architecture & Role-Based Access Control (RBAC)
Goal: Design multi-role systems. User roles (admin, editor, user) in the Mongoose schema, role-based middleware (isAdmin, isEditor)
Planning an admin panel's structure: separate routes/layout vs shared app with conditional UI
Task: Add a role field to the User schema. Build Express middleware that restricts certain routes to admin only (e.g. DELETE /users/:id, GET /admin/stats). Seed a test admin user.

## Task # 22: Admin Dashboard UI — Layout & Protected Routes
Goal: Build the admin shell. Admin layout (sidebar + topbar), nested routing (/admin/*) with React RouterRoute guards: redirect non-admins away from /admin routes
Task: Build an AdminLayout component (sidebar nav: Dashboard, Users, Tasks, Settings) with nested routes. Add a ProtectedRoute/AdminRoute wrapper that checks the logged-in user's role from Redux/Context before rendering.
<img width="930" height="874" alt="Screenshot 2026-08-19 115443" src="https://github.com/user-attachments/assets/32ae8d55-88bb-443d-b1f0-f4dea4b37a3e" />