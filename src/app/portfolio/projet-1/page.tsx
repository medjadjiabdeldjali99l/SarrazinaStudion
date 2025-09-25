import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ProjectGallery from "@/components/Project/ProjectGal";
import ImgSolo from "@/components/Project/ImgSolo";
import ImageCompare from "@/components/Project/ImageCompare";
import ProjectNavigation from "@/components/Project/ProjectNavigation";

export default function Projet1(): React.JSX.Element {
  return (
    <main>
      {/* Hero Section */}

      <HeroSection
        type="project"
        // videoSrc="/video/nk-website-720-trim" // Vidéo principale (sans extension)
        // imageSrc="/images/NK 1/1.4.webp" // Fallback image si vidéo échoue
        // poster="/images/NK 1/1.4-poster.jpg" // Preview pendant chargement vidéo
        title="PÂTISSERIE NK"
        description={["Restauration", "Versailles, France"]}
        overlay={true}
      />

      {/* Section Images */}
      <section className="section-img">
        {/* Gallery 1 */}
        <ProjectGallery
          images={[
            "/images/NK 1/1.0.webp",
            "/images/NK 1/1.1.webp",
            "/images/NK 1/2.0.webp",
            "/images/NK 1/2.3.webp",
          ]}
          altPrefix="PÂTISSERIE NK 1"
        />

        {/* Gallery 2 */}
        <ProjectGallery
          images={[
            "/images/NK 1/1.4.webp",
            "/images/NK 1/2.4.webp",
            "/images/NK 1/2.5.webp",
            "/images/NK 1/2.6.webp",
            "/images/NK 1/2.webp",
          ]}
          altPrefix="PÂTISSERIE NK 1"
        />

        {/* Image Solo 1 */}
        <ImgSolo
          image="/images/NK 1/3.webp"
          alt="PÂTISSERIE NK 1 - Vue d'ensemble"
        />

        {/* Gallery 3 */}
        <ProjectGallery
          images={[
            "/images/NK 1/3.1.webp",
            "/images/NK 1/4.webp",
            "/images/NK 1/2.1.webp",
            "/images/NK 1/5.0.webp",
            "/images/NK 1/5.2.webp",
            "/images/NK 1/5.webp",
          ]}
          altPrefix="PÂTISSERIE NK 1"
        />

        {/* Image Solo 2 */}
        <ImgSolo
          image="/images/NK 1/7.3.webp"
          alt="PÂTISSERIE NK 1 - Détail intérieur"
        />

        {/* Gallery 4 */}
        <ProjectGallery
          images={[
            "/images/NK 1/6.0.webp",
            "/images/NK 1/6.1.webp",
            "/images/NK 1/6.3.webp",
            "/images/NK 1/7.2.webp",
            "/images/NK 1/7.4.webp",
            "/images/NK 1/7.5.webp",
            "/images/NK 1/7.6.webp",
            "/images/NK 1/1.webp",
          ]}
          altPrefix="PÂTISSERIE NK 1"
        />
        <ImageCompare
          imageBefore="/images/NK 1/PLAN 2_page-0001.webp"
          imageAfter="/images/NK 1/PLAN 1_page-0001.webp"
          alt="PÂTISSERIE NK 1 - Comparaison plans"
        />
      </section>
      <ProjectNavigation
        nextProjectHref="/portfolio/projet-2"
        nextProjectText="PÂTISSERIE NK 2"
      />
    </main>
  );
}
