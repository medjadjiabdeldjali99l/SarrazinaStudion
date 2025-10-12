import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import Link from "next/link";
import Image from "next/image";

export default function Home(): React.JSX.Element {
  return (
    <main>
      {/* Section Hero - Migration exacte */}

      <HeroSection
        type="home"
        videoSrc="/videos/anim" // Sans extension
        buttonText="PROJETS"
        buttonLink="/projets"
      />

      {/* Section Services Preview - Migration exacte */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>S E R V I C E S</h2>
          </div>
          <div className="row card-services">
            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Link href="/services">
                <div className="service-card">
                  <h3>ARCHITECTURE</h3>
                </div>
              </Link>
            </div>
            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link href="/services">
                <div className="service-card">
                  <h3>REALISATION</h3>
                </div>
              </Link>
            </div>
            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link href="/services">
                <div className="service-card">
                  <h3>DESIGN MOBILIER</h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-center mt-4" data-aos="fade-up">
            <Link href="/services" className="btn btn-outline-custom">
              Tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Migration exacte */}
      <section className="portfolio-preview">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>P R O J E T S</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
              <Link
                href="/portfolio/projet-1"
                className="portfolio-item portfolio-card"
              >
                <Image
                  src="/images/NK 1/1.4.webp"
                  alt="Project 1"
                  width={400}
                  height={300}
                  className="img-fluid"
                />
                <div className="portfolio-overlay">
                  <h3>PÂTISSERIE NK 1</h3>
                  <p>Versailles, France</p>
                </div>
              </Link>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link
                href="/portfolio/projet-7"
                className="portfolio-item portfolio-card"
              >
                <Image
                  src="/images/MCCOOL/ESSAI GARDE.webp"
                  alt="Project 3"
                  width={400}
                  height={300}
                  className="img-fluid"
                />
                <div className="portfolio-overlay">
                  <h3>MCCOOL</h3>
                  <p>Blida, Algérie</p>
                </div>
              </Link>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Link
                href="/portfolio/projet-8"
                className="portfolio-item portfolio-card"
              >
                <Image
                  src="/images/BELA/DUP/GARDE.webp"
                  alt="Project 2"
                  width={400}
                  height={300}
                  className="img-fluid"
                />
                <div className="portfolio-overlay">
                  <h3>PROMOTION IMMOBILIÈRE BELA</h3>
                  <p>Hydra, Algérie</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-center mt-4" data-aos="fade-up">
            <Link href="/projets" className="btn btn-outline-custom">
              Voir tous les projets
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Migration exacte */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>C O N T A C T E Z - N O U S</h2>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="contact-info">
                <div className="contact-item">
                  <a href="mailto:szstudio18@gmail.com">szstudio18@gmail.com</a>
                </div>
                <div className="contact-item">
                  <a href="tel:+213799208741" className="text-decoration-none">
                    +213 799 208 741
                  </a>
                </div>
                <div className="contact-item">
                  <a href="tel:+213799628322" className="text-decoration-none">
                    +213 799 628 322
                  </a>
                </div>

                <div className="contact-item">
                  <p>
                    Szstudio,
                    <br />
                    ALGER, ALGERIE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <form
                className="contact-form"
                action="https://formspree.io/f/xldrnnqa"
                method="POST"
                data-form
              >
                <div className="mb-3">
                  <input
                    type="text"
                    name="fullname"
                    className="form-control"
                    placeholder="Full name"
                    required
                    data-form-input
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                    required
                    data-form-input
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Sujet"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                    required
                    data-form-input
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-custom"
                  data-form-btn
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
