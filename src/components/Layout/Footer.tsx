import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/ton-compte" },
    { name: "Facebook", url: "https://facebook.com/ton-compte" },
    { name: "TikTok", url: "https://tiktok.com/ton-compte" },
    { name: "LinkedIn", url: "https://linkedin.com/ton-compte" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Logo */}
          <div className="col-lg-2 col-md-4" data-aos="fade-right">
            <Image
              src="/images/3.webp"
              alt="SARRAZINE Logo"
              width={150}
              height={150}
              className="img-fluid"
            />
          </div>

          {/* Coordonnées */}
          <div className="col-lg-6 col-md-4" data-aos="fade-right">
            <div>
              <div className="mb-3">
                <p>SARRAZINE, ALGER, ALGERIE</p>
              </div>
              <div className="mb-3">
                <a
                  href="mailto:szstudio18@gmail.com"
                  className="text-decoration-none"
                >
                  szstudio18@gmail.com
                </a>
              </div>
              <div className="mb-3">
                <a href="tel:+213799208741" className="text-decoration-none">
                  +213 799 208 741
                </a>
              </div>
              <div>
                <a href="tel:+213799628322" className="text-decoration-none">
                  +213 799 628 322
                </a>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="col-lg-4 col-md-4" data-aos="fade-left">
            <div>
              {socialLinks.map((social) => (
                <div key={social.name} className="mb-2">
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    {social.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom text-center mt-4">
          <p>&copy; {currentYear} SARRAZINE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
