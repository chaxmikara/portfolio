export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    category: string;
    subcategory?: string;
}

export const projects: Project[] = [
    // DriveOrbit System - Multiple Components
    {
        title: "DriveOrbit - Mobile App",
        description: "Fleet management mobile application for drivers and fleet managers with real-time tracking and management features.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        tags: ["Flutter", "Firebase", "Google API", "Mobile Development"],
        githubUrl: "https://github.com/DriveOrbit/Driveorbit-App.git",
        liveUrl: "https://www.driveorbit.pro/",
        category: "Full-Stack Applications",
        subcategory: "DriveOrbit System",
    },
    {
        title: "DriveOrbit - Web Dashboard",
        description: "Administrative web dashboard for fleet management with comprehensive monitoring capabilities and analytics.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
        tags: ["Next.js", "Firebase", "React", "TypeScript"],
        githubUrl: "https://github.com/DriveOrbit/Driveorbit-Web.git",
        liveUrl: "https://www.driveorbit.pro/",
        category: "Full-Stack Applications",
        subcategory: "DriveOrbit System",
    },
    {
        title: "DriveOrbit - Backend API",
        description: "RESTful API service powering the DriveOrbit ecosystem, handling authentication, data processing, and business logic.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
        tags: ["Spring Boot", "PostgreSQL", "REST API", "JWT Security"],
        githubUrl: "https://github.com/DriveOrbit/DriveOrbit-core.git",
        liveUrl: "#",
        category: "Full-Stack Applications",
        subcategory: "DriveOrbit System",
    },
    {
        title: "DriveOrbit - Landing Page",
        description: "Product landing page for the DriveOrbit fleet management system, showcasing features and benefits.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        tags: ["Next.js", "React", "Responsive Design"],
        githubUrl: "https://github.com/DriveOrbit/DOB_LandingPage.git",
        liveUrl: "https://www.driveorbit.pro/",
        category: "Full-Stack Applications",
        subcategory: "DriveOrbit System",
    },
    {
        title: "DriveOrbit - UI/UX Design",
        description: "User interface and user experience design for the DriveOrbit fleet management system, focusing on intuitive navigation and clear information display.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Figma", "UI Design", "UX Design", "Prototyping"],
        githubUrl: "#",
        liveUrl: "https://www.figma.com/proto/peVlUkMfRGZ6mussBdmBHC/Design?node-id=196-96&t=VOTI5QneK8Kdb0Ec-1",
        category: "UI/UX Design",
        subcategory: "DriveOrbit System",
    },

    // Other Applications
    {
        title: "TIKO Ticketing System",
        description: "An efficient and user-friendly platform for browsing, booking, and managing event tickets in real time with secure authentication.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        tags: ["Spring Boot", "MySQL", "Angular", "Bootstrap", "Spring Security"],
        githubUrl: "https://github.com/chaxmikara/Tiko.git",
        liveUrl: "#",
        category: "Full-Stack Applications",
    },
    {
        title: "Plane Ticket Booking System",
        description: "A Java program for managing seat reservations on a private plane with functionalities for buying, canceling, and displaying seats.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tags: ["Java", "OOP", "Data Structures"],
        githubUrl: "#",
        liveUrl: "#",
        category: "Software Development",
    },
    {
        title: "CricketVerse - Players Buying System",
        description: "A platform for cricket team management with player trading, bidding, and team formation features.",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
        tags: ["Node.js", "React", "RESTful API", "Authentication"],
        githubUrl: "https://github.com/chaxmikara/SpiritX_TechVerse2.git",
        liveUrl: "#",
        category: "Full-Stack Applications",
    },

    // Design Projects
    {
        title: "XR-Based Virtual Museum for Apple Vision Pro",
        description: "An immersive XR experience design for Apple Vision Pro, making cultural heritage globally accessible with intuitive navigation and engaging storytelling.",
        image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tags: ["XR Design", "UX Design", "Apple Vision Pro", "Figma"],
        githubUrl: "#",
        liveUrl: "https://www.figma.com/design/p5Qrfdfq0fVnBWYaFM88Pn/Monochrome?node-id=190-3943&t=hTd4iXrU5waRSt51-1",
        category: "UI/UX Design",
    },
    {
        title: "Carbon - Sustainable Urban Living",
        description: "UI/UX design for a carbon footprint tracking application, envisioning sustainable green urban living by 2050.",
        image: "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tags: ["UI Design", "UX Design", "Sustainability", "Figma"],
        githubUrl: "#",
        liveUrl: "https://www.figma.com/design/62iZO6TecTUTPOk71EzDKU/IX-022_Monochrome_project?node-id=205-4846&t=q6nPUxMkP5DFIH03-1",
        category: "UI/UX Design",
    },
    {
        title: "Belle - AI Powered Chatbot",
        description: "UI/UX design for an AI-powered chatbot interface focused on natural conversation and user assistance.",
        image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        tags: ["AI", "Chatbot", "UI Design", "Figma"],
        githubUrl: "#",
        liveUrl: "https://www.figma.com/design/HWEen3PTJTiVrr0Wp4rVdq/Benchmark-3.0-(First-Phase-Submission)-Team-Monochrome?node-id=311-1709&t=xh6jMS0NrygCrWPV-1",
        category: "UI/UX Design",
    },
];

// Helper function to get project categories
export function getProjectCategories() {
    return [
        { id: "all", name: "All Projects" },
        { id: "Full-Stack Applications", name: "Full-Stack" },
        { id: "UI/UX Design", name: "UI/UX Design" },
        { id: "Software Development", name: "Software Dev" },
    ];
}
