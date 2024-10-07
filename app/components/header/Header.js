"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";

import styles from "./header.module.css";
import { useState } from "react";

export const Header = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  return (
    <div className={styles.header_div}>
      <button
        className="mx-4 lg:hidden text-2xl"
        onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}>
        {!hamburgerIsOpen ? "☰" : "X"}
      </button>
      {hamburgerIsOpen && (
        <nav className="lg:hidden flex flex-col space-y-2 px-4 pb-4">
          <Link href="./">Home</Link>
          <Link href="./about-us">About Us</Link>
          <Link href="./what-we-do">What We Do</Link>
          <Link href="./gallery">Gallery</Link>
          <Link href="./contact-us">Contact Us</Link>
        </nav>
      )}
      {!hamburgerIsOpen && (
        <Link href="." className={styles.organization}>
          <Image
            src={"/logo transparent bg.png"}
            alt={"PKP3 Logo"}
            width={80}
            height={80}
          />
          <b className={styles.organization_name}>
            Persatuan Kerjasama Paliatif Pulau Pinang
          </b>
        </Link>
      )}
      <Navigation />
    </div>
  );
};
