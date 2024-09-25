"use client";
import Link from "next/link";
import { SocMed } from "./SocMed";
import styles from "./footer.module.css";
import { UpArrowIcon } from "@/public/icons";

export const Footer = () => {
  return (
    <div className={styles.footer_div}>
      <div>
        <ul>
          <li>
            <Link href="./about-us">About Us</Link>
          </li>
          <li>
            <Link href="./what-we-do">What We Do</Link>
          </li>
          <li>
            <Link href="./contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      <button
        className={styles.top}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <UpArrowIcon color="#ffffff" />
        <span className={styles.top_button}>BACK TO TOP</span>
      </button>

      <SocMed />
    </div>
  );
};
