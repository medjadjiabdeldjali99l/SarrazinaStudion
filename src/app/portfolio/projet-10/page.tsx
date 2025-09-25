import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ProjectGallery from "@/components/Project/ProjectGal";
import ImgSolo from "@/components/Project/ImgSolo";
import ImageCompare from "@/components/Project/ImageCompare";
import ProjectNavigation from "@/components/Project/ProjectNavigation";

export default function Projet10(): React.JSX.Element {
  return (
    <main>
      <HeroSection
        type="project"
        videoSrc="/videos/ANNIMATION 1 - Trim - Trim2" // Sans extension
        imageSrc="/images/CASBAH/1.1.webp" // Fallback image
        poster="/images/CASBAH/1.1.webp" // Preview pendant chargement
        title="RESTAURANT CASBAH"
        description={["Restauration", "Aubervilliers, France"]}
        overlay={false} // Pas d'overlay pour ce projet
      />

      {/* Section Images */}
      <section className="section-img">
        {/* Image Solo 1 - en haut */}
        <ImgSolo
          image="/images/CASBAH/1.0.webp"
          alt="RESTAURANT CASBAH - Vue principale"
        />

        {/* Gallery 1 */}
        <ProjectGallery
          images={[
            "/images/CASBAH/1.1.webp",
            "/images/CASBAH/1.2.webp",
            "/images/CASBAH/1.3.webp",
            "/images/CASBAH/1.4.webp",
            "/images/CASBAH/1.10.webp",
            "/images/CASBAH/1.5.webp",
          ]}
          altPrefix="RESTAURANT CASBAH"
        />

        {/* Image Solo 2 */}
        <ImgSolo
          image="/images/CASBAH/1.14.webp"
          alt="RESTAURANT CASBAH - Détail ambiance"
        />

        {/* Gallery 2 */}
        <ProjectGallery
          images={[
            "/images/CASBAH/1.6.webp",
            "/images/CASBAH/1.7.webp",
            "/images/CASBAH/1.8.webp",
            "/images/CASBAH/1.9.webp",
            "/images/CASBAH/1.11.webp",
            "/images/CASBAH/1.13.webp",
            "/images/CASBAH/1.12.webp",
          ]}
          altPrefix="RESTAURANT CASBAH"
        />

        {/* Image Solo 3 */}
        <ImgSolo
          image="/images/CASBAH/1.16.webp"
          alt="RESTAURANT CASBAH - Vue intérieure"
        />

        {/* Gallery 3 */}
        <ProjectGallery
          images={[
            "/images/CASBAH/1.17.webp",
            "/images/CASBAH/1.18.webp",
            "/images/CASBAH/1.19.webp",
            "/images/CASBAH/1.111.webp",
            "/images/CASBAH/scene 1.12.webp",
          ]}
          altPrefix="RESTAURANT CASBAH"
        />

        {/* Comparateur d'images */}
        <ImageCompare
          imageBefore="/images/CASBAH/PLAN2.webp"
          imageAfter="/images/CASBAH/PLAN1.webp"
          alt="RESTAURANT CASBAH - Comparaison plans"
          containerId="compare-casbah"
        />
      </section>

      {/* Navigation entre projets */}
      <ProjectNavigation
        nextProjectHref="/portfolio/projet-11"
        nextProjectText="CRÊPERIE SOUAKRA"
        previousProjectHref="/portfolio/projet-9"
        previousProjectText="LAVERIE"
      />
    </main>
  );
}
