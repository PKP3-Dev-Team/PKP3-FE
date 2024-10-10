"use client";
import { Banner } from "../components/banner/Banner";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { EmailIcon, FacebookIcon } from "@/public/icons";
import { pkp3Email, pkp3FacebookLink } from "@/public/constants";
import { IKImage } from "imagekitio-next";
import styles from "../page.module.css";

export default function ContactUs() {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <main className="min-h-screen flex flex-col">
      <Header
        urlEndpoint={urlEndpoint}
        path="banner/pkp3 website banners-04.jpg"
        alt="pkp3event"
      />

      {/* <Banner
        path="contact-us/IMG-20231007-WA0052.jpg"
        alt="pkp3 event"
        tagPosition={"bottom-4 right-4"}
        urlEndpoint={urlEndpoint}
      /> */}
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
        <div className="py-8">
          <IKImage
            urlEndpoint={urlEndpoint}
            path="contact-us/IMG_0176.jpeg"
            alt="pkp3 event"
            // fill
            // className="object-contain"
            // quality={100}
            // loading="lazy"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
