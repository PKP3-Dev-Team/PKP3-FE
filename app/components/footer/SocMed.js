import { EmailIcon, FacebookIcon } from "@/public/icons";
import styles from "./socmed.module.css";
export const SocMed = () => {
  const pkp3FacebookLink =
    "https://www.facebook.com/profile.php?id=100092708126046";
  const pkp3Email = "mailto:kerjasama.paliatif@gmail.com";

  return (
    <div className={""}>
      <ul className={styles.socmed_list}>
        <h1 className={styles.contact_us}>Contact Us</h1>
        <FacebookIcon link={pkp3FacebookLink} color="#ffffff" />
        <EmailIcon link={pkp3Email} color="#ffffff" />
      </ul>
    </div>
  );
};
