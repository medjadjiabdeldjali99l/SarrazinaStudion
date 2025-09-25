import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Services(): React.JSX.Element {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 data-aos="fade-up">S E R V I C E S</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Service Architecture */}
      <section id="web-design" className="service-detail">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4" data-aos="fade-right">
              <div className="service-content">
                <h2>ARCHITECTURE</h2>
                <ul className="service-features">
                  <li>Conception architecturale</li>
                  <li>Aménagement d'intérieur</li>
                  <li>Modélisation 3D</li>
                  <li>visualisation</li>
                  <li>Ambiances et matériaux</li>
                  <li>Plans d'exécution</li>
                </ul>
                <Link href="/projets" className="btn btn-outline-custom">
                  Voir nos projets
                </Link>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <Image
                src="/images/SERVICE1.webp"
                alt="Web Design"
                width={600}
                height={400}
                className="img-fluid rounded service-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Réalisation */}
      <section id="branding" className="service-detail">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 order-lg-2 ms-lg-5" data-aos="fade-right">
              <div className="service-content">
                <h2>REALISATION</h2>
                <ul className="service-features">
                  <li>Cloisons et agencements intérieurs</li>
                  <li>Ouvrages de plâtrerie</li>
                  <li>Finitions et habillages muraux</li>
                  <li>Installation des équipements</li>
                  <li>techniques (CET / CES)</li>
                </ul>
                <Link href="/projets" className="btn btn-outline-custom">
                  Voir nos projets
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1" data-aos="fade-right">
              <Image
                src="/images/realisation.webp"
                alt="Branding"
                width={600}
                height={400}
                className="img-fluid rounded service-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Mobilier */}
      <section id="marketing" className="service-detail">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4" data-aos="fade-right">
              <div className="service-content">
                <h2>MOBILIER</h2>
                <ul className="service-features">
                  <li>Design et Conception</li>
                  <li>Plans techniques</li>
                  <li>Réalisation et installation</li>
                </ul>
                <Link href="/projets" className="btn btn-outline-custom">
                  Voir nos projets
                </Link>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <Image
                src="/images/mobiler.webp"
                alt="Digital Marketing"
                width={600}
                height={400}
                className="img-fluid rounded service-image"
              />
            </div>
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
