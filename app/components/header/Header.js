"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";
import { IKImage } from "imagekitio-next";

import styles from "./header.module.css";
import { useState } from "react";

export const Header = ({ urlEndpoint, path, alt }) => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className={`${styles.header_div} z-10`}>
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
      <div className="relative flex w-full aspect-[1920/800]">
        <IKImage
          urlEndpoint={urlEndpoint}
          path={path}
          alt={alt}
          fill
          className="object-cover absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};
