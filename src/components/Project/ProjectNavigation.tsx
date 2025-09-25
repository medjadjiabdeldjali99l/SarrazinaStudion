import React from "react";
import Link from "next/link";

interface ProjectNavigationProps {
  nextProjectHref?: string;
  nextProjectText?: string;
  previousProjectHref?: string;
  previousProjectText?: string;
  isLastProject?: boolean; // NOUVELLE PROP
}

export default function ProjectNavigation({
  nextProjectHref = "/portfolio/projet-3",
  nextProjectText = "Projet suivant",
  previousProjectHref = "/portfolio/projet-1",
  previousProjectText = "Projet précédent",
  isLastProject = false, // VALEUR PAR DÉFAUT
}: ProjectNavigationProps): React.JSX.Element {
  // Logique pour le dernier projet
  console.log("============================", isLastProject);
  const finalNextText = isLastProject ? "Retour au portfolio" : nextProjectText;
  const finalNextHref = isLastProject ? "/projets" : nextProjectHref;

  return (
    <section className="project-navigation">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-md-start" data-aos="fade-right">
            <Link href={previousProjectHref} className="btn btn-outline-custom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              {previousProjectText}
            </Link>
          </div>
          <div className="col-md-6 text-md-end" data-aos="fade-left">
            <Link href={finalNextHref} className="btn btn-outline-custom">
              {finalNextText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
