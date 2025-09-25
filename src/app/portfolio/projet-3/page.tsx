import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ProjectGallery from "@/components/Project/ProjectGal";
import ImageCompare from "@/components/Project/ImageCompare";
import ProjectNavigation from "@/components/Project/ProjectNavigation";

export default function Projet3(): React.JSX.Element {
  return (
    <main>
      {/* Hero avec vidéo */}

      <HeroSection
        type="project"
        videoSrc="/videos/CLIP SITE 720 - Trim" // Sans extension
        imageSrc="/images/REFLEXE ASSUR/0.webp" // Fallback image
        poster="/images/REFLEXE ASSUR/0.webp" // Preview pendant chargement
        title="BUREAU D'ASSURANCE REFLEXE"
        description={["Services", "Paris, France"]}
        overlay={false} // Pas d'overlay pour ce projet
      />

      {/* Section Images */}
      <section className="section-img">
        {/* Gallery 1 */}
        <ProjectGallery
          images={[
            "/images/REFLEXE ASSUR/1.webp",
            "/images/REFLEXE ASSUR/2.webp",
            "/images/REFLEXE ASSUR/3.webp",
          ]}
          altPrefix="BUREAU D'ASSURANCE REFLEXE"
        />

        {/* Gallery 2 */}
        <ProjectGallery
          images={[
            "/images/REFLEXE ASSUR/4.webp",
            "/images/REFLEXE ASSUR/5.webp",
            "/images/REFLEXE ASSUR/6.webp",
            "/images/REFLEXE ASSUR/7.webp",
            "/images/REFLEXE ASSUR/8.webp",
          ]}
          altPrefix="BUREAU D'ASSURANCE REFLEXE"
        />

        {/* Gallery 3 */}
        <ProjectGallery
          images={[
            "/images/REFLEXE ASSUR/9.webp",
            "/images/REFLEXE ASSUR/10.webp",
            "/images/REFLEXE ASSUR/12.webp",
            "/images/REFLEXE ASSUR/BUREAUDETAILMUR.webp",
            "/images/REFLEXE ASSUR/BUREAUDETAILS.webp",
            "/images/REFLEXE ASSUR/13.webp",
          ]}
          altPrefix="BUREAU D'ASSURANCE REFLEXE"
        />

        {/* Gallery 4 */}
        <ProjectGallery
          images={[
            "/images/REFLEXE ASSUR/8.1.webp",
            "/images/REFLEXE ASSUR/9.1.webp",
            "/images/REFLEXE ASSUR/9.2 GARDE.webp",
          ]}
          altPrefix="BUREAU D'ASSURANCE REFLEXE"
        />

        {/* Comparateur d'images */}
        <ImageCompare
          imageBefore="/images/REFLEXE ASSUR/PLAN 2_page-0001 (1).webp"
          imageAfter="/images/REFLEXE ASSUR/PLAN 1_page-0001 (2).webp"
          alt="BUREAU D'ASSURANCE REFLEXE - Comparaison plans"
        />
      </section>

      {/* Navigation entre projets */}
      <ProjectNavigation
        nextProjectHref="/portfolio/projet-4"
        nextProjectText="MCCOOL DONER"
        previousProjectHref="/portfolio/projet-2"
        previousProjectText="PÂTISSERIE NK 2"
      />
    </main>
  );
}
