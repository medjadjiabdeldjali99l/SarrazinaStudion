import React from "react";
import Image from "next/image";

interface ProjectGalProps {
  images: string[];
  altPrefix: string;
}

export default function ProjectGal({
  images,
  altPrefix,
}: ProjectGalProps): React.JSX.Element {
  return (
    <div className="project-gallery">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`${altPrefix} - Image ${index + 1}`}
          width={800}
          height={600}
        />
      ))}
    </div>
  );
}
