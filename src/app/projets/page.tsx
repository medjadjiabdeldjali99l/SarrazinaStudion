import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projets(): React.JSX.Element {
  const projects = [
    {
      id: 1,
      href: "/portfolio/projet-1",
      src: "/images/NK 1/1.4.webp",
      alt: "Project 1",
      title: "PÂTISSERIE NK 1",
      location: "Versailles, France",
    },
    {
      id: 6,
      href: "/portfolio/projet-6",
      src: "/images/challet/garde.webp",
      alt: "Project 6",
      title: "Chalet Taline",
      location: "Tipaza, Algérie",
    },
    {
      id: 8,
      href: "/portfolio/projet-8",
      src: "/images/BELA/DUP/GARDE.webp",
      alt: "Project 5",
      title: "PROMOTION BELA",
      location: "Hydra, Algérie",
    },
    {
      id: 10,
      href: "/portfolio/projet-10",
      src: "/images/CASBAH/1.2.webp",
      alt: "Project 5",
      title: "RESTAURANT CASBAH",
      location: "Aubervilliers, France",
    },
    {
      id: 7,
      href: "/portfolio/projet-7",
      src: "/images/MCCOOL/ESSAI GARDE.webp",
      alt: "Project 5",
      title: "MCCOOL",
      location: "Blida, Algérie",
    },
    {
      id: 3,
      href: "/portfolio/projet-3",
      src: "/images/REFLEXE ASSUR/9.2 GARDE.webp",
      alt: "Project 3",
      title: "BUREAU D'ASSURANCE REFLEXE",
      location: "Paris, France",
    },
    {
      id: 2,
      href: "/portfolio/projet-2",
      src: "/images/NK2/1.webp",
      alt: "Project 2",
      title: "PÂTISSERIE NK 2",
      location: "Versailles, France",
    },
    {
      id: 4,
      href: "/portfolio/projet-4",
      src: "/images/MCCOOL 1/0 GARDE.webp",
      alt: "Project 4",
      title: "MCCOOL DONER",
      location: "Blida, Algérie",
    },
    {
      id: 5,
      href: "/portfolio/projet-5",
      src: "/images/STAND REFLEXE/0GARDE.webp",
      alt: "Project 5",
      title: "STAND AUTOBACS",
      location: "Paris, France",
    },
    {
      id: 9,
      href: "/portfolio/projet-9",
      src: "/images/laverie/7.webp",
      alt: "Project 5",
      title: "LAVERIE",
      location: "Paris, France",
    },
    {
      id: 11,
      href: "/portfolio/projet-11",
      src: "/images/CREPERIE/Scene 2.webp",
      alt: "Project 5",
      title: "CRÊPERIE SOUAKRA",
      location: "Aubervilliers, France",
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 data-aos="fade-up">P R O J E T S</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid">
        <div className="container">
          <div className="row">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="col-lg-4 col-md-6 portfolio-item"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <Link href={project.href} className="portfolio-card">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                  <div className="portfolio-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.location}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center" data-aos="fade-up">
            <h2 className="pb-4">Prêt à démarrer votre projet ?</h2>
            <Link href="/#contact" className="btn btn-primary btn-lg">
              C O N T A C T E Z - N O U S
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
