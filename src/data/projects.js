import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const projects = [
  {
    title: "Fork & Focus Restaurant Blog",
    description:
      "A blog platform for sharing restaurant reviews and recommendations from around the world. Built using HTML, CSS, and JavaScript, the site allows users to submit blog posts which are sent to an API, fetched, and dynamically displayed on the page. All design and development were completed by me, with a focus on clean UI, smooth user experience, and a mobile-friendly layout.",
    detailedDescription: [
      "Fork & Focus is a comprehensive restaurant blog platform that bridges the gap between food enthusiasts and culinary experiences worldwide. This project showcases full-stack development capabilities by creating an engaging platform where users can discover, share, and explore restaurant reviews from around the globe.",
      "The application features a clean, intuitive interface designed with mobile-first principles and a professional blue color theme representing integrity, responsibility, and professionalism. Users can easily browse through restaurant reviews, submit their own dining experiences, and interact with content through a seamless user interface. The platform includes user authentication, blog post management (create, edit, delete), category filtering, and keyword search functionality.",
      "Key technical features include comprehensive API integration for blog post submission and retrieval, responsive design ensuring optimal viewing across all devices, and custom CSS animations that enhance user engagement. The platform emphasizes visual storytelling with high-quality imagery and structured content presentation.",
      "Built entirely with vanilla technologies - HTML5 for semantic structure, CSS3 for advanced styling and animations, and JavaScript ES6+ for dynamic functionality - this project demonstrates strong foundational web development skills without relying on external frameworks. The project was designed in Figma and deployed on Netlify with npm for dependency management."
    ],
    image: project1,
    repo: "https://github.com/Niksubishi/forkandfocusblog",
    live: "https://forkandfocus.netlify.app",
    imageCaption: "Fork & Focus restaurant blog homepage showcasing featured reviews and clean design",
    technologies: ["html", "css", "js", "figma"],
  },
  {
    title: "YoBid Auction Site",
    description:
      "This project is an online auction platform where users can bid on various items, from electronics to collectibles. On registration users are given tokens they can spend and earn. The website allows users to create listings, place bids, and manage their auction history. This project is developed using Vite, Tailwind CSS, and JavaScript, and emphasizes a seamless and intuitive user experience.",
    detailedDescription: [
      "YoBid represents a sophisticated online auction platform that brings the excitement of bidding to the digital realm. This comprehensive e-commerce solution demonstrates advanced web development techniques and modern design principles with Progressive Web App capabilities.",
      "The platform operates on a token-based economy where new users receive credits upon registration, creating an engaging ecosystem for buying and selling. Users can create detailed listings with multiple images, set auction durations, and monitor bidding activity in real-time. The bidding system includes automated features like bid increments and countdown timers that create urgency and excitement.",
      "Technical highlights include JWT-based authentication, integration with the Noroff Auction API, real-time bid updates, and comprehensive form validation. The application features intelligent API caching, automatic retry logic, skeleton loading states, and responsive mobile-first design optimized for both desktop and mobile experiences.",
      "Built with modern development tools including Vite for optimized build processes with hot module replacement, Tailwind CSS for utility-first styling, and modern JavaScript ES6+ with modular architecture. The project includes Vitest for unit testing, ESLint for code quality, and emphasizes performance optimization with lazy image loading, request deduplication, and accessibility-focused design. Deployed on Netlify with continuous deployment."
    ],
    image: project2,
    repo: "https://github.com/Niksubishi/Semester-Project-2/",
    live: "https://yobid.netlify.app",
    imageCaption: "YoBid auction platform interface displaying active auctions and bidding functionality",
    technologies: ["html", "css", "js", "tailwind", "git"],
  },
  {
    title: "Ecomstore Sales",
    description:
      "A type-safe online shopping platform built with React and TypeScript, featuring styled-components and fetching product data from the Noroff API. Users can browse products, view detailed information, add items to their cart, and complete a checkout process. Designed for a smooth and responsive user experience with modern development practices.",
    detailedDescription: [
      "Ecomstore Sales is a modern e-commerce platform that demonstrates proficiency in React development with TypeScript and contemporary web technologies. This project showcases the implementation of a complete online shopping experience from product discovery to checkout completion with 100% TypeScript coverage for type-safe development.",
      "The application leverages the Noroff API to dynamically fetch product data, including real-time pricing and discount information. Users can browse through a comprehensive product catalog, utilize search and filtering capabilities, and view detailed product specifications with high-quality imagery. The shopping cart system includes quantity management, price calculations, and persistent storage across sessions.",
      "Key technical implementations include React hooks for state management, styled-components for modular CSS-in-JS styling, React Router for navigation, and React Context for global state management. The application features performance optimizations including React.memo, lazy loading, code splitting, and debounced search functionality.",
      "Built using TypeScript for type safety, React 18 for component-based architecture, styled-components for maintainable styling, and comprehensive interfaces throughout. The project emphasizes code organization, performance optimization, accessibility compliance, and modern development practices with skeleton loading states and toast notifications."
    ],
    image: project3,
    repo: "https://github.com/Niksubishi/ecom-store/",
    live: "https://ecomstorenik.netlify.app",
    imageCaption: "Ecomstore sales platform showing product catalog and shopping cart functionality",
    technologies: ["typescript", "react", "css"],
  },
  {
    title: "Social Media Website",
    description:
      "A modern social media web application enabling users to create, share, and interact through posts with robust authentication and design.",
    detailedDescription: [
      "This social media application represents a comprehensive web platform that provides a full social networking experience. Built using modern web technologies and integrating with the Noroff Social Media API, the application offers robust functionality for user interaction and content management with modular routing architecture.",
      "The platform includes secure user authentication with JWT-based login systems, comprehensive post management allowing users to create, edit, and delete content, and social networking capabilities including user following, emoji reactions, and commenting systems. The application features a professionally designed, responsive interface that adapts seamlessly across all device sizes with search and discovery features.",
      "Technical features include robust error handling and form validation, integration with RESTful APIs for data management, dynamic content rendering and real-time post updates, and client-side storage using Local Storage for persistence. The application supports multiple user routes including /auth, /profile, and /post for comprehensive user management and social interactions.",
      "Developed using HTML5 with semantic markup, CSS3 and Tailwind CSS for utility-first responsive styling, and JavaScript ES6+ with modular architecture for core functionality. Built with Vite for optimized development and build processes, PostCSS with Autoprefixer for cross-browser compatibility, and comprehensive API integration for backend services. The project emphasizes scalable architecture, user experience design, and modern web development practices."
    ],
    image: project4,
    repo: "https://github.com/Niksubishi/social-media-website",
    live: "https://socialmedianiks.netlify.app",
    imageCaption: "Social media platform interface showing user posts and interaction features",
    technologies: ["html", "css", "js", "tailwind", "git"],
  },
];

export default projects;
