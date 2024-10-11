"use client";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { EmailIcon, FacebookIcon } from "@/public/icons";
import { pkp3Email, pkp3FacebookLink } from "@/public/constants";
import { IKImage } from "imagekitio-next";
import styles from "../page.module.css";
import Image from "next/image";

export default function ContactUs() {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <main className="min-h-screen flex flex-col">
      <Header
        urlEndpoint={urlEndpoint}
        path="/images/banner/(updated dimensions) pkp3 website banners-08.jpg"
        alt="pkp3event"
      />
      <div className={styles.main_content}>
        <div>
          If you are interested in learning further about Persatuan Kerjasama
          Paliatif Pulau Pinang (PKP3), connect with us.
        </div>
        <div className="flex flex-col gap-8 text-4xl py-8 lg:p-16">
          <div className="hidden lg:flex gap-4 items-center">
            <FacebookIcon
              link={pkp3FacebookLink}
              color="#000000"
              style="size-14"
            />
            <a
              href={pkp3FacebookLink}
              target="_blank"
              rel="noopener noreferrer">
              Kerjasama Paliatif Pulau Pinang
            </a>
          </div>

          <div className="hidden lg:flex gap-4 items-center">
            <EmailIcon link={pkp3Email} color="#000000" style="size-14" />
            <a href={pkp3Email} target="_blank" rel="noopener noreferrer">
              kerjasama.paliatif@gmail.com
            </a>
          </div>

          <div className="flex lg:hidden gap-10 items-center justify-center">
            <FacebookIcon
              link={pkp3FacebookLink}
              color="#000000"
              style="size-14"
            />
            <EmailIcon link={pkp3Email} color="#000000" style="size-14" />
          </div>
        </div>
        <div className="relative h-[30vh] py-8 sm:grid-cols-2  md:h-[40vh] lg:h-[50vh]">
          {/* <IKImage
            urlEndpoint={urlEndpoint}
            path="contact-us/IMG_0176.jpeg"
            alt="pkp3 event"
            // fill
            // className="object-contain"
            // quality={100}
            // loading="lazy"
          /> */}
          <Image
            src="/images/contact-us/IMG_0176.jpeg"
            alt="PKP3 Event"
            fill
            className="object-contain max-h-full"
            quality={100}
            loading="lazy"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
