"use client";
import Link from "next/link";
import { Banner } from "../components/banner/Banner";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

import styles from "../page.module.css";
import {
  committees,
  foundingDocumentLink,
  memberFormLink,
} from "@/public/constants";
import { IKImage } from "imagekitio-next";

export default function AboutUs() {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  const specialCell = (committee) => (
    <div className={styles.special_cell}>
      <div key={committee.name}>{committee.name}</div>
    </div>
  );
  const committeeCell = (committee) => (
    <div className={styles.committee_cell}>
      <div key={committee.name}>{committee.name}</div>

      <div className="mt-4">({committee.position})</div>
    </div>
  );

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Banner
        urlEndpoint={urlEndpoint}
        path="about-us/editedIMG_0385.jpeg"
        alt="hehe"
        tagPosition={"bottom-4 left-4"}
      />
      <div className={styles.main_content}>
        <div>
          The members of Persatuan Kerjasama Paliatif Pulau Pinang (PKP3) are
          from palliative care providers from both the public and private (NGO)
          sectors in Penang. A portion of these individuals are doctors and
          nurses.
        </div>
        <div className="relative flex h-[50vh] my-4">
          <IKImage
            urlEndpoint={urlEndpoint}
            path="about-us/founding members.jpeg"
            alt="founding members"
            className="object-contain"
            fill
          />
          <div className="absolute bg-[#01002F] text-white bottom-0 flex w-full justify-center font-semibold p-4 text-md text-center">
            Founding Members of PKP3 (taken after the first society meeting)
          </div>
        </div>
        <div>
          The annual membership fee is RM30, while the life membership fee is
          RM300.
        </div>
        <div className="relative flex h-[50vh] my-4">
          <IKImage
            urlEndpoint={urlEndpoint}
            path="about-us/IMG_2703.jpeg"
            alt="event"
            fill
            className="object-contain"
          />
        </div>
        <div>
          If you are interested in joining Persatuan Kerjasama Paliatif Pulau
          Pinang (PKP3) as a member, below are links to membership application
          form and the founding document for further information.
        </div>
        <div className="py-8 md:flex lg:grid lg:grid-cols-2">
          <div className="flex flex-col items-center">
            <Link
              href={foundingDocumentLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.links}>
              Founding Document
            </Link>
            <IKImage
              urlEndpoint={urlEndpoint}
              path="qr/Founding Document QR.png"
              height={500}
              width={500}
            />
          </div>
          <div className="flex flex-col items-center">
            <Link
              href={memberFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.links}>
              PKP3 Membership Form
            </Link>
            <IKImage
              urlEndpoint={urlEndpoint}
              path="qr/PKP3 Membership Form QR.png"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div>
          Kindly email the membership application form to{" "}
          <a
            href="mailto:kerjasama.paliatif@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            kerjasama.paliatif@gmail.com
          </a>{" "}
          to apply.
        </div>

        <div className={styles.committee_grid}>
          {committees.map((committee) =>
            committee.position === ""
              ? specialCell(committee)
              : committeeCell(committee)
          )}
        </div>

        <div>
          The above are the committee members (decision-making body) of
          Persatuan Kerjasama Paliatif Pulau Pinang (PKP3).
        </div>
      </div>
      <Footer />
    </main>
  );
}
