import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ProjectGallery from "@/components/Project/ProjectGal";
import ImgSolo from "@/components/Project/ImgSolo";
import ImageCompare from "@/components/Project/ImageCompare";
import ProjectNavigation from "@/components/Project/ProjectNavigation";

export default function Projet7(): React.JSX.Element {
  return (
    <main>
      <HeroSection
        type="project"
        videoSrc="/videos/CLIP3" // Sans extension
        imageSrc="/images/MCCOOL/6.webp" // Fallback image
        poster="/images/MCCOOL/6.webp" // Preview pendant chargement
        title="MCCOOL"
        description={["Restauration", "Blida, Algérie"]}
        overlay={false} // Pas d'overlay pour ce projet
      />

      {/* Image Solo en haut (spécifique à ce projet) */}
      {/* <div className="img-solo">
        <ImgSolo image="/images/MCCOOL/1.webp" alt="MCCOOL - Vue principale" />
      </div> */}

      {/* Section Images */}
      <section className="section-img">
        {/* Gallery 1 */}
        <ProjectGallery
          images={[
            "/images/MCCOOL/1.webp",
            "/images/MCCOOL/6.webp",
            "/images/MCCOOL/2.webp",
            "/images/MCCOOL/3.webp",
            "/images/MCCOOL/4.webp",
            "/images/MCCOOL/5.webp",
          ]}
          altPrefix="MCCOOL"
        />
        <ImgSolo
          image="/images/MCCOOL/12.webp"
          alt="MCCOOL - Détail intérieur"
        />
        {/* Gallery 2 */}
        <ProjectGallery
          images={["/images/MCCOOL/7.webp", "/images/MCCOOL/9.webp"]}
          altPrefix="MCCOOL"
        />

        {/* Gallery 3 */}
        <ProjectGallery
          images={[
            "/images/MCCOOL/10.webp",
            "/images/MCCOOL/11.webp",
            "/images/MCCOOL/15.webp",
            "/images/MCCOOL/13.webp",
            "/images/MCCOOL/16.webp",
          ]}
          altPrefix="MCCOOL"
        />

        {/* Image Solo 2 */}

        {/* Comparateur d'images */}
        <ImageCompare
          imageBefore="/images/MCCOOL/PLAN 2.webp"
          imageAfter="/images/MCCOOL/PLAN 1.webp"
          alt="MCCOOL - Comparaison plans"
        />
      </section>

      {/* Navigation entre projets */}
      <ProjectNavigation
        nextProjectHref="/portfolio/projet-8"
        nextProjectText="PROMOTION BELA"
        previousProjectHref="/portfolio/projet-6"
        previousProjectText="CHALET TALINE"
      />
    </main>
  );
}
