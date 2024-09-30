import Link from "next/link";
import Image from "next/image";
import { Banner } from "../components/banner/Banner";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

import styles from "../page.module.css";
import { committees } from "@/public/constants";

export default function AboutUs() {
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
        src="/editedIMG_0385.jpeg"
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
        <div className={styles.about_us_image_container}>
          <Image
            src="/founding members.jpeg"
            alt="founding members"
            height={400}
            width={400}
            style={{ width: "100%", height: "auto" }}
          />
          <div className="absolute bg-[#01002F] text-white bottom-4 flex w-full justify-center font-semibold p-4 text-md text-center">
            Founding Members of PKP3 (taken after the first society meeting)
          </div>
        </div>
        <div>
          The annual membership fee is RM30, while the life membership fee is
          RM300.
        </div>
        <div className={styles.about_us_image_container}>
          <Image
            src="/IMG_2703.jpeg"
            alt="event"
            height={400}
            width={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          If you are interested in joining Persatuan Kerjasama Paliatif Pulau
          Pinang (PKP3) as a member, below are links to membership application
          form and the founding document for further information.
        </div>
        <div className="py-8 flex flex-col">
          <Link
            href="docs/PKP3SocietyFoundingDocumentApril2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.links}>
            Founding Document
          </Link>
          <Link
            href="docs/PKP3 Membership Form.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.links}>
            PKP3 Membership Form
          </Link>
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
