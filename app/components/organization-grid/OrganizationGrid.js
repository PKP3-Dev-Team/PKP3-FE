import Image from "next/image";

import styles from "./organization-grid.module.css";

// organizations should be an array of objects (title, img_path, href)
export const OrganizationGrid = ({ organizations }) => {
  return (
    <div className={styles.organization_grid}>
      {organizations.map((organization) => (
        <a
          className={styles.link}
          href={organization.href}
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src={organization.img_path}
            alt={`${organization.title} Logo`}
            width={100}
            height={100}
            style={{ width: "auto", height: "100%" }}
          />
        </a>
      ))}
    </div>
  );
};
