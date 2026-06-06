# 🌟 Madhavan's Professional Portfolio

A high-performance, responsive, and beautifully animated portfolio website built with **React**, **Vite**, and **Framer Motion**. This portfolio is designed to showcase full-stack development expertise (MERN stack, cloud technologies, and modern web architectures) with smooth micro-animations and clean layouts.

---

## 🚀 Features

- **⚡ Fast Build & Hot Reloading**: Powered by Vite for an ultra-fast developer experience.
- **✨ Fluid Micro-Animations**: Smooth scroll-linked effects, hover interactions, and entrance animations utilizing Framer Motion.
- **📱 Fully Responsive**: Tailored layouts using modern CSS Grid and Flexbox that adapt seamlessly from mobile screens to large desktops.
- **🛠️ Modular Architecture**: Highly structured React components for Navbar, Hero, About, Skills, Projects, Certifications, Contact, and Footer.
- **📊 Configurable Data Model**: The entire portfolio's content is managed via a single config file (`src/data/portfolioData.js`), making updates incredibly simple.
- **🎨 Modern Design Aesthetics**: Uses high-fidelity styling (via `src/styles/global.css`), curated color palettes, and custom Google Fonts (*Manrope* and *Inter*).

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (custom properties, responsive variables, modern layout models)

---

## 📂 Project Structure

```text
portfolio-mine/
├── index.html                # Entry HTML document with Google Fonts & metadata
├── vite.config.js            # Vite configuration for React
├── package.json              # Project scripts and dependencies
├── src/
│   ├── main.jsx              # Application entry point
│   ├── App.jsx               # Main container rendering page components
│   ├── assets/               # Local static assets (images, logos, portraits)
│   ├── data/
│   │   └── portfolioData.js  # Centralized content file (main configuration)
│   ├── components/           # UI Components
│   │   ├── Navbar/           # Main navigation with mobile drawer
│   │   ├── Hero/             # Intro section with call-to-actions
│   │   ├── About/            # Profile information & key statistics
│   │   ├── Skills/           # Interactive skills grid grouped by domain
│   │   ├── Projects/         # Portfolio items with tech stack tags
│   │   ├── Education/        # Academic history
│   │   ├── Experience/       # Professional work timeline
│   │   ├── Contact/          # Form/Contact details & email links
│   │   └── Footer/           # Bottom links & copyright details
│   ├── pages/                # Page layouts
│   │   └── Home.jsx          # Assembled single-page viewport layout
│   └── styles/
│       └── global.css        # Main stylesheet containing design tokens
```

---

## 🏁 Getting Started

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone & Navigate
```bash
git clone <repository-url>
cd portfolio-mine
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the address printed in your terminal).

### 4. Build for Production
```bash
npm run build
```
This command compiles the assets and generates static HTML/JS/CSS bundles in the `/dist` directory.

### 5. Preview Production Build
```bash
npm run preview
```
Runs a local web server to preview the production-ready build.

---

## ⚙️ How to Customize Content

You don't need to dive deep into the React components to update the profile details. All content is defined in [portfolioData.js](file:///c:/Users/jayam/Desktop/portfolio-mine/src/data/portfolioData.js).

Open the file and modify the exported data schemas:

- **Navigation Links**: Modify `navLinks` array to add/remove sections.
- **Hero & Intro**: Edit the `hero` object (eyebrow text, name, description, and hero workspace image).
- **About Info**: Update stats (e.g. Years of Experience) and paragraphs in the `about` object.
- **Skills Grid**: Add or remove items in the `skills` array. Skills are categorized under Frontend, Backend, Database, and Tools.
- **Projects**: Edit the `projects` list to showcase your work (titles, description, images, tech tags, etc.).
- **Certifications**: Add credentials inside the `certifications` array.
- **Contact Details**: Change email, location, and social links in the `contact` object.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
