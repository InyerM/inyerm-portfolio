interface Props {
  title: string;
  description: string;
  image: string;
  technologies: number[];
  deployed: boolean;
  link?: string;
  githubUrl: string;
}

import { technologies as techs } from "../../constants";
import { ViewButton } from "./";

export const ProjectCard: React.FC<Props> = ({
  deployed,
  description,
  image,
  technologies,
  title,
  link,
  githubUrl,
}) => {
  const push = () => window.open(githubUrl, "_blank");

  return (
    <div className="card justify-self-center" onClick={push}>
      <div className={`card-image bg-hero-pattern bg-no-repeat bg-cover`}>
        <img src={`/gifs/${image}`} alt={title} height="230" />
      </div>
      <div className="card-description">
        <p className="text-title custom-gradient-text">{title}</p>
        <p className="text-body">{description}</p>
        {/* {deployed && <ViewButton link={link} />} */}
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
