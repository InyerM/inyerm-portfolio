import { HiOutlineEye } from "react-icons/hi";
import { t } from "i18next";

interface Props {
  link?: string;
}

export const ViewButton: React.FC<Props> = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-link">
      {link ? (
        <>
          <span>{t("projectCard.view")}</span>
          <HiOutlineEye />
        </>
      ) : (
        <span>{t("projectCard.notDeployed")}</span>
      )}
    </a>
  );
};
