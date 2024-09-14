import Link from "next/link";
import { SocMed } from "./SocMed";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer_div}>
      <div>
        {/* <div>Some footer content</div> */}
        <ul>
          <li>
            <Link href="./who-we-are">Who We Are</Link>
          </li>
          <li>
            <Link href="./what-we-do">What We Do</Link>
          </li>
          <li>
            <Link href="./contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      <SocMed />
    </div>
  );
};
