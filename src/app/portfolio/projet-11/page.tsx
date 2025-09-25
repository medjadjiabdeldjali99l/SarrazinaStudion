import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ProjectGallery from "@/components/Project/ProjectGal";
import ImgSolo from "@/components/Project/ImgSolo";
import ImageCompare from "@/components/Project/ImageCompare";
import ProjectNavigation from "@/components/Project/ProjectNavigation";

export default function Projet11(): React.JSX.Element {
  return (
    <main>
      <HeroSection
        type="project"
        videoSrc="/videos/Clip 1 - Trim" // Sans extension
        imageSrc="/images/CREPERIE/MB.webp" // Fallback image
        poster="/images/CREPERIE/MB.webp" // Preview pendant chargement
        title="CRÊPERIE SOUAKRA"
        description={["Restauration", "Aubervilliers, France"]}
        overlay={false} // Pas d'overlay pour ce projet
      />

      {/* Section Images */}
      <section className="section-img">
        {/* Image Solo 1 - en haut */}
        <ImgSolo
          image="/images/CREPERIE/MB.webp"
          alt="CRÊPERIE SOUAKRA - Vue principale"
        />

        {/* Gallery 1 */}
        <ProjectGallery
          images={[
            "/images/CREPERIE/Image_2.webp",
            "/images/CREPERIE/Scene 2(2).webp",
            "/images/CREPERIE/Scene 2.webp",
            "/images/CREPERIE/Scene 6.webp",
          ]}
          altPrefix="CRÊPERIE SOUAKRA"
        />

        {/* Image Solo 2 */}
        <ImgSolo
          image="/images/CREPERIE/Scene 7(4).webp"
          alt="CRÊPERIE SOUAKRA - Ambiance intérieure"
        />

        {/* Gallery 2 */}
        <ProjectGallery
          images={[
            "/images/CREPERIE/Scene 8.webp",
            "/images/CREPERIE/Scene 9.webp",
          ]}
          altPrefix="CRÊPERIE SOUAKRA"
        />

        {/* Gallery 3 - Schémas */}
        <ProjectGallery
          images={[
            "/images/CREPERIE/SHEMA1.webp",
            "/images/CREPERIE/SHEMA2.webp",
          ]}
          altPrefix="CRÊPERIE SOUAKRA - Schémas"
        />

        {/* Gallery 4 */}
        <ProjectGallery
          images={[
            "/images/CREPERIE/Scene 13.webp",
            "/images/CREPERIE/Scene 15.webp",
          ]}
          altPrefix="CRÊPERIE SOUAKRA"
        />

        {/* Image Solo 3 */}
        <ImgSolo
          image="/images/CREPERIE/Scene 19.webp"
          alt="CRÊPERIE SOUAKRA - Détail design"
        />

        {/* Gallery 5 */}
        <ProjectGallery
          images={[
            "/images/CREPERIE/Scene 22.webp",
            "/images/CREPERIE/Scene 25.webp",
            "/images/CREPERIE/Scene 27.webp",
            "/images/CREPERIE/SHEMA3.webp",
          ]}
          altPrefix="CRÊPERIE SOUAKRA"
        />

        {/* Comparateur d'images */}
        <ImageCompare
          imageBefore="/images/CREPERIE/2_page-0001 (1).webp"
          imageAfter="/images/CREPERIE/1_page-0001 (1).webp"
          alt="CRÊPERIE SOUAKRA - Comparaison plans"
          containerId="compare-creperie"
        />
      </section>

      {/* Navigation entre projets - DERNIER PROJET */}
      <ProjectNavigation
        previousProjectHref="/portfolio/projet-10"
        previousProjectText="RESTAURANT CASBAH"
        isLastProject={true}
      />
    </main>
  );
}
