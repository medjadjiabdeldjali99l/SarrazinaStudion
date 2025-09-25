import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ProjectGallery from "@/components/Project/ProjectGal";
import ImgSolo from "@/components/Project/ImgSolo";
import ImageCompare from "@/components/Project/ImageCompare";
import ProjectNavigation from "@/components/Project/ProjectNavigation";

export default function Projet2(): React.JSX.Element {
  return (
    <main>
      {/* Hero avec vidéo cette fois */}
      <HeroSection
        type="project"
        videoSrc="/videos/nk website 720 - Trim" // Sans extension
        imageSrc="/images/NK2/1.webp" // Fallback image
        poster="/images/NK2/1.webp" // Preview pendant chargement
        title="PÂTISSERIE NK 2"
        description={["Restauration", "Versailles, France"]}
        overlay={false} // Pas d'overlay pour ce projet
      />

      {/* Section Images */}
      <section className="section-img">
        {/* Gallery 1 */}
        <ProjectGallery
          images={[
            "/images/NK2/0.1.webp",
            "/images/NK2/0.2.webp",
            "/images/NK2/2.webp",
          ]}
          altPrefix="PÂTISSERIE NK 2"
        />

        {/* Gallery 2 */}
        <ProjectGallery
          images={[
            "/images/NK2/3.webp",
            "/images/NK2/4.webp",
            "/images/NK2/5.webp",
            "/images/NK2/6.webp",
            "/images/NK2/7.webp",
          ]}
          altPrefix="PÂTISSERIE NK 2"
        />

        {/* Image Solo 1 */}
        <ImgSolo
          image="/images/NK2/12.webp"
          alt="PÂTISSERIE NK 2 - Vue d'ensemble"
        />

        {/* Gallery 3 */}
        <ProjectGallery
          images={["/images/NK2/8.webp", "/images/NK2/9.webp"]}
          altPrefix="PÂTISSERIE NK 2"
        />

        {/* Image Solo 2 */}
        <ImgSolo
          image="/images/NK2/17.webp"
          alt="PÂTISSERIE NK 2 - Détail intérieur"
        />

        {/* Gallery 4 */}
        <ProjectGallery
          images={[
            "/images/NK2/10.webp",
            "/images/NK2/11.webp",
            "/images/NK2/13.webp",
            "/images/NK2/14.webp",
            "/images/NK2/15.webp",
            "/images/NK2/16.webp",
            "/images/NK2/18.webp",
          ]}
          altPrefix="PÂTISSERIE NK 2"
        />

        {/* Comparateur d'images */}
        <ImageCompare
          imageBefore="/images/NK2/COUPE 2_page-0001.webp"
          imageAfter="/images/NK2/COUPE 1_page-0001.webp"
          alt="PÂTISSERIE NK 2 - Comparaison coupes"
        />
      </section>

      {/* Navigation entre projets */}
      <ProjectNavigation
        nextProjectHref="/portfolio/projet-3"
        nextProjectText="BUREAU D'ASSURANCE REFLEXE"
        previousProjectHref="/portfolio/projet-1"
        previousProjectText="PÂTISSERIE NK 1"
      />
    </main>
  );
}
