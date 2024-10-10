import Link from "next/link";
import styles from "./navigation.module.css";

export const Navigation = () => {
  return (
    <div className={styles.navigation_div}>
      <div className={styles.nav_items}>
        <Link href="./">Home</Link>
      </div>
      <div className={styles.nav_items}>
        <Link href="./about-us">About Us</Link>
      </div>
      <div className={styles.nav_items}>
        <Link href="./what-we-do">What We Do</Link>
      </div>
      <div className={styles.nav_items}>
        <Link href="./contact-us">Contact Us</Link>
      </div>
      {/* <div className={styles.nav_items}>
        <Link href="./join-us">Join Us</Link>
      </div> */}
    </div>
  );
};
