import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ProjectGallery from "@/components/Project/ProjectGal";
import ImgSolo from "@/components/Project/ImgSolo";
import ImageCompare from "@/components/Project/ImageCompare";
import ProjectNavigation from "@/components/Project/ProjectNavigation";

export default function Projet8(): React.JSX.Element {
  return (
    <main>
      {/* Hero avec vidéo */}

      <HeroSection
        type="project"
        videoSrc="/videos/ANIMTERRASSE" // Sans extension
        // imageSrc="/images/BELA/DUP/1.webp" // Fallback image
        // poster="/images/BELA/DUP/1.webp" // Preview pendant chargement
        title="PROMOTION IMMOBILIÈRE BELA"
        description={["Résidentiel", "Hydra, Algérie"]}
        overlay={false} // Pas d'overlay pour ce projet
      />

      {/* Section Images - DUP */}
      <section className="section-img">
        {/* Gallery 1 - DUP */}
        <ProjectGallery
          images={[
            "/images/BELA/DUP/1.webp",
            "/images/BELA/DUP/10.webp",
            "/images/BELA/DUP/2.webp",
            "/images/BELA/DUP/3.webp",
            "/images/BELA/DUP/11.webp",
          ]}
          altPrefix="PROMOTION BELA - DUP"
        />

        {/* Image Solo 1 */}
        <ImgSolo
          image="/images/BELA/DUP/21.webp"
          alt="PROMOTION BELA - Vue d'ensemble"
        />

        {/* Gallery 2 - DUP */}
        <ProjectGallery
          images={[
            "/images/BELA/DUP/12.webp",
            "/images/BELA/DUP/13.webp",
            "/images/BELA/DUP/14.webp",
            "/images/BELA/DUP/14(1).webp",
            "/images/BELA/DUP/15.webp",
            "/images/BELA/DUP/16.webp",
            "/images/BELA/DUP/18.webp",
            "/images/BELA/DUP/20.webp",
          ]}
          altPrefix="PROMOTION BELA - DUP"
        />

        {/* Image Solo 2 */}
        <ImgSolo
          image="/images/BELA/DUP/26.webp"
          alt="PROMOTION BELA - Détail architecture"
        />

        {/* Gallery 3 - DUP */}
        <ProjectGallery
          images={[
            "/images/BELA/DUP/9.webp",
            "/images/BELA/DUP/25.webp",
            "/images/BELA/DUP/27.webp",
            "/images/BELA/DUP/28.webp",
            "/images/BELA/DUP/22.webp",
            "/images/BELA/DUP/30.webp",
            "/images/BELA/DUP/5.webp",
            "/images/BELA/DUP/7.webp",
            "/images/BELA/DUP/8.webp",
          ]}
          altPrefix="PROMOTION BELA - DUP"
        />

        {/* Image Solo 3 */}
        <ImgSolo
          image="/images/BELA/DUP/29.webp"
          alt="PROMOTION BELA - Perspective"
        />

        {/* Comparateur d'images 1 */}
        <ImageCompare
          imageBefore="/images/BELA/DUP/PLAN DUP 2_page-0001.webp"
          imageAfter="/images/BELA/DUP/PLAN 1 TYPE_page-0001.webp"
          alt="PROMOTION BELA - Comparaison plans DUP"
          containerId="compare1"
        />
      </section>

      {/* Section APPART TYPE */}
      <section className="section-img" style={{ paddingTop: "0" }}>
        {/* Gallery 4 - APPART TYPE */}
        <ProjectGallery
          images={[
            "/images/BELA/APPART TYPE/0.1.webp",
            "/images/BELA/APPART TYPE/0.2.webp",
            "/images/BELA/APPART TYPE/0.3.webp",
            "/images/BELA/APPART TYPE/1.1.webp",
            "/images/BELA/APPART TYPE/1.2.webp",
            "/images/BELA/APPART TYPE/1.3.webp",
            "/images/BELA/APPART TYPE/1.webp",
          ]}
          altPrefix="PROMOTION BELA - APPART TYPE"
        />

        {/* Gallery 5 - APPART TYPE */}
        <ProjectGallery
          images={[
            "/images/BELA/APPART TYPE/2.webp",
            "/images/BELA/APPART TYPE/10.webp",
            "/images/BELA/APPART TYPE/13.webp",
            "/images/BELA/APPART TYPE/15.webp",
            "/images/BELA/APPART TYPE/16.webp",
            "/images/BELA/APPART TYPE/19(2).webp",
            "/images/BELA/APPART TYPE/21.webp",
            "/images/BELA/APPART TYPE/22(3).webp",
            "/images/BELA/APPART TYPE/5.webp",
            "/images/BELA/APPART TYPE/7.webp",
            "/images/BELA/APPART TYPE/9.webp",
          ]}
          altPrefix="PROMOTION BELA - APPART TYPE"
        />

        {/* Comparateur d'images 2 */}
        <ImageCompare
          imageBefore="/images/BELA/APPART TYPE/PLAN 2 TYPE_page-0001.webp"
          imageAfter="/images/BELA/APPART TYPE/PLAN 1 TYPE_page-0001.webp"
          alt="PROMOTION BELA - Comparaison plans APPART TYPE"
          containerId="compare2"
        />
      </section>

      {/* Section BELA */}
      <section className="section-img" style={{ paddingTop: "0" }}>
        {/* Gallery 6 - BELA */}
        <ProjectGallery
          images={["/images/BELA/1.webp", "/images/BELA/3.webp"]}
          altPrefix="PROMOTION BELA"
        />

        {/* Gallery 7 - BELA */}
        <ProjectGallery
          images={["/images/BELA/5.webp", "/images/BELA/4.webp"]}
          altPrefix="PROMOTION BELA"
        />

        {/* Image Solo 4 */}
        <ImgSolo
          image="/images/BELA/2.webp"
          alt="PROMOTION BELA - Vue finale"
        />
      </section>

      {/* Navigation entre projets */}
      <ProjectNavigation
        nextProjectHref="/portfolio/projet-9"
        nextProjectText="LAVERIE"
        previousProjectHref="/portfolio/projet-7"
        previousProjectText="MCCOOL"
      />
    </main>
  );
}
