import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    title: "Fork & Focus Restaurant Blog",
    description:
      "A blog platform for sharing restaurant reviews and recommendations from around the world. Built using HTML, CSS, and JavaScript, the site allows users to submit blog posts which are sent to an API, fetched, and dynamically displayed on the page. All design and development were completed by me, with a focus on clean UI, smooth user experience, and a mobile-friendly layout.",
    image: project1,
    repo: "https://github.com/Niksubishi/forkandfocusblog",
    live: "https://forkandfocus.netlify.app",
  },
  {
    title: "YoBid Auction Site",
    description:
      "This project is an online auction platform where users can bid on various items, from electronics to collectibles. On registration users are given tokens they can spend and earn. The website allows users to create listings, place bids, and manage their auction history. This project is developed using Vite, Tailwind CSS, and JavaScript, and emphasizes a seamless and intuitive user experience.",
    image: project2,
    repo: "https://github.com/Niksubishi/Semester-Project-2/",
    live: "https://yobid.netlify.app",
  },
  {
    title: "Ecomstore Sales",
    description:
      "An online shopping platform built with React and styled-components, fetching product data (including discounts) from the Noroff API. Users can browse products, view detailed information, add items to their cart, and complete a checkout process. Designed for a smooth and responsive user experience, with clean styling and intuitive navigation.",
    image: project3,
    repo: "https://github.com/Niksubishi/ecom-store/",
    live: "https://ecomstorenik.netlify.app",
  },
];

export default projects;
