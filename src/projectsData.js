export const projectsData = [
  {
    id: 1,
    title: "JuanVote Admin",
    image: "/Portfolio/images/JVA_Admin.webp", 
    
    gallery: [
      "/Portfolio/images/JVA_GameMgt.webp",
      "/Portfolio/images/JVA_Login.webp",
      "/Portfolio/images/JVA_Reset.webp"
    ],
    
    subtitle: "Game Control",
    color: "#a29bfe",
    rotate: { x: 5, y: -5, z: -2 },
    topPosition: "300px",
    align: "left",
    width: "420px",
    height: "201px",
    category: "Full Stack",
    headline: "The Admin Website for the JuanVote Unity game.",
    meta: { company: "Capstone", role: "Full Stack", date: "July 2025" },
    context: "For our Capstone project, the JuanVote Unity game required a dynamic way to adjust gameplay parameters without rebuilding the app. We needed a centralized web dashboard that allowed administrators to modify game rules, manage active sessions, and analyze player data in real-time.",
    roleDescription: "I served as the Full Stack Developer, building the bridge between the web platform and the Unity game engine. I developed the backend APIs that the game client queries for configuration and built the frontend interface that allows admins to toggle the game and adjust its settings on the fly."
  },
  {
    id: 2,
    title: "JuanVote",
    image: "/Portfolio/images/JV_Game.webp",
    
    gallery: [

      "/Portfolio/images/JV_Game.webp"
    ],

    subtitle: "Android Game",
    color: "#1c1c1c",
    rotate: { x: 5, y: 10, z: 3 },
    topPosition: "600px",
    align: "right",
    width: "280px",
    height: "234px",
    category: "Game Development",
    headline: "Gamifying voter education on mobile.",
    meta: { company: "Capstone", role: "Backend Dev", date: "July 2025" },
    context: "For our Capstone project, we wanted to make voter education accessible and engaging. JuanVote is a 2D mobile game built with Unity for Android that simulates the voting process, teaching players how to evaluate candidates and navigate polling stations.",
    roleDescription: "I served as the Backend Developer, responsible for connecting the Unity client to the cloud. I implemented Google Authentication for secure and easy sign-ins and architected the NoSQL database connection to store player progress, leaderboards, and analytics data in real-time."
  },
  {
    id: 3,
    title: "Halalan Tracker",
    image: "/Portfolio/images/JVW_Website.webp",
    gallery: [
      "/Portfolio/images/JVW_Candi.webp",
      "/Portfolio/images/JVW_Votes.webp",
      "/Portfolio/images/JVW_Download.webp"
      
    ],
    subtitle: "Real-time Stats",
    color: "#ff7675",
    rotate: { x: 5, y: -15, z: -4 },
    topPosition: "900px",
    align: "left",
    width: "440px",
    height: "232px",
    category: "Public Dashboard",
    headline: "Tracking red flags, green flags, and real-time votes.",
    meta: { company: "Capstone", role: "Full Stack", date: "July 2025" },
    context: "As the public-facing component of our JuanVote Capstone, this dashboard allows players to see the real-time impact of their in-game choices. It visualizes collective voting data and analyzes candidate traits—categorizing them into 'Red Flags' (negative) and 'Green Flags' (positive) to help players understand the consequences of their votes.",
    roleDescription: "I served as the Full Stack Developer, bridging the gap between the game's data and the web. I established the connection between the central database and this website, ensuring that player votes and candidate analytics are fetched and displayed in real-time for the public to see."
  },
  {
    id: 4,
    title: "Ice Bound",
    image: "/Portfolio/images/IB_Game.webp",
    gallery: [
      "/Portfolio/images/IB_Main.webp",
      "/Portfolio/images/IB_GameShowcase.webp",
      "/Portfolio/images/IB_Leader.webp"
    ],

    subtitle: "Desktop Game",
    color: "#2d3436",
    rotate: { x: 10, y: 15, z: 5 },
    topPosition: "1200px",
    align: "right",
    width: "260px",
    height: "260px",
    category: "Game Development",
    headline: "A competitive desktop game with global rankings.",
    meta: { company: "Project", role: "Backend Dev", date: "November 2024" },
    context: "Ice Bound is a desktop game developed as a major course project. The core challenge was not just gameplay, but creating a persistent competitive environment where players could compete for high scores and see their rankings update in real-time.",
    roleDescription: "I served as the Backend Developer, tasked with building a robust leaderboard system. I designed and connected the database to store player scores securely, ensuring that leaderboard data was synchronized and accessible across different devices."
  },
  {
    id: 5,
    title: "Company Mapping",
    image: "/Portfolio/images/RC_Map.webp",
    gallery: [
      "/images/RC_Map.webp",
    ],
    subtitle: "Contract Tracker",
    color: "#74b9ff",
    rotate: { x: 5, y: -10, z: -3 },
    topPosition: "1500px",
    align: "left",
    width: "460px",
    height: "227px",
    category: "Internship Project",
    headline: "Visualizing contract expirations for Red Cross.",
    meta: { company: "Red Cross Valenzuela", role: "Full Stack Dev", date: "October 2025" },
    context: "Developed during my internship at the Red Cross Valenzuela City Chapter, this system addresses the challenge of monitoring partner companies with expiring contracts. Manual tracking was inefficient, so the chapter needed a visual tool to oversee their Memorandum of Agreement (MOA) status geographically.",
    roleDescription: "I built the system featuring a street map integration that plots partner companies. I implemented advanced sorting and filtering logic, enabling administrators to view companies by specific expiration dates, isolate those with expired contracts, or sort them by general status for better strategic planning."
  },
  {
    id: 6,
    title: "Frost Burn",
    image: "/Portfolio/images/FB_Game.webp",
    gallery: [
      "/Portfolio/images/FB_Main.webp",
      "/Portfolio/images/FB_InGame.webp"
    ],
    subtitle: "Survival Game",
    color: "#181818",
    rotate: { x: 10, y: 5, z: 4 },
    topPosition: "1800px",
    align: "right",
    width: "280px",
    height: "280px",
    category: "Game Development",
    headline: "Survive the cold by stabilizing your temperature.",
    meta: { company: "Course Project", role: "Backend Dev", date: "November 2024" },
    context: "Developed for our Game Development course, Frost Burn is an endless runner survival game. The core challenge revolves around a dynamic temperature system—players must constantly manage their body heat to avoid freezing while simultaneously dodging upcoming obstacles to survive as long as possible.",
    roleDescription: "I served as the Backend Developer (Game Logic Scripter), responsible for programming the core gameplay loops. I implemented the temperature stabilization algorithm, coded the obstacle generation logic to increase difficulty over time, and built the distance-based scoring system."
  },
  {
    id: 7,
    title: "Plus Size E-commerce",
    image: "/Portfolio/images/PC_Main.webp",
    gallery: [
      "/Portfolio/images/PC_Showcase.webp",
      "/Portfolio/images/PC_Faqs.webp",
      "/Portfolio/images/PC_Contact.webp"
    ],
    subtitle: "Fashion Showcase",
    color: "#00b894",
    rotate: { x: 5, y: -5, z: -2 },
    topPosition: "2100px",
    align: "left",
    width: "400px",
    height: "250px",
    category: "Client Project",
    headline: "A modern storefront for inclusive fashion.",
    meta: { Work: "School Project", role: "Frontend Dev", date: "September 2022" },
    context: "This project was commissioned by a client launching a specialized plus-size clothing brand. They needed an elegant, responsive platform to showcase their collections and allow customers to easily browse products and get in touch with the business.",
    roleDescription: "I built the entire frontend application using React and Tailwind CSS. I focused on creating a visually appealing product showcase with a responsive grid layout and developed the contact section to facilitate direct customer inquiries."
  }
];