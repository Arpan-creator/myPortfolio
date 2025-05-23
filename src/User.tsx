import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Arpan Kundu",
    stack: [ "Full Stack Developer", "Competitive Programmer", "Freelancer"],
    bio: "I'm a passionate software developer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "Health and Wellness App",
        desc: "The Health and Wellness Project aims to create a platform that provides a holistic and personalized approach to health management. With the increasing importance of maintaining a healthy lifestyle, this project addresses the challenges individuals face in managing their health effectively. ",
        image: "Fitness.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Firebase","Node.js","Express Js", "ChakraUI","RESTful APIs"],
        link: "https://pixel-pole-vault-040.vercel.app/",
        github: "https://github.com/sagarrathod7568/Health-and-Wellness-App"
    },
    {
        title: "Scheduler Application",
        desc: "A web-based application is designed to schedule meetings with clients globally. Features include a common landing page, admin dashboard, and user dashboard, where admins set availability for users to book meetings.HTML, CSS, JavaScript, Google Calendar API.",
        image: "Scheduler_App.png",
        live: false,
        technologies: ["JavaScript", "Google Calender API", "HTML5", "Bootstrap", "CSS3", "Google cloud console"],
        link: "https://sensational-tanuki-ce7315.netlify.app",
        github: "https://github.com/Arpan-creator/Equality-Experts_024"
    },
    {
        title: "Learners Hub",
        desc: "Learners Hub is an innovative educational platform designed to provide free, high-quality education to anyone, anywhere. By leveraging technology, it makes educational resources accessible to all students, regardless of their geographic or economic backgrounds.",
        image: "Learners_Hub.png",
        live: false,
        technologies: [ "HTML5", "Bootstrap", "CSS3", "JavaScript"],
        link: "https://6671565ba1ffece66ecd554d--heartfelt-churros-269c59.netlify.app",
        github: "https://github.com/Arpan-creator/IBM-Innovators_045-"
    },
    // {
    //     title: "Travel Tracker",
    //     desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
    //     image: "Travel.png",
    //     live: false,
    //     technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
    //     link: "https://github.com/Code-Mars/Travel-Tracker",
    //     github: "https://github.com/Code-Mars/Travel-Tracker"
    // },
    // {
    //     title: "Instagram Clone",
    //     desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    //     image: "Instagram.png",
    //     live: false,
    //     technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
    //     link: "https://github.com/Code-Mars/Instagram-Clone",
    //     github: "https://github.com/Code-Mars/Instagram-Clone"
    // },
    
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "TypeScript", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS","Django","MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["Python","C", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Pycharm"]
    }
]
const socialLinks = [
    { link: "https://github.com/Arpan-creator", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/arpan-kundu-ak7691", icon: IconBrandLinkedin },
    
    // { link: "https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/Arpan-creator", icon: IconBrandLeetcode },
    
];


const ExperienceInfo = [
    // {
    //     role: "Specialist Programmer",
    //     company: "Infosys",
    //     date: "Oct 2023 - Present",
    //     desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
    //     skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    // },
    {
        role: "Full Stack Developer",
        company: "Qicpic",
        date: "Dec 2024 - Present",
        desc: "I leveraged my skills in Node.js, Express.js, React.js, and PostgreSQL to develop scalable backend APIs and interactive dashboards for the CAP platform. I integrated payment systems, WebSocket-based real-time updates, and Kafka for inter-service messaging. I deployed services on AWS, implemented secure image handling with encryption/decryption, and collaborated with cross-functional teams to ensure seamless integration and delivery.",
        skills: ["Node.js", "Express.js", "React.js", "Redux", "PostgreSQL", "Kafka", "WebSocket", "AWS", "JavaScript", "API Development", "Microservices", "Encryption", "Team Collaboration"]

    }
]
const Slugs = [
    "typescript",
    // "spring",
    "javascript",
    // "dart",
    "java",
    "react",
    // "angular",
    // "flutter",
    // "android",
    "html5",
    "css3",
    // "springboot",
    "mongodb",
    // "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    // "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    // "cypress",
    // "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    // "androidstudio",
    // "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, Slugs,ExperienceInfo };
// /*ExperienceInfo,/ add if want