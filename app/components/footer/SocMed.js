import { EmailIcon, FacebookIcon } from "@/public/icons";
import styles from "./socmed.module.css";

import { pkp3Email, pkp3FacebookLink } from "@/public/constants";
export const SocMed = () => {
  return (
    <div>
      <ul className={styles.socmed_list}>
        <h1 className={styles.contact_us}>Contact Us</h1>
        <FacebookIcon link={pkp3FacebookLink} color="#ffffff" style="size-8" />
        <EmailIcon link={pkp3Email} color="#ffffff" style="size-8" />
      </ul>
    </div>
  );
};
