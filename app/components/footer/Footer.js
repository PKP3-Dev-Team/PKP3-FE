"use client";
import Link from "next/link";
import { SocMed } from "./SocMed";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-4 footer_breakpoint:flex-row justify-between text-white bg-[#01002F] min-h-24 items-center p-8">
      <ul className="hidden lg:flex gap-8">
        <div>
          <li>
            <Link href="./about-us">About Us</Link>
          </li>
          <li>
            <Link href="./what-we-do">What We Do</Link>
          </li>
          <li>
            <Link href="./contact-us">Contact Us</Link>
          </li>
        </div>
      </ul>

      {/* <button
        className="flex items-center justify-center gap-4"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <UpArrowIcon color="#ffffff" />
        <span className="font-bold">BACK TO TOP</span>
      </button> */}
      <p className=" text-center">
        &copy; Pusat Kerjasama Paliatif Pulau Pinang
      </p>

      <SocMed />
    </div>
  );
};
