import Image from "next/image";

import styles from "./organization-grid.module.css";

// organizations should be an array of objects (title, img_path, href)
export const OrganizationGrid = ({ organizations }) => {
  return (
    <div className={styles.organization_grid}>
      {organizations.map((organization) =>
        organization.href === "#" ? (
          <div key={organization.href} className={styles.link}>
            <div className="flex flex-col">
              <div className="flex flex-grow">
                <Image
                  src={organization.img_path}
                  alt={`${organization.title} Logo`}
                  width={100}
                  height={100}
                  style={{ width: "auto", height: "100%" }}
                  className="mx-auto"
                />
              </div>
              <span>{organization.title}</span>
            </div>
          </div>
        ) : (
          <a
            key={organization.href}
            className={styles.link}
            href={organization.href}
            target="_blank"
            rel="noopener noreferrer">
            <div className="flex flex-col">
              <div className="flex flex-grow">
                <Image
                  src={organization.img_path}
                  alt={`${organization.title} Logo`}
                  width={100}
                  height={100}
                  style={{ width: "auto", height: "100%" }}
                  className="mx-auto"
                />
              </div>
              <span>{organization.title}</span>
            </div>
          </a>
        )
      )}
    </div>
  );
};
