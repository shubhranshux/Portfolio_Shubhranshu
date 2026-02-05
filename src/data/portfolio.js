// Portfolio Data for Shubhranshu

export const personalInfo = {
  name: "Shubhranshu",
  title: "Full Stack Developer",
  tagline: "Building innovative web applications with modern technologies",
  email: "shubhranshu1012@gmail.com",
  location: "Odisha, India",
  resumeLink: "#",
  isHireable: true,
};

export const socialLinks = {
  github: "https://github.com/shubhranshux",
  linkedin: "https://www.linkedin.com/in/shubhranshux/",
  instagram: "https://instagram.com/shubhranshux",
  twitter: "https://x.com/Shubhranshu1012",
  email: "mailto:shubhranshu1012@gmail.com",
};

export const aboutMe = {
  description: "I'm a passionate Full Stack Developer and CS enthusiast currently pursuing B.Tech in Computer Science. I specialize in building modern web applications using React, Node.js, and cloud technologies. With a strong foundation in system design and agile methodologies, I create scalable and user-friendly solutions.",
  highlights: [
    "Full Stack Development",
    "AI & Machine Learning",
    "Cloud Architecture",
    "System Design"
  ]
};

export const skills = {
  languages: ["Python", "Java", "JavaScript", "HTML", "CSS"],
  frontend: ["React", "Tailwind CSS", "Responsive Design"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  database: ["DynamoDB", "MongoDB", "SQL"],
  cloud: ["AWS S3", "Lambda", "API Gateway", "Cognito"],
  devops: ["Git", "Docker", "Postman", "VS Code"],
  genai: ["LLMs", "Prompt Engineering", "LangChain", "OpenAI API", "RAG"],
  dataAnalytics: ["Pandas", "NumPy", "Alteryx", "Data Visualization", "Excel"],
  others: ["System Design", "DSA", "Agile", "NLP"]
};

export const techStack = [
  { name: "Frontend", percentage: 85 },
  { name: "Backend", percentage: 75 },
  { name: "GenAI & LLMs", percentage: 70 },
  { name: "Data Analytics", percentage: 65 },
];

export const projects = [
  {
    id: 1,
    title: "🤖 JARVIS - AI Voice Assistant",
    description: "AI-powered voice assistant for real-time interaction using natural language. Features real-time voice input/output, contextual responses, low-latency interaction, and modular architecture for future upgrades.",
    tech: ["React", "Node.js", "OpenAI API", "Web Speech API", "TTS"],
    github: "https://github.com/shubhranshux/python/tree/master/jarvisp1",
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: "📝 Scratch - Serverless Note Taking App",
    description: "Serverless note-taking web app with secure authentication, fast responsive UI, and high availability. Create, update, and delete notes with personalized access and data privacy.",
    tech: ["React", "Vite", "AWS Lambda", "API Gateway", "DynamoDB", "Cognito"],
    github: null,
    live: "https://scratchthenotetaking.netlify.app/",
    featured: true,
  },
  {
    id: 3,
    title: "🪑 Urban Decor - Full Stack E-Commerce",
    description: "Full-stack furniture e-commerce website with seamless shopping experience, secure authentication, product management, and dynamic content. Features secure image storage and scalable backend.",
    tech: ["React", "Vite", "Node.js", "Express", "DynamoDB", "AWS S3"],
    github: null,
    live: "https://urban-decor.netlify.app/",
    featured: true,
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering",
    school: "Government College of Engineering, Kalahandi",
    location: "Odisha",
    duration: "2022 - 2026",
    grade: "CGPA: 8.2",
    current: true,
  },
  {
    id: 2,
    degree: "Higher Secondary (12th)",
    school: "Tetrahedron H.S.",
    location: "Cuttack, Odisha",
    duration: "2020 - 2022",
    grade: "82%",
    current: false,
  },
];

export const certifications = [
  {
    id: 1,
    title: "Meta Full-Stack Web Development",
    issuer: "Meta (Coursera)",
    link: "https://coursera.org/share/a4b72c16fe3f210fb210fd83e3e26b36",
  },
  {
    id: 2,
    title: "IBM Prompt Engineering",
    issuer: "IBM (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/records/53DYW9LVS6QR",
  },
  {
    id: 3,
    title: "ALTERYX Data Analytics",
    issuer: "Alteryx (AICTE)",
    link: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=9401aa0c5227f7c90e3dfb56fddc0f63",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Odia", level: "Native" },
];
