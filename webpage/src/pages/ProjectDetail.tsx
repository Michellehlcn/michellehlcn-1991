import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft , ExternalLink } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
}

const projects: Project[] = [
  {
    id: "parkrun-app",
    title: "Parkrun Stats App",
    description:
      "A web app that syncs with Strava to display running stats, generate weekly summaries, and visualize performance trends.",
    image: "/images/parkrun-demo.png",
    tech: ["React", "Tailwind", "Node.js", "Strava API"],
    link: "https://www.parkrunner.app",
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    description:
      "A full-featured online store built with React, Redux, and Spring Boot, including cart, checkout, and order tracking.",
    image: "/images/ecommerce-demo.png",
    tech: ["React", "Redux", "Spring Boot", "PostgreSQL"],
    link: "https://mystore-demo.netlify.app",
  },
];

const ProjectDetail: React.FC =() =>{
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            
        )
    }
}