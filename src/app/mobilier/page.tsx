import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Mobilier(): React.JSX.Element {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundColor: "#ddd1e5" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 data-aos="fade-up">M O B I L I E R</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section Image Mobilier */}
      <section className="mb-4 sectionimagmobilier">
        <Image
          src="/images/4.webp"
          alt="Mobilier design"
          width={1200}
          height={600}
          className="img-fluid"
        />
      </section>

      {/* Section Image Centrée */}
      <section className="center-image-mob">
        <Image
          src="/images/14.webp"
          alt="Mobilier design"
          width={300}
          height={300}
        />
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ backgroundColor: "#ddd1e5" }}>
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
