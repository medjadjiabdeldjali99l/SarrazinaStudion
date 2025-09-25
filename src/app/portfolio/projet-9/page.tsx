import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ProjectGallery from "@/components/Project/ProjectGal";
import ImgSolo from "@/components/Project/ImgSolo";
import ImageCompare from "@/components/Project/ImageCompare";
import ProjectNavigation from "@/components/Project/ProjectNavigation";

export default function Projet9(): React.JSX.Element {
  return (
    <main>
      <HeroSection
        type="project"
        videoSrc="/videos/Clip 1" // Sans extension
        // imageSrc="/images/laverie/MB.webp" // Fallback image
        // poster="/images/laverie/MB.webp" // Preview pendant chargement
        title="LAVERIE"
        description={["Services", "Paris, France"]}
        overlay={false} // Pas d'overlay pour ce projet
      />

      {/* Section Images */}
      <section className="section-img">
        {/* Gallery 1 */}
        <ProjectGallery
          images={[
            "/images/laverie/MB.webp",
            "/images/laverie/4.webp",
            "/images/laverie/2.webp",
            "/images/laverie/3.webp",
            "/images/laverie/6.webp",
          ]}
          altPrefix="LAVERIE"
        />

        {/* Image Solo 1 */}
        <ImgSolo
          image="/images/laverie/1.webp"
          alt="LAVERIE - Vue d'ensemble"
        />

        {/* Gallery 2 */}
        <ProjectGallery
          images={[
            "/images/laverie/7.webp",
            "/images/laverie/9.webp",
            "/images/laverie/5.webp",
          ]}
          altPrefix="LAVERIE"
        />

        {/* Image Solo 2 */}
        <ImgSolo
          image="/images/laverie/8.webp"
          alt="LAVERIE - Détail intérieur"
        />

        {/* Comparateur d'images */}
        <ImageCompare
          imageBefore="/images/laverie/2_page-0001 (1).webp"
          imageAfter="/images/laverie/1_page-0001 (1).webp"
          alt="LAVERIE - Comparaison plans"
          containerId="compare-laverie"
        />
      </section>

      {/* Navigation entre projets */}
      <ProjectNavigation
        nextProjectHref="/portfolio/projet-10"
        nextProjectText="RESTAURANT CASBAH"
        previousProjectHref="/portfolio/projet-8"
        previousProjectText="PROMOTION BELA"
      />
    </main>
  );
}
