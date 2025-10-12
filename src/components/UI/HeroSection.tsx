"use client";
import React from "react";
import Link from "next/link";

interface HeroSectionProps {
  type: "home" | "project";
  videoSrc?: string; // Chemin de base sans extension
  imageSrc?: string;
  title?: string;
  description?: string[];
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
  poster?: string; // Image de preview pour la vidéo
}

export default function HeroSection({
  type,
  videoSrc,
  imageSrc,
  title,
  description,
  buttonText,
  buttonLink,
  overlay = false,
  poster,
}: HeroSectionProps): React.JSX.Element {
  const renderBackground = () => {
    if (videoSrc) {
      console.log("hachmooooooooooooooooo", videoSrc);
      // Image de fallback : priorité poster → imageSrc → première frame vidéo
      const fallbackImage = poster || imageSrc || "";

      return (
        <>
          {/* Vidéo avec fallback intégré */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
            poster={fallbackImage} // Preview pendant le chargement
            // preload="metadata"
            onError={(e) => {
              // Si la vidéo échoue, affiche l'image en fallback
              const videoElement = e.target as HTMLVideoElement;
              videoElement.style.display = "none";

              // Affiche l'image de fallback
              const fallbackDiv = document.createElement("div");
              fallbackDiv.style.backgroundImage = `url(${fallbackImage})`;
              fallbackDiv.style.backgroundSize = "cover";
              fallbackDiv.style.backgroundPosition = "center";
              fallbackDiv.style.width = "100%";
              fallbackDiv.style.height = "100%";
              fallbackDiv.style.position = "absolute";
              fallbackDiv.style.top = "0";
              fallbackDiv.style.left = "0";

              videoElement.parentNode?.insertBefore(fallbackDiv, videoElement);
            }}
          >
            {/* Premier choix : WebM (plus léger) */}
            <source src={`${videoSrc}.webm`} type="video/webm" />
            {/* Fallback : MP4 (compatibilité totale) */}
            <source src={`${videoSrc}.mp4`} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo HTML5.
          </video>

          {/* Overlay optionnel */}
          {overlay && <div className="overlay"></div>}
        </>
      );
    }

    if (imageSrc) {
      return (
        <div
          className="video-background"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {overlay && <div className="overlay"></div>}
        </div>
      );
    }

    if (overlay) {
      return (
        <div className="video-background">
          <div className="overlay"></div>
        </div>
      );
    }

    return null;
  };

  const renderContent = () => {
    if (type === "home" && buttonText && buttonLink) {
      return (
        <Link href={buttonLink} data-aos="fade-up" data-aos-delay="600">
          <button className="btn-projets">{buttonText}</button>
        </Link>
      );
    }

    return (
      <>
        {title && <h1 data-aos="fade-up">{title}</h1>}
        {description?.map((line, index) => (
          <p key={index} data-aos="fade-up" data-aos-delay={200 * (index + 1)}>
            {line}
          </p>
        ))}
      </>
    );
  };

  return (
    <section className={type === "home" ? "hero-section" : "project-hero"}>
      {renderBackground()}
      <div
        className={type === "home" ? "hero-content" : "project-hero-content"}
      >
        {renderContent()}
      </div>
    </section>
  );
}
