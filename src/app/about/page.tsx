import React from "react";
import Image from "next/image";
import ClientsCarousel from "@/components/UI/ClientsCarousel";

export default function About(): React.JSX.Element {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 data-aos="fade-up">S T U D I O</h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="about-story">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center text-md-start">
            <div
              className="col-12 col-md-6 col-lg-3 mb-4 mb-md-0"
              data-aos="fade-left"
            >
              <div className="about-image">
                <Image
                  src="/images/2.webp"
                  alt="logo"
                  width={230}
                  height={230}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-left">
              <div className="about-content">
                <p>
                  Studio d'architecture et de design d'intérieur spécialisé en
                  étude, conception et réalisation. Nous vous accompagnons à
                  chaque étape pour révéler le plein potentiel de vos espaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>N O S - V A L E U R S</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
              <div className="value-card">
                <h3>RESPECT</h3>
                <p>
                  De l'humain, du lieu, du vivant, du temps et des engagements.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="value-card">
                <h3>ETHIQUE ESTHETIQUE</h3>
                <p>
                  Allier la beauté à la fonction, sens et cohérence dans chaque
                  projet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="value-card">
                <h3>COLLABORATION</h3>
                <p>
                  Enrichir chaque projet de perspectives variées, créer des
                  solutions efficaces et innovantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section avec le carrousel */}
      <ClientsCarousel />
    </main>
  );
}
