import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ProjectGallery from "@/components/Project/ProjectGal";
import ImgSolo from "@/components/Project/ImgSolo";
import ImageCompare from "@/components/Project/ImageCompare";
import ProjectNavigation from "@/components/Project/ProjectNavigation";

export default function Projet4(): React.JSX.Element {
  return (
    <main>
      <HeroSection
        type="project"
        videoSrc="/videos/DONNER WEBSITE" // Sans extension
        imageSrc="/images/MCCOOL 1/0MB.webp" // Fallback image
        poster="/images/MCCOOL 1/0MB.webp" // Preview pendant chargement
        title="MCCOOL DONER"
        description={["Restauration", "Blida, Algérie"]}
        overlay={false} // Pas d'overlay pour ce projet
      />

      {/* Section Images */}
      <section className="section-img">
        {/* Gallery 1 */}
        <ProjectGallery
          images={[
            "/images/MCCOOL 1/0MB.webp",
            "/images/MCCOOL 1/1.webp",
            "/images/MCCOOL 1/2.webp",
            "/images/MCCOOL 1/3.webp",
          ]}
          altPrefix="MCCOOL DONER"
        />

        {/* Gallery 2 */}
        <ProjectGallery
          images={[
            "/images/MCCOOL 1/4.webp",
            "/images/MCCOOL 1/5.webp",
            "/images/MCCOOL 1/6.webp",
            "/images/MCCOOL 1/7.webp",
          ]}
          altPrefix="MCCOOL DONER"
        />

        {/* Image Solo 1 */}
        <ImgSolo
          image="/images/MCCOOL 1/8.webp"
          alt="MCCOOL DONER - Vue d'ensemble"
        />

        {/* Gallery 3 */}
        <ProjectGallery
          images={["/images/MCCOOL 1/10.webp", "/images/MCCOOL 1/11.webp"]}
          altPrefix="MCCOOL DONER"
        />

        {/* Image Solo 2 */}
        <ImgSolo
          image="/images/MCCOOL 1/12.webp"
          alt="MCCOOL DONER - Détail intérieur"
        />

        {/* Gallery 4 */}
        <ProjectGallery
          images={[
            "/images/MCCOOL 1/13.webp",
            "/images/MCCOOL 1/14.webp",
            "/images/MCCOOL 1/15.webp",
            "/images/MCCOOL 1/16.webp",
            "/images/MCCOOL 1/17.webp",
            "/images/MCCOOL 1/18.webp",
          ]}
          altPrefix="MCCOOL DONER"
        />

        {/* Image Solo 3 - Axonométrie */}
        <ImgSolo
          image="/images/MCCOOL 1/AXOMCCOOL.webp"
          alt="MCCOOL DONER - Axonométrie"
        />

        {/* Comparateur d'images */}
        <ImageCompare
          imageBefore="/images/MCCOOL 1/PLAN 2.webp"
          imageAfter="/images/MCCOOL 1/PLAN 1.webp"
          alt="MCCOOL DONER - Comparaison plans"
        />
      </section>

      {/* Navigation entre projets */}
      <ProjectNavigation
        nextProjectHref="/portfolio/projet-5"
        nextProjectText="STAND AUTOBACS"
        previousProjectHref="/portfolio/projet-3"
        previousProjectText="BUREAU D'ASSURANCE REFLEXE"
      />
    </main>
  );
}
