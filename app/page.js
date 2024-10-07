"use client";
import { Banner } from "./components/banner/Banner";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { OrganizationGrid } from "./components/organization-grid/OrganizationGrid";
import { organizations, referralFormLink } from "@/public/constants";

import styles from "./page.module.css";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Banner
        urlEndpoint={urlEndpoint}
        path="home/editedIMG_0385.jpeg"
        alt="pkp3 event"
        tagPosition={"bottom-4 right-4"}
      />

      <div className={styles.main_content}>
        <div>
          Persatuan Kerjasama Paliatif Pulau Pinang (PKP3) was established in
          April 2023 as a platform for palliative care providers in Penang to
          come together to promote holistic care for patients, as well as to
          improve and support care providers via education and research. We also
          aim to advocate about issues related to palliative care.
        </div>
        <div className="grid grid-cols-2 gap-8 py-8 h-[60vh]">
          <div className="relative">
            <IKImage
              urlEndpoint={urlEndpoint}
              path="home/palliative care 1.png"
              alt="Palliative Care Stock Image 1"
              fill
              className="object-cover"
            />
            <div className={styles.freepik}>Designed by Freepik</div>
          </div>
          <div className="relative">
            <IKImage
              urlEndpoint={urlEndpoint}
              path="home/palliative care 2.png"
              alt="Palliative Care Stock Image 2"
              fill
              className="object-cover"
            />
            <div className={styles.freepik}>Designed by Freepik</div>
          </div>
        </div>
        <div>
          <strong>The World Health Organisation (WHO)</strong> defines
          palliative care as “an approach that improves the quality of life of
          patients and their families facing the problem associated with
          life-threatening illness, through the prevention and relief of
          suffering by means of early identification and impeccable assessment
          and treatment of pain and other problems, physical, psychosocial and
          spiritual.”
        </div>
        <div className="py-8">
          <div className="relative h-[50vh]">
            <IKImage
              urlEndpoint={urlEndpoint}
              path="home/palliative care 3.png"
              alt="Palliative Care Stock Image 3"
              fill
              className="object-cover"
            />
            <div className={styles.freepik}>Designed by Freepik</div>
          </div>
        </div>
        <div>
          <div>
            The following are links to the various Hospice and Palliative care
            organizations in Penang.
          </div>
          <OrganizationGrid organizations={organizations} />
          <div>
            <IKImage
              urlEndpoint={urlEndpoint}
              path="qr/Referral Form QR.png"
              // fill
              width={300}
              height={300}
              className="object-contain"
            />
            Scan the QR Code above or download the referral application form
            link{" "}
            <a
              className="font-bold"
              href={referralFormLink}
              target="_blank"
              rel="noopener noreferrer">
              here
            </a>
            .
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
