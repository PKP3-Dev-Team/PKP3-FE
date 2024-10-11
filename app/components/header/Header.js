"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import styles from "./header.module.css";
import { useState } from "react";
import { Menu } from "lucide-react";

import { menuItems } from "@/public/constants";

export const Header = ({ path, alt }) => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className={`${styles.header_div} z-10`}>
        {/* <button
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
        )} */}

        <Link href="." className={styles.organization}>
          <Image
            src={"/images/logo transparent bg.png"}
            alt={"PKP3 Logo"}
            width={80}
            height={80}
          />
          <b className={styles.organization_name}>
            Persatuan Kerjasama Paliatif Pulau Pinang
          </b>
        </Link>
        <div className="lg:hidden flex items-center">
          <Sheet open={hamburgerIsOpen} onOpenChange={setHamburgerIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="font-semibold">
              <nav className="flex flex-col space-y-4 mt-4">
                {menuItems.map(({ href, name }) => (
                  <a href={href}>{name}</a>
                ))}
                {/* <a href="./">Home</a>
                <a href="./about-us">About Us</a>
                <a href="./what-we-do">What We Do</a>
                <a href="./contact-us">Contact Us</a> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Navigation />
      </div>

      {/* <div className="relative flex w-full h-[20vh] sm:h-[30vh] md:h-[40vh] xl:h-[70vh]"> */}
      <div className="relative flex w-full aspect-[2246/800]">
        <Image
          src={path}
          alt={alt}
          fill
          className="object-contain absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};
