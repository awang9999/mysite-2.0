# Alexander Wang's Portfolio Website

A modern, responsive portfolio website built with React.js showcasing professional experience, projects, research, and technical blog posts. The site features smooth scrolling, dynamic routing, and mathematical content rendering with KaTeX.

## Project Overview

This is a single-page application (SPA) portfolio website that presents Alexander Wang's professional profile, including:

- Interactive hero section with video background
- About section with personal introduction
- Work experience timeline
- Featured projects showcase
- Research highlights
- Technical blog with mathematical content support
- Responsive navigation and footer

The site is hosted on AWS as a static website using S3 for storage and Route53 for DNS management, with continuous deployment via CircleCI.

## Tech Stack

- **Frontend Framework**: React 18.1.0
- **Routing**: React Router DOM 6.3.0
- **Styling**: Custom CSS with responsive design
- **Mathematical Rendering**: react-katex, rehype-katex, remark-math
- **Markdown Processing**: react-markdown with GitHub Flavored Markdown support
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **CI/CD**: CircleCI
- **Hosting**: AWS S3 + Route53

## Project Structure

```
.
├── .circleci/              # CircleCI configuration for CI/CD
│   └── config.yml          # Build and deployment pipeline
│
├── public/                 # Static assets served directly
│   ├── blog/               # Markdown blog post source files
│   │   ├── matrix-calculus-chapter1.md
│   │   ├── matrix-calculus-chapter2.md
│   │   └── matrix-calculus-preface.md
│   ├── files/              # Downloadable files (CV, resume)
│   ├── images/             # Image assets (logos, photos, backgrounds)
│   ├── videos/             # Video assets (hero background)
│   ├── index.html          # HTML template
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # Search engine crawler instructions
│
├── src/                    # React application source code
│   ├── components/         # React components
│   │   ├── pages/          # Page-level components
│   │   │   ├── Home.js     # Main landing page (combines all sections)
│   │   │   ├── Blog.js     # Blog index page
│   │   │   ├── Todo.js     # Todo/roadmap page
│   │   │   └── Changelog.js # Site changelog page
│   │   │
│   │   ├── blogcontent/    # Blog post components
│   │   │   ├── matrix-calculus-part-1.js
│   │   │   ├── matrix-calculus-part-2.js
│   │   │   ├── matrix-calculus-preface.js
│   │   │   └── matrix-calculus-toc.js
│   │   │
│   │   ├── HeroSection.js  # Landing hero with video background
│   │   ├── AboutSection.js # Personal introduction section
│   │   ├── ExperienceSection.js # Work experience timeline
│   │   ├── ProjectsSection.js   # Featured projects showcase
│   │   ├── ResearchSection.js   # Research highlights
│   │   ├── Navbar.js       # Navigation bar component
│   │   ├── Footer.js       # Footer with social links
│   │   ├── Button.js       # Reusable button component
│   │   ├── CardItem.js     # Project card component
│   │   ├── BlogIndexItem.js # Blog post preview component
│   │   ├── Markdown.js     # Markdown renderer with math support
│   │   ├── Headings.js     # Custom heading components
│   │   ├── ScrollToTop.js  # Scroll restoration utility
│   │   └── *.css           # Component-specific styles
│   │
│   ├── App.js              # Main app component with routing
│   ├── App.css             # Global application styles
│   └── index.js            # React app entry point
│
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Locked dependency versions
└── README.md               # This file
```

### Directory Details

**`.circleci/`**
Contains CircleCI configuration for automated builds and deployments. The pipeline builds the React app and syncs the build output to an S3 bucket when changes are pushed to the `live` branch.

**`public/`**
Static assets that are served directly without processing by webpack. Includes blog markdown files, images, videos, PDFs (resume/CV), and the HTML template.

**`src/components/`**
Reusable React components organized by function:
- **Section components**: Self-contained sections of the home page (Hero, About, Experience, Projects, Research)
- **Layout components**: Navbar and Footer that appear on all pages
- **Utility components**: Buttons, cards, markdown renderers, and scroll utilities

**`src/components/pages/`**
Top-level page components that define routes:
- `Home.js`: Combines all section components into the main landing page
- `Blog.js`: Blog index listing all posts
- `Todo.js` & `Changelog.js`: Site maintenance pages

**`src/components/blogcontent/`**
Individual blog post components that render markdown content with mathematical notation support using KaTeX.

## Development Setup

### Prerequisites

- Node.js (v12 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000). The page will reload when you make changes, and lint errors will appear in the console.

### Available Scripts

**`npm start`**
Runs the app in development mode with hot reloading.

**`npm test`**
Launches the test runner in interactive watch mode.

**`npm run build`**
Builds the app for production to the `build` folder. The build is minified and optimized for best performance.

**`npm run eject`**
Ejects from Create React App (one-way operation). Only use if you need full control over webpack configuration.

## Deployment

### AWS Hosting Architecture

The site is deployed as a static website on AWS with the following setup:

1. **S3 Bucket**: Stores the built static files (HTML, CSS, JS, images)
2. **Route53 Hosted Zone**: Maps the custom domain to the S3 bucket
3. **CircleCI**: Automates the build and deployment process

### Deployment Process

The deployment is automated via CircleCI:

1. Push changes to the `live` branch
2. CircleCI triggers the build pipeline
3. Dependencies are installed and cached
4. `npm run build` creates production-optimized files
5. Built files are synced to the S3 bucket using `aws s3 sync`
6. Changes are live immediately

### Manual Deployment

To deploy manually:

1. Build the production bundle:
```bash
npm run build
```

2. Sync to S3 (requires AWS CLI configured):
```bash
aws s3 sync build s3://www.alexander-wang.net --delete --exact-timestamps
```

## Key Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Smooth Scrolling**: Anchor-based navigation with smooth scroll behavior
- **Mathematical Content**: Full LaTeX support in blog posts via KaTeX
- **GitHub Flavored Markdown**: Enhanced markdown with tables, task lists, and more
- **Video Background**: Optimized hero section with video and fallback poster
- **Hash Routing Support**: Handles legacy hash-based URLs for backwards compatibility
- **SEO Optimized**: Proper meta tags, semantic HTML, and robots.txt

## Browser Support

- Chrome (last version)
- Firefox (last version)
- Safari (last version)
- Edge (last version)
- Production build supports >0.2% market share browsers

## Contributing

This is a personal portfolio project. If you find bugs or have suggestions, feel free to open an issue.

## License

This project is private and not licensed for reuse.
