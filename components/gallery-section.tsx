"use client";

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function GallerySection() {
    // Sample product data for the gallery
    const products = [
        {
            title: "Collaborative Project",
            link: "#",
            thumbnail: "/images/gallery/project1.jpg",
        },
        {
            title: "Team Hackathon",
            link: "#",
            thumbnail: "/images/gallery/project2.jpg",
        },
        {
            title: "Design Workshop",
            link: "#",
            thumbnail: "/images/gallery/project3.jpg",
        },
        {
            title: "Code Review Session",
            link: "#",
            thumbnail: "/images/gallery/project4.jpg",
        },
        {
            title: "UI/UX Research",
            link: "#",
            thumbnail: "/images/gallery/project5.jpg",
        },
        {
            title: "Development Meeting",
            link: "#",
            thumbnail: "/images/gallery/project6.jpg",
        },
        {
            title: "Product Launch",
            link: "#",
            thumbnail: "/images/gallery/project7.jpg",
        },
        {
            title: "Tech Conference",
            link: "#",
            thumbnail: "/images/gallery/project8.jpg",
        },
        {
            title: "Team Building",
            link: "#",
            thumbnail: "/images/gallery/project9.jpg",
        },
        {
            title: "Client Presentation",
            link: "#",
            thumbnail: "/images/gallery/project10.jpg",
        },
        {
            title: "Award Ceremony",
            link: "#",
            thumbnail: "/images/gallery/project11.jpg",
        },
        {
            title: "Project Milestone",
            link: "#",
            thumbnail: "/images/gallery/project12.jpg",
        },
        {
            title: "Success Celebration",
            link: "#",
            thumbnail: "/images/gallery/project13.jpg",
        },
        {
            title: "Remote Collaboration",
            link: "#",
            thumbnail: "/images/gallery/project14.jpg",
        },
        {
            title: "Learning Workshop",
            link: "#",
            thumbnail: "/images/gallery/project15.jpg",
        },
    ];

    return (
        <div className="bg-background py-12">
            <HeroParallax products={products} />
        </div>
    );
}
