"use client";
import React, { useRef } from "react";
import Image from "next/image";

export default function ClientsCarousel(): React.JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const clients = [
    { src: "/images/AUTOBAGS.webp", alt: "AUTOBAGS" },
    { src: "/images/CARTE GRISE.webp", alt: "CARTE GRISE" },
    { src: "/images/images.webp", alt: "Client Logo" },
    {
      src: "/images/WhatsApp Image 2025-05-02 à 11.36.49_b152063e.webp",
      alt: "Client Logo",
    },
    { src: "/images/MCCOOL1.webp", alt: "MCCOOL" },
    { src: "/images/OIG3.webp", alt: "OIG" },
    { src: "/images/REFLEXE PAREBRISE.webp", alt: "REFLEXE PAREBRISE" },
    { src: "/images/Sonatrach-2.webp", alt: "Sonatrach" },
    {
      src: "/images/WhatsApp Image 2025-04-15 à 11.48.07_12a73c8f.webp",
      alt: "Client Logo",
    },
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h2>N O S - C L I E N T S</h2>
        </div>

        <div className="clients-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft}>
            &lt;
          </button>

          <div className="scroll-container" ref={scrollContainerRef}>
            <div className="row flex-nowrap">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="col-lg-2 col-md-4 col-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="client-logo">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      width={120}
                      height={80}
                      className="img-fluid"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="scroll-btn right" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
