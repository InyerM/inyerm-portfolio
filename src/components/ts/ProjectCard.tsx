interface Props {
  title: string;
  description: string;
  image: string;
  technologies: number[];
  deployed: boolean;
  link?: string;
  githubUrl: string;
}

import { useTranslation } from "react-i18next";
import { technologies as techs } from "../../constants";

export const ProjectCard: React.FC<Props> = ({
  description,
  image,
  technologies,
  title,
  githubUrl,
}) => {
  const { t } = useTranslation("translation");
  const push = () => window.open(githubUrl, "_blank");

  return (
    <div className="card justify-self-center" onClick={push}>
      <div className={`card-image bg-hero-pattern bg-no-repeat bg-cover`}>
        <img src={`/gifs/${image}`} alt={title} height="230" className="w-full" />
      </div>
      <div className="card-description">
        <p className="text-title custom-gradient-text">{title}</p>
        <p className="text-body">
          <span>{t(`projectCard.description.${description}`)}</span>
        </p>
        <section className="flex gap-2 justify-center">
          {technologies.map((tech) => {
            const thisTech = techs.find((t) => t.id === tech);
            return (
              <>
                <img src={`/assets/${thisTech?.icon}`} alt={thisTech?.title} width="42" />
              </>
            );
          })}
        </section>
      </div>
    </div>
  );
};
