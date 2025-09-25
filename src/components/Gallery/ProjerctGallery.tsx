"use client";
import React from "react";
import Image from "next/image";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({
  projects,
}: ProjectGalleryProps): React.JSX.Element {
  return (
    <div className="project-gallery">
      {projects.map((project) => (
        <div key={project.id} className="gallery-item">
          <Image
            src={`/optimized-images/${project.image}.webp`}
            alt={project.title}
            width={800}
            height={600}
            quality={85}
          />
          <div className="inspiration-text">{project.description}</div>
        </div>
      ))}
    </div>
  );
}
