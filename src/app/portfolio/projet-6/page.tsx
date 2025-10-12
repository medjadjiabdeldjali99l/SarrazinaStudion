import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ProjectGallery from "@/components/Project/ProjectGal";
import ImgSolo from "@/components/Project/ImgSolo";
import ImageCompare from "@/components/Project/ImageCompare";
import ProjectNavigation from "@/components/Project/ProjectNavigation";

export default function Projet6(): React.JSX.Element {
  return (
    <main>
      <HeroSection
        type="project"
        videoSrc="/videos/anim" // Sans extension
        imageSrc="/images/challet/1.2.webp" // Fallback image
        poster="/images/challet/1.2.webp" // Preview pendant chargement
        title="CHALET TALINE"
        description={["Résidentiel", "Tipaza, ALGERIE"]}
        overlay={false} // Pas d'overlay pour ce projet
      />

      {/* Section Images */}
      <section className="section-img">
        {/* Gallery 1 */}
        <ProjectGallery
          images={[
            "/images/challet/1.2.webp",
            "/images/challet/1.webp",
            "/images/challet/2.webp",
            "/images/challet/3.webp",
          ]}
          altPrefix="CHALET TALINE"
        />

        <ImgSolo
          image="/images/challet/5.webp"
          alt="STAND AUTOBACS - Détail structure"
        />

        {/* Gallery 2 */}
        <ProjectGallery
          images={["/images/challet/22.webp", "/images/challet/23.webp"]}
          altPrefix="CHALET TALINE"
        />

        {/* Gallery 3 */}
        <ProjectGallery
          images={[
            "/images/challet/6.webp",
            "/images/challet/6.1.webp",
            "/images/challet/7.webp",
            "/images/challet/8.webp",
          ]}
          altPrefix="CHALET TALINE"
        />
        <ImgSolo
          image="/images/challet/4.webp"
          alt="STAND AUTOBACS - Détail structure"
        />

        {/* Gallery 4 */}
        <ProjectGallery
          images={[
            "/images/challet/9.webp",
            "/images/challet/10.webp",
            "/images/challet/11.webp",
            "/images/challet/12.webp",
          ]}
          altPrefix="CHALET TALINE"
        />

        {/* Gallery 5 */}
        <ProjectGallery
          images={["/images/challet/12.1.webp", "/images/challet/13.webp"]}
          altPrefix="CHALET TALINE"
        />
        <ProjectGallery
          images={["/images/challet/14.webp", "/images/challet/24.webp"]}
          altPrefix="CHALET TALINE"
        />
        {/* Gallery 6 */}
        <ProjectGallery
          images={["/images/challet/20.webp", "/images/challet/21.webp"]}
          altPrefix="CHALET TALINE"
        />

        {/* Gallery 7 */}
        <ProjectGallery
          images={["/images/challet/19.webp", "/images/challet/17.webp"]}
          altPrefix="CHALET TALINE"
        />

        {/* Comparateur d'images */}
        <ImageCompare
          imageBefore="/images/challet/0.1.webp"
          imageAfter="/images/challet/0.webp"
          alt="CHALET TALINE - Comparaison avant/après"
        />
      </section>

      {/* Navigation entre projets */}
      <ProjectNavigation
        nextProjectHref="/portfolio/projet-7"
        nextProjectText="MCCOOL"
        previousProjectHref="/portfolio/projet-5"
        previousProjectText="STAND AUTOBACS"
      />
    </main>
  );
}
