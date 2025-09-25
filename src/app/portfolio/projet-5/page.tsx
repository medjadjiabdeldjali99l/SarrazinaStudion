import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ProjectGallery from "@/components/Project/ProjectGal";
import ImgSolo from "@/components/Project/ImgSolo";
import ImageCompare from "@/components/Project/ImageCompare";
import ProjectNavigation from "@/components/Project/ProjectNavigation";

export default function Projet5(): React.JSX.Element {
  return (
    <main>
      {/* Hero avec image (pas de vidéo) */}

      <HeroSection
        type="project"
        title="STAND AUTOBACS"
        description={["Événementiel", "Paris, France"]}
        overlay={true}
      />

      {/* Section Images */}
      <section className="section-img">
        {/* Gallery 1 */}
        <ProjectGallery
          images={[
            "/images/STAND REFLEXE/1.webp",
            "/images/STAND REFLEXE/2.webp",
            "/images/STAND REFLEXE/5.webp",
            "/images/STAND REFLEXE/4.webp",
            "/images/STAND REFLEXE/7.webp",
          ]}
          altPrefix="STAND AUTOBACS"
        />

        {/* Image Solo 1 */}
        <ImgSolo
          image="/images/STAND REFLEXE/3.webp"
          alt="STAND AUTOBACS - Vue principale"
        />

        {/* Gallery 2 */}
        <ProjectGallery
          images={[
            "/images/STAND REFLEXE/8.webp",
            "/images/STAND REFLEXE/9.webp",
            "/images/STAND REFLEXE/10.webp",
            "/images/STAND REFLEXE/11.webp",
            "/images/STAND REFLEXE/13.webp",
            "/images/STAND REFLEXE/12.webp",
          ]}
          altPrefix="STAND AUTOBACS"
        />

        {/* Gallery 3 */}
        <ProjectGallery
          images={[
            "/images/STAND REFLEXE/14.webp",
            "/images/STAND REFLEXE/15.webp",
          ]}
          altPrefix="STAND AUTOBACS"
        />

        {/* Image Solo 2 */}
        <ImgSolo
          image="/images/STAND REFLEXE/16.webp"
          alt="STAND AUTOBACS - Détail structure"
        />

        {/* Gallery 4 */}
        <ProjectGallery
          images={[
            "/images/STAND REFLEXE/16.1.webp",
            "/images/STAND REFLEXE/17.webp",
            "/images/STAND REFLEXE/18.webp",
            "/images/STAND REFLEXE/19.webp",
          ]}
          altPrefix="STAND AUTOBACS"
        />

        {/* Image Solo 3 */}
        <ImgSolo
          image="/images/STAND REFLEXE/19.1.webp"
          alt="STAND AUTOBACS - Vue d'ensemble"
        />

        {/* Comparateur d'images */}
        <ImageCompare
          imageBefore="/images/STAND REFLEXE/PLAN 2.webp"
          imageAfter="/images/STAND REFLEXE/PLAN 1.webp"
          alt="STAND AUTOBACS - Comparaison plans"
        />
      </section>

      {/* Navigation entre projets */}
      <ProjectNavigation
        nextProjectHref="/portfolio/projet-6"
        nextProjectText="CHALET TALINE"
        previousProjectHref="/portfolio/projet-4"
        previousProjectText="MCCOOL DONER"
      />
    </main>
  );
}
