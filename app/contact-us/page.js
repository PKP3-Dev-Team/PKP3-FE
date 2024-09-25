import Image from "next/image";
import { Banner } from "../components/banner/Banner";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

import styles from "../page.module.css";
import { EmailIcon, FacebookIcon } from "@/public/icons";
import {
  drLiangYikEmail,
  pkp3Email,
  pkp3FacebookLink,
} from "@/public/constants";

export default function ContactUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Banner src="/IMG-20231007-WA0052.jpg" alt="pkp3 event" />
      <div className={styles.main_content}>
        <div>
          If you are interested in learning further about Persatuan Kerjasama
          Paliatif Pulau Pinang (PKP3), connect with us.
        </div>
        <div className="flex flex-col gap-8 text-4xl items-center py-24">
          <div className="flex gap-4 items-center">
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
          <div className="flex gap-4 items-center">
            <EmailIcon link={pkp3Email} color="#000000" style="size-14" />
            <a href={pkp3Email} target="_blank" rel="noopener noreferrer">
              kerjasama.paliatif@gmail.com
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <EmailIcon link={drLiangYikEmail} color="#000000" style="size-14" />
            <a href={drLiangYikEmail} target="_blank" rel="noopener noreferrer">
              liangyik@gmail.com (Dr. Lim Liang Yik - PKP3 Secretary)
            </a>
          </div>
        </div>
        <div className="py-8">
          <Image
            src="/IMG_0176.jpeg"
            alt="pkp3 event"
            height={500}
            width={500}
            style={{ width: "100%", height: "auto" }}
            quality={100}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
